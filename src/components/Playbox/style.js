import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	color: ${style.textColor};
	background-color: ${style.darkColor};
	z-index: 101;
	width: 100%;
	height: 100%;
	border-radius: 1.5rem;
	font-family: ${style.sansFont};
`;
const Content = styled.div`
	/* itemNum*itemWidth+(itemNum-1)*gapWidth */
	width: 100%;
	/* to-do:responsively change padding */
	padding: 5vw;
	display: grid;

	grid-template-rows: repeat(auto-fit, minmax(13rem, min-content));
	grid-template-columns: repeat(auto-fill, minmax(8vw, 9rem));
	grid-column-gap: 1.5rem;
	grid-auto-rows: 13rem;
	align-content: center;
	justify-content: space-evenly;
`;
const GridItem = styled.div`
	/* margin: 0 0.5rem; */
	position: relative;

	.cover {
		width: 100%;
	}

	.msk {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding-bottom: 100%;
		height: 0;
		opacity: 0;
		background-color: rgba(0, 0, 0, .5);
		transition: all .2s;
		text-align: center;

		i {
			font-size: 3rem;
			margin: 0 0.5rem;
			cursor: pointer;

			display: inline-block;
			transform: translateY(100%);
		}

		&:hover {
			opacity: 1;
		}
	}
	a:hover {
		text-decoration: underline;
	}

	p {
		${style.noWrap};

		span {
			color: ${style.subColor};
		}
	}
`;

const Info = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	color: ${style.subColor};
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper, GridItem, Content, Info };
