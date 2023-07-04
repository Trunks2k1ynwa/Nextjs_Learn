'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  children:React.ReactNode
}

const Modal = ({ children }: Props) => {
      const router = useRouter()
  return (
    <div className='absolute h-full w-full flex justify-center items-center top-0 left-0'>
      <div onClick={() => router.back()} className="fixed inset-0 z-10 transition-all bg-black overlay w-screen bg-opacity-70 h-screen cursor-pointer" />
      <div className='relative z-20 p-5 rounded-md bg-white
      '>
      {children}
      </div>
    </div>
  )
}

export default Modal