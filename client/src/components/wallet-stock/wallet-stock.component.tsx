import * as React from 'react';
import { Container, Header, Change, Footer } from './wallet-stock.styles';
import Truncate from 'react-truncate';

export interface WalletStockProps {
	symbol: string;
	companyName: string;
	latestPrice: number;
	changePercent: number;
	primaryExchange: string;
}

const WalletStock: React.FunctionComponent<WalletStockProps> = ({
	symbol,
	companyName,
	changePercent,
	latestPrice,
	primaryExchange,
}) => {
	return (
		<Container>
			<Header changePercent={changePercent}>
				<h2>{symbol}</h2>
				<Truncate lines={1} ellipsis='...'>
					<h3>{companyName}</h3>
				</Truncate>
			</Header>
			<Footer>
				${(Math.round(latestPrice * 100) / 100).toFixed(2)}
				<Change changePercent={changePercent}>
					<p>
						{changePercent > 0 ? '+' : ''}
						{(Math.round(changePercent * 100) / 100).toFixed(2)}%
					</p>
				</Change>
			</Footer>
		</Container>
	);
};

export default WalletStock;
