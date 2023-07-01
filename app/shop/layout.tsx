'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const ShopLayout = ({children,
}: {
  children: React.ReactNode
  }) => {
  
    const pathname = usePathname()
  return (
    <div className='my-5 bg-sky-100'>
      <header className='flex justify-between bg-sky-400 p-4 text-white'>
        <div>Header ShopLayout</div>
        
      </header>
      {children}
      <footer className='bg-sky-400 p-4 text-white'>Footer ShopLayout</footer>
    </div>
  )
}

export default ShopLayout