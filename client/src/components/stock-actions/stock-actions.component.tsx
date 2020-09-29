import * as React from 'react';

import StockSearch from '../stock-search/stock-search.component';

export interface StockActionsProps {
	addStock: (symbol: string) => Promise<void> | void;
}

const StockActions: React.FunctionComponent<StockActionsProps> = ({
	addStock,
}) => {
	return (
		<>
			<StockSearch addStock={addStock} />
		</>
	);
};

export default StockActions;
