># **Pages and Layouts**

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
----
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
- **layout.js** và **page.js** có thể được định nghĩa trong cùng 1 folder. Layout sẽ bọc Page
-----

# Root Layout (bắt buộc)
- Root layout được định nghĩa ở top-level của folder app và được áp dùng cho tất cả các route.
- Root layout phải được định nghĩa html,body tags 
----
# Nesting Layouts : Các layout lồng nhau
- Layout được định nghĩa bên trong foler
```js
app/dashboard/layout.js áp dụng có route cụ thể là : nextjs.com/dashboard
```
- Mặc định, các layout trong hệ thống phân cấp được lồng vào nhau, có nghĩa chúng sẽ bọc các layout con thông qua 
----
# Template
- Template cx tương tự như layout , nó bọc các layout con hoặc page bên trong
- Khác biệt là user di chuyển giữa các route hay cập nhật state, template được tạo mới cho mỗi thành phần con của nó khi điều hướng
- Người dùng điều hướng giữa các routes chia sẻ template , phiên bản mới của component được mounted, các phần tử dom được tạo lại, state thay đổi và effect đồng bộ hóa lại
- Nextjs khuyến khích dùng layout trừ khi có lý do đặc biệt nào đó phải dùng Template
- Khi có template thì luồng khi route vào folder : layout>template>page
----------
# Modifying
- Trong đường dẫn thư mục app, bạn có thể định nghĩa tag head, title,meta để sử dụng seo
- Metadata có thể được định nghĩa bởi export 1 object metadata hoặc generateMetadata fn trong layout.js hoặc page.js

># **Linking and Navigating**

- Nextjs router sử dụng server-centric routing với client-side navigation.
- Navigation duy trì client-side state, tránh re-renders không cần thiết
- Có 2 cách để navigate giữa các route:
+ Link component
+ useRouter
---
# Link component
- Link là 1 component trong React kề thừa lại từ tag a, nó hỗ trợ *prefetching* và client-side khi navigation giữa các route. Đấy là cách cơ bản nhất để di chuyển giữa các route
```js
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```
### Linking to dynamic segment
>sử dụng template literals
```js
import Link from 'next/link'
 
export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
```
### Checking Active Links
>Bạn có thể sử dụng *usePathname()* để xác định link đang active.
```js
  const pathname = usePathname()
  return 
  {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
 
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
```

### Scrolling to an Id
- Mặc định hành vi của thẻ Link sẽ tự động scroll lên phần đầu của thành phần route được thay đổi.
- Khi định nghĩa id bên trong href, nó sẽ scroll đến địa chỉ id cụ thể, cũng tương tự như tag a
----

# useRouter hook
- Hook này cho phép bạn tự động thay đổi routes bên trong component phía client
```js
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```
- useRouter cung cấp phương thức push(),refresh(), vv/
---

# Navigation hoạt động như thế nào
- 1 Route được chuyển tiếp nếu bắt đầu bằng Link hoặc router.push()
- Router sẽ cập nhật địa chỉ URL trên thanh bar của trình duyệt
- Router sẽ tránh hoạt động không cần thiết bằng cách sử dụng lại các thành phần không bị thay đổi(layouts) từ bộ nhớ catch trong client. Đó là phần thuộc mục Render patial
- Nếu điều kiện của chuyển hướng mềm được tìm thấy, router sẽ lấy các phân đoạn mới từ bộ nhớ catch hơn là trên server.Nếu không, Router thực hiện chuyển hướng cứng và lấy dữ liệu phía Server component payload từ server
- Nếu được khởi tạo, Loading UI được cho xem từ server trong khi payload đang được tải
- Router sử dụng bộ nhớ đệm và làm mới payload để render ra các thành phần mới cho client
---

# Client-side Caching of Rendered Server Components
- Khi người dùng điều hướng xung quanh ứng dụng, bộ định tuyến sẽ lưu trữ tải trọng của các phân đoạn đã tìm nạp trước đó và các phân đoạn đã tìm nạp trước trong bộ đệm.

- Điều này có nghĩa là, trong một số trường hợp nhất định, bộ định tuyến có thể sử dụng lại bộ đệm thay vì đưa ra yêu cầu mới cho máy chủ. Điều này cải thiện hiệu suất bằng cách tránh tìm nạp lại dữ liệu và kết xuất lại các thành phần không cần thiết.
---


# Prefetching : Tìm nạp trước
- Là cách để tải trước 1 route trong nền phía sau trước route đó hiển thị.
- Kết quả của việc tìm nạp trước của route đó sẽ được thêm vào bộ nhớ đệm phía client
- Điều này làm cho việc điều hướng gần như ngay lập tức
- Mặc định, routes được prefetched trước khi hiển thị trong khung nhìn khi sử dụng Link. Điều này có thể xảy ra khi trang được tải lần đầu hoặc khi scroll đến viewPort
- Route cx có thể auto prefetched bằng việc sử dụng phương thức prefetch của useRouter
---


# Static and Dynamic Routes :
- Route là tĩnh(static): Tất cả payload của component phía server sẽ được tìm nạp trước
- Route là động (dynamic) : payload của các layout cho đến file loading.js đầu tiên sẽ được tìm nạp trước. Giúp giảm chi phí tìm nạp, chỉ tải trạng thái tức thời cho các dynamic routes
- **Prefeching chi được kích hoạt ở môi trường product**
- Prefetching can be disabled by passing prefetch={false} to Link
----

# Soft Navigation
- Khi điều hướng, bộ đệm cho các phân đoạn đã thay đổi được sử dụng lại (nếu nó tồn tại) và không có yêu cầu mới nào được gửi tới máy chủ để lấy dữ liệu.
- Nextjs sử dụng soft_navigation nếu route đang kích hoạt đã được tìm nạp trước hoặc không chứa các thành phần dynamic hoặc có cùng tham số dynamic với route hiện tại
vd: route chứa [id],/dashboard/[id]/* là dynamic
```js
/dashboard/team-red -> /dashboard/team-red : soft navigation
/dashboard/team-red -> /dashboard/team-blue :hard navigation.

```
----
# Hard Navigation
- Khi route thay đổi, bộ nhớ đệm bị vô hiệu hóa và server sẽ tải lại dữ liệu và hiển thị lại các phân đoạn thay đổi
---
# Hard Navigation
- Khi route thay đổi, bộ nhớ đệm bị vô hiệu hóa và server sẽ tải lại dữ liệu và hiển thị lại các phân đoạn thay đổi


# Back/Forward Navigation
- Đây là hành vi soft-navigation
- Bộ nhớ đệm phía client được sử dụng lại và việc navigate được thực hiện gần như ngay lập tức
----
# Focus and Scroll Management
- Theo mặc định, Next.js sẽ đặt tiêu điểm và cuộn để xem phân đoạn đã thay đổi khi điều hướng.

># **Route Groups**
