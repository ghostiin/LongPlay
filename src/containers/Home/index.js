import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Wrapper, NavBar, NavItem } from './style';

import Player from '../Player';
import Header from './Header';

function Home({ route }) {
	return (
		<Wrapper>
			<Header />
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
