import { GET_SUGGESTIONS_LIST, GET_ALBUMS_LIST, CHANGE_LOADING, GET_NEWEST_ALBUMS } from './action';

const defaultState = {
	suggestList: [],
	newAlbumsList: [],
	albumsList: [],
	loading: true
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case GET_SUGGESTIONS_LIST:
			return { ...state, suggestList: action.payload };
		case GET_ALBUMS_LIST:
			return { ...state, albumsList: action.payload };
		case CHANGE_LOADING:
			return { ...state, loading: action.payload };
		case GET_NEWEST_ALBUMS:
			return { ...state, newAlbumsList: action.payload };
		default:
			return state;
	}
};
