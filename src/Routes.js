import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)
export default Routes
