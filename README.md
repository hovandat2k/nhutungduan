# Bản đồ lô vườn – RA / 4C / CP

Trang bản đồ quản lý lô vườn cà phê, chạy trên GitHub Pages.

- **Kho này chỉ chứa giao diện.** Dữ liệu nông hộ nằm trong Google Sheet `DATA_GOC`, truy cập qua cổng dữ liệu Apps Script và cần đăng nhập Email + PIN.
- `config.js`: địa chỉ cổng dữ liệu (`API_URL`).
- `index.html`: được dựng tự động từ `Index.html` của Apps Script – sửa ở bản Apps Script rồi dựng lại.
- **App Android:** tải `NhuTung-DuAn.apk` tại https://github.com/hovandat2k/nhutungduan/releases/latest/download/NhuTung-DuAn.apk rồi mở file để cài. App được dựng tự động (`.github/workflows/android.yml`, cấu hình trong `android/twa-manifest.json`) mỗi khi đổi biểu tượng/manifest; sửa giao diện `index.html` thì app tự cập nhật, không cần cài lại.
- Cài lên điện thoại (không cần APK): mở trang bằng Chrome → ⋮ → **Cài đặt ứng dụng / Thêm vào màn hình chính** (iPhone: Safari → Chia sẻ → Thêm vào MH chính).
