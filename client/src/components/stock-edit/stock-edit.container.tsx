import * as React from 'react';

import StockEdit from './stock-edit.component';

import { StockContext } from '../../contexts/stock/stock.context';

const StockEditContainer: React.FunctionComponent = () => {
	const { toggleEditable } = React.useContext(StockContext);
	return <StockEdit toggleEditable={toggleEditable} />;
};

export default StockEditContainer;
