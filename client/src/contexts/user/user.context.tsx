import React, { createContext, ReactNode, useState } from 'react';

type User = {
	firstName: string;
	lastName: string;
	email: string;
	stocks: string[];
};

interface ContextProps {
	user: User | null;
	changeUser: (value: User) => void;
}

export const UserContext = createContext<ContextProps>({
	user: null,
	changeUser: () => {},
});

export interface UserContextProviderProps {
	children: ReactNode;
}

const UserContextProvider: React.FunctionComponent<UserContextProviderProps> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);

	const changeUser = (value: User) => {
		setUser(value);
	};

	return (
		<UserContext.Provider value={{ user, changeUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
