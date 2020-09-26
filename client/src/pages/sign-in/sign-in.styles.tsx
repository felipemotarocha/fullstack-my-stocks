import styled from 'styled-components';

export const Container = styled.div`
	height: calc(100% - 64px);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 450px;

	h2 {
		font-size: 2.2rem;
		font-weight: normal;
		margin-bottom: 1rem;
	}

	.MuiFormControl-root {
		width: 100%;

		&:nth-child(3) {
			margin: 1rem 0;
		}
	}

	.MuiButtonBase-root {
		width: 100%;
	}
`;
