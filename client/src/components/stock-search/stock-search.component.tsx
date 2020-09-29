import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { Container } from './stock-search.styles';

export interface StockSearchProps {
	addStock: (symbol: string) => Promise<void> | void;
}

const StockSearch: React.FunctionComponent<StockSearchProps> = ({
	addStock,
}) => {
	const [symbol, setSymbol] = React.useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSymbol(event.target.value);

	const handleSubmit = () => addStock(symbol);

	return (
		<Container>
			<TextField
				id='filled-basic'
				variant='outlined'
				label='Add a stock'
				color='primary'
				value={symbol}
				onChange={handleChange}
			/>
			<Button
				variant='contained'
				color='primary'
				style={{ height: '100%', marginLeft: '0.3rem' }}
				startIcon={<AddIcon />}
				onClick={handleSubmit}
			>
				Add
			</Button>
		</Container>
	);
};

export default StockSearch;
