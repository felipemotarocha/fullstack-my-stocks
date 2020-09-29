import * as React from 'react';
import Truncate from 'react-truncate';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import {
	Container,
	Header,
	Change,
	Footer,
	Actions,
} from './wallet-stock.styles';
import { StockContext } from '../../contexts/stock/stock.context';

export interface WalletStockProps {
	symbol: string;
	companyName: string;
	latestPrice: number;
	changePercent: number;
	primaryExchange: string;
}

const WalletStock: React.FunctionComponent<WalletStockProps> = ({
	symbol,
	companyName,
	changePercent,
	latestPrice,
	primaryExchange,
}) => {
	const { editable } = React.useContext(StockContext);

	return (
		<Container>
			<Actions editable={editable}>
				<Button
					variant='contained'
					color='secondary'
					startIcon={<DeleteIcon />}
				>
					DELETE
				</Button>
			</Actions>
			<Header changePercent={changePercent}>
				<h2>{symbol}</h2>
				<Truncate lines={1} ellipsis='...'>
					<h3>{companyName}</h3>
				</Truncate>
			</Header>
			<Footer>
				${(Math.round(latestPrice * 100) / 100).toFixed(2)}
				<Change changePercent={changePercent}>
					{changePercent > 0 ? '+' : ''}
					{(Math.round(changePercent * 100) / 100).toFixed(2)}%
				</Change>
			</Footer>
		</Container>
	);
};

export default WalletStock;
