import React from 'react';
import Header from './Header';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

const Wrapper = styled.div`margin: 5rem 8rem;`;

const Home = ({ route }) => {
	return (
		<React.Fragment>
			<Wrapper>
				<Header />
				{renderRoutes(route.routes)}
			</Wrapper>
		</React.Fragment>
	);
};

export default Home;
