import React, { createContext, ReactNode, useState } from 'react';

interface ContextProps {
	editable: boolean;
	toggleEditable: () => void;
}

export const StockContext = createContext<ContextProps>({
	editable: false,
	toggleEditable: () => {},
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

	return (
		<StockContext.Provider value={{ editable, toggleEditable }}>
			{children}
		</StockContext.Provider>
	);
};

export default StockContextProvider;
