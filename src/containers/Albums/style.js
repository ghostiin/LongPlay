import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: ${style.textColor};
	font-family: ${style.sansFont};
`;

const Caption = styled.div`
	font-size: 1.5rem;
	font-weight: 300;
	position: relative;
	width: 100%;
	text-align: center;
	&::after {
		content: "";
		background-color: ${style.subColor};
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		height: 1px;
	}
`;

const GridContainer = styled.div`
	/* itemNum*itemWidth+(itemNum-1)*gapWidth */
	width: 100%;
	/* to-do:responsively change padding */
	padding: 3rem ${({ Tablet }) => (Tablet ? '5rem' : '10rem')};
	display: grid;

	grid-template-rows: repeat(auto-fit, minmax(${({ Tablet }) => (Tablet ? '16rem' : '20rem')}, min-content));
	grid-template-columns: repeat(auto-fill, ${({ Tablet }) => (Tablet ? '12rem' : '14rem')});

	/* grid-row-gap: 3rem;
	grid-column-gap: 3rem; */

	/* for implicit grids */
	grid-auto-rows: ${({ Tablet }) => (Tablet ? '16rem' : '20rem')};

	/* align-items: center;
	justify-content: center; */
	align-content: center;
	justify-content: space-evenly;
`;

const GridItem = styled.div`
	padding: 0 0.5rem;

	img {
		width: 100%;
		/* box-shadow: ${style.boxShadow}; */
	}

	p {
		${style.noWrap};

		span {
			color: ${style.subColor};
		}
	}
`;

const SearchBox = styled.div`margin: 3rem 0;`;

export { Wrapper, GridContainer, GridItem, Caption, SearchBox };
