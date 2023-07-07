'use client';
import React from 'react';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='my-5 bg-sky-100'>
      <header className='flex justify-between bg-sky-400 p-4 text-white'>
        <div>Header ShopLayout</div>
      </header>
      {children}
      <footer className='bg-sky-400 p-4 text-white'>Footer ShopLayout</footer>
    </div>
  );
};

export default ShopLayout;
