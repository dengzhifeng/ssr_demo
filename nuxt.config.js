/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-13 07:29:29
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-15 12:05:09
 */
export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'my-blog',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css  // 全局css
	css: ['element-ui/lib/theme-chalk/index.css', '@/assets/reset.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/element-ui',
		'@/plugins/axios' // 自定义出的插件
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/style-resources', // 自动注入样式功能
		'cookie-universal-nuxt', // 通过this.app.$cookies 读取cookies
		'@nuxtjs/proxy' // 代理
	],
	styleResources: {
		scss: ['@/assets/_var.scss'] // 注入变量
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [/^element-ui/]
	},
	router: {
		middleware: 'auth'
	},
	proxy: {
		// // 内置代理功能  @nuxtjs/proxy
		// '/api/': {
		// 	target: 'http://localhost:7001/'
		// }
	}
};
