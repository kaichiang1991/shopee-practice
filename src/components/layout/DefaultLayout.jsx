import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from '../common/Container'

const DefaultLayout = ({fixedHeader, children}) => {
  return (
    <>
      <Header fixedHeader={fixedHeader}/>
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default DefaultLayout