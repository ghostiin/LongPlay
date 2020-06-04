import React from 'react';
import Header from './Header';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

const Home = ({ route }) => {
	return (
		<React.Fragment>
			<Header />
			{renderRoutes(route.routes)}
		</React.Fragment>
	);
};

export default Home;
