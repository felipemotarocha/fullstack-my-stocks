import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App/App';
import UserContextProvider from './contexts/user/user.context';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#1a1a1a',
		},
		secondary: {
			main: '#181818',
		},
	},
});

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
);
