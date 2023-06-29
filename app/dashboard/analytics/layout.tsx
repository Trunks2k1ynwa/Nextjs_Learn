import React from 'react'


const AnalyticsLayout = ({children,
}: {
  children: React.ReactNode
}) =>{
  return (
    <div>
      <header>Header AnalyticsLayout</header>
      {children}
      <footer>Footer AnalyticsLayout</footer>
    </div>
  )
}

export default AnalyticsLayout