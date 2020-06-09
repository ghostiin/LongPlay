import { getAlbumDetail } from '../../../api/request';
import history from '../../../history';
export const ADD_ALBUM_TO_BOX = 'ADD_ALBUM';
export const REMOVE_ALBUM_FROM_BOX = 'REMOVE_ALBUM';
export const SET_IMMEDIA_PLAY = 'SET_IMMEDIA_PLAY';

export const addAlbumToBox = (id, redirect = false) => async (dispatch) => {
	const res = await getAlbumDetail(id);
	if (redirect) {
		res.playNow = true;

		dispatch({
			type: ADD_ALBUM_TO_BOX,
			payload: res
		});
		history.push('/play');
	} else {
		res.playNow = false;
		dispatch({
			type: ADD_ALBUM_TO_BOX,
			payload: res
		});
	}
};

export const removeAlbumFromBox = (id) => {
	return {
		type: REMOVE_ALBUM_FROM_BOX,
		payload: id
	};
};
