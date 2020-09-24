import * as React from 'react';
import { Container, Content, Logo } from './navbar.styles';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
	return (
		<Container>
			<Content>
				<Logo>myStocks</Logo>
			</Content>
		</Container>
	);
};

export default Navbar;
