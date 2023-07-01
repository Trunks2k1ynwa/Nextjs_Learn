import Link from 'next/link'
import React from 'react'

type Props = {}

const ProductPage = (props: Props) => {
  const listProudct = [
    {
      name: 'HTML',
      id: '24214',
      description: 'Product HTML'
    },
    {
      name: 'NodeJS',
      id: '242983',
      description: 'Product NodeJS'
    },
    {
      name: 'ReactJS',
      id: '24sfaff',
      description: 'Product ReactJS'
    },
  ]
  return (
    <div className='flex gap-5 m-10'>
      {
        listProudct.map(product => (
      <Link href={`/product/${product.id}`} className='bg-green-400 p-3 rounded-md cursor-pointer' key={product.name}>
            <h1 >{product.name}</h1>
            <p className='text-white'>{product.description}</p>
      </Link>
        ))
      }
    </div>
  )
}

export default ProductPage