import * as React from 'react';
import StockSearch from '../../components/stock-search/stock-search.component';
import Wallet from '../../components/wallet/wallet.component';
import { Container } from './home.styles';

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
	return (
		<Container>
			<StockSearch />
			<Wallet />
		</Container>
	);
};

export default HomePage;
