import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { togPlayerOn, setPlaylist, setCurrentIndex, setCurrentSong } from './store/action';
import { getSongAudio } from '../../api/request';
import styled from 'styled-components';
import { PlayerStyle } from '../../theme/style';
import BoxBar from './BoxBar';
import CDPlayer from '../../components/CDPlayer';
import SongList from './SongList';
const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
const SideWrapper = styled.div`flex-grow: 1;`;

const Play = ({
	isPlayerOn,
	playList,
	currentIndex,
	currentSong,
	togPlayerOn,
	setPlaylist,
	setCurrentIndex,
	setCurrentSong
}) => {
	const audioRef = useRef();
	useEffect(
		() => {
			setCurrentSong(playList[currentIndex]);
			audioRef.current.src = getSongAudio(playList[currentIndex].id);
			setTimeout(() => {
				audioRef.current.play();
			});
			togPlayerOn(true);
		},
		[ currentIndex ]
	);

	useEffect(
		() => {
			if (isPlayerOn) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		},
		[ isPlayerOn ]
	);

	return (
		<React.Fragment>
			<PlayerStyle />
			<Wrapper>
				<SideWrapper>
					<SongList />
				</SideWrapper>
				<CDPlayer />
				<audio ref={audioRef} />
				<SideWrapper>
					<SongList />
				</SideWrapper>
			</Wrapper>
			<BoxBar />
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		isPlayerOn: state.player.isPlayerOn,
		playList: state.player.playList,
		currentIndex: state.player.currentIndex,
		currentSong: state.player.currentSong
	};
};
export default connect(mapStateToProps, {
	togPlayerOn,
	setPlaylist,
	setCurrentIndex,
	setCurrentSong
})(Play);
