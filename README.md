# SÀI GÒN ECHO – FRONTEND ADMIN (DEMO)

Dự án **React + Vite** chuyển từ giao diện mẫu `Sai_Gon_Echo_original.html` sang cấu trúc dễ phát triển theo 5 nhóm Use Case mà bạn phụ trách. **Không có Dashboard, đăng nhập, thống kê** vì những phần đó do thành viên khác thực hiện.

## 1. Cách chạy trên VS Code

**Yêu cầu:** Node.js 18 trở lên, npm.

Mở thư mục `saigon-echo-fe` bằng VS Code, mở Terminal:

```bash
npm install
npm run dev
```

Nhấn URL Vite hiện trong terminal (thường là `http://localhost:5173`).

Để tạo bản triển khai:

```bash
npm run build
npm run preview
```

**Lưu ý:** Không mở trực tiếp `index.html` bằng double-click. Đây là dự án React, phải chạy bằng Vite. URL `localhost` chỉ dùng được trên máy đang chạy. Nếu muốn quét mã QR bằng điện thoại trong cùng Wi-Fi, cần mở website bằng địa chỉ LAN của máy (ví dụ `http://192.168.x.x:5173`) và điện thoại cũng phải truy cập được cổng đó.

## 2. Cây thư mục và nhiệm vụ từng file

```text
saigon-echo-fe/
├── index.html                  # HTML chứa root React
├── package.json                # Thư viện và lệnh npm
├── vite.config.js              # Cấu hình Vite
├── reference/
│   └── Sai_Gon_Echo_original.html  # File HTML mẫu người dùng cung cấp
└── src/
    ├── main.jsx                # Khởi động app, Router, Data Provider
    ├── App.jsx                 # Định nghĩa tuyến đường từng trang
    ├── data/
    │   └── seed.js             # 6 địa điểm, bài thuyết minh và ảnh minh họa
    ├── context/
    │   └── DemoDataContext.jsx # Trạng thái dữ liệu và thao tác CRUD
    ├── services/
    │   ├── storage.js          # Đọc/ghi metadata vào localStorage
    │   ├── fileStore.js        # Lưu file hình/âm thanh vào IndexedDB
    │   └── qrService.js        # Tạo QR thật từ URL, tải file PNG
    ├── hooks/
    │   └── useFileUrl.js       # Tạo và thu hồi blob URL
    ├── components/
    │   ├── layout/
    │   │   └── AdminLayout.jsx # Sidebar, Header, Footer (không Dashboard)
    │   └── shared/
    │       ├── PageHeader.jsx  # Tiêu đề + nút hành động chung
    │       ├── Modal.jsx       # Cửa sổ popup thêm/sửa
    │       ├── ConfirmDialog.jsx # Xác nhận trước khi xóa
    │       ├── PlacePicker.jsx # Dropdown địa điểm
    │       ├── EmptyState.jsx  # Trạng thái danh sách trống
    │       ├── PlaceArtwork.jsx# Minh họa SVG không cần mạng
    │       └── MediaImage.jsx  # Ưu tiên ảnh upload, fallback SVG
    ├── pages/
    │   ├── LocationsPage.jsx  # UC quản lý địa điểm
    │   ├── NarrationsPage.jsx # UC quản lý nội dung đa ngôn ngữ
    │   ├── ImagesPage.jsx     # UC quản lý hình ảnh
    │   ├── AudiosPage.jsx     # UC quản lý âm thanh
    │   ├── QRPage.jsx         # UC quản lý QR
    │   └── PublicPlacePage.jsx # Trang đích tối giản để thử mã QR
    └── styles/
        └── globals.css        # Màu, layout, responsive, in QR
```

## 3. Đối chiếu 5 nhóm Use Case

