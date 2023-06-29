import React from 'react'
import Header from './header'


const layout = ({children,
}: {
  children: React.ReactNode
}) =>{
  return (
    <div>
      <Header />
      {children}
      <footer>Footer Dashboard</footer>
    </div>
  )
}

export default layout