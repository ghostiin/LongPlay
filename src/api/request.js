import { netease } from './config';

export const getNewestAlbums = (offset = 0, limit = 16) => {
	return netease.get(`/top/album?offset=${offset}&limit=${limit}`);
};

export const getAlbumDetail = (id) => {
	return netease.get(`/album?id=${id}`);
};
