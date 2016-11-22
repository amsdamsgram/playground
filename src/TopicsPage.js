import React from 'react'
import { Match } from 'react-router'

import TopicPage from './TopicPage'
import StyledLink from './StyledLink'

const TopicsPage = ({ pathname }) => {
  return (
    <div>
      <h2>Topics Page</h2>
      <StyledLink to={`${pathname}/component-lifecycle`} activeClassName="active">Component Lifecycle</StyledLink>
      <StyledLink to={`${pathname}/render-method`} activeClassName="active">Render method</StyledLink>

      <Match pattern={`${pathname}/:topic`} component={TopicPage} />
  </div>
  )
}

export default TopicsPage
