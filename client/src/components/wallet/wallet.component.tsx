import React from 'react';
import axios from 'axios';

import { Container } from './wallet.styles';
import WalletStock from '../wallet-stock/wallet-stock.component';
import StockSearch from '../stock-search/stock-search.component';

type StocksState = {
	symbol: string;
	companyName: string;
	latestPrice: number;
	changePercent: number;
	primaryExchange: string;
}[];

const Wallet: React.FunctionComponent = () => {
	const [stocks, setStocks] = React.useState<StocksState | null>([]);

	const fetchStock = async (symbol: string) => {
		try {
			const {
				data: { quote },
			} = await axios.get(
				`https://cloud.iexapis.com/stable/stock/${symbol}/batch?last=10&token=sk_7077e804569242739bde723e7679aad5&types=quote`
			);

			console.log(quote);

			setStocks([...stocks, quote]);
		} catch (error) {
			console.log(error.message);
			alert('Error!');
		}
	};

	return (
		<>
			<StockSearch fetchStock={fetchStock} />
			<Container>
				{stocks
					? stocks.map(
							({
								symbol,
								companyName,
								latestPrice,
								changePercent,
								primaryExchange,
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
			</Container>
		</>
	);
};

export default Wallet;
