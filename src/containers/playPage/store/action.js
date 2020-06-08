import { SET_PLAYER_ON, SET_PLAYLIST, SET_CURRENT_INDEX, SET_CURRENT_SONG, SET_CURRENT_ALBUM } from './actionTypes';

export const togPlayerOn = (payload) => ({
	type: SET_PLAYER_ON,
	payload
});

export const setCurrentAlbum = (payload) => ({
	type: SET_CURRENT_ALBUM,
	payload
});

export const setPlaylist = (payload) => ({
	type: SET_PLAYLIST,
	payload
});

export const setCurrentIndex = (payload) => ({
	type: SET_CURRENT_INDEX,
	payload
});

export const setCurrentSong = (payload) => ({
	type: SET_CURRENT_SONG,
	payload
});
