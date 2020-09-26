import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { Container, Content } from './sign-in.styles';

export interface SignInPageProps {}

const SignInPage: React.FunctionComponent<SignInPageProps> = () => {
	return (
		<Container>
			<Content>
				<h2>Sign in to your account</h2>
				<TextField id='email' label='E-mail' variant='outlined' />
				<TextField id='password' label='Password' variant='outlined' />
				<Button variant='contained' color='primary'>
					Sign In
				</Button>
			</Content>
		</Container>
	);
};

export default SignInPage;
