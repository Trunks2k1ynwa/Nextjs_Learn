'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  console.log("🚀 ~ error:", error)
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2 className='text-red-500'>Something went wrong! in parallel</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='p-2 rounded-md bg-red-500 text-white'
      >
        Try again
      </button>
    </div>
  )
}
