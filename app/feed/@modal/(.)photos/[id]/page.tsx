import Modal from '@/app/components/autom/Modal'
import Frame from '@/app/components/autom/Frame'
import swagPhotos, { Photo } from '@/photos'

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
   const photos = swagPhotos
  const photo:Photo = photos.find((p) => p.id === photoId)!

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}