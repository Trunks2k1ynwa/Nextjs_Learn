'use client'
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Page({ params }: { params: { productId: string } }) {
  const pathName = useParams()
  return <div>
    <h1>[[...folderName]]</h1>
    <h2>
    My Slug ProductId: {params.productId}
    </h2>
    <p>params: {JSON.stringify(pathName)}</p>
    <Link href={`${pathName.productId}/22398`} className='bg-green-400 p-3 rounded-md cursor-pointer block w-fit'>
            <h1 >NextJs</h1>
            <p className='text-white'>Nextjs Product</p>
      </Link>
    <Link className="bg-sky-200 p-3 rounded-md block w-fit m-4" href='/product'>Back to home</Link>
  </div>
}