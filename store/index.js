/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-13 18:02:17
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-16 11:12:45
 */
export const actions = {
	// 这个函数刷新页面 在服务端执行一遍
	nuxtServerInit(store, { $axios, app }) {
		// @nuxtjs/axios  同步数据到vuex中
		// console.log(store);
		// app就是整个大对象  什么都能取 console看看就知

		// 获取到客户端请求传过来的cookies
		let userInfo = app.$cookies.get('user');
		// 设置cookie 每次访问服务器都会携带cookie ，但是localStorage不行
		// app.$cookies.remove('user');
		// 用token校验是否ok
		// $axios('/api/valdiate', userInfo); // 通过接口校验当前token是否正常
		if (userInfo) {
			if (true) {
				// nuxt服务会请求我的服务器 校验token的正确性，如果正确，会将最新的用户信息 放到vuex中
				store.commit('user/set_user', userInfo); // 把cookies的用户信息同步到vuex
			} else {
				app.$cookies.remove('user'); // 不正确就移除
			}
		}
	}
};
