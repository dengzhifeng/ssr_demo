<!--
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-13 07:29:29
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-15 16:52:34
-->
<template>
    <div class="container">
        <div>
	首页 {{list}}
			<li v-for="(l,index) in list" :key="index">
				<nuxt-link :to="{name:'detail-id',params:{id:l.id}}">{{l.title}}</nuxt-link>
			</li>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
		    // list:[
			// 	{
			// 		id: 0,
			// 		title: '文章1'
			// 	},
			// 	{
			// 		id: 1,
			// 		title: '文章2'
			// 	}
			// ]
		}
	},
	async asyncData({$axios}) {
	// 	  let {list} = await $axios.get('/api/article');
	// return {list}
	  // 正常发送请求获取到列表 然后返回对象类型数据 就会合并到data对象
		 return {
			list:[
				{
					id: 0,
					title: '文章1'
				},
				{
					id: 1,
					title: '文章2'
				}
			]
		}
	},
	mounted() {
		// this.$nextTick(() => {
		// 	this.$nuxt.$loading.start()
		// 	setTimeout(() => this.$nuxt.$loading.finish(), 3500)
		// })
  	}
};
</script>

<style></style>
