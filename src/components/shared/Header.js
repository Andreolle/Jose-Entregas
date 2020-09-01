import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import Search from '../shared/Search';
import Cart from '../shared/Cart';
import CartIcon from '../svg/cart';

const Header = (props) => {
	const history = useHistory();
	const { pathname } = useLocation();
	const { config } = props;

	return (
		<header className="header">
			<div className="container content">
				<div onClick={() => history.push('/')} className="header__logo">
					<img style={config.style} src={config.image} alt="Jose Entregas"/>
				</div>
				{
					config.hasSearch && (
						<div className="header__search">
							<Search
								type="products"
								placeholder="Pesquise sua bebida favorita"
							/>
						</div>
					)
				}
				{ pathname !== '/' && ( <Cart /> )}
			</div>
		</header>
	)
};

export default Header;
