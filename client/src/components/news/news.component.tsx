import * as React from 'react';

export interface NewsProps {}

const News: React.FunctionComponent<NewsProps> = () => {
	return (
		<div style={{ width: '100%', color: 'black' }}>
			<h1>news</h1>
		</div>
	);
};

export default News;
