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