import styled from "styled-components"
import Container from '../common/Container'

const StyledAppFooter = styled.footer`
  background-color: #fbfbfb;
  padding-top: 40px;
`

const Footer = () => {
  return (
    <StyledAppFooter>
      <Container>
        Footer
      </Container>
    </StyledAppFooter>
  )
}

export default Footer
