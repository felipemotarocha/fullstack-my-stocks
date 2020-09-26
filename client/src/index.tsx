import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App/App';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#090909',
		},
		secondary: {
			main: '#181818',
		},
	},
});

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
);
