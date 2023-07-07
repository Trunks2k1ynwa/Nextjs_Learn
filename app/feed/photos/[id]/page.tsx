import photos, { Photo } from '@/photos';
import Frame from '~/atoms/Frame';
export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoList = photos;
  const photo: Photo = photoList.find((p) => p.id === photoId)!;
  return (
    <div className='container mx-auto my-10 bg-gray-200 p-4 gap-x-4'>
      <Frame photo={photo} />
      <div className='p-4'>
        <h1>{photo?.name}</h1>
        <b>{photo?.username}</b>
      </div>
    </div>
  );
}
