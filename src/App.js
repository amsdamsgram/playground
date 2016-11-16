import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Button from './Button'
import ButtonTomato from './ButtonTomato'

const AppWrapper = styled.div`
  text-align: center;
`

const AppIntro = styled.p`
  font-size: large;
`

const greenTheme = {
  main: 'mediumseagreen'
}

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
        <Button>Click me!</Button>
        <ButtonTomato>I'm a tomato!</ButtonTomato>
        <ThemeProvider theme={greenTheme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </AppWrapper>
    )
  }
}
