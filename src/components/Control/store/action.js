export const ADD_ALBUM_TO_BOX = 'ADD_ALBUM';
export const REMOVE_ALBUM_FROM_BOX = 'REMOVE_ALBUM';

export const addAlbumToBox = (album) => {
	return {
		type: ADD_ALBUM_TO_BOX,
		payload: album
	};
};

export const removeAlbumFromBox = (id) => {
	return {
		type: REMOVE_ALBUM_FROM_BOX,
		payload: id
	};
};
