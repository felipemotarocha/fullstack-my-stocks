import * as React from 'react';
import { UserContext } from '../../contexts/user/user.context';
import StockSearch from './stock-search.component';

export interface StockSearchContainerProps {}

const StockSearchContainer: React.SFC<StockSearchContainerProps> = () => {
	const { addStock } = React.useContext(UserContext);

	return <StockSearch addStock={addStock} />;
};

export default StockSearchContainer;
