import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/imgs/TITLE-LOGO.svg';
import navblock from '../assets/imgs/nav-block.svg';
import { OriginWrapper } from '../theme/style';
const Wrapper = styled(OriginWrapper)`
	display: flex;
	justify-content: space-between;
	font-size: 1.6rem;
	font-family: ${({ theme }) => theme.fonts.text.regular};
`;
const Nav = styled.div`
	ul li {
		display: inline-block;
		text-transform: uppercase;
		position: relative;
		margin-right: 4rem;
		vertical-align: middle;
		a {
			color: ${({ theme }) => theme.colors.sub};
		}
		&:after {
			content: "";
			background-color: ${({ theme }) => theme.colors.sub};
			position: absolute;
			width: 3rem;
			height: 0.1rem;
			top: 50%;
			left: 110%;
		}
	}
	img {
		display: inline-block;
		vertical-align: middle;
	}
`;
const activeClassName = 'nav-item-active';
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {

	color: ${({ theme }) => theme.colors.text};
	position: relative;

	&:after {
		content: '♫';

		color: ${({ theme }) => theme.colors.text};
		position: absolute;
		top:150%;
		left:50%;
		transform:translateX(-50%)
	}
  }
`;
const Header = () => {
	return (
		<Wrapper>
			<div>
				<img src={logo} alt="Long Play" />
			</div>
			<Nav>
				<ul>
					<li>
						<StyledNavLink to="/intro">intro</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to="/play">play</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to="/library">library</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to="/box">mybox</StyledNavLink>
					</li>

					<img src={navblock} alt="Long Play" />
				</ul>
			</Nav>
		</Wrapper>
	);
};

export default Header;
