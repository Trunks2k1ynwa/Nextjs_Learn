# Pages
- 1 page là UI duy nhất cho một route
- Định nghĩa các page bằng việc tạo ra component từ file page.js
- Sử dụng các folders lồng nhau để định nghĩa các route và tệp page.js để route có thể truy cập công khai
```js
URL : nextjs/dashboard/settings -> page.js (folder settings)
Folders: 
+ app : page.js, dashboard
+ dashboard: page.js, setttings
+ settings : page.js

```

# Layout
- 1 layout là UI được sử dụng để chia sẻ các thành phần giữa nhiều pages
- Layout luôn giữ nguyên trạng thái, duy trì tính tương tác và không bị re-render. Bố cục có thể được lồng vào nhau
- Để định nghĩa 1 layout bằng cách export mặc định 1 component trong file layout.js. Component này nên có children prop để chứa các layout con(nếu có) hoặc page con trong suốt quá trình render
```js
URL : nextjs/dashboard/settings -> layout(dashboard)>page(settings) (folder settings)
Folders: 
+ app : layout.js,page.js, dashboard
+ dashboard: layout.js,page.js, setttings
+ settings : page.js
```
- *layout.js* và *page.js* có thể được định nghĩa trong cùng 1 folder. Layout sẽ bọc Page

# Root Layout (bắt buộc)
- Root layout được định nghĩa ở top-level của folder app và được áp dùng cho tất cả các route.
- Root layout phải được định nghĩa html,body tags 

# Nesting Layouts : Các layout lồng nhau
- Layout được định nghĩa bên trong foler
```js
app/dashboard/layout.js áp dụng có route cụ thể là : nextjs.com/dashboard
```
- Mặc định, các layout trong hệ thống phân cấp được lồng vào nhau, có nghĩa chúng sẽ bọc các layout con thông qua 

# Template
- Template cx tương tự như layout , nó bọc các layout con hoặc page bên trong
- Khác biệt là user di chuyển giữa các route hay cập nhật state, template được tạo mới cho mỗi thành phần con của nó khi điều hướng
- Người dùng điều hướng giữa các routes chia sẻ template , phiên bản mới của component được mounted, các phần tử dom được tạo lại, state thay đổi và effect đồng bộ hóa lại

# Modifying
