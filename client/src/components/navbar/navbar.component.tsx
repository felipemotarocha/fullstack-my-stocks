import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Buttons, Container, Content, Logo } from './navbar.styles';
import { Button } from '@material-ui/core';
import { UserContext } from '../../contexts/user/user.context';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
	const history = useHistory();
	const { user, changeUser } = useContext(UserContext);

	const signOut = () => {
		changeUser(null);
		localStorage.removeItem('authToken');
	};

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
						{user ? user.firstName : 'Sign In'}
					</Button>
					{user ? (
						<Button
							variant='contained'
							color='primary'
							onClick={signOut}
						>
							Sign Out
						</Button>
					) : null}
				</Buttons>
			</Content>
		</Container>
	);
};

export default Navbar;
