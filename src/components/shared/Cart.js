import React from 'react';
import CartIcon from '../svg/cart';

const Header = (props) => (
	<div className="cart">
		<div className="cart__counter">0</div>
		<CartIcon className="cart__icon" />
	</div>
);

export default Header;
