import React from 'react';
import HomeContent from './HomeContent';
import whiteLogo from '../../../assets/images/white-logo.png';
import Header from '../../shared/Header';

const headerConfig = {
	image: whiteLogo,
	hasSearch: false,
	style: {
		width: '175px',
		cursor: 'unset',
	}
}

const Home = () => (
	<>
		<Header config={headerConfig} />
		<HomeContent />
	</>
);

export default Home;
