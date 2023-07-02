import Link from "next/link"

export default function Layout(props: {
  children: React.ReactNode
  team: React.ReactNode
  nation: React.ReactNode
  auth: React.ReactNode
}) {
  return (
    <main className="flex">
      <section className="p-4">
        <nav>
          <ul>
            <li>

            <Link href='/parallel_test/login'>Test modal login</Link>
            </li>
            <li>

            <Link href='/parallel_test/signup'>Test modal signup</Link>
            </li>
            <li>Menu3</li>
          </ul>
        </nav>
      </section>
      <div className="flex justify-between p-10 flex-1 flex-wrap">
      {props.auth}
      {props.nation}
      {props.team}
      {props.children}
      </div>
    </main>
  )
}