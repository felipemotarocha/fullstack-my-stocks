import React, { useContext } from 'react';

import { Container, Stocks } from './wallet.styles';
import WalletStock from '../wallet-stock/wallet-stock.component';
import StockSearch from '../stock-search/stock-search.component';
import { UserContext } from '../../contexts/user/user.context';

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
	const { addStock } = useContext(UserContext);

	return (
		<Container>
			<StockSearch fetchStock={addStock} />
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
