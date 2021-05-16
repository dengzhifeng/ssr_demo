/*
 * @description: axios请求拦截
 * @author: steve.deng
 * @Date: 2021-05-14 15:22:08
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-15 11:29:33
 */
export default function({ $axios, app }) {
	$axios.onRequest(config => {
		// 获取token 并且添加在请求上面头
		let user = app.$cookies.get('user');
		if (user && user.token) {
			// 每次请求都带上token
			config.headers.authorization = user.token;
		}
	});

	$axios.onResponse(res => {
		if (res.data.err === 0) {
			return Promise.resolve(res.data.data);
		} else {
			return Promise.reject(res);
		}
	});
}
