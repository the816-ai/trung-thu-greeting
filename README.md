# 🎑 Trang Web Chúc Mừng Trung Thu

Một trang web đẹp mắt với hiệu ứng lồng đèn rơi và chúc mừng Trung Thu được tạo bằng HTML, CSS và JavaScript thuần túy.

## ✨ Tính năng

- 🌙 **Mặt trăng sáng** với hiệu ứng phát sáng
- 🏮 **Lồng đèn rơi** liên tục với animation mượt mà
- 🌸 **Cây hoa anh đào** với hiệu ứng nổi bật
- 🐰 **Thỏ con** dễ thương với animation nhảy
- ⭐ **Ngôi sao lấp lánh** trên bầu trời đêm
- 🎆 **Pháo hoa** tự động phát nổ
- 💫 **Hiệu ứng tương tác** khi click và hover
- 📱 **Responsive design** cho mọi thiết bị

## 🚀 Cách chạy

1. Tải tất cả các file về máy
2. Mở file `index.html` bằng trình duyệt web
3. Thưởng thức hiệu ứng đẹp mắt!

## 📁 Cấu trúc file

```
trung-thu/
├── index.html          # File HTML chính
├── style.css           # File CSS cho styling và animations
├── script.js           # File JavaScript cho hiệu ứng động
└── README.md           # File hướng dẫn này
```

## 🌐 Deploy lên GitHub Pages

### Bước 1: Tạo repository trên GitHub

1. Đăng nhập vào [GitHub](https://github.com)
2. Click vào nút "New" để tạo repository mới
3. Đặt tên repository (ví dụ: `trung-thu-greeting`)
4. Chọn "Public" để có thể sử dụng GitHub Pages miễn phí
5. **KHÔNG** tích vào "Initialize this repository with a README"
6. Click "Create repository"

### Bước 2: Upload code lên GitHub

#### Cách 1: Sử dụng GitHub Desktop (Dễ nhất)

1. Tải và cài đặt [GitHub Desktop](https://desktop.github.com/)
2. Mở GitHub Desktop và đăng nhập
3. Click "Clone a repository from the Internet"
4. Chọn repository vừa tạo
5. Chọn thư mục local để clone
6. Copy tất cả file (index.html, style.css, script.js) vào thư mục đã clone
7. Trong GitHub Desktop, bạn sẽ thấy các file mới
8. Nhập commit message: "Add Trung Thu greeting website"
9. Click "Commit to main"
10. Click "Push origin" để upload lên GitHub

#### Cách 2: Sử dụng Git command line

1. Mở Command Prompt hoặc Terminal trong thư mục chứa code
2. Chạy các lệnh sau:

```bash
git init
git add .
git commit -m "Add Trung Thu greeting website"
git branch -M main
git remote add origin https://github.com/username/trung-thu-greeting.git
git push -u origin main
```

(Thay `username` và `trung-thu-greeting` bằng tên GitHub và tên repository của bạn)

### Bước 3: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click vào tab "Settings"
3. Cuộn xuống phần "Pages" ở sidebar bên trái
4. Trong phần "Source", chọn "Deploy from a branch"
5. Chọn branch "main" và folder "/ (root)"
6. Click "Save"
7. Đợi vài phút để GitHub build trang web
8. Truy cập trang web tại: `https://username.github.io/trung-thu-greeting`

## 🎨 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa file `style.css`:
- Màu lồng đèn: `.red-lantern` và `.yellow-lantern`
- Màu chữ: `.main-greeting`, `.sub-greeting`, `.poem`
- Màu nền: `body` background

### Thay đổi text
Chỉnh sửa file `index.html`:
- Dòng 45: "Chúc bé Trung Thu vui vẻ!"
- Dòng 46: "Đã chọn được quà Trung Thu cho em bé của bạn chưa?"
- Dòng 47: "Suối nước trong xanh sẽ đón em và bóng anh"

### Thay đổi tốc độ animation
Chỉnh sửa file `style.css`:
- Tốc độ lồng đèn rơi: `animation: fallDown 8s linear infinite;`
- Tốc độ pháo hoa: `animation: fireworkExplode 2s ease-out infinite;`
- Tốc độ thỏ nhảy: `animation: rabbitHop 3s ease-in-out infinite;`

## 🔧 Yêu cầu hệ thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- JavaScript được bật
- Không cần cài đặt thêm gì

## 📱 Responsive

Trang web được thiết kế responsive và hoạt động tốt trên:
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667, 414x896)

## 🎯 Hiệu ứng đặc biệt

- **Click vào cây**: Hoa sẽ rơi xuống
- **Hover vào thỏ**: Thỏ sẽ nhảy nhanh hơn
- **Click vào màn hình**: Hiệu ứng sóng lan tỏa
- **Di chuyển chuột**: Mặt trăng sẽ di chuyển theo

## 🎉 Chúc mừng!

Trang web đã sẵn sàng để chia sẻ với bạn bè và gia đình trong dịp Trung Thu!

---

*Được tạo với ❤️ cho mùa Trung Thu 2024*

