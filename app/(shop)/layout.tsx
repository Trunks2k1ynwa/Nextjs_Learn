'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  const menu = [
    {
      name: 'Account',
      href: 'account',
    },
    {
      name: 'SignIn',
      href: 'signin',
    },
    {
      name: 'Cart',
      href: 'cart',
    },
  ];
  const pathname = usePathname();

  return (
    <div>
      <header className='flex justify-between bg-black p-4 text-white'>
        <div>Header ShopLayout</div>
        {menu.map((link) => {
          const isActive = pathname.includes(link.href);
          return (
            <Link
              className={
                isActive ? 'text-blue-400 font-bold' : 'text-green-600'
              }
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
        <button>Log out</button>
      </header>
      {children}
      <footer className='bg-black p-4 text-white'>Footer ShopLayout</footer>
    </div>
  );
};

export default ShopLayout;
