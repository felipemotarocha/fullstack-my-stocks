import * as React from 'react';

import { UserContext } from '../../contexts/user/user.context';
import NewsTab from './news-tab.component';

export interface NewsTabContainerProps {}

const NewsTabContainer: React.FunctionComponent<NewsTabContainerProps> = () => {
	const { user } = React.useContext(UserContext);
	return <>{user ? <NewsTab stocks={user!.stocks} /> : ''}</>;
};

export default NewsTabContainer;
