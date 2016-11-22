import React from 'react'
import styled from 'styled-components'

import StyledLink from './StyledLink'

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  display: inline-block;
  margin: 0 10px;
`

const Menu = () =>
  <ListStyled>
    <ListItem><StyledLink to="/" activeOnlyWhenExact activeClassName="active">Home</StyledLink></ListItem>
    <ListItem><StyledLink to="/about" activeOnlyWhenExact activeClassName="active">About</StyledLink></ListItem>
    <ListItem><StyledLink to="/topics" activeClassName="active">Topics</StyledLink></ListItem>
  </ListStyled>

export default Menu
