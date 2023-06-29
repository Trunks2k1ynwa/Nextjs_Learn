import React from 'react'


const DashboardLayout = ({children,
}: {
  children: React.ReactNode
}) =>{
  return (
    <div>
      <header>Header DashboardLayout</header>
      {children}
      <footer>Footer DashboardLayout</footer>
    </div>
  )
}

export default DashboardLayout