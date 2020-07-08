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
	const res = await getNewAlbums();
	// to-do : deal with errs

	// const newAlbumsArr = res.albums;
	// const newAlbumsList = _.keyBy(newAlbumsArr, 'id');
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
};

const searchAlbums = (query) => async (dispatch) => {
	dispatch({ type: SEARCH_LOADING, payload: true });
	const res = await getSearchAlbums(query);
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
};

const toggleLoading = () => ({
	type: SEARCH_LOADING
});

const getSonglist = (id) => async (dispatch) => {
	dispatch({ type: DETAIL_LOADING, payload: true });
	const res = await getAlbumDetail(id);
	dispatch({
		type: GET_ALBUM_DETAIL,
		payload: res
	});
	dispatch({ type: DETAIL_LOADING, payload: false });
};

export { getNewAlbumsList, searchAlbums, toggleLoading, getSonglist };
