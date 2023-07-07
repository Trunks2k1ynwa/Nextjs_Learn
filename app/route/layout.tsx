import Link from 'next/link';

export default function Layout(props: {
  children: React.ReactNode;
  setting: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <main className='flex'>
      <section className='p-4'>
        <nav>
          <ul>
            <Link href='/parallel/vietnam'>Test default.js</Link>
            <li>Menu2</li>
            <li>Menu3</li>
          </ul>
        </nav>
      </section>
      <div className='flex justify-between p-10 flex-1 flex-wrap'>
        {props.children}
        {props.auth}
      </div>
    </main>
  );
}
