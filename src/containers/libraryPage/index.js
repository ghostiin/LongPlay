import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { getRecommendList } from './store/action';

import { SecondStyle } from '../../theme/style';

import DownArrow from '../../components/UI/DownArrow';
import { HorizonLine as Hr } from '../../theme/style';
import SearchBox from '../../components/SearchBox';
import Slider from '../../components/Slider';
import AlbumList from '../../components/AlbumList';

import Button from '../../components/UI/Button';
import Loadingv1 from '../../components/UI/Loading';

const Wrapper = styled.div`
	font-size: 1.6rem;
	text-align: center;
	margin-top: 7rem;
	padding-top: 5rem;
	background-color: ${({ theme }) => theme.colors.bgColor};
`;

const Caption = styled.div`
	font-family: ${({ theme }) => theme.fonts.text.regular};
	color: ${({ theme }) => theme.colors.sub};
	letter-spacing: 0.2rem;
	margin-top: ${({ marginTop }) => marginTop || '6rem'};
	margin-bottom: ${({ marginBottom }) => marginBottom || '6rem'};
`;

const LinkButton = styled(Button)`
	position: fixed;
	bottom:5rem;
	right:5rem;
`;

const Library = ({ route, albums, loading: isLoading, getRecommendList }) => {
	const [ term, setTerm ] = useState('');
	const inputEl = useRef();
	const handleTerm = (t) => {
		setTerm(t);
	};
	useEffect(() => {
		getRecommendList();
	}, []);
	return (
		<React.Fragment>
			<SecondStyle />
			{renderRoutes(route.routes)}
			<Wrapper>
				<DownArrow />
				<Link to="/box">
					<LinkButton>Back To My Box</LinkButton>
				</Link>
				<Link to="/search">
					<SearchBox ref={inputEl} handleInput={handleTerm} />
				</Link>
				<Hr />
				<Caption>VOL.001 SUMMER MIRAGE</Caption>
				<Slider />
				<Caption marginTop="8rem" marginBottom="1rem">
					GOOD MUSIC TO BAD DAYS (●'◡'●)
				</Caption>
				<Hr width="70%" />

				{/* {isLoading ? <Loadingv1 /> : <AlbumList albums={albums} parentPage="library" />} */}
				{!albums ? <Loadingv1 /> : <AlbumList albums={albums} parentPage="library" />}
			</Wrapper>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		albums: state.library.albumsList,
		loading: state.library.loading
	};
};

export default connect(mapStateToProps, { getRecommendList })(Library);
