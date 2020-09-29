import * as React from 'react';

import { StockContext } from '../../contexts/stock/stock.context';
import { UserContext } from '../../contexts/user/user.context';
import WalletStock from './wallet-stock.component';

export interface WalletStockContainerProps {
	symbol: string;
	companyName: string;
	latestPrice: number;
	changePercent: number;
	primaryExchange: string;
}

const WalletStockContainer: React.FunctionComponent<WalletStockContainerProps> = (
	props
) => {
	const { editable } = React.useContext(StockContext);
	const { removeStock } = React.useContext(UserContext);
	return (
		<WalletStock {...props} editable={editable} removeStock={removeStock} />
	);
};

export default WalletStockContainer;
