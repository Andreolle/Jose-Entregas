import React from 'react'
import { BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import Footer from './shared/Footer';
import Header from './shared/Header';

//Pages
import Home from './pages/home/Home'
import Products from './pages/products/Products'

export default () => (
	<Router>
		<Header />
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/produtos' component={Products} />
		</Switch>
		<Footer/>
	</Router>
)
