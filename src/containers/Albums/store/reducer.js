import produce from 'immer';
import {
	GET_NEW_ALBUMS_LIST,
	SEARCH_ALBUMS,
	ENTER_LOADING,
	SEARCH_LOADING,
	GET_ALBUM_DETAIL,
	DETAIL_LOADING
} from './constants';

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
	searchLoading: true,
	detailLoading: true
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
			case DETAIL_LOADING:
				draftState.detailLoading = action.payload;
				return draftState;
			case SEARCH_LOADING:
				if (action.payload !== undefined) {
					draftState.searchLoading = action.payload;
				} else {
					draftState.searchLoading = !draftState.searchLoading;
				}
				return draftState;
			case GET_ALBUM_DETAIL: {
				const { album, songs } = action.payload;
				const id = album.id.toString();

				if (draftState.newAlbumsList[id] && draftState.newAlbumsList[id].songs.length === 0) {
					draftState.newAlbumsList[id].songs = songs;
				}

				if (
					draftState.searchAlbumsList[id] &&
					(!draftState.searchAlbumsList[id].songs || draftState.searchAlbumsList[id].songs.length === 0)
				) {
					draftState.searchAlbumsList[id].songs = songs;
				}
				return draftState;
			}
			default:
				return draftState;
		}
	});

export default reducer;
