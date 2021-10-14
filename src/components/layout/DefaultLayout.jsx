import React from 'react'
import Header from './Header'

const DefaultLayout = ({fixedHeader, children}) => {
  return (
    <>
      <Header fixedHeader={fixedHeader}/>
      {children}
      <footer>Footer</footer>
    </>
  )
}

export default DefaultLayout