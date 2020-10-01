import * as React from 'react';
import { useContext } from 'react';

import NewsTabPanel from './news-tab-panel.component';

import { StockContext } from '../../contexts/stock/stock.context';

export interface NewsTabPanelContainerProps {
	children?: React.ReactNode;
	index: any;
	value: any;
	stock: string;
}

const NewsTabPanelContainer: React.FunctionComponent<NewsTabPanelContainerProps> = (
	props
) => {
	const { fetchStockNews } = useContext(StockContext);
	return <NewsTabPanel {...props} fetchStockNews={fetchStockNews} />;
};

export default NewsTabPanelContainer;
