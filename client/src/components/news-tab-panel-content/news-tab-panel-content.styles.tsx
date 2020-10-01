import styled from 'styled-components';

type NewsImageProps = {
	src: string;
};

export const Container = styled.div`
	width: 100%;
	height: 720px;
	overflow-y: scroll;
	color: #eee;
	padding: 0 1rem;
`;

export const News = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	flex-flow: nowrap;
	flex-direction: column;

	h2 {
		font-size: 1.2rem;
		margin: 0.7rem 0;
		font-weight: 500;
	}

	&:nth-child(even) {
		margin: 1.5rem 0;
	}
`;

export const NewsImage = styled.div<NewsImageProps>`
	height: 100%;
	width: 100%;
	background: url(${({ src }) => src}) center center/cover;
	border-radius: 10px;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.77);
`;
