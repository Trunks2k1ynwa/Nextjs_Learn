'use client'
import Modal from '@/app/components/autom/Modal'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
    const router = useRouter()
  return (
    <div>
      <Modal>
        <h1>SignUp account</h1>
        <form action="">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
          />
          <br />
          <label htmlFor="name">Password</label>
          <br />
          <input
            type="text"
            placeholder="Enter your password"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
          />
        </form>
        <button className='p-2 m-3 rounded-full bg-sky-300 mx-auto'  onClick={() => router.back()}>Close modal</button>
      </Modal>
    </div>

  )
}

export default SignUp