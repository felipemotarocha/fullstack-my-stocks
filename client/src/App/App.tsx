import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../components/navbar/navbar.component';
import { UserContext } from '../contexts/user/user.context';
import HomePage from '../pages/home/home.page';
import { default as SignIn } from '../pages/sign-in/sign-in.container';
import { Container } from './App.styles';

const App: React.FunctionComponent = () => {
	const { checkUserSession } = useContext(UserContext);
	useEffect(() => {
		checkUserSession();
		// eslint-disable-next-line
	}, []);
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
