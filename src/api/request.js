import { netease } from './config';

export const getNewestAlbums = (offset = 0, limit = 100) => {
	return netease.get(`/top/album?offset=${offset}&limit=${limit}`);
};

export const getAlbumDetail = (id) => {
	return netease.get(`/album?id=${id}`);
};

export const getSearchHot = () => {
	return netease.get('/search/hot');
};

export const getSearchSuggections = (query) => {
	return netease.get(`/search/suggest?keyword=${query}`);
};

//type=10 ---> only search for albums
export const getSearchAlbums = (query, limit = 100) => {
	return netease.get(`/search?keywords= ${query}&type=10&limit=${limit}`);
};

//https://music.163.com/song/media/outer/url?id=id.mp3
export const getSongAudio = (id) => {
	return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};
