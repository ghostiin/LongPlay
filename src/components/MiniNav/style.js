import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	width: 100%;
	background-color: ${style.secondaryColor};
	display: flex;
	flex-direction: row;
	padding: 2rem 6rem;
	div {
		flex: 1;
	}
`;

const SearchBox = styled.div`text-align: center;`;

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

// eslint-disable-next-line import/prefer-default-export
export { Wrapper, Logo, NavBar, NavItem, SearchBox };
