import * as React from 'react';

import AppBar from '@material-ui/core/AppBar/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';

const useStyles = makeStyles(() => ({
	appBar: {
		padding: '0 100px',
	},
}));

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
	const classes = useStyles();

	return (
		<AppBar position='static' className={classes.appBar} color='primary'>
			<Toolbar>
				<Typography variant='h4'>myStocks</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
