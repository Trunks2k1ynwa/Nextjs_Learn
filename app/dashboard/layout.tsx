'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const DashboardLayout = ({children,
}: {
  children: React.ReactNode
  }) => {
  const menu = [
    {
      name: 'Home Dashboard',
      href:'/dashboard'
    },
    {
      name: 'About Dashboard',
      href:'/dashboard/about'
    },
    {
      name: 'Contact Dashboard',
      href:'/dashboard/contact'
    },
    {
      name: 'Analytics Dashboard',
      href:'/dashboard/analytics'
    },
    {
      name: 'Settings Dashboard',
      href:'/dashboard/settings'
    },
  ]
  const pathname = usePathname()
  return (
    <div className='my-10 bg-indigo-200 flex'>
      <header className='flex flex-col justify-between bg-indigo-400 text-white'>
        <nav className='flex flex-col'>
        {menu.map(link => {
          const isActive = pathname.endsWith(link.href) 
        return (
          <Link
            className={isActive ? 'text-indigo-400 bg-indigo-200 font-bold p-2' : 'text-black p-2'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
        </nav>
      </header>
      {children} 
    </div>
  )
}

export default DashboardLayout