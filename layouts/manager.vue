<!--
 * @description: 管理端模板
 * @author: steve.deng
 * @Date: 2021-05-13 15:33:38
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-14 15:19:34
-->
<template>
	<!-- 容器 -->
	<el-container>
		<!--头部  -->
		<el-header style="height:200px">
			<img src="@/assets/nuxt.png" alt="" style="width:100px" />
			{{ $store.state.user.username }}
		</el-header>
		<!-- 主内容 -->
		<el-container>
			<!-- 左边栏菜单 -->
			<el-aside>
				<Menu />
			</el-aside>
			<!-- 主要显示区域 -->
			<el-main>
				<nuxt />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import Menu from '@/components/menu';
export default {
	name: 'manager',
	components: {
		Menu
	},
	props: {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
};
</script>
<style lang="less" scoped></style>
