import produce from 'immer';
import { GET_NEW_ALBUMS_LIST, SEARCH_ALBUMS, ENTER_LOADING, SEARCH_LOADING } from './constants';

// albumDetail 直接从 newAlbumsList[id]中取
const defaultState = {
	newAlbumsList: {
		// [id]:{
		//     id: ...
		//     name: ...
		//     ...
		// }
	},
	// index -> albums id
	newAlbumsId: [],
	searchAlbumsList: {
		// [id]:{
		//     id: ...
		//     name: ...
		//     ...
		// }
	},
	// index -> albums id
	searchAlbumsId: [],
	enterLoading: true,
	searchLoading: true
};

const reducer = (state = defaultState, action) =>
	produce(state, (draftState) => {
		switch (action.type) {
			case GET_NEW_ALBUMS_LIST:
				draftState.newAlbumsList = action.payload.entities.albums;
				draftState.newAlbumsId = action.payload.result.albums;
				return draftState;
			case SEARCH_ALBUMS:
				// to-do
				draftState.searchAlbumsList = action.payload.entities.albums;
				draftState.searchAlbumsId = action.payload.result.albums;
				return draftState;
			case ENTER_LOADING:
				draftState.enterLoading = action.payload;
				return draftState;
			case SEARCH_LOADING:
				if (action.payload !== undefined) {
					draftState.searchLoading = action.payload;
				} else {
					draftState.searchLoading = !draftState.searchLoading;
				}
				return draftState;
			default:
				return draftState;
		}
	});

export default reducer;
