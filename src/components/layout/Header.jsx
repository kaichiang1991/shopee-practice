import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../common/Container'

const StyledHeader = styled.header`
  height: 200px;
  background-color: #D0061A;

  ${props => props.fixed && css`
    position: fixed;
    width: 100%;
  `}
`

const Header = ({fixedHeader})=>{
  return (
    <StyledHeader fixed={fixedHeader}>
      <Container>
        This is Header
      </Container>
    </StyledHeader>
  )
}

export default Header
