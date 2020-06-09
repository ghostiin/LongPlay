import React, { useEffect } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentAlbum, setPlaylist, setCurrentIndex } from '../../containers/playPage/store/action';
import UpArrow from '../../components/UI/UpArrow';
import HScroll from '../../components/HScroll';
import Button from '../../components/UI/Button';
const Wrapper = styled.div`
	position: fixed;
	height: 20rem;
	width: 100vw;
	bottom: 0;
	left: 0;
	background-color: ${({ theme }) => theme.colors.dark};
	font-size: 1.6rem;
	text-align: center;
	padding: 2rem;
`;
const InitWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
	font-family: ${({ theme }) => theme.fonts.text.regular};
`;

const LinkButton = styled(Button)`
	margin-top: 1.5rem;
`;
const BoxBar = ({ box, setCurrentAlbum, setPlaylist, setCurrentIndex }) => {
	const onClick = (album, songs) => {
		setCurrentAlbum(album);
		setPlaylist(songs);
		setCurrentIndex(0);
	};
	const renderInit = () => {
		return (
			<InitWrapper>
				Your Box is Empty...
				<Link to="/library">
					<LinkButton>Pick Your First Album!</LinkButton>
				</Link>
			</InitWrapper>
		);
	};
	const renderList = () => {
		return <HScroll list={box} onClick={onClick} />;
	};
	return (
		<Wrapper>
			<UpArrow />
			{box && box.length ? renderList() : renderInit()}
		</Wrapper>
	);
};

const mapStateToProp = (state) => {
	return {
		box: _.values(state.box)
	};
};

export default connect(mapStateToProp, { setCurrentAlbum, setPlaylist, setCurrentIndex })(BoxBar);
