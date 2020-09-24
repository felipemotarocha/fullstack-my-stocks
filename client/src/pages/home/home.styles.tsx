import styled from 'styled-components';

export const Container = styled.div`
	height: calc(100% - 74px);
	width: 100%;

	display: flex;
	background: ${(props) => props.theme.secondary};
	color: #eee;
	padding: 30px 100px;
`;
