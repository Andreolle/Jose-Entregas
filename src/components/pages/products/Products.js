import React from 'react';
import Header from '../../shared/Header';
import ProductsContent from './ProductsContent';
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
		<ProductsContent />
	</>
);

export default Products;
