<!--
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-13 15:48:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-13 16:52:08
-->
<template>
	<div>
		<el-menu router>
			<template v-for="(m, index) in menu">
				<el-menu-item v-if="!m.children" :key="index" :index="m.path">{{
					m.name
				}}</el-menu-item>
				<el-submenu v-else :key="index" :index="m.path">
					<template slot="title">
						<div>
							{{ m.name }}
						</div>
					</template>
					<el-menu-item
						v-for="c in m.children"
						:key="c.name"
						:index="c.path"
					>
						{{ c.name }}
					</el-menu-item>
				</el-submenu>
			</template>
		</el-menu>
	</div>
</template>

<script>
import menu from './menu.js';
export default {
	components: {},
	props: {},
	data() {
		return {
			menu
		};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
};
</script>
<style lang="less" scoped></style>
