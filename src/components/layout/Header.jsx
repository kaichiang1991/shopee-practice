import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 200px;
  background-color: #D0061A;
  position: ${props => props.fixed? 'fixed': 'relative'};
`

const Header = ()=>{
  return (
    <StyledHeader>
      Header
    </StyledHeader>
  )
}

export default Header
