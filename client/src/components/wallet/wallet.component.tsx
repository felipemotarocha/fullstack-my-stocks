import React from 'react';

import { Container, Stocks, Actions } from './wallet.styles';
import WalletStock from '../wallet-stock/wallet-stock.component';

import { default as StockActions } from '../stock-actions/stock-actions.container';

interface WalletProps {
	stocks: {
		stock: string;
		quote: {
			changePercent: number;
			companyName: string;
			symbol: string;
			primaryExchange: string;
			latestPrice: number;
		};
	}[];
}

const Wallet: React.FunctionComponent<WalletProps> = ({ stocks }) => {
	return (
		<Container>
			<Actions>
				<StockActions />
			</Actions>
			<Stocks>
				{stocks
					? stocks.map(
							({
								quote: {
									symbol,
									companyName,
									latestPrice,
									changePercent,
									primaryExchange,
								},
							}) => (
								<WalletStock
									key={symbol}
									symbol={symbol}
									companyName={companyName}
									latestPrice={latestPrice}
									changePercent={changePercent * 100}
									primaryExchange={primaryExchange}
								/>
							)
					  )
					: null}
			</Stocks>
		</Container>
	);
};

export default Wallet;
