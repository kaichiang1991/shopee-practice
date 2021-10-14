import styled from 'styled-components'

const ClearFix = styled.div`
  height: ${props => (props.height || 200) + 'px'};
`

export default ClearFix