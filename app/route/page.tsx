import React, { Suspense } from 'react'
import Login from './login'
import Loading from './loading'
import Error from './error'

type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  )
}

export default page