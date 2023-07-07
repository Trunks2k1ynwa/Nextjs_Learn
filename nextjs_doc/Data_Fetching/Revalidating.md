# Revalidating Data
- Có 2 kiểu về revalidation trong nextjs :
+ Background: revalidation dữ liệu tại 1 thời điểm nhất định
+ On-demand: revalidation dữ liệu dữ liệu 1 sự kiện chẳng hạn như update

## Background Revalidation
- Xác thực lại dữ liệu lưu trong bộ nhớ catch trong 1 khoảng thời gian cụ thể, option next.validate trong fetch dể đặt thời gian tồn tại của bộ nhớ catch tính bằng giây
```js
fetch('https://...', { next: { revalidate: 60 } })
```
- Nếu bạn muốn xác thực lại dữ liệu mà ko sử dụng fetch, bạn có thể cấu hình route
app/page.tsx
```js
export const revalidate = 60 // revalidate this page every 60 seconds
```
 
## On-Demand Revalidation : Xác thực lại dữ liệu theo yêu cầu
- Dữ liệ có thể được xác thực lại theo yêu cầu dựa trên đường dẫn(revalidationPath) hoặc bởi bộ nhớ đệm với tag(revalidationTag)
app/page
```js
export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } })
  const data = await res.json()
  // ...
}
```
- Dữ liệu trong catch sau đó có thể được xác thực lại theo yêu cầu bằng cách gọi revalidateTag trong routeHandle
app/api/revalidate/route
```js
import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  revalidateTag(tag)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
```