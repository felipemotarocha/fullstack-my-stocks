import styled from 'styled-components';

interface ChangePercentProps {
	changePercent: number;
}

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 200px;
	min-width: 200px;
	max-width: 200px;
	border-radius: 10px;
	background: #1a1a1a;
	margin-top: 0.5rem;
	margin-right: 0.8rem;
	margin-bottom: 0.5rem;
	box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`;

export const Header = styled.div<ChangePercentProps>`
	display: flex;
	flex-flow: wrap;
	flex-direction: column;
	padding: 20px;
	overflow: hidden;

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
