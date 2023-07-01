'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const ProductsLayout = ({children,
}: {
  children: React.ReactNode
  }) => {
  
    const pathname = usePathname()
  return (
    <div className='my-10 bg-green-100'>
      <header className='flex justify-between bg-green-400 p-4 text-white'>
        <div>Header ProductsLayout</div>
        
      </header>
      {children}
      <footer className='bg-green-400 p-4 text-white'>Footer ProductsLayout</footer>
    </div>
  )
}

export default ProductsLayout