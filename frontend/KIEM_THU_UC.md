# BẢNG KIỂM THỬ FE THEO 5 NHÓM USE CASE

Thực hiện trên `npm run dev`, mục tiêu là **FE demo**, không phải kiểm thử API/Backend.

## UC1. Quản lý địa điểm
- [ ] Hiện 6 địa điểm mẫu và trạng thái hiển thị/ẩn.
- [ ] Tìm Dinh Độc Lập và lọc các địa điểm ẩn.
- [ ] Thêm địa điểm mới với tên/địa chỉ hợp lệ.
- [ ] Không cho phép thêm địa điểm trùng đường dẫn.
- [ ] Sửa tên, địa chỉ, mô tả và kiểm tra slug cố định.
- [ ] Ẩn/hiện địa điểm; xác nhận trước khi xóa.

## UC2. Quản lý nội dung thuyết minh
- [ ] Lọc bài theo địa điểm và ngôn ngữ.
- [ ] Tạo bản tiếng Anh hoặc tiếng Nhật.
- [ ] Không cho thêm bản ngôn ngữ trùng cho cùng địa điểm.
- [ ] Sửa văn bản, xem đầy đủ, xác nhận xóa.
- [ ] Mở trang khách để kiểm tra nội dung.

## UC3. Quản lý hình ảnh
- [ ] Xem ảnh minh họa theo địa điểm.
- [ ] Chọn file JPEG, PNG hoặc WebP và xem trước.
- [ ] Từ chối file sai định dạng hoặc trên 8 MB.
- [ ] Thêm chú thích, sửa, đặt ảnh đại diện.
- [ ] Thêm 2 ảnh cho cùng địa điểm và đổi thứ tự.
- [ ] Xóa ảnh với hộp thoại xác nhận.

## UC4. Quản lý âm thanh
- [ ] Chọn địa điểm, ngôn ngữ và upload MP3.
- [ ] Nghe thử bằng player HTML5.
- [ ] Từ chối định dạng không hỗ trợ hoặc trên 20 MB.
- [ ] Chặn upload trùng cặp địa điểm-ngôn ngữ.
- [ ] Thay file cũ, sửa tên, kiểm tra nghe lại.
- [ ] Xóa tệp âm thanh với hộp thoại xác nhận.

## UC5. Quản lý mã QR
- [ ] Chọn địa điểm đang hiển thị, tạo QR.
- [ ] Khi tạo mã trùng, mở mã hiện tại thay vì nhân đôi.
- [ ] Xem trước QR và URL công khai.
- [ ] Tải ảnh QR PNG; thử in mã QR.
- [ ] Bấm mở trang đích, đổi VI/EN/JA.
- [ ] Xóa mục QR khỏi danh sách, hiểu rằng URL cũ vẫn hoạt động.

## Giới hạn cần trình bày với giảng viên
- Dữ liệu thêm/sửa lưu cục bộ trong trình duyệt, chưa đồng bộ đa thiết bị.
- QR trỏ URL thật; máy khác mở được trang mẫu khi truy cập chung website, nhưng **không thấy dữ liệu tùy chỉnh** vì chưa có database.
- Đăng nhập, Dashboard và báo cáo thống kê thuộc phần thành viên khác.
