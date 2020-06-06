import _ from 'lodash';
import { getNewestAlbums, getAlbumDetail } from '../../../api/request';

export const GET_NEWEST_ALBUMS = 'GET_NEWEST_ALBUMS';
export const CHANGE_LOADING = 'CHANGE_LOADING';

export const getNewestAlbumsList = () => async (dispatch) => {
	const res = await getNewestAlbums();
	dispatch({
		type: GET_NEWEST_ALBUMS,
		payload: res.albums
	});
	dispatch({ type: CHANGE_LOADING, payload: false });
};

export const CHOOSE_ALBUM = 'CHOOSE_ALBUM';

export const chooseAlbum = (id) => (dispatch) => _chooseAlbum(id, dispatch);

const _chooseAlbum = _.memoize(async (id, dispatch) => {
	const album = await getAlbumDetail(id);
	dispatch({
		type: CHOOSE_ALBUM,
		payload: album
	});
});
