# Data fetching
- fetch data bên trong react cpns = function với async await
- fetch cho phép mỗi request được catching và revalidating

## async await in server components
```js
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main></main>
}
```

## use in Client Components
- use là 1 react fn chấp nhận 1 promise giống như await.
- Bọc fetch in use hiện tại không tương thích trong client component và có thể làm cho cpn re-renders nhiều lần
- Gợi ý nên dùng :SWR, REACT_QUERY

## Static Data Fetching
- Mặc định, *fetch* sẽ tự động fetch và catch data vô thời hạn
- Xác thực lại dữ liệu trong catch theo khoảng thời gian
```js
fetch('https://...', { next: { revalidate: 10 } })
```
- Để fetch dữ liệu mới trên mối lần request, sử dụng catch:'no-store'

```js
fetch('https://...', { cache: 'no-store' })
```
## Data Fetching Patterns : Các khuôn mẫu lấy dữ liệu
## Fetch data song song ở client
```js
// Initiate both requests in parallel
  const artistData = getArtist(username)
  const albumsData = getArtistAlbums(username)
 
  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([artistData, albumsData])
```
## Fetch data tuần tự
- Để tìm nạp dữ liệu theo trình tự, bạn có thể tìm nạp trực tiếp bên trong thành phần cần nó hoặc bạn có thể đợi kết quả tìm nạp bên trong thành phần cần nó:
```js
// ...
 
async function Playlists({ artistID }: { artistID: string }) {
  // Wait for the playlists
  const playlists = await getArtistPlaylists(artistID)
 
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}
 
export default async function Page({
  params: { username },
}: {
  params: { username: string }
}) {
  // Wait for the artist
  const artist = await getArtist(username)
 
  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  )
}
```
- Trong trường hợp không sử dụng fetch thì sẽ không có tác dụng catching cho route