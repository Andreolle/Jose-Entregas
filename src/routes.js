import React from 'react'
import { BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Products from './pages/Products'

export default () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/produtos' component={Products} />
		</Switch>
	</Router>
)
