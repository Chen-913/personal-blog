<template>
	<div class="test-container">
		<SideMenu />
	</div>
</template>

<script>
import SideMenu from "./SideMenu.vue";
import "@/styles/global.less";
export default {
	name: "App",
	components: {
		SideMenu,
	},
};
</script>

<style scoped lang="less">
.test-container {
	width: 300px;
	height: 100%;
}
</style>
