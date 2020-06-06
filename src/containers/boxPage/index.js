import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { SecondStyle } from '../../theme/style';
import downArrow from '../../assets/imgs/down-arrow.svg';
import AlbumList from '../../components/AlbumList';
import Button from '../../components/UI/Button';
import Loadingv1 from '../../components/UI/Loading';

const Wrapper = styled.div`
	font-size: 1.6rem;
	text-align: center;
	margin-top: 7rem;
	padding-top: 5rem;
	background-color: ${({ theme }) => theme.colors.bgColor};
	position: relative;
`;

const LinkButton = styled(Button)`
	position: absolute;
	top:5rem;
	right:8rem;
`;

const Box = ({ box, route }) => {
	const albums = _.values(box);
	return (
		<React.Fragment>
			<SecondStyle />
			{renderRoutes(route.routes)}
			<Wrapper>
				<img src={downArrow} alt="down-arrow" />
				<Link to="/library">
					<LinkButton>Pick Fav Albums</LinkButton>
				</Link>
				<AlbumList albums={albums} parentPage="box" />
			</Wrapper>
		</React.Fragment>
	);
};

const mapStateToState = (state) => {
	return { box: state.box };
};

export default connect(mapStateToState)(Box);
