<template>
	<div class="test-container">
		<div class="content">123</div>
		<to-top :isActive="true" />
	</div>
</template>

<script>
import ToTop from "./ToTop.vue";
export default {
	components: {
		ToTop,
	},
};
</script>

<style lang="less">
.test-container {
	height: 100%;
	overflow-y: auto;
	.content {
		height: 2000px;
	}
}
</style>
