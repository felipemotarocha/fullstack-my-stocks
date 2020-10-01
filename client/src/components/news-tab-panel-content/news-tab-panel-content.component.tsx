import * as React from 'react';

import { Container, News, NewsImage } from './news-tab-panel-content.styles';

import { NewsState } from '../news-tab-panel/news-tab-panel.component';

export interface NewsTabPanelContentProps {
	news: NewsState[] | null;
}

const NewsTabPanelContent: React.FunctionComponent<NewsTabPanelContentProps> = ({
	news,
}) => {
	React.useEffect(() => {
		console.log(news);
	}, [news]);

	return (
		<Container>
			{news?.map(({ headline, image }) => (
				<News>
					<NewsImage src={image} />
					<h2>{headline}</h2>
				</News>
			))}
		</Container>
	);
};

export default NewsTabPanelContent;
