import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { Container, Content } from './sign-in.styles';
import { AxiosResponse } from 'axios';

export interface SignInPageProps {
	signInUser: (
		email: string,
		password: string
	) => Promise<void> | Promise<AxiosResponse<any>>;
	checkUserSession: () => Promise<void> | void;
}

const SignInPage: React.FunctionComponent<SignInPageProps> = ({
	signInUser,
	checkUserSession,
}) => {
	return (
		<Container>
			<Content>
				<h2>Sign in to your account</h2>
				<TextField id='email' label='E-mail' variant='outlined' />
				<TextField id='password' label='Password' variant='outlined' />
				<Button
					variant='contained'
					color='primary'
					onClick={() => {
						signInUser('felipe@mystocks.com', '1234567');
					}}
				>
					Sign In
				</Button>
			</Content>
		</Container>
	);
};

export default SignInPage;
