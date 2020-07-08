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
	/* margin: 0 0.5rem; */
	position: relative;
	
	.cover {
		width: 14rem;
		height:14rem;
		img {
			width:100%;
		}
		/* box-shadow: ${style.boxShadow}; */
	}

	.msk {
		position: absolute;
		top:0;
		left:0;
		width: 14rem;
		height:14rem;
		background-color: rgba(0, 0, 0, .5);
		opacity: 0;
		transition:all .2s;
		display:flex;
		justify-content:center;
		align-items:center;

		i {
			font-size:4rem;
			margin: 0 0.5rem;
			cursor: pointer;
		}
		
		&:hover {
			opacity:1;
		}
	}
	a:hover {
    text-decoration: underline;
    }

	p {
		${style.noWrap};
		margin-top: 0.5rem;
		span {
			color: ${style.subColor};
		}

		
	}
`;

const Logo = styled.div`
	font-family: ${style.logoFont};
	font-size: 2rem;
	span {
		margin-right: 2.5rem;
	}
`;

const NavBar = styled.div`
	text-align: center;
	color: ${style.textColor};
	font-size: 1rem;
	font-family: ${style.sansFont};
	a {
		text-decoration: none;
		color: ${style.textColor};
		opacity: 0.5;
	}

	.selected {
		position: relative;
		opacity: 1;
		font-size: 1.5rem;
		transition: all .4s;
		&:after {
			content: '♫';
			font-size: 1rem;
			color: ${style.textColor};
			position: absolute;
			top: 120%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

const NavItem = styled.div`
	display: inline-block;
	position: relative;
	margin-right: 4rem;

	&:not(:last-child):after {
		content: "";
		background-color: ${style.textColor};
		position: absolute;
		width: 3rem;
		height: 1px;
		left: 125%;
		top: 50%;
	}
`;

const BackTop = styled.div`
	position: fixed;
	right: 2rem;
	bottom: 2rem;
	cursor: pointer;
`;

const SearchBox = styled.div`text-align: center;`;

export { Wrapper, GridContainer, GridItem, Caption, SearchBox, Logo, NavBar, NavItem, BackTop };
