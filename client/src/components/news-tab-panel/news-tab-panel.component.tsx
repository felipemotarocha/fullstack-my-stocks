import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import NewsTabPanelContent from '../news-tab-panel-content/news-tab-panel-content.component';

interface NewsTabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
	stock: string;
	fetchStockNews: (symbol: string) => Promise<NewsState[]> | null;
}

export interface NewsState {
	datetime: number;
	hasPaywall: boolean;
	headline: string;
	image: string;
	lang: string;
	related: string;
	source: string;
	summary: string;
	url: string;
}

const NewsTabPanel: React.FunctionComponent<NewsTabPanelProps> = ({
	children,
	value,
	index,
	stock,
	fetchStockNews,
	...other
}) => {
	const [news, setNews] = useState<NewsState[] | null>(null);

	useEffect(() => {
		const fetchAndSetStockNews = async () => {
			const data: NewsState[] | null = await fetchStockNews(stock);
			setNews(data);
		};

		fetchAndSetStockNews();
	}, [fetchStockNews, stock]);

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
					<NewsTabPanelContent news={news} />
				</Box>
			)}
		</div>
	);
};

export default NewsTabPanel;
