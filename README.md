This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Important concept of Nextjs
### SSR
- Đầu tiên, tất cả dữ liệu cho một trang nhất định được tìm nạp trên máy chủ.
- Sau đó, máy chủ hiển thị HTML cho trang.
- HTML, CSS và JavaScript cho trang được gửi đến máy khách.
- Giao diện người dùng không tương tác được hiển thị bằng cách sử dụng HTML và CSS được tạo.
- Cuối cùng, React hydrat hóa giao diện người dùng để làm cho nó tương tác.
