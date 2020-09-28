import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { Container, Content } from './sign-in.styles';
import { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';

export interface SignInPageProps {
	signInUser: (
		email: string,
		password: string
	) => Promise<void> | Promise<AxiosResponse<any>>;
	checkUserSession: () => Promise<boolean> | void;
}

const SignInPage: React.FunctionComponent<SignInPageProps> = ({
	signInUser,
	checkUserSession,
}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	useEffect(() => {
		const isLoggedIn = async () => {
			const currentUser = await checkUserSession();

			if (currentUser) history.push('/');
		};

		isLoggedIn();
		// eslint-disable-next-line
	}, [history]);

	const handleSubmit = async () => {
		try {
			await signInUser(email, password);
			setEmail('');
			setPassword('');
			history.push('/');
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<Container>
			<Content>
				<h2>Sign in to your account</h2>
				<TextField
					id='email'
					label='E-mail'
					variant='outlined'
					type='email'
					value={email}
					onChange={({ target: { value } }) => setEmail(value)}
				/>
				<TextField
					id='password'
					label='Password'
					variant='outlined'
					type='password'
					value={password}
					onChange={({ target: { value } }) => setPassword(value)}
				/>
				<Button
					variant='contained'
					color='primary'
					onClick={handleSubmit}
				>
					Sign In
				</Button>
			</Content>
		</Container>
	);
};

export default SignInPage;
