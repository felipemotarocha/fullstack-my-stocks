import * as React from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../../contexts/user/user.context';
import Wallet from './wallet.component';

export interface WalletContainerProps {}

const WalletContainer: React.FunctionComponent<WalletContainerProps> = () => {
	const [stocks, setStocks] = React.useState<any>(null);
	const { user } = useContext(UserContext);

	useEffect(() => {
		const fetchStocksQuotes = async () => {
			if (user) {
				const { data } = await axios.get(
					`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${user?.stocks.toString()}&types=quote&last=5&token=sk_7077e804569242739bde723e7679aad5`
				);

				const formattedData = Object.entries(data).map((obj: any) => {
					const {
						changePercent,
						companyName,
						symbol,
						primaryExchange,
						latestPrice,
					}: {
						changePercent: number;
						companyName: string;
						symbol: string;
						primaryExchange: string;
						latestPrice: number;
					} = obj[1].quote;

					return {
						stock: obj[0],
						quote: {
							changePercent,
							companyName,
							symbol,
							primaryExchange,
							latestPrice,
						},
					};
				});

				return setStocks(formattedData);
			}

			return setStocks(null);
		};

		fetchStocksQuotes();
	}, [user]);

	return <>{stocks ? <Wallet stocks={stocks} /> : 'Loading...'}</>;
};

export default WalletContainer;
