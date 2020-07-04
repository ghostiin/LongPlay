// {
//     [id]:{
//         album object
//     }
//     ...
// }

const { default: musicApi } = require('../../../api/config');

// albumDetail 直接从 newAlbumsList[id]中取

const defaultState = {
	newAlbumsList: {
		// [id]:{
		//     id: ...
		//     name: ...
		//     ...
		// }
	},
	searchAlbumsList: {
		// [id]:{
		//     id: ...
		//     name: ...
		//     ...
		// }
	}
};

const AlbumsReducer = (state = defaultState, action) => {};

export default AlbumsReducer;
