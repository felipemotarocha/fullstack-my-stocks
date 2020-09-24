import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/home.page';

const App: React.FunctionComponent = () => {
	return (
		<Switch>
			<Navbar />
			<Route path='/'>
				<HomePage />
			</Route>
		</Switch>
	);
};

export default App;
