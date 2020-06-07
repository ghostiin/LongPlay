import { getSearchSuggections, getSearchAlbums, getNewestAlbums } from '../../../api/request';

export const GET_SUGGESTIONS_LIST = 'GET_SUGGESTIONS_LIST';
export const GET_ALBUMS_LIST = 'GET_ALBUMS_LIST';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const GET_NEWEST_ALBUMS = 'GET_NEWEST_ALBUMS';

export const getNewestAlbumsList = () => async (dispatch) => {
	const res = await getNewestAlbums();
	dispatch({
		type: GET_NEWEST_ALBUMS,
		payload: res.albums
	});
	dispatch({ type: CHANGE_LOADING, payload: false });
};

export const getSuggestionsList = (query) => async (dispatch) => {
	const res = await getSearchSuggections(query);
	dispatch({
		type: GET_SUGGESTIONS_LIST,
		payload: res.result.albums
	});
};

export const getAlbumsList = (query) => async (dispatch) => {
	const res = await getSearchAlbums(query);

	dispatch({
		type: GET_ALBUMS_LIST,
		payload: res.result.albums
	});
	// dispatch({
	// 	type: CHANGE_LOADING,
	// 	payload: false
	// });
};
