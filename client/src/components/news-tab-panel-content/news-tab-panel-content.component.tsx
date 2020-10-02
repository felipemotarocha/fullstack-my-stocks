import * as React from 'react';
import { format } from 'date-fns';

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
			{news?.map(({ headline, image, source, datetime }) => (
				<News>
					<NewsImage src={image} />
					<h2>{headline}</h2>
					<p>
						{source} • {format(datetime, 'MM/dd/yyyy')}
					</p>
				</News>
			))}
		</Container>
	);
};

export default NewsTabPanelContent;