| Nhóm Use Case | Chức năng đã làm trong FE | File |
|---|---|---|
| Địa điểm | Xem danh sách/chi tiết, tìm kiếm/lọc, thêm/sửa/xóa, ẩn/hiện | `LocationsPage.jsx` |
| Nội dung | Xem bài theo địa điểm/ngôn ngữ, thêm/sửa/xóa bản dịch, kiểm tra trùng ngôn ngữ | `NarrationsPage.jsx` |
| Hình ảnh | Upload có kiểm tra định dạng/dung lượng, xem trước, gắn địa điểm, sửa chú thích, ảnh đại diện, sắp xếp, xóa | `ImagesPage.jsx` |
| Âm thanh | Upload có kiểm tra, gán địa điểm/ngôn ngữ, nghe thử, thay file, sửa thông tin, xóa | `AudiosPage.jsx` |
| Mã QR | Chọn địa điểm, tạo URL công khai, xem trước, tải PNG, in, sao chép link, xóa mục QR | `QRPage.jsx` |

**Trang khách tối giản** `/tham-quan/:slug` cho phép xem địa điểm, chuyển VI/EN/JA và phát bản thu nếu có. Trang này nhằm kiểm tra QR, chưa thay thế phần giao diện người dùng của nhóm.

## 4. Kịch bản demo với thầy

1. Mở **Quản lý địa điểm**, tìm “Dinh”, xem chi tiết và thử ẩn/hiện.
2. Thêm một địa điểm mẫu, sau đó sửa tên/địa chỉ.
3. Vào **Nội dung thuyết minh** → thêm văn bản tiếng Anh cho địa điểm đó.
4. Vào **Hình ảnh** → tải một ảnh `.jpg`/`.png`, xem trước, đặt ảnh đại diện.
5. Vào **Âm thanh** → tải một file MP3, chọn địa điểm + ngôn ngữ, bấm nghe thử.
6. Vào **Mã QR** → tạo mã, xem trước, bấm “Mở trang đích” và chuyển VI/EN/JA.
7. Nếu demo bằng điện thoại: dùng URL LAN chứ không dùng QR chứa `localhost`.

## 5. Dữ liệu được lưu ở đâu?

- `localStorage`: danh sách địa điểm, bản thuyết minh, mô tả ảnh, metadata bản thu, danh sách QR.
- `IndexedDB`: file ảnh và file âm thanh được chọn trên máy.
- Vì **chưa có Backend**, dữ liệu chỉ lưu trong **trình duyệt này**. Dữ liệu thêm/sửa không được đồng bộ sang thiết bị khác hoặc trình duyệt khác.
- Demo có ảnh minh họa SVG và 6 địa điểm sẵn có. Không có file audio mẫu vì phải có bản ghi thật hoặc upload MP3.
- Xóa dữ liệu website trong trình duyệt sẽ mất nội dung đã làm; upload lại nếu cần.
- Không có hệ thống tài khoản hay phân quyền. Không đưa mã demo này lên mạng như một Admin thật mà không bổ sung xác thực và API bảo mật.

## 6. Khi ghép với Backend của thành viên khác

Giữ nguyên giao diện và Page React. Thay các phương thức `add/update/remove` trong `src/context/DemoDataContext.jsx` bằng các lời gọi API thông qua service mới, và thay IndexedDB bằng upload `multipart/form-data` lên server. Thống nhất các trường: `locationId`, `slug`, `name`, `address`, `visible`, `lang`, `fileUrl`, `text`. Nếu nhóm có login, bọc các route `/admin` bằng kiểm tra phiên đăng nhập.

## 7. Lưu ý kỹ thuật

- QR là QR **thật**, mã chứa đường dẫn trang `/tham-quan/:slug` trên origin hiện tại. Đổi địa chỉ host có thể phải tải/in lại mã QR.
- Xóa mục QR trong admin **không thu hồi** một mã QR đã in: liên kết vẫn tồn tại khi địa điểm còn hiển thị.
- Ẩn địa điểm làm trang công khai báo không khả dụng. Xóa địa điểm sẽ dọn metadata ảnh, âm thanh, nội dung và QR liên quan.
- File hình/âm thanh dung lượng lớn có thể làm đầy bộ nhớ trình duyệt; dự án giới hạn 8MB/ảnh, 20MB/audio.
- `reference/Sai_Gon_Echo_original.html` là bản tham khảo để đối chiếu màu/bố cục, không phải file chạy ứng dụng React.
- Đã chú thích bằng tiếng Việt trong các file chính, đặc biệt mỗi thao tác CRUD.
