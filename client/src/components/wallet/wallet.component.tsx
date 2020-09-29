import React from 'react';

import WalletStock from '../wallet-stock/wallet-stock.component';
import { default as StockSearch } from '../stock-search/stock-search.container';
import { default as StockEdit } from '../stock-edit/stock-edit.container';

import { Container, Stocks, Actions } from './wallet.styles';

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
				<StockSearch />
				<StockEdit />
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
