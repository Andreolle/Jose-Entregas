require('dotenv').config()
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Routes from './components/Routes';
import client from './services/apollo';

const App = () => (
	<ApolloProvider client={client}>
		<Routes />
	</ApolloProvider>
);

export default App;
