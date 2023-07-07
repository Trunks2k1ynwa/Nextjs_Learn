# Buillt-in Components
## Image : Đề cập để thẻ img nhưng tối ưu hơn về lazy loading và tự động resizing images dựa trên kích cỡ thiết bị
## Link : Hỗ trỡ tìm nạp trước trong nền, giúp page nhanh hơn và mượt mà hơn
## Scripts: Kiểm soát quá trình tải và thực thi các tệp bên thứ 3

# Metadata:
- Giúp công cụ tìm kiếm hiểu về nội dung của bạn tốt hơn

# Image Optimization
- Khi sử dụng image qua import thì nextjs tự động xác định width và height
- Khi sử dụng image qua src = link thì phải cung cấp with, height và các tùy chọn blurDataURL
## Priority : thuộc tính để ưu tiên ảnh đó dc load trước, thường dùng cho ảnh có kích cỡ lớn
```js
import Image from 'next/image'
import profilePic from '../public/me.png'
 
export default function Page() {
  return <Image src={profilePic} alt="Picture of the author" priority />
}
```
# Image Sizing
- Để tránh vỡ layout khi image đang load bạn nên sử dụng :
+ static import : import thẳng ảnh đó từ folder khác vào
+ Đặt width, height cho ảnh nếu ảnh đó chưa src = link
+ Sử dụng fill : object-fit, contain, cover
- Khi sử dụng fill thì phần tử cha của nó cần có vị trí là relative :
+ Điều này là cần thiết để hiển thị đúng thành phần hình ảnh trong chế độ bố cục đó.
## Các thuộc tính của Image:
### src
- Import static file : import img từ folder vào src
- Dùng path string. Khi dùng kiểu này cần phải config domain ảnh
### width:
- Là thuộc tính bắt buộc, trừ khi sử dụng static import hoặc ảnh với thuộc tính fill
### height:
- Là thuộc tính bắt buộc, trừ khi sử dụng static import hoặc ảnh với thuộc tính fill
### loader
- loader là 1 fn trả về URL string của ảnh với các tham số đầu vào : height, width, quality
```js
'use client'
 
import Image from 'next/image'
 
const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
 
export default function Page() {
  return (
    <Image
      loader={imageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
```
### fill
- Là thuộc tính có value là boolean dùng để lấp đầy thành phần cha tương ứng khi sử dụng height hoặc width
- Thành phần cha phải được gán với position
### sizes
- Được dùng để trình duyệt nhận biết kích thước ảnh khi không biết kích thước ảnh 
```js
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
```
### quality
- Tối ưu hóa chất lượng ảnh, từ 1-100, mặc định là 75
### priority
- Đặc ảnh ưu tiên để load, thường dùng cho hình ảnh có kích thước lớn, lazy loading sẽ tự động tắt nếu giá trị là true
- Mặc định là false, chỉ nên sử dụng trong hình ảnh có khung nhìn đầu tiên
### placeholder
- Được dùng trong khi ảnh đang load
- mặc định là empty, giá trị còn lại là blur
- Khi sử dụng blur, giá trị blurDataURL sẽ được dùng như placeholder
### onLoadingComplete
- là 1 callback fn được invoke khi image được tải xong và placeholder được removed
### onLoad
- Là 1 callback fn được invoke khi ảnh đang được load 
### onError
- Là 1 callback fn được invoke khi ảnh lỗi
### loading
- lazy : ngăn chặn load ảnh cho đến khi ảnh nằm trong viewport
- eager : Ảnh được load ngay lập tức
### blurDataURL
- Là đường dẫn ảnh được sử dụng trước khi src ảnh load thành công, chỉ dùng khi placeholder='blur'
# Font
- Bạn có thể import và sử dụng nhiều font trong dự án
```js
import { Inter, Roboto_Mono } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  // Sử dụng biến cho tailwind css
  variable: '--font-inter',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
<html lang="en" className={inter.className}>

```
## Local font
- Sử dụng font local trong máy
```js
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
})
```
- Sử dụng nhiều font local
```js
const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})
```
- Sử dụng cho tailwind
```js
import { Inter, Roboto_Mono } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
//tailwindConfig
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}
```