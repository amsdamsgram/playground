import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import HomePage from './HomePage'
import AboutPage from './AboutPage'
import TopicsPage from './TopicsPage'
import NotFoundPage from './NotFoundPage'

const Routes = ({ children }) => {
  return (
    <BrowserRouter>
        <div>
          {children}

          <Match exactly pattern="/" component={HomePage} />
          <Match pattern="/about" component={AboutPage} />
          <Match pattern="/topics" component={TopicsPage} />

          <Miss component={NotFoundPage} />
        </div>
    </BrowserRouter>
  )
}

export default Routes
