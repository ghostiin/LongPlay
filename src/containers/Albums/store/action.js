// import _ from 'lodash';
import { normalize, schema } from 'normalizr';
import {
	GET_NEW_ALBUMS_LIST,
	SEARCH_ALBUMS,
	ENTER_LOADING,
	SEARCH_LOADING,
	GET_ALBUM_DETAIL,
	DETAIL_LOADING
} from './constants';
import { getNewAlbums, getSearchAlbums, getAlbumDetail } from '../../../api/requests';

const getNewAlbumsList = () => async (dispatch) => {
	try {
		const res = await getNewAlbums();
		const album = new schema.Entity('albums');
		const newAlbumsList = {
			albums: [ album ]
		};
		const normalizeData = normalize(res, newAlbumsList);
		// console.log(normalizeData);

		dispatch({
			type: GET_NEW_ALBUMS_LIST,
			payload: normalizeData
		});
		dispatch({ type: ENTER_LOADING, payload: false });
	} catch (err) {
		console.log(err);
	}
};

const searchAlbums = (query) => async (dispatch) => {
	dispatch({ type: SEARCH_LOADING, payload: true });
	try {
		const res = await getSearchAlbums(query);
		if (res.code === 200) {
			const album = new schema.Entity('albums');
			const result = {
				albums: [ album ]
			};
			const normalizeData = normalize(res.result, result);
			// console.log(normalizeData);
			dispatch({
				type: SEARCH_ALBUMS,
				payload: normalizeData
			});
			dispatch({ type: SEARCH_LOADING, payload: false });
		}
	} catch (err) {
		console.log(err);
	}
};

const toggleLoading = () => ({
	type: SEARCH_LOADING
});

const getSonglist = (id) => async (dispatch) => {
	dispatch({ type: DETAIL_LOADING, payload: true });
	try {
		const res = await getAlbumDetail(id);
		dispatch({
			type: GET_ALBUM_DETAIL,
			payload: res
		});
		dispatch({ type: DETAIL_LOADING, payload: false });
	} catch (err) {
		console.log(err);
	}
};

export { getNewAlbumsList, searchAlbums, toggleLoading, getSonglist };
