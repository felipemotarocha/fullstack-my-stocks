import styled from 'styled-components';

interface ChangeProps {
	change: number;
}

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 180px;
	min-width: 180px;
	border-radius: 10px;
	background: ${(props) => props.theme.primary};
`;

export const Header = styled.div<ChangeProps>`
	display: flex;
	flex-flow: wrap;
	flex-direction: column;
	padding: 20px;

	border-bottom: 2px solid
		${({ change }) => (change > 0 ? '#32CD32' : '#FF0000')};

	h2 {
		font-weight: 400;
		font-size: 2.8rem;
		letter-spacing: 2px;
	}

	h3 {
		font-weight: 100;
		font-size: 1.5rem;
		margin-top: -0.4rem;
		line-height: 1.5rem;
	}
`;

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
`;

export const Change = styled.div<ChangeProps>`
	color: ${({ change }) => (change > 0 ? '#32CD32' : 'red')};
`;
