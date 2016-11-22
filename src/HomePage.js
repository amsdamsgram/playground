import React from 'react'

import Button from './Button'
import ButtonTomato from './ButtonTomato'

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ButtonTomato>I'm a tomato!</ButtonTomato>
      <Button>Themed</Button>
    </div>
  )
}

export default HomePage
