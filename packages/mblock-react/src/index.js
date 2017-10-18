import React from 'react'
import ReactDOM from 'react-dom'

const isProduction = process.env.NODE_ENV === 'production'

const renderDev = (Component, element) => {
  const AppContainer = require('react-hot-loader').AppContainer
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById(element)
  )
}

const render = (Component, element) => {
  ReactDOM.render(
    <Component />,
    document.getElementById(element)
  )
}

export default (Component, element) => {
  isProduction
    ? render(Component, element)
    : renderDev(Component, element)
}
