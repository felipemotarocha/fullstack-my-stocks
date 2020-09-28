import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { Container } from './wallet.styles';
import WalletStock from '../wallet-stock/wallet-stock.component';
import StockSearch from '../stock-search/stock-search.component';
import { UserContext } from '../../contexts/user/user.context';

const Wallet: React.FunctionComponent = () => {
	const { user, addStock } = useContext(UserContext);

	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<>
			<StockSearch fetchStock={addStock} />
			{/* <Container>
				{user!.stocks
					? user!.stocks.map(
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
			</Container> */}
		</>
	);
};

export default Wallet;
