># **Loading UI and Streaming**
> file loading.js tạo loading UI (React suspense)
> Show trạng thái loading từ server trong khi nội dung của route đang tải, nội dung mới sẽ tự  động bao bọc trong lần render hoàn thành
---
# Instance Loading states
- Là 1 UI xem trước như : Loading, skeleton
- Điều này giúp người dùng biết rằng ứng dụng đang phản hồi và cung cấp trải nghiệm tốt hơn
- Tạo trạng thái đang tải bằng việc thêm file loading.js
```js
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />
}
```
- Trong cùng folder, loading.js sẽ được lồng bên trong layout. Nó sẽ tự động bọc page.js và các component con bên dưới trong thẻ suspense boudary
----
# Streaming with Suspense
- Thông thường dữ liệu truyền tải theo kiểu SSR nên sẽ tuần tự và bị chặn. Vì thế phía client chỉ tương tác khi dữ liệu đã được tải xong
- Với SSR (react, nextjs) giúp cải thiện hiệu suất tả được cảm nhận bằng hiển thị trang không tương tác trước cho người dùng
- Tuy nhiên nó có thể chậm bởi vì tất cả dữ liệu được tải từ server đến client cần được hoàn thành trước khi tương tác được
- Streaming cho phép chỉa nhỏ các phần của 1 page để truyền tải từ server đến client
- Điều này cho phép các phần của trang được hiển thị sớm hơn mà không cần đợi tất cả dữ liệu tải xuống trước khi bất kỳ giao diện người dùng nào có thể được hiển thị.
----
# Example
- Suspense hoạt động bằng cách bọc cpn handle bất đồng bộ(fetch data) và show UI xem trước (loading, skeleton) trong khi nó đang diễn ra, sau đó hoán đổi thành phần khi hoàn tất
```js
import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}
```
- Lợi ích của việc dùng Suspense:
1. Kết xuất liên tục HTML từ máy chủ đến máy khách.
2. Ưu tiên những cpn để tương tác trước dựa trên hành vi người dùng

># **Error Handling**
> Theo quy ước thì file error.js cho phép bạn xử lý các lỗi ngay lập tức khi có component trong file route nested bị lỗi
> Tự động bao thành phần route và các thành phần con bên trong bằng React Error Boundary
> Tạo giao diện người dùng lỗi phù hợp với các phân đoạn cụ thể bằng cách sử dụng phân cấp hệ thống tệp để điều chỉnh mức độ chi tiết.
> Cô lập lỗi cho các phân đoạn bị ảnh hưởng trong khi vẫn giữ cho phần còn lại của ứng dụng hoạt động.
> Thêm chức năng để cố gắng khôi phục lỗi mà không cần tải lại toàn bộ trang.

- Tạo giao diện lỗi bằng file error.js bên trong thành phần route và export component
```js
'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
```
---
# Error.js hoạt động như thế nào
- error.js tự động tạo ra React error boundary bọc các thành phần con hoặc page.js component
- component trong file error.js được export ra và sử dụng vào fallback của component ErrorBoundary
- Khi UI lỗi hiển thị, layout ở phía trên sẽ vẫn duy trị trạng thái của chúng và duy trì tính tương tác, đồng thời thành phần lỗi có thể thực hiện chức năng khôi phục
--- 
# Recovering From Errors
- method reset() để nhắc nhở user khôi phục từ lỗi. Khi thực thi, fn sẽ cố gắng render ra nội dung lỗi. Nếu thành công, error sẽ được thay thế bằng kết quả của lần render lại
```js
'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```
--- 
# Nested Routes
- erorr.js sẽ handle lỗi của file page.js khi 2 file cùng cấp bậc
- Nếu có routes nested bên trong gặp lỗi, thì error.js ở phần layout ngoài cũng sẽ xử lý lỗi khi có route con bên trong gặp lỗi
- Độ ưu tiên của file erorr.js sẽ handle được route or file page.js gặp lỗi gần nhất

---
# Handling Errors in Layouts
- error.js không thể handle lỗi cho những file ở trên nó như layout.js, template.js
- Để xử lý lỗi cho root layout hay template, sử dụng file global-error.js
---
# Handling Errors in Root Layouts
- file error.js trong folder root (app) sẽ không handle lỗi bên trong app/layout, template
- Để xử lý lỗi bên trong root component , sử dụng global-error.js ở trong thư mục app
- global-error.js bọc toàn bộ ứng dụng, vì thế nó phải được định nghĩa chứa html, body

