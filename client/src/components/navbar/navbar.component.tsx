import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Buttons, Container, Content, Logo } from './navbar.styles';
import { Button } from '@material-ui/core';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
	const history = useHistory();

	return (
		<Container>
			<Content>
				<Logo onClick={() => history.push('/')}>MYStocks</Logo>
				<Buttons>
					<Button
						variant='contained'
						color='primary'
						onClick={() => history.push('/sign-in')}
					>
						Sign In
					</Button>
				</Buttons>
			</Content>
		</Container>
	);
};

export default Navbar;
