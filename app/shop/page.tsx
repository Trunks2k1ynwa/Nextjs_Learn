import Link from 'next/link';
import React from 'react';

const page = () => {
  const listProudct = [
    {
      name: 'HTML',
      id: '24214',
      description: 'Product HTML',
    },
    {
      name: 'NodeJS',
      id: '242983',
      description: 'Product NodeJS',
    },
    {
      name: 'ReactJS',
      id: '24sfaff',
      description: 'Product ReactJS',
    },
  ];
  return (
    <>
      <h1>Test Dynamic Routes</h1>
      <div className='flex gap-5 m-10'>
        {listProudct.map((product) => (
          <Link
            href={`/shop/${product.id}`}
            className='bg-sky-300 p-3 rounded-md cursor-pointer'
            key={product.name}
          >
            <h1>{product.name}</h1>
            <p className='text-white'>{product.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
