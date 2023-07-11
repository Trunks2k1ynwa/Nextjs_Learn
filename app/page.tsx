import Image from 'next/image';
import Counter from './counter';
import imgUrl from '@/public/bg-1.jpg';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 text-4xl'>
      Hello nextJs | Home Page
      <Counter />
      <Image src={imgUrl} alt='test' />
    </main>
  );
}
