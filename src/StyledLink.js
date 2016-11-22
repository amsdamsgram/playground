import { Link } from 'react-router'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: ${props => props.theme.main};
  text-decoration: none;
  font-size: large;
  display: block;

  &:hover{
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
    color: gold;
  }
`

StyledLink.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
}

export default StyledLink
