># **Dynamic Routes**
- Khi không biết chính xác các thành phần trong tên của 1 route bạn muốn tạo từ dữ liệu dynamic data, bạn có thể sử dụng các thành phần tự động điền vào thời điểm khi có yêu cầu hoặc được hiển thị trước khi xây dựng
----
# Convention
- 1 thành phần động được tạo bằng việc bọc các folder bằng dấu [folderName]. [id],[slug]
- Các phân thành phần động sẽ được chuyền dưới dạng tham số của thuộc tính cho layout, page, route và hàm tạo ra Metadata
----
# Example
- 1 blog sẽ có route cấu hình theo app/blog/[slug]/page.js
- [slug] chính là thành phần động để lấy ra bài đăng của blog đó.
```js
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}

app/blog/[slug]/page.js -> /blog/a -> {slug:'a'}
```
| Route | URL | Params  |
|:-------|:------:|-------:|
|  app/blog/[slug]/page.js  |/blog/a    |{ slug: 'a'}
|  app/blog/[slug]/page.js	|/blog/b	  |{ slug: 'b'}
|  app/blog/[slug]/page.js	|/blog/c	  |{ slug: 'c'}
----
# Generating Static Params
- Hàm generateStaticParams có thể được sử dụng kết hợp với các phân đoạn route tự động để tạo ra các route tĩnh tại thời điểm xây dựng thay vì theo yêu cầu tại thời điểm yêu cầu.
```js
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```
-----
# Call-all Segments
- Các thành phần của 1 route động có thể được mở rộng để catch tất cả các thành phần con bằng cách sử dụng [...folderName]
vd: app/shop/[...slug] sẽ match với :
1. /shop/clothes
2. /shop/clothes/tops
3. /shop/clothes/tops/t-shirts
- slug sẽ match với các parameter khi slug là 1 giá trị, hoặc 1 array

| Route                     | URL       | Params  |
|:-------                   |:------:   |-------: |
| app/shop/[...slug]/page.js|	/shop/a	  |{ slug: ['a'] }
| app/shop/[...slug]/page.js|	/shop/a/b	|{ slug: ['a', 'b'] }
| app/shop/[...slug]/page.js|	/shop/a/b/c	|{ slug: ['a', 'b', 'c'] }

----
# Optinal Catch-all Segments
- Match với tất cả các thành phần trong params của URL có thể được tạo tùy chỉnh bằng việc bao gồm tham số bên trong [[...folderName]]
Vd: app/shop/[[...slug]]/page.js sẽ match với:
1. /shop
2. /shop/clothes
3. /shop/clothes/tops
4. /shop/clothes/tops/t-shirts.

- Điểm khác biệt giữa catch-all và option catch-all là tùy chọn, 1 route nếu không có tham số sẽ luôn được match vd(/shop) như ví dụ bên dưới
>Chú ý
- Catch-all và option catch-all không thể tạo được trong cùng 1 folder, gây ra lỗi bởi vì trong folder không thể có 2 route có chức năng catch-all
- Khi sử dụng catch-all bên trong folder, nếu [[...folder]] cùng cấp với page.js sẽ gây ra lỗi vì cả hai để catch-all khi không có tham số truyền vào.
- Chỉ nên dùng [folder] với [...folder] hoặc [[...folder]], không được dùng cả 3 trong cùng 1 folder

| Route                     | URL       | Params  |
|:-------                   |:------:   |-------: |
| app/shop/[[...slug]]/page.js|	/shop     |{ }
| app/shop/[[...slug]]/page.js|	/shop/a	  |{ slug: ['a'] }
| app/shop/[[...slug]]/page.js|	/shop/a/b	|{ slug: ['a', 'b'] }
| app/shop/[[...slug]]/page.js|	/shop/a/b/c	|{ slug: ['a', 'b', 'c'] }

app/[item1Id]/[item2Id]/page.js -> app([item1Id]([item2Id](page.js)))