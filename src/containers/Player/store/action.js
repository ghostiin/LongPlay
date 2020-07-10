import {
	SET_PLAYING_STATE,
	SET_PLAYLIST,
	SET_DEFAULT_LIST,
	SET_PLAY_MODE,
	SET_CURRENT_IDX,
	SET_CURRENT_SONG
} from './constants';
import { getAlbumDetail } from '../../../api/requests';

const setPlayingState = (state) => ({
	type: SET_PLAYING_STATE,
	payload: state
});

const setPlaylist = (songlist) => ({
	type: SET_PLAYLIST,
	payload: songlist
});

const setDefaultlist = (defaultlist) => ({
	type: SET_DEFAULT_LIST,
	payload: defaultlist
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

const playNow = (id) => async (dispatch) => {
	const res = await getAlbumDetail(id);
	dispatch({
		type: SET_PLAYLIST,
		payload: res.songs
	});
	dispatch({
		type: SET_DEFAULT_LIST,
		payload: res.songs
	});
};

export { playNow, setPlayingState, setPlaylist, setDefaultlist, setPlayMode, setCurrentIdx, setCurrentSong };
