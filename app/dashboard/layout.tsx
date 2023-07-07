'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
// import { bodoni_moda } from '@/utils/font';
import { classNames } from '@/utils/common';
import styles from '@/styles/dashboard.module.scss';
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const menu = [
    {
      name: 'Home Dashboard',
      href: '/dashboard',
    },
    {
      name: 'About Dashboard',
      href: '/dashboard/about',
    },
    {
      name: 'Contact Dashboard',
      href: '/dashboard/contact',
    },
    {
      name: 'Analytics Dashboard',
      href: '/dashboard/analytics',
    },
    {
      name: 'Settings Dashboard',
      href: '/dashboard/settings',
    },
  ];
  const pathname = usePathname();
  return (
    <div
      className={classNames(
        'my-10 flex',
        styles.dashboard,
        // bodoni_moda.className,
      )}
    >
      <header className='flex flex-col justify-between  text-white'>
        <nav className='flex flex-col'>
          {menu.map((link) => {
            const isActive = pathname.endsWith(link.href);
            return (
              <Link
                className={
                  isActive
                    ? 'text-black bg-white font-bold p-2'
                    : 'text-white p-2 bg-black'
                }
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </header>
      {children}
    </div>
  );
};

export default DashboardLayout;
