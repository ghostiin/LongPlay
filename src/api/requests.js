import { musicApi } from './config';

// 新碟上架
// 说明 : 调用此接口 , 可获取新碟上架列表 , 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30
// 可选参数 : limit: 取出数量 , 默认为 50
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
// 接口地址 : /top/album
// 调用例子 : /top/album?offset=0&limit=30

const getNewAlbums = (offset = 0, limit = 30) => {
	return musicApi.get(`/top/album?limit=${limit}&offset=${offset}`);
};

// 获取专辑内容
// 说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
// 必选参数 : id: 专辑 id
// 接口地址 : /album
// 调用例子 : /album?id=32311

const getAlbumDetail = (id) => {
	return musicApi.get(`/album?id=${id}`);
};

// 搜索
// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
// 必选参数 : keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
// 接口地址 : /search
// 调用例子 : /search?keywords= 海阔天空

// 该接口只搜索专辑
const getSearchAlbums = (query, limit = 30, offset = 0, type = 10) => {
	return musicApi.get(`/search?keywords=${query}&limit=${limit}&type=${type}&offset=${offset}`);
};

// 音乐是否可用
// 说明: 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
// 必选参数 : id : 歌曲 id
// 可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
// 接口地址 : /check/music
// 调用例子 : /check/music?id=33894312

// 此ID为音乐ID
const checkMusic = (id) => {
	return musicApi.get(`/check/music?id=${id}`);
};

// 获取音乐播放链接
const getSongUrl = (id) => {
	return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

export { getNewAlbums, getAlbumDetail, getSearchAlbums, checkMusic, getSongUrl };
