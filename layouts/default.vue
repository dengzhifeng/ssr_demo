<!--
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-13 10:15:40
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-13 17:46:51
-->
<template>
	<div>
		<div class="header" v-if="hasNav">
			<img src="@/assets/nuxt.png" alt="" />
			<nav class="nav">
				<nuxt-link to="/">首页</nuxt-link>
				<nuxt-link to="/category">分类</nuxt-link>
				<nuxt-link to="/about">关于</nuxt-link>
			</nav>
		</div>

		<!-- 类似router-view  nuxt-->
		<Nuxt />
	</div>
</template>
<script>
export default {
	computed: {
		hasNav() {
			return this.$route.path !== '/login' && this.$route.path !== '/reg';
		}
	}
};
</script>
export default { }
<style lang="scss">
.header {
	display: flex;
	background: #ffffff;
	justify-content: space-between;
	align-items: center;
}
</style>
