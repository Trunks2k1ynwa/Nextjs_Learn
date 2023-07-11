'use client';
import { classNames } from '@/utils/common';
import Image from 'next/image';
import { useState } from 'react';

type Image = {
  id: string;
  name: string;
  href: string;
  username: string;
  imageSrc: string;
};
export default function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg group bg-gray-200 xl:aspect-w-5 xl:aspect-h-5'>
      <Image
        alt=''
        src={image.href}
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
        width={500}
        height={500}
        className={classNames(
          'duration-700 w-full object-cover aspect-square h-auto ease-in-out group-hover:opacity-75',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
