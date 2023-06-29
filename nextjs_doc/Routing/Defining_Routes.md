# Creating Routes
- Nextjs sử dụng file-system dựa folders để định nghĩa các routes
- Mỗi folders đại diện cho thành phần route, nó sẽ đại diện cho URL_SEGMENT
- Để lồng route, bạn có thể lồng các folders với nhau
- *page.js* : Là file đặc điệt được sử dụng để tạo ra các thành phần route có thể truy cập công khai
- Nếu các folder không chưa file *page.js* : Thì sẽ không thể truy cập công khai qua URL path được, các folder này có thể sử dụng để lưu trữ component, styleSheet, images

# Creating UI
- Theo quy ước các file đặc biệt được sử dụng để tạo UI cho mỗi thành phần route
- Thông thường :
+ Page : dùng để hiển thị UI duy nhất cho route đó
+ Layout : Hiển thị UI được chia sẻ trên nhiều route (Header, Footer)
