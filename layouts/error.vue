<!--
 * @description: 错误页面
 * @author: steve.deng
 * @Date: 2021-05-13 15:26:07
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-13 15:30:37
-->
<template>
    <div>
        <div v-if="error.statusCode">{{ error.statusCode }}</div>
        <div>{{ error.message }}</div>
    </div>
</template>

<script>
export default {
    name: 'error',
    components: {},
    props: {
        error: {
            type: Object
        }
    },
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
