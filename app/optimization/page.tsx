'use client';
import photos from '@/photos';
import Link from 'next/link';
import LazyImage from '~/atoms/LazyImage';

function OptimizationPage() {
  return (
    <div>
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 m-10'>
        {photos.map(({ id, imageSrc, name }) => (
          <Link key={id} href={`/feed/photos/${id}`}>
            <LazyImage
              className='w-full object-cover aspect-square'
              height={500}
              width={500}
              alt={name}
              src={imageSrc}
            />
          </Link>
        ))}
      </div>
      <LazyImage className='object-cover' alt='Liverpool' />
      <h1>OptimizationPage</h1>
    </div>
  );
}

export default OptimizationPage;
