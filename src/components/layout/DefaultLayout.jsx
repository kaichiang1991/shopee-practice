import React from 'react'
import Header from './Header'

const DefaultLayout = ({children}) => {
  console.log('default layout', children)
  return (
    <>
      <Header />
    </>
  )
}

export default DefaultLayout