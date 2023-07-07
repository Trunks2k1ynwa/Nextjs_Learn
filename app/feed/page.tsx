import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import photos from '@/photos';

const page = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	gap-6 m-10'>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita
        optio quod officiis consequatur corporis nam esse ea cupiditate
        reiciendis dolores sint doloremque quas, veniam, nihil qui sed ab nulla.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae
        sapiente illum, voluptas laboriosam, atque voluptatibus odit dolore
        earum, quae iusto corrupti quaerat facere. Atque optio quod sapiente
        consequatur doloremque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sit dignissimos incidunt, vitae ullam delectus eius
        quasi at ea, excepturi qui labore officiis voluptatibus sapiente veniam
        officia praesentium laborum asperiores similique. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Totam sed deleniti magnam id quam.
        Maiores magnam, quam explicabo laboriosam temporibus laborum distinctio
        nisi similique mollitia accusantium aut tempore molestias error?
      </h1>
      {photos.map(({ id, imageSrc }) => (
        <Link key={id} href={`/feed/photos/${id}`}>
          <Image
            alt=''
            src={imageSrc}
            height={500}
            width={500}
            className='w-full object-cover aspect-square'
          />
        </Link>
      ))}
    </div>
  );
};

export default page;
