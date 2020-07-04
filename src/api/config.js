import axios from 'axios';

// 感谢@Binaryify大佬开发的NeteaseCloudMusicApi
const baseURL = 'http://116.62.146.32:3000';

const musicApi = axios.create({
	baseURL
});

musicApi.interceptors.response.use(
	(res) => res.data,
	(err) => {
		console.log(err, 'NETWORK ERR');
	}
);

// 之后可能打算加入更多api，比如乐评网站、歌词网站的api
export default musicApi;
