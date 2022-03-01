<template>
	<div class="test-container">
		<ImageLoader
			placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
			src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
			@load="handleLoaded"
			:duration="500"
		/>
	</div>
</template>

<script>
import ImageLoader from "./ImageLoader.vue";
export default {
	name: "App",
	components: {
		ImageLoader,
	},
	methods: {
		handleLoaded() {
			console.log("组件load事件触发，图片组件加载完毕!");
		},
	},
};
</script>

<style scoped lang="less">
.test-container {
	width: 600px;
	height: 400px;
	margin: 0 auto;
	border: 2px solid;
}
</style>
