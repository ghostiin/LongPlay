import { getAlbumDetail } from '../../../api/request';
import recommendList from './staticRecommend';

export const GET_RECOMMEND_ALBUMS = 'GET_RECOMMEND_ALBUMS';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const getRecommendList = () => {
	const res = recommendList;

	return {
		type: GET_RECOMMEND_ALBUMS,
		payload: res
	};
};

export const CHOOSE_ALBUM = 'CHOOSE_ALBUM';
export const chooseAlbum = (id) => async (dispatch) => {
	const album = await getAlbumDetail(id);

	dispatch({
		type: CHOOSE_ALBUM,
		payload: album
	});
};
