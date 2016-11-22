import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Routes from './Routes'
import Header from './Header'

const AppWrapper = styled.div`
  text-align: center;
`

const greenTheme = {
  main: 'mediumseagreen'
}

export default class App extends Component {
  render() {
    return (
        <AppWrapper>
          <ThemeProvider theme={greenTheme}>
            <Routes>
                <Header />
            </Routes>
          </ThemeProvider>
        </AppWrapper>
    )
  }
}
