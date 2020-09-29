import * as React from 'react';
import { default as Wallet } from '../../components/wallet/wallet.container';
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
