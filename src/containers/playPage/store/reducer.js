import { SET_PLAYER_ON, SET_PLAYLIST, SET_CURRENT_INDEX, SET_CURRENT_SONG, SET_CURRENT_ALBUM } from './actionTypes';

const defaultState = {
	isPlayerOn: false,
	currentAlbum: null,
	playList: [],
	currentIndex: -1,
	currentSong: {}
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case SET_CURRENT_ALBUM:
			return { ...state, currentAlbum: action.payload };
		case SET_PLAYLIST:
			return { ...state, playList: action.payload };
		case SET_PLAYER_ON:
			return { ...state, isPlayerOn: action.payload };
		case SET_CURRENT_INDEX:
			return { ...state, currentIndex: action.payload };
		case SET_CURRENT_SONG:
			return { ...state, currentSong: action.payload };
		default:
			return state;
	}
};
