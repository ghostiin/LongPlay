import styled from 'styled-components/macro';
import style from '../../../theme';
import default200 from './default200.svg';

const Wrapper = styled.div`
	color: ${style.textColor};
	font-family: ${style.sansFont};
	width: ${({ width }) => width || '50rem'};
	height: 37.5rem;
	/* url(${({ bgImg }) => bgImg}) */
	background-image: linear-gradient(rgba(73, 51, 126,0.8), rgba(73, 51, 126,0.8)),  
					  url(${({ bgImg }) => bgImg}), url(${default200});
	background-repeat:no-repeat;
	background-position: right;
	background-size: 37.5rem;
	background-color: ${style.darkColor};
	border-radius: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const AlbumInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;

	padding-left: 4rem;
	.cover {
		margin: 1rem;
		width: 12.5rem;
		height: 12.5rem;

		img {
			width: 100%;
			box-shadow: ${style.boxShadow};
		}
	}

	.category {
		color: ${style.subColor};
		font-weight: 500;
	}
	.name {
		font-weight: 600;
		font-size: 1.8rem;
	}
	.singer {
		${style.noWrap};
		span {
			color: ${style.subColor};
		}
	}

	.state {
		margin: 1rem 0;
		i {
			font-size: 2rem;
			margin-right: 1rem;
			cursor: pointer;
		}
	}
`;

const SongInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	padding-top: 3rem;
	padding-right: 4rem;
	overflow: hidden;
	text-align: right;
	.info {
		font-size: 2rem;
	}
	span {
		color: ${style.subColor};
		font-weight: 600;
		font-size: 1rem;
	}
`;
const Content = styled.div`
	.item {
		height: max-content;
		margin: 1rem;
	}
	padding-bottom: 2rem;
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper, AlbumInfo, SongInfo, Content };
