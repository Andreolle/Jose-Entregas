import React from 'react';
import { useLocation } from 'react-router-dom'
import shortLogo from '../../assets/images/logo.png';
import whiteLogo from '../../assets/images/white-logo.png';

const Header = () => {
	const { pathname } = useLocation();
	const logo = pathname === '/'
		? {
			image: whiteLogo,
			maxWidth: '150px'
		} : {
			image: shortLogo,
			maxWidth: '50px'
		};

	return (
		<header className="header">
			<div className="container content">
				<div style={{maxWidth: logo.maxWidth}} className="header__logo">
					<img src={logo.image} alt="Jose Entregas"/>
				</div>
			</div>
		</header>
	)
};

export default Header;
