import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCurrentIndex } from './store/action';
import VScroll from '../../components/VScroll';

const VScrollWrapper = styled.div`
	margin-left: 10rem;
	font-size: 1.6rem;
	font-family: ${({ theme }) => theme.fonts.text.regular};
`;

const Title = styled.div`
	margin-left: 10rem;
	font-size: 5rem;
	font-family: ${({ theme }) => theme.fonts.main.bold};
	line-height: 6rem;

	span {
		opacity: 0.5;
		font-size: 1.6rem;
	}
	.singer {
		font-size: 1.6rem;
	}
`;

const SongList = ({ playList, currentIndex, setCurrentIndex, currentAlbum }) => {
	const onItemClick = (id) => {
		setCurrentIndex(id);
	};
	const renderList = () => {
		return (
			<VScrollWrapper>
				<VScroll list={playList} currentIndex={currentIndex} onItemClick={onItemClick} />
			</VScrollWrapper>
		);
	};
	return <React.Fragment>{renderList()}</React.Fragment>;
};

const mapStateToProps = (state) => {
	return {
		currentAlbum: state.player.currentAlbum,
		playList: state.player.playList,
		currentIndex: state.player.currentIndex
	};
};
export default connect(mapStateToProps, { setCurrentIndex })(SongList);
