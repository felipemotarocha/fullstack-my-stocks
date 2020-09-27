import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user/user.context';

import SignInPage from './sign-in.page';

export interface SignInContainerProps {}

const SignInContainer: React.FunctionComponent<SignInContainerProps> = () => {
	const { changeUser, checkUserSession } = useContext(UserContext);
	const signInUser = async (email: string, password: string) => {
		const {
			data: { user, token },
		} = await axios.post('http://localhost:5000/users/login', {
			email,
			password,
		});

		changeUser(user);
		localStorage.setItem('authToken', token);
	};

	return (
		<SignInPage
			signInUser={signInUser}
			checkUserSession={checkUserSession}
		/>
	);
};

export default SignInContainer;
