import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BingoIndex from './BingoIndex'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BingoIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
