import { getAlbumDetail } from '../../../api/request';

export const ADD_ALBUM_TO_BOX = 'ADD_ALBUM';
export const REMOVE_ALBUM_FROM_BOX = 'REMOVE_ALBUM';

export const addAlbumToBox = (id) => async (dispatch) => {
	const res = await getAlbumDetail(id);
	dispatch({
		type: ADD_ALBUM_TO_BOX,
		payload: res
	});
};

export const removeAlbumFromBox = (id) => {
	return {
		type: REMOVE_ALBUM_FROM_BOX,
		payload: id
	};
};
