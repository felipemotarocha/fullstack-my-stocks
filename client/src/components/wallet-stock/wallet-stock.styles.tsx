import styled from 'styled-components';

interface ChangePercentProps {
	changePercent: number;
}

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 180px;
	min-width: 180px;
	border-radius: 10px;
	background: #090909;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);

	&:nth-child(even) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`;

export const Header = styled.div<ChangePercentProps>`
	display: flex;
	flex-flow: wrap;
	flex-direction: column;
	padding: 20px;

	border-bottom: 2px solid
		${({ changePercent }) => (changePercent > 0 ? '#32CD32' : '#FF0000')};

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

export const Change = styled.div<ChangePercentProps>`
	color: ${({ changePercent }) => (changePercent > 0 ? '#32CD32' : 'red')};
`;
