import * as React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import { Container } from './stock-edit.styles';

export interface StockEditProps {}

const StockEdit: React.SFC<StockEditProps> = () => {
	return (
		<Container>
			<Button
				variant='contained'
				color='primary'
				style={{ marginLeft: '0.3rem', height: '100%' }}
				startIcon={<EditIcon />}
			>
				Edit
			</Button>
		</Container>
	);
};

export default StockEdit;
