import * as React from 'react';
import axios from 'axios';

import { Container } from './wallet.styles';
import WalletStock from '../wallet-stock/wallet-stock.component';

export interface WalletProps {}

const Wallet: React.FunctionComponent<WalletProps> = () => {
	const [quote, setQuote] = React.useState<any>();
	const fetchAAPL = async () => {
		const {
			data: { quote },
		} = await axios.get(
			'https://cloud.iexapis.com/stable/stock/AAPL/batch?last=10&token=sk_7077e804569242739bde723e7679aad5&types=quote,news'
		);
		setQuote(quote);
	};

	React.useEffect(() => {
		fetchAAPL();
	}, []);

	console.log(quote);

	return (
		<Container>
			{quote ? (
				<WalletStock
					symbol={quote.symbol}
					companyName={quote.companyName}
					latestPrice={quote.latestPrice}
					change={quote.change}
					primaryExchange={quote.primaryExchange}
				/>
			) : null}
		</Container>
	);
};

export default Wallet;
