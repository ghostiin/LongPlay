import {
	SET_PLAYING_STATE,
	SET_PLAYLIST,
	SET_SHUFFLE_LIST,
	SET_PLAY_MODE,
	SET_CURRENT_IDX,
	SET_CURRENT_SONG
} from './constants';

const setPlayingState = (state) => ({
	type: SET_PLAYING_STATE,
	payload: state
});

const setPlaylist = (songlist) => ({
	type: SET_PLAYLIST,
	payload: songlist
});

const setShufflelist = (shufflelist) => ({
	type: SET_SHUFFLE_LIST,
	payload: shufflelist
});

const setPlayMode = (mode) => ({
	type: SET_PLAY_MODE,
	payload: mode
});

const setCurrentIdx = (idx) => ({
	type: SET_CURRENT_IDX,
	payload: idx
});

const setCurrentSong = (song) => ({
	type: SET_CURRENT_SONG,
	payload: song
});

export { setPlayingState, setPlaylist, setShufflelist, setPlayMode, setCurrentIdx, setCurrentSong };
