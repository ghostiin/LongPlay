import produce from 'immer';

import {
	SET_PLAYING_STATE,
	SET_PLAYLIST,
	SET_DEFAULT_LIST,
	SET_PLAY_MODE,
	SET_CURRENT_IDX,
	SET_CURRENT_SONG
} from './constants';

const defaultState = {
	playing: false,
	playList: [],
	defaultList: [],
	mode: {
		repeat: false,
		shuffle: false,
		loop: false,
		zen: true
	},
	currentIdx: -1,
	currentSong: {}
};

const reducer = (state = defaultState, action) =>
	produce(state, (draftState) => {
		switch (action.type) {
			case SET_PLAYING_STATE:
				draftState.playing = action.payload;
				return draftState;
			case SET_PLAYLIST:
				draftState.playList = action.payload;
				return draftState;
			case SET_DEFAULT_LIST:
				draftState.defaultList = action.payload;
				return draftState;
			case SET_PLAY_MODE:
				draftState.mode = { ...draftState.mode, ...action.payload };
				return draftState;
			case SET_CURRENT_IDX:
				draftState.currentIdx = action.payload;
				return draftState;
			case SET_CURRENT_SONG:
				draftState.currentSong = action.payload;
				return draftState;
			default:
				return draftState;
		}
	});

export default reducer;
