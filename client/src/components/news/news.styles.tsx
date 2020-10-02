import styled from 'styled-components';

export const Container = styled.div`
	min-width: 28vw;
	max-width: 28vw;
	background: #1a1a1a;
	border-radius: 10px;

	display: flex;
	justify-content: center;

	color: #1a1a1a;

	.MuiAppBar-colorDefault {
		background-color: #1a1a1a;
		color: #eee;
	}

	.MuiTypography-root,
	.MuiTab-textColorPrimary.Mui-selected,
	.MuiTab-textColorPrimary {
		color: #eee;
	}
`;
