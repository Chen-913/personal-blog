<template>
	<div class="not-found-container">
		<img src="@/assets/404-not-found.png" alt="404" />
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.not-found-container {
	height: 100%;
	position: relative;
	img {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 400px;
		height: 400px;
		margin-left: -200px;
		margin-top: -200px;
	}
}
</style>
