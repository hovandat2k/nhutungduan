// Service worker: cho phép cài như ứng dụng và mở nhanh khi mạng yếu.
// Chỉ lưu đệm phần giao diện; dữ liệu nông hộ KHÔNG được lưu đệm.
const CACHE = 'lovuon-v7';
const SHELL = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isShell = url.origin === location.origin;
  const isLib = /cdnjs\.cloudflare\.com|unpkg\.com/.test(url.host);
  if (!isShell && !isLib) return;               // ảnh vệ tinh, cổng dữ liệu: đi thẳng mạng
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req))
  );
});
