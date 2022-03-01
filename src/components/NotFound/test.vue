<template>
	<div class="test-container"><not-found /></div>
</template>

<script>
import NotFound from "./NotFound.vue";
import "@/styles/global.less";
export default { components: { NotFound } };
</script>

<style scoped lang="less">
.test-container {
	box-sizing: border-box;
	height: 100%;
}
</style>
