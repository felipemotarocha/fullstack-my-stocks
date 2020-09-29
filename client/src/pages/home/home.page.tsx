import * as React from 'react';
import News from '../../components/news/news.component';
import { default as Wallet } from '../../components/wallet/wallet.container';
import { Container } from './home.styles';

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
	return (
		<Container>
			<Wallet />
			<News />
		</Container>
	);
};

export default HomePage;
