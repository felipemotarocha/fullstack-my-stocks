import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 64px;

	background: #1a1a1a;
	color: #eee;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 100px;
`;

export const Logo = styled.h1`
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 1px;

	&:hover {
		cursor: pointer;
	}
`;

export const Buttons = styled.div`
	display: flex;
	align-items: center;
`;
