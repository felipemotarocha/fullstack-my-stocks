import * as React from 'react';
import { default as NewsTab } from '../news-tab/news-tab.container';
import { Container } from './news.styles';

export interface NewsProps {}

const News: React.FunctionComponent<NewsProps> = () => {
	return (
		<Container>
			<NewsTab />
		</Container>
	);
};

export default News;
