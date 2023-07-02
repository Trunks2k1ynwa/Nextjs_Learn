import Link from 'next/link'
import React from 'react'

type Props = {}

export default async function Page (props: Props){

  await new Promise((resolve)=> setTimeout(resolve,2000))
  return (
    <div className='p-2 bg-gray-200 rounded-md'>
      Main Parallel
    </div>
  )
}
