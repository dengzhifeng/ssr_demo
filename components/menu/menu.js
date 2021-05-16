/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-13 15:48:55
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-13 16:53:18
 */
export default {
	home: {
		// 默认访问admin的菜单
		name: '首页',
		path: '/admin',
		icon: 'el-icon-menu'
	},
	contend: {
		name: '内容管理',
		path: '',
		children: [
			{
				name: '文章列表',
				path: '/admin/article/list',
				icon: 'el-icon-menu'
			},
			{
				name: '文章添加',
				path: '/admin/article/add',
				icon: 'el-icon-menu'
			}
		]
	}
};
