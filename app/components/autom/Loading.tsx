import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent" />
  )
}

export default Loading