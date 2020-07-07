// import _ from 'lodash';
import { normalize, schema } from 'normalizr';
import { GET_NEW_ALBUMS_LIST, SEARCH_ALBUMS, ENTER_LOADING, SEARCH_LOADING } from './constants';
import { getNewAlbums, getSearchAlbums } from '../../../api/requests';

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

export { getNewAlbumsList, searchAlbums, toggleLoading };
