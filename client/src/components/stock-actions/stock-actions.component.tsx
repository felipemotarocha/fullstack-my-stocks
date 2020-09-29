import * as React from 'react';
import StockEdit from '../stock-edit/stock-edit.component';

import StockSearch from '../stock-search/stock-search.component';
import { Container } from './stock-actions.styles';

export interface StockActionsProps {
	addStock: (symbol: string) => Promise<void> | void;
}

const StockActions: React.FunctionComponent<StockActionsProps> = ({
	addStock,
}) => {
	return (
		<Container>
			<StockSearch addStock={addStock} />
			<StockEdit />
		</Container>
	);
};

export default StockActions;
