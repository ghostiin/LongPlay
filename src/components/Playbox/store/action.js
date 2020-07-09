import { ADD_ALBUM_TO_BOX, REMOVE_ALBUM_FROM_BOX } from './constants';
import { getAlbumDetail } from '../../../api/requests';

const addAlbumToBox = (id) => async (dispatch) => {
	const res = await getAlbumDetail(id);
	dispatch({
		type: ADD_ALBUM_TO_BOX,
		payload: res
	});
};

// album id
const removeAlbumFromBox = (id) => (dispatch) => {
	dispatch({
		type: REMOVE_ALBUM_FROM_BOX,
		payload: id
	});
};

export { addAlbumToBox, removeAlbumFromBox };
