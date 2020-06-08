import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { SecondStyle } from '../../theme/style';
import DownArrow from '../../components/UI/DownArrow';
import AlbumList from '../../components/AlbumList';
import Button from '../../components/UI/Button';

const Wrapper = styled.div`
	font-size: 1.6rem;
	text-align: center;
	margin-top: 7rem;
	padding-top: 5rem;
	background-color: ${({ theme }) => theme.colors.bgColor};
	position: relative;
`;
const InitialWrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 30rem;
	transform: translateX(-50%);
	font-size: 3rem;
	color: ${({ theme }) => theme.colors.sub};
`;

const LinkButton = styled(Button)`
	position: fixed;
	bottom:5rem;
	right:5rem;
`;

const Box = ({ box, route }) => {
	const albums = _.map(_.values(box), 'album');
	const Initial = () => {
		return <InitialWrapper>Add Your First Album ↘</InitialWrapper>;
	};

	const BoxIndex = () => {
		return (
			<React.Fragment>
				<AlbumList albums={albums} parentPage="box" />
			</React.Fragment>
		);
	};
	return (
		<React.Fragment>
			<SecondStyle />
			{renderRoutes(route.routes)}
			<Wrapper>
				<DownArrow />
				<Link to="/library">
					<LinkButton>Pick Fav Albums</LinkButton>
				</Link>
				{albums.length ? <BoxIndex /> : <Initial />}
			</Wrapper>
		</React.Fragment>
	);
};

const mapStateToState = (state) => {
	return { box: state.box };
};

export default connect(mapStateToState)(Box);
