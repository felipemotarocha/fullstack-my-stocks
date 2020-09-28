import React, { createContext, ReactNode, useState } from 'react';
import axios from 'axios';

export type User = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	stocks: string[];
};

interface ContextProps {
	user: User | null;
	changeUser: (value: User | null) => void;
	checkUserSession: () => Promise<boolean> | void;
	addStock: (symbol: string) => void;
}

export const UserContext = createContext<ContextProps>({
	user: null,
	changeUser: () => {},
	checkUserSession: () => {},
	addStock: () => {},
});

export interface UserContextProviderProps {
	children: ReactNode;
}

const UserContextProvider: React.FunctionComponent<UserContextProviderProps> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);

	const changeUser = (value: User | null) => {
		setUser(value);
	};

	const addStock = async (symbol: string) => {
		try {
			const {
				data: { quote },
			} = await axios.get(
				`https://cloud.iexapis.com/stable/stock/${symbol}/batch?last=10&token=sk_7077e804569242739bde723e7679aad5&types=quote`
			);

			if (quote) {
				await axios.post(
					`http://localhost:5000/users/${user!.id}/add-stock`,
					{
						stock: symbol,
					}
				);

				setUser((prevUser) => {
					return {
						...prevUser,
						stocks: [...prevUser?.stocks, symbol],
					} as any;
				});
			}
		} catch (err) {
			console.log(err);
			alert(err);
		}
	};

	const checkUserSession = async () => {
		const token = localStorage.getItem('authToken');

		try {
			const { data } = await axios.get('http://localhost:5000/users', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setUser(data);
			return true;
		} catch (err) {
			setUser(null);
			localStorage.removeItem('authToken');
			return false;
		}
	};

	return (
		<UserContext.Provider
			value={{ user, changeUser, checkUserSession, addStock }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
