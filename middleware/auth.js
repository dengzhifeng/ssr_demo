/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-15 11:49:15
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-15 12:09:01
 */
export default function(obj) {
	let { store, redirect, route } = obj;
	let username = store.state.user.username;
	if (route.path.startsWith('/admin')) {
		if (!username) {
			redirect('/login');
		}
	} else {
		if (/login/.test(route.path)) {
			if (username) {
				redirect('/admin');
			}
		}
	}
}
