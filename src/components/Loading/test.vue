<template>
	<div class="test-container">
		<Loading />
	</div>
</template>

<script>
import Loading from "./Loading.vue";
import "@/styles/global.less";
export default {
	components: {
		Loading,
	},
};
</script>

<style>
.test-container {
	/* 父元素需要设置相对定位 */
	position: relative;
	height: 100%;
}
</style>
