import Counter from "./counter"
export default function Home() {
  console.log(process.env.PAGE_LOCAL)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello nextJs | Home Page
      <Counter />
    </main>
  )
}
