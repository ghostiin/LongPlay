import React from 'react';
import { connect } from 'react-redux';
import { togPlayerOn, setPlaylist, setCurrentIndex, setCurrentSong } from './store/action';
import { PlayerStyle } from '../../theme/style';
import BoxBar from './BoxBar';

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
	return (
		<React.Fragment>
			<PlayerStyle />
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
export default connect(mapStateToProps, { togPlayerOn, setPlaylist, setCurrentIndex, setCurrentSong })(Play);
