import styled from 'styled-components/macro';
import style from '../../theme';

// 设置全屏背景色
const Wrapper = styled.div`
	background: linear-gradient(${style.bgColorLight}, ${style.bgColorDark});
	width: 100vw;
	height: 100vh;
`;

const Header = styled.div`
	display: flex;

	color: ${style.textColor};
	.center {
		flex: 1;
		text-align: center;
		padding: 3rem 0 1rem 0;
	}
	.left,
	.right {
		padding: 4rem 0;
	}
	.left {
		padding-left: 4rem;
	}
	.right {
		padding-right: 4rem;
	}
`;
const Logo = styled.span`
	font-size: ${({ tablet }) => (tablet ? '3rem' : '5rem')};
	font-family: ${style.logoFont};

	span {
		font-family: ${style.specialFont};
		font-size: 1rem;
		display: block;
		transform: translate(8rem, -1.5rem);
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

export { Wrapper, Header, Logo, NavBar, NavItem };
