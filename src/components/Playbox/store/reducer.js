import produce from 'immer';
import _ from 'lodash';
import { ADD_ALBUM_TO_BOX, REMOVE_ALBUM_FROM_BOX } from './constants';

const defaultState = {
	boxAlbumsList: {},
	boxAlbumsId: []
};

const reducer = (state = defaultState, action) =>
	produce(state, (draftState) => {
		switch (action.type) {
			case ADD_ALBUM_TO_BOX: {
				const { id } = action.payload.album;
				draftState.boxAlbumsId.push(id);
				draftState.boxAlbumsList[id] = action.payload;
				return draftState;
			}
			case REMOVE_ALBUM_FROM_BOX:
				draftState.boxAlbumsId = _.filter(draftState.boxAlbumsId, (n) => {
					// console.log(n, action.payload);
					return n.toString() !== action.payload;
				});
				delete draftState.boxAlbumsList[action.payload];
				return draftState;
			default:
				return draftState;
		}
	});

export default reducer;
