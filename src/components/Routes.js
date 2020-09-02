import React from 'react'
import { BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

//Shared Components
import Footer from './shared/Footer';
import Cart from './shared/Cart';

//Pages
import Home from './pages/home/Home';
import Products from './pages/products/Products';

export default () => (
	<Router>
		<Cart />
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/produtos' component={Products} />
		</Switch>
		<Footer/>
	</Router>
)
