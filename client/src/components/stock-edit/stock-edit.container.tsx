import * as React from 'react';

import StockEdit from './stock-edit.component';

import { StockContext } from '../../contexts/stock/stock.context';

const StockEditContainer: React.FunctionComponent = () => {
	const { editable, toggleEditable } = React.useContext(StockContext);
	return <StockEdit editable={editable} toggleEditable={toggleEditable} />;
};

export default StockEditContainer;
