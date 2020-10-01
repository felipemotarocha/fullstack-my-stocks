import React, { createContext, ReactNode, useState } from 'react';
import axios from 'axios';

import { NewsState } from '../../components/news-tab-panel/news-tab-panel.component';

interface ContextProps {
	editable: boolean;
	toggleEditable: () => void;
	fetchStockNews: (symbol: string) => Promise<NewsState[]> | null;
}

export const StockContext = createContext<ContextProps>({
	editable: false,
	toggleEditable: () => {},
	fetchStockNews: () => null,
});

export interface StockContextProviderProps {
	children: ReactNode;
}

const StockContextProvider: React.FunctionComponent<StockContextProviderProps> = ({
	children,
}) => {
	const [editable, setEditable] = useState(false);

	const toggleEditable = () => {
		setEditable((prevEditable) => !prevEditable);
	};

	const fetchStockNews = async (symbol: string) => {
		try {
			const {
				data: { news },
			} = await axios.get(
				`https://cloud.iexapis.com/stable/stock/${symbol}/batch?range=10d&token=sk_7077e804569242739bde723e7679aad5&types=news`
			);
			return news;
		} catch (err) {
			alert('Error while fetching news.');
		}
	};

	return (
		<StockContext.Provider
			value={{ editable, toggleEditable, fetchStockNews }}
		>
			{children}
		</StockContext.Provider>
	);
};

export default StockContextProvider;
