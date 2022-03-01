<template>
	<div class="test-container">
		<Menu />
	</div>
</template>

<script>
import Menu from "./Menu.vue";
import "@/styles/global.less";
export default {
	name: "App",
	components: {
		Menu,
	},
};
</script>

<style scoped lang="less">
.test-container {
	background-color: #000;
}
</style>
