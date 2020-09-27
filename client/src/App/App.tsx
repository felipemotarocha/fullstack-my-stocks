import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../components/navbar/navbar.component';
import HomePage from '../pages/home/home.page';
import { default as SignIn } from '../pages/sign-in/sign-in.container';
import { Container } from './App.styles';

const App: React.FunctionComponent = () => {
	return (
		<Container>
			<Navbar />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/sign-in' component={SignIn} />
			</Switch>
		</Container>
	);
};

export default App;
