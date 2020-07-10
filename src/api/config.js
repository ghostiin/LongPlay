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

export { musicApi };
