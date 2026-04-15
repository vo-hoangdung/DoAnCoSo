#  HỆ THỐNG BÁN LINH KIỆN MÁY TÍNH THÔNG MINH TÍCH HỢP AI & QR

## 1. Giới thiệu đề tài

Trong bối cảnh nhu cầu mua sắm linh kiện máy tính ngày càng tăng, người dùng thường gặp khó khăn trong việc lựa chọn sản phẩm phù hợp với nhu cầu và ngân sách.

Đề tài xây dựng một hệ thống web bán linh kiện máy tính tích hợp trí tuệ nhân tạo (AI) nhằm hỗ trợ người dùng:

* Tìm kiếm sản phẩm nhanh chóng
* Nhận tư vấn cấu hình máy tính phù hợp
* Tương tác với chatbot thông minh
* Thanh toán và quản lý đơn hàng tiện lợi thông qua QR

## 2. Mục tiêu đề tài

* Xây dựng website thương mại điện tử hoàn chỉnh
* Tích hợp AI để nâng cao trải nghiệm người dùng
* Ứng dụng QR vào quản lý và thanh toán
* Thiết kế hệ thống theo kiến trúc rõ ràng, dễ mở rộng

## 3. Chức năng chính

### 3.1. Hệ thống bán hàng

* Đăng ký / đăng nhập người dùng
* Xem danh sách sản phẩm (RAM, GPU, màn hình, phụ kiện...)
* Tìm kiếm và lọc sản phẩm
* Thêm vào giỏ hàng
* Đặt hàng và theo dõi đơn hàng

### 3.2. Chatbot AI hỗ trợ khách hàng

* Tư vấn sản phẩm theo nhu cầu người dùng
* Trả lời câu hỏi liên quan đến linh kiện
* Gợi ý sản phẩm phù hợp

###  3.3. AI gợi ý cấu hình máy tính

Người dùng nhập:

* Ngân sách
* Nhu cầu (gaming, học tập, đồ họa...)

Hệ thống sẽ:

* Đề xuất cấu hình PC phù hợp
* Gợi ý các linh kiện tương thích

---

### 3.4. So sánh sản phẩm

* So sánh nhiều sản phẩm theo:

  * Giá
  * Hiệu năng
  * Thông số kỹ thuật

---

### 3.5. Tích hợp QR

* QR sản phẩm: truy cập nhanh thông tin
* QR đơn hàng: xác nhận giao hàng
* QR thanh toán: hỗ trợ thanh toán nhanh

### 3.6. Trang quản trị (Admin)

* Quản lý sản phẩm
* Quản lý đơn hàng
* Thống kê doanh thu
* Theo dõi hành vi người dùng

## 4. Công nghệ sử dụng

### Backend

* Laravel Framework (PHP)
* RESTful API

### Frontend

* Blade Template / ReactJS

### Database

* MySQL

### AI Service

* Python (Flask/FastAPI)
* Xử lý NLP và hệ thống gợi ý

### Khác

* QR Code Generator
* JWT Authentication

## 5. Kiến trúc hệ thống

Hệ thống được xây dựng theo mô hình 3-tier:

* Presentation Layer (Frontend)
* Application Layer (Backend Laravel)
* AI Service Layer (Python)

Luồng hoạt động:

1. Người dùng gửi yêu cầu từ giao diện
2. Backend xử lý logic nghiệp vụ
3. Nếu cần AI → gọi API từ service Python
4. Trả kết quả về frontend hiển thị

## 6. Phân công công việc

### Thành viên 1

* Thiết kế giao diện (UI/UX)
* Xây dựng frontend

### Thành viên 2

* Xây dựng backend (Laravel)
* API, authentication, quản lý đơn hàng

### Thành viên 3

* Phát triển AI:

  * Chatbot
  * Gợi ý cấu hình PC


## 7. Điểm nổi bật của hệ thống

* Tích hợp AI thực tế (không chỉ mang tính minh họa)
* Ứng dụng QR vào nhiều chức năng
* Hỗ trợ người dùng lựa chọn linh kiện thông minh
* Kiến trúc rõ ràng, dễ mở rộng

## 8. Hướng phát triển

* Tích hợp thanh toán online (VNPay, Momo)
* Cải thiện AI với dữ liệu lớn hơn
* Xây dựng mobile app
* Tối ưu hệ thống gợi ý bằng Machine Learning


## 9. Kết luận

Đề tài hướng đến việc xây dựng một hệ thống thương mại điện tử thông minh, không chỉ phục vụ nhu cầu mua sắm mà còn hỗ trợ người dùng ra quyết định thông qua AI, góp phần nâng cao trải nghiệm và hiệu quả sử dụng.
