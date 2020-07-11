import analyze from 'rgbaster';
import { ADD_ALBUM_TO_BOX, REMOVE_ALBUM_FROM_BOX, SET_PALETTE } from './constants';
import { getAlbumDetail } from '../../../api/requests';

function isDark(rgb) {
	const c = rgb.match(/\d+/g);
	const grayLevel = c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114;
	if (grayLevel >= 192) {
		// 若为浅色，把文字设置为黑色
		return false;
	}
	return true;
}

const addAlbumToBox = (id) => async (dispatch) => {
	try {
		const res = await getAlbumDetail(id);
		dispatch({
			type: ADD_ALBUM_TO_BOX,
			payload: res
		});
		const p = await analyze(res.album.picUrl, { scale: 0.01 }, { ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] });
		let dark;
		let light;
		for (let i = 0; i < p.length; i++) {
			const { color } = p[i];
			if (dark && light) {
				break;
			}
			if (!dark && isDark(color)) {
				dark = color;
			} else if (!light && !isDark(color)) {
				light = color;
			}
		}
		dispatch({
			type: SET_PALETTE,
			payload: {
				id,
				palette: { light, dark }
			}
		});
	} catch (err) {
		alert(`can't add this album to box!please refresh or check your network!`);
		console.log(err);
	}
};

// album id
const removeAlbumFromBox = (id) => (dispatch) => {
	dispatch({
		type: REMOVE_ALBUM_FROM_BOX,
		payload: id
	});
};

export { addAlbumToBox, removeAlbumFromBox };
