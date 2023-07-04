import React from 'react'
import Link from "next/link"
import Image from "next/image"
import photos from "@/photos"
type Props = {}

const page = (props: Props) => {
  return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	gap-6 m-10">
        {photos.map(({ id, imageSrc }) => (
          <Link key={id} href={`/feed/photos/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
  )
}

export default page