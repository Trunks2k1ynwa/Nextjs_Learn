'use client';
import Image from 'next/image';
import bgurl from '@/public/bg-3.jpg';
import { useState } from 'react';
import { classNames } from '@/utils/common';
import React, { useEffect, useRef } from 'react';

type LazyImageProps = {
  src?: string | any;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
};

export default function LazyImage({
  src = bgurl,
  alt,
  height,
  width,
  className,
}: LazyImageProps) {
  //https://blurha.sh
  const [isLoading, setLoading] = useState(true);
  // const blurDataURL = 'LRJ+A7afouof_KM_WYj]0dRjadof';
  const imageRefs = useRef(null);
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image) {
          setLoading(false);
        }
      }
    });
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );
    const imgRef = imageRefs.current;
    if (imgRef) {
      observer.observe(imgRef);
    }

    return () => {
      if (imgRef) {
        observer.unobserve(imgRef);
      }
      observer.disconnect();
    };
  }, []);
  return (
    <div
      ref={imageRefs}
      className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'
    >
      <Image
        alt={alt}
        src={src}
        height={height}
        width={width}
        loading='lazy'
        className={classNames(
          'duration-700 ease-in-out',
          className,
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
