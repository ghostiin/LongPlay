import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Wrapper, Logo, NavBar, NavItem, SearchBox } from './style';
import logo from './logo.svg';
import SearchBar from '../SearchBar';

const MiniNav = () => {
	return (
		<Wrapper>
			<Logo>
				<span>
					<img src={logo} alt='Long Play Logo' />
				</span>
				LONG PLAY
			</Logo>
			<NavBar>
				<NavItem>
					<NavLink to='/vol' activeClassName='selected'>
						Vol
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/albums' activeClassName='selected'>
						Albums
					</NavLink>
				</NavItem>
			</NavBar>
			{/* <SearchBox>
				<SearchBar style={{ backgroundColor: '#755bb0' }} />
			</SearchBox> */}
		</Wrapper>
	);
};

export default MiniNav;
