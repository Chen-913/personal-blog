<template>
	<div class="layout-container">
		<div class="left-container">
			<!-- 左侧区域 -->
			<slot name="left"></slot>
		</div>
		<div class="main-container">
			<!-- 中间区域 -->
			<slot name="main"></slot>
		</div>
		<div class="right-container">
			<!-- 右侧区域 -->
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
	display: flex;
	height: 100%;

	.left-container {
		// 左侧固定宽度
		flex: 0 0 auto;
	}

	.main-container {
		// 中间撑满
		flex: 1 1 auto;
	}

	.right-container {
		// 右侧固定宽度
		flex: 0 0 auto;
	}
}
</style>
