import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import BlurImage from '~/atoms/BlurImage';

export async function getImages() {
  const supabaseAdmin = createServerComponentClient({ cookies });
  let { data: Images } = await supabaseAdmin
    .from('Images')
    .select('*')
    .order('id');
  return Images;
}
export default async function Page() {
  const images = await getImages();
  return (
    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='text-2xl text-center m-4'>Page</h1>

      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 '>
        {images &&
          images.map((image) => <BlurImage key={image.id} image={image} />)}
      </div>
    </div>
  );
}
