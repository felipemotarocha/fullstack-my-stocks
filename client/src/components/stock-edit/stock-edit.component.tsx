import * as React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

import { Container } from './stock-edit.styles';

export interface StockEditProps {
	editable: boolean;
	toggleEditable: () => void;
}

const StockEdit: React.FunctionComponent<StockEditProps> = ({
	editable,
	toggleEditable,
}) => {
	return (
		<Container>
			<Button
				variant='contained'
				color='primary'
				style={{ marginLeft: '0.3rem', height: '100%' }}
				startIcon={editable ? <CloseIcon /> : <EditIcon />}
				onClick={toggleEditable}
			>
				{editable ? 'Cancel' : 'Edit'}
			</Button>
		</Container>
	);
};

export default StockEdit;
