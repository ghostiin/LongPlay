import { SET_PLAYER_ON, SET_PLAYLIST, SET_CURRENT_INDEX, SET_CURRENT_SONG } from './actionTypes';

const defaultState = {
	isPlayerOn: false,
	playList: [],
	currentIndex: -1,
	currentSong: {}
};

export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
