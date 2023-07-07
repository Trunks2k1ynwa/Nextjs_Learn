'use client';
import React from 'react';

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='my-10 bg-green-100'>
      <header className='flex justify-between bg-green-400 p-4 text-white'>
        <div>Header ProductsLayout</div>
      </header>
      {children}
      <footer className='bg-green-400 p-4 text-white'>
        Footer ProductsLayout
      </footer>
    </div>
  );
};

export default ProductsLayout;
