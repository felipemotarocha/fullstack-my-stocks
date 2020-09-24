import * as React from 'react';
import axios from 'axios';

import { Container } from './wallet.styles';
import WalletStock from '../wallet-stock/wallet-stock.component';
import StockSearch from '../stock-search/stock-search.component';

type StocksState = {
	symbol: string;
	companyName: string;
	latestPrice: number;
	change: number;
	primaryExchange: string;
}[];

const Wallet: React.FunctionComponent = () => {
	const [stocks, setStocks] = React.useState<StocksState | null>([]);

	const fetchStock = async (symbol: string) => {
		try {
			const {
				data: { quote },
			} = await axios.get(
				`https://cloud.iexapis.com/stable/stock/${symbol}/batch?last=10&token=sk_7077e804569242739bde723e7679aad5&types=quote,news`
			);

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
								change,
								primaryExchange,
							}) => (
								<WalletStock
									key={symbol}
									symbol={symbol}
									companyName={companyName}
									latestPrice={latestPrice}
									change={change}
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
