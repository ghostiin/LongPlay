import { getNewestAlbums } from '../../../api/request';

export const GET_NEWEST_ALBUMS = 'GET_NEWEST_ALBUMS';

export const getNewestAlbumsList = () => async (dispatch) => {
	const res = await getNewestAlbums();
	dispatch({
		type: GET_NEWEST_ALBUMS,
		payload: res.albums
	});
	dispatch({ type: CHANGE_LOADING, payload: false });
};

export const CHANGE_LOADING = 'CHANGE_LOADING';
