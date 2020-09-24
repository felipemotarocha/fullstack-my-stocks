import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../components/navbar/navbar.component';
import HomePage from '../pages/home/home.page';
import { Container } from './App.styles';

const App: React.FunctionComponent = () => {
	return (
		<Container>
			<Navbar />
			<Switch>
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
		</Container>
	);
};

export default App;
