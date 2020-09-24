import * as React from 'react';
import Wallet from '../../components/wallet/wallet.component';
import { Container } from './home.styles';

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
	return (
		<Container>
			<Wallet />
		</Container>
	);
};

export default HomePage;
