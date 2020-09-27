import React, { createContext, ReactNode, useState } from 'react';
import axios from 'axios';

export type User = {
	firstName: string;
	lastName: string;
	email: string;
	stocks: string[];
};

interface ContextProps {
	user: User | null;
	changeUser: (value: User) => void;
	checkUserSession: () => Promise<void> | void;
}

export const UserContext = createContext<ContextProps>({
	user: null,
	changeUser: () => {},
	checkUserSession: () => {},
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

	const checkUserSession = async () => {
		const token = localStorage.getItem('authToken');

		try {
			const { data } = await axios.get('http://localhost:5000/users', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			console.log(data);
			return data;
		} catch (err) {
			setUser(null);
			localStorage.removeItem('authToken');
		}
	};

	return (
		<UserContext.Provider value={{ user, changeUser, checkUserSession }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;