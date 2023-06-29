# Routing Fundamentals : Cơ bản về Routing
## Terminology : Thuật ngữ
- *Tree* : Quy ước để trực quan hóa một cấu trúc phân cấp. 1 component tree : component cha và con, cấu trúc thư mục .. 
- *Subtree* : Cây con, 1 phần của cây bắt đầu và root mới (root đầu tiên) và kết thúc tại root cuối
- *Root* : Node đầu tiên trong tree hoặc subtree, vd: Root layout
- *Leaf* : Node trong subtree không có thành phần con, vd: segment cuối trong URL_PATH
- *URL_SEGMENT* : Các phần của URL_Path được ngăn cách nhau bởi */*
- *URL_PATH* : Là 1 phần của URL đi sau domain
VD: https://nextjs.org/docs/app/building-your-application/routing
+ *Domain* : https://nextjs.org
+ *URL_SEGMENT* : docs, app, building-your-application, routing
+ *URL_PATH* : docs/app/building-your-application/routing
+ *Route* : Là đại diện về định tuyến cho 1 trang cụ thể trong ứng dụng
vd : page/about.js sẽ tạo route cho trang about và có url là /about
+ *Routes* : Là tập hợp các route có thể truy cập trong ứng dúng
## The APP_ROUTER
- Trong phiên bản 13, APP_ROUTER được build trên *React_Server_Component*, nó được hỗ trợ để chia sẽ các layout, lồng các routing vào nhau,loading, error handle, vvv
- App_Router hoạt động trên đường dẫn mới : app (folder)
- app(folder) hoạt động bên cạnh pages(folder) để cho phép các tùy biến routing.
- Theo mặc định, các thành phần bên trong App folder là *React_Server_Component*, đây là các tối ưu hiệu suất, đồng thời bạn có thể sử dụng thành phần máy khách

## Roles of Folders and Files : Quy ước về Folders và Files
- Nextjs sử dụng router dựa trên file-system khi:
+) Folders :
++ được dùng để định nghĩa các *routes*
++ Mội *route* là 1 path độc lập được lồng bên trong folders, hướng theo file-system để tạo ra hệ thống phân cấp từ *root_folder* đi xuống đến *leaf_folder*
+ Files được dùng để tạo ra UI cái mà cho phép tạo ra các bộ phần của *route*

## Route Segments
- Mỗi folder trong route đại diện cho route segment
- Mỗi route segment được truyền đến segment tương ứng trong URL_PATH
- aceme.com/dashboard/settings
- folders: dashboard>settings
## Nested Routes
- Để lồng các route và nhau, chúng ta sẽ tạo các folder lồng bên trong nhau.
vd: /dashboard/settings => thêm 2 folder dashboard, settings bên trong app

## File Conventions : Quy ước file
- layout : Chia sẽ UI giữa các thành phần and các thành phần con của nó
- page : tạo ra UI duy nhất của route và làm các routes có thể truy cập công khai
- loading: Giao diện loading cho các thành phần và thành phần con của nó
- not-found: Giao diện not_found cho các thành phần và thành phần con của nó
- error : 
- golbal-error :
- route :
- template
- default : 

## Component Hierachy : Phân cấp các component
- layout.js
- template.js
- error.js (React error boundary)
- loading.js (React suspense boundary)
- not-found.js (React error boundary)
- page.js hoặc lồng vào layout.js

## Server-Centric Routing with Clinent-side Navigation
- Pages : Client-side-routing
- App-router : server-centric-routing
- Mặc dù sử dụng App-router, khi user click Link và navigate đến route mới, trình duyệt sẽ không reload lại page, URL sẽ chỉ cập nhật and nextjs sẽ chỉ render ra các phân đoạn thay đổi
- Khi user di chuyển giữa các route trong app, router sẽ lưu trữ kết quả và React-server-component trong bộ nhớ cache ở client.

## Partial Rendering : Kết xuất 1 phần
- Khi navigate giữa các routes có quan hệ như :
+ app/dashboard ->layout.js
+ app/dashboard/settings ->page.js
+ app/dashboard/analytics ->page.js
- Next.js sẽ chỉ tìm nạp và hiển thị bố cục và trang trong các tuyến thay đổi. Nó sẽ không tìm nạp lại hoặc hiển thị lại bất kỳ thứ gì phía trên các phân đoạn trong cây con. Điều này có nghĩa là trong các tuyến chia sẻ bố cục, bố cục sẽ được giữ nguyên khi người dùng điều hướng giữa các trang anh chị em.

## Advanced Routing Patterns : 
### Parallel Routes : Các routes song song
- Cho phép bạn hiển thị đồng thời hai hoặc nhiều trang trong cùng một chế độ xem có thể được điều hướng độc lập. Bạn có thể sử dụng chúng cho các chế độ xem phân tách có điều hướng phụ riêng. Ví dụ. DashBoard.

### Intercepting Routes : Chặn Routes
- Khi một tuyến đường được truy cập, bạn có thể sử dụng Intercepting Routes để kiểm tra và thực thi các tác vụ bổ sung trước khi đến tuyến đường đó.

## Conclusion
- Mỗi route sẽ là 1 folder
- Khi route đó được set trên URL
- Nextjs sẽ invok file layout.tsx
- Nếu ko có file layout.tsxt
- Nextjs sẽ invok file page.tsx
- Nếu ko có cả hai sẽ báo lỗi
- Nếu có file layout nhưng không có file page thì cũng báo lỗi