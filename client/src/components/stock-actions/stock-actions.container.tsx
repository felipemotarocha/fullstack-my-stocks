import * as React from 'react';
import { UserContext } from '../../contexts/user/user.context';
import StockActions from './stock-actions.component';

export interface StockActionsContainerProps {}

const StockActionsContainer: React.FunctionComponent<StockActionsContainerProps> = () => {
	const { addStock } = React.useContext(UserContext);

	return <StockActions addStock={addStock} />;
};

export default StockActionsContainer;
