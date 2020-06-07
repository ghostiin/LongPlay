import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { SecondStyle } from '../../theme/style';
import SearchBox from '../../components/SearchBox';
import { getAlbumsList, getNewestAlbumsList } from './store/action';
import downArrow from '../../assets/imgs/down-arrow.svg';
import Button from '../../components/UI/Button';
import AlbumList from '../../components/AlbumList';
import Loadingv1 from '../../components/UI/Loading';
import { HorizonLine as Hr } from '../../theme/style';

const Wrapper = styled.div`
	font-size: 1.6rem;
	text-align: center;
	margin-top: 7rem;
	padding-top: 5rem;
	background-color: ${({ theme }) => theme.colors.bgColor};
	position: relative;
`;

const Caption = styled.div`
	font-family: ${({ theme }) => theme.fonts.text.regular};
	color: ${({ theme }) => theme.colors.sub};
	letter-spacing: 0.2rem;
	margin-top: ${({ marginTop }) => marginTop || '6rem'};
	margin-bottom: ${({ marginBottom }) => marginBottom || '6rem'};
`;

const LinkButton = styled.div`
	position: fixed;
	bottom: 5rem;
	right: 5rem;
	display: flex;
	flex-direction: column;

	button {
		margin: 0.8rem;
	}
`;

const Search = ({ route, albumsList, newAlbumsList, searchLoading: isLoading, getAlbumsList, getNewestAlbumsList }) => {
	const [ term, setTerm ] = useState('');
	const inputEl = useRef();
	useEffect(() => {
		inputEl.current.focus();
		getNewestAlbumsList();
	}, []);

	const handleInput = (t) => {
		setTerm(t);
		if (!t) return;
		getAlbumsList(t);
	};

	const renderNewAlbumsList = () => {
		if (isLoading || !newAlbumsList) {
			return <Loadingv1 />;
		} else {
			return (
				<React.Fragment>
					<Caption marginTop="8rem" marginBottom="1rem">
						THE NEWEST 100
					</Caption>
					<Hr width="70%" />
					<AlbumList albums={newAlbumsList} parentPage="search" />
				</React.Fragment>
			);
		}
	};

	const renderSearchList = () => {
		if (!albumsList || albumsList.length === 0) {
			return (
				<Caption marginTop="8rem" marginBottom="1rem">
					No Result.
				</Caption>
			);
		} else {
			return (
				<React.Fragment>
					<Caption marginTop="8rem" marginBottom="1rem">
						ONLY SEARCH FOR ALBUMS
					</Caption>
					<Hr width="70%" />
					<AlbumList albums={albumsList} parentPage="search" />
				</React.Fragment>
			);
		}
	};
	return (
		<React.Fragment>
			<SecondStyle />
			{renderRoutes(route.routes)}
			<Wrapper>
				<img src={downArrow} alt="down-arrow" />

				<LinkButton>
					<Link to="/library">
						<Button>Back To Library</Button>
					</Link>
					<Link to="/box">
						<Button>Back To My Box</Button>
					</Link>
				</LinkButton>

				<SearchBox ref={inputEl} handleInput={handleInput} />

				{!term ? renderNewAlbumsList() : renderSearchList()}
			</Wrapper>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		albumsList: state.search.albumsList,
		searchLoading: state.search.loading,
		newAlbumsList: state.search.newAlbumsList
	};
};

export default connect(mapStateToProps, { getAlbumsList, getNewestAlbumsList })(Search);
