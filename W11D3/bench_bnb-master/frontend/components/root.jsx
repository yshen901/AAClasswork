import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom' //places all routes after a #
import App from './App'

// must be ({ store })...or you will pass in prop wrong
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter> 
      <App />
    </HashRouter>
  </Provider>
)

export default Root