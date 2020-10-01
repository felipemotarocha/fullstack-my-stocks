import styled from 'styled-components';

export const Container = styled.div`
	max-width: 30vw;
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
