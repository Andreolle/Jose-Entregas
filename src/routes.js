import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Products from './pages/Products'

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
		<Route path='/produtos' component={Products} />
  </Switch>
)
