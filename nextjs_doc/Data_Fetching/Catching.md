- Cached : Được lưu vào bộ nhớ đệm
# Fetch()
- Mỗi request sử dụng fetch() đều được catched và loại bỏ trùng lặp tự động
- Bạn có 2 request, request thứ hai sẽ được tái sử dụng từ lần request thứ nhất
```js
async function getComments() {
  const res = await fetch('https://...') // The result is cached
  return res.json()
}
 
// This function is called twice, but the result is only fetched once
const comments = await getComments() // cache MISS
 
// The second call could be anywhere in your application
const comments = await getComments() // cache HIT
```
- 1 Request không được catched khi :
1. Sử dụng các methods dynamic: (next/headers, export const Post,cookie headers )
2. fetchCache được config bỏ qua catch bởi mặc đinh
3. Revalidat:0 hoặc cache:'no-store'

- Các request sử dụng fetch có thể tùy chọn xác thực lại bằng việc sử dụng revalidation
```js
export default async function Page() {
  // revalidate this data every 10 seconds at most
  const res = await fetch('https://...', { next: { revalidate: 10 } })
  const data = res.json()
  // ...
}
```

# React Cache()
- React cho phép bạn catch và loại bỏ các request trùng lặp nhau, ghi nhớ kết quả. Khi 1 function với cùng tham số đầu vào sẽ được tái sử dụng như catched giá trị hơn là chạy lại function đó
```js
import { cache } from 'react'
 
export const getUser = cache(async (id: string) => {
  const user = await db.user.findUnique({ id })
  return user
})
```
# POST request và catche()
- Các yêu cầu Post sẽ tự động loại bỏ trùng lặp khi sử dụng với fetch trừ khi chúng bên trong 1 route xử lý Post hoặc đi kèm với cookie,headers
```js
import { cache } from 'react'
 
export const getUser = cache(async (id: string) => {
  const res = await fetch('...', { method: 'POST', body: '...' })
  // ...
})
```

# Preload pattern with cache()
- Tải trước dữ liệu để lưu trữ vào catche trước khi có request
```js
import { getUser } from '@utils/getUser'
// Tải trước dữ liệu
export const preload = (id: string) => {
  void getUser(id)
}
// Tải trực tiếp dữ liệu
export default async function User({ id }: { id: string }) {
  const result = await getUser(id)
  // ...
}

import User, { preload } from '@components/User'
 
export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  preload(id) // starting loading the user data now
  const condition = await fetchCondition()
  return condition ? <User id={id} /> : null
}
```

# Combining cache, preload, and server-only
- Bạn có thể kết hợp catch, preload và server only như một gói để tạo dữ liệu fetching thuận tiện có thể sử dụng ở hầu hết ứng dụng
```js
import { cache } from 'react'
import 'server-only'
 
export const preload = (id: string) => {
  void getUser(id)
}
 
export const getUser = cache(async (id: string) => {
  // ...
})
```