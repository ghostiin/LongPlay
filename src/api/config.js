import axios from 'axios';

export const baseUrl = 'http://116.62.146.32:3000/';

const netease = axios.create({
	baseURL: baseUrl
});

netease.interceptors.response.use(
	(res) => res.data,
	(err) => {
		console.log(err, 'Network ERR');
	}
);

export { netease };
