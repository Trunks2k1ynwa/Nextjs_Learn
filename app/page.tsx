import Image from 'next/image';
import Counter from './counter';
import imgUrl from '@/public/bg-1.jpg';
const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 text-4xl'>
      Hello nextJs | Home Page
      <Counter />
      <p className='h-sreen bg-black text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt,
        voluptatibus dicta quam dolores error quisquam possimus minus quis nam
        nihil ipsa, velit necessitatibus esse sint a? Reiciendis, consequatur
        maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corrupti odio aliquam quidem, sequi quod numquam eveniet possimus sunt
        voluptatum ipsa voluptate officia illum explicabo ut ducimus voluptatem
        aspernatur at? Dolor! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Illum, repellendus repellat numquam magnam nobis sunt
        cumque ex? Optio et esse sapiente provident nobis maxime, voluptas
        facere cum eos atque dolorum? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolore necessitatibus nam eum soluta vero similique
        nemo unde, sed accusamus, sequi animi molestias explicabo neque
        incidunt? Velit ullam in consequatur atque? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Eos at possimus deserunt aperiam hic,
        dolore adipisci quis explicabo sit, voluptas maiores! Nemo ratione
        molestias voluptas repellendus rerum. Sed, dicta inventore?
      </p>
      <Image src={imgUrl} alt='test' />
    </main>
  );
};
export default Home;
