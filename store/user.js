/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-14 14:27:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-15 12:01:14
 */
export const state = () => {
	return {
		username: null,
		token: null // 每次发送ajax时候 要验证token的正确性
	};
};

export const mutations = {
	set_user(state, payload) {
		state.username = payload.username;
		state.token = payload.token;
	}
};

export const actions = {
	// 设置登录
	async set_login({ commit }, payload) {
		// let userInfo = await this.$axios.post('/api/login', payload);
		let userInfo = {
			username: payload.username,
			token: 888888
		};
		commit('set_user', userInfo); // 不会持久化 刷新就丢失
		// console.log(this, this.app);
		// cookies 客户端 服务端都可以使用
		this.app.$cookies.set('user', userInfo); // 存到浏览器cookies中
	}
};
