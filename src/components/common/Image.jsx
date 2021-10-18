import styled from "styled-components";

const Image = styled.div `
  height: ${props => props.height + 'px'};
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`

export default Image