import React from 'react';
import Search from '../../shared/Search'

const HomeContent = () => (
	<div className="home-content">
		<div className="container">
			<div className="content-wrapper">
				<h1>
					<strong>Bebidas geladas </strong> a <strong>preço </strong>de mercado na sua casa <strong>agora</strong>
				</h1>
				<Search type="address" />
			</div>
		</div>
	</div>
);

export default HomeContent;