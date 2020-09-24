import * as React from 'react';
import { Container, Header, Change, Footer } from './wallet-stock.styles';

export interface WalletStockProps {
	symbol: string;
	companyName: string;
	latestPrice: number;
	change: number;
	primaryExchange: string;
}

const WalletStock: React.FunctionComponent<WalletStockProps> = ({
	symbol,
	companyName,
	change,
	latestPrice,
	primaryExchange,
}) => {
	return (
		<Container>
			<Header change={change}>
				<h2>{symbol}</h2>
				<h3>{companyName}</h3>
			</Header>
			<Footer>
				${(Math.round(latestPrice * 100) / 100).toFixed(2)}
				<Change change={change}>
					<p>
						{change > 0 ? '+' : '-'}
						{(Math.round(change * 100) / 100).toFixed(2)}%
					</p>
				</Change>
			</Footer>
		</Container>
	);
};

export default WalletStock;
