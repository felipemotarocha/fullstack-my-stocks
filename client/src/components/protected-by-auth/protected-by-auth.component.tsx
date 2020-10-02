import * as React from 'react';
import { useContext, useEffect, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/user/user.context';

export interface ProtectedByAuthProps {
	children: ReactNode;
}

const ProtectedByAuth: React.FunctionComponent<ProtectedByAuthProps> = ({
	children,
}) => {
	let history = useHistory();
	const { user, checkUserSession } = useContext(UserContext);

	useEffect(() => {
		console.log('fired');
		if (localStorage.getItem('authToken')) {
			checkUserSession();
			return;
		}

		if (!user) return history.push('/sign-in');
	}, [user, history, checkUserSession]);

	return <>{children}</>;
};

export default ProtectedByAuth;
