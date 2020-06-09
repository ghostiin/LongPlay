import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { togPlayerOn, setPlaylist, setCurrentIndex, setCurrentSong, setCurrentAlbum } from './store/action';
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
	currentAlbum,
	togPlayerOn,
	setPlaylist,
	setCurrentAlbum,
	setCurrentIndex,
	setCurrentSong,
	box
}) => {
	const audioRef = useRef();
	const [ boxIdx, setBoxIdx ] = useState(0);
	useEffect(() => {
		if (_.findIndex(box, (e) => e.playNow) !== -1) {
			const playNowId = _.findIndex(box, (e) => e.playNow);
			box[playNowId].playNow = false;
			setPlaylist(box[playNowId].songs);
			setCurrentAlbum(box[playNowId].album);
			setCurrentIndex(0);
			setBoxIdx(playNowId);
		}
	}, []);
	useEffect(
		() => {
			if (box) {
				if (box.length === 0) {
					setBoxIdx(0);
					togPlayerOn(false);
					setCurrentAlbum(null);
					setPlaylist([]);
					setCurrentIndex(-1);
					setCurrentSong(null);
					audioRef.current.src = '';
				} else if (currentAlbum && _.findIndex(box, (e) => e.album.id === currentAlbum.id) === -1) {
					let id = boxIdx;
					setPlaylist(box[id].songs);
					setCurrentAlbum(box[id].album);
					setCurrentIndex(0);
					setBoxIdx(id);
				}
			}
		},
		[ box.length ]
	);
	useEffect(
		() => {
			if (playList && playList.length) {
				setCurrentSong(playList[currentIndex]);

				audioRef.current.src = getSongAudio(playList[currentIndex].id);
				setBoxIdx(_.findIndex(box, (e) => e.album.id === currentAlbum.id));
				togPlayerOn(true);
				if (isPlayerOn) {
					setTimeout(() => {
						audioRef.current.play();
					});
				}
			} else if (box && box.length) {
				setPlaylist(box[0].songs);
				setCurrentAlbum(box[0].album);
				setCurrentIndex(0);
				setBoxIdx(0);
			}
		},
		[ currentIndex, playList ]
	);

	useEffect(
		() => {
			if (isPlayerOn && box.length) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		},
		[ isPlayerOn ]
	);

	const playLoop = () => {
		audioRef.current.currentTime = 0;
		togPlayerOn(true);
		audioRef.current.play();
	};
	const albumLoop = false;
	const playNext = () => {
		if (albumLoop || currentIndex + 1 !== playList.length) {
			playNextSong();
			return;
		}
		let id = _.findIndex(box, (e) => e.album.id === currentAlbum.id) + 1;
		if (id === box.length) id = 0;
		setPlaylist(box[id].songs);
		setCurrentAlbum(box[id].album);
		setCurrentIndex(0);
		setBoxIdx(id);
	};
	const playNextSong = () => {
		if (playList.length === 1) {
			playLoop();
			return;
		}
		let idx = currentIndex + 1;
		if (idx === playList.length) idx = 0;
		if (!isPlayerOn) togPlayerOn(true);
		setCurrentIndex(idx);
	};

	const playPrevSong = () => {
		if (playList.length === 1) {
			playLoop();
			return;
		}
		let idx = currentIndex - 1;
		if (idx < 0) idx = playList.length - 1;
		if (!isPlayerOn) togPlayerOn(true);
		setCurrentIndex(idx);
	};
	const onPlayEnd = () => {
		console.log('end');
		togPlayerOn(false);
		playNext();
	};
	const handleError = () => {
		if (isPlayerOn) {
			alert('err');
		}
	};

	const onPrevClick = () => {
		console.log('prev');
		playPrevSong();
	};

	const onNextClick = () => {
		console.log('next');
		playNext();
	};
	return (
		<React.Fragment>
			<PlayerStyle />
			<Wrapper>
				<SideWrapper>
					<SongList />
				</SideWrapper>
				<CDPlayer onPrevClick={onPrevClick} onNextClick={onNextClick} />
				<audio ref={audioRef} onEnded={onPlayEnd} onError={handleError} />
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
		currentSong: state.player.currentSong,
		currentAlbum: state.player.currentAlbum,
		box: _.values(state.box)
	};
};
export default connect(mapStateToProps, {
	togPlayerOn,
	setPlaylist,
	setCurrentIndex,
	setCurrentSong,
	setCurrentAlbum
})(Play);
