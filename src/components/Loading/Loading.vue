<template>
	<div class="loading-container">
		<img src="@/assets/loading.svg" :width="size" alt="" />
	</div>
</template>

<script>
export default {
	props: {
		size: {
			type: Number,
			default: 50,
		},
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixins.less");
.loading-container {
	.self-center();
}
</style>
