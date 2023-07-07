'use client';
import { Photo } from '@/photos';
import Image from 'next/image';

export default function Frame({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        alt=''
        src={photo?.imageSrc}
        height={600}
        width={600}
        className='w-full object-cover aspect-square col-span-2 transition-opacity opacity-0 duration-[2s]'
        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
      />

      <div className='bg-white p-4 px-6'>
        <h3>{photo?.name}</h3>
        <p>Taken by {photo?.username}</p>
      </div>
    </>
  );
}
