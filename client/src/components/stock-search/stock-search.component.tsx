import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { Container } from './stock-search.styles';

export interface StockSearchProps {}

const StockSearch: React.FunctionComponent<StockSearchProps> = () => {
	return (
		<Container>
			<TextField
				id='filled-basic'
				variant='outlined'
				label='Add a stock'
				color='primary'
			/>
			<Button
				variant='contained'
				color='primary'
				style={{ height: '100%', marginLeft: '0.3rem' }}
				startIcon={<AddIcon />}
			>
				Add
			</Button>
		</Container>
	);
};

export default StockSearch;
