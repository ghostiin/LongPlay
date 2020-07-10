import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { Wrapper, Header, Logo, NavBar, NavItem } from './style';
import Button from '../../UI/Button';
import Media from '../../components/MediaQueries';
import Player from '../Player';
import logo from './logo.svg';

function Home({ route }) {
	return (
		<Wrapper>
			<Header>
				<div className='left'>
					<img src={logo} alt='Long Play Logo' />
				</div>
				<Media.Desktop>
					<Logo className='center'>
						LONG PLAY
						<span>good music to bad days</span>
					</Logo>
				</Media.Desktop>
				<Media.Tablet>
					<Logo className='center' tablet>
						LONG PLAY
					</Logo>
				</Media.Tablet>
				<div className='right'>
					<Link to='/zen'>
						<Button outlined>
							<i className='iconfont'>&#xe637;</i>
							ZEN MODE
						</Button>
					</Link>
					<Link to='/about'>
						<div className='about home-btn'>
							<i className='iconfont'>&#xe6de;</i>
						</div>
					</Link>
				</div>
			</Header>
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
			{renderRoutes(route.routes)}
			<Player />
		</Wrapper>
	);
}

Home.propTypes = {
	route: PropTypes.shape({
		routes: PropTypes.arrayOf(PropTypes.object)
	})
};

Home.defaultProps = {
	route: null
};

export default React.memo(Home);
// export default Home;
