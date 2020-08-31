import React from 'react';
import Header from '../../shared/Header';
import shortLogo from '../../../assets/images/logo.png';

const headerConfig = {
	image: shortLogo,
	hasSearch: true,
	style: {
		width: '55px',
		cursor: 'pointer',
	}
};

const Products = () => (
	<>
		<Header config={headerConfig} />
		<h1>Products</h1>
	</>
);

export default Products;
