import { GET_NEWEST_ALBUMS, CHANGE_LOADING, CHOOSE_ALBUM } from './action';

const defaultState = {
	loading: true,
	albumsList: [],
	albumDetail: {}
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case GET_NEWEST_ALBUMS:
			return { ...state, albumsList: action.payload };
		case CHANGE_LOADING:
			return { ...state, loading: false };
		case CHOOSE_ALBUM:
			return { ...state, albumDetail: action.payload };
		default:
			return state;
	}
};
