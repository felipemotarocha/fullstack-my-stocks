import * as React from 'react';
import { Box, Typography } from '@material-ui/core';

interface NewsTabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
	stock: string;
	fetchStockNews: (symbol: string) => void;
}

const NewsTabPanel: React.FunctionComponent<NewsTabPanelProps> = ({
	children,
	value,
	index,
	stock,
	fetchStockNews,
	...other
}) => {
	React.useEffect(() => {
		fetchStockNews(stock);
	}, []);

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

export default NewsTabPanel;
