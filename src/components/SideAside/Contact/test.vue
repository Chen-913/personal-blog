<template>
	<div class="test-container">
		<Contact />
	</div>
</template>

<script>
import Contact from "@/components/SideMenu/Contact/Contact.vue";
import "@/styles/global.less";
export default {
	name: "App",
	components: {
		Contact,
	},
};
</script>

<style scoped lang="less">
.test-container {
	width: 300px;
	height: 100%;
	background-color: #000;
	padding-top: 500px;
}
</style>
