import _ from 'lodash';
import { ADD_ALBUM_TO_BOX, REMOVE_ALBUM_FROM_BOX } from './action';

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_ALBUM_TO_BOX:
			return { ...state, [action.payload.album.id]: action.payload };
		case REMOVE_ALBUM_FROM_BOX:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
