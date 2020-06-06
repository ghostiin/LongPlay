import { GET_NEWEST_ALBUMS, CHANGE_LOADING } from './action';

const defaultState = {
	loading: true,
	albumsList: []
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case GET_NEWEST_ALBUMS:
			return { ...state, albumsList: action.payload };
		case CHANGE_LOADING:
			return { ...state, loading: false };
		default:
			return state;
	}
};
