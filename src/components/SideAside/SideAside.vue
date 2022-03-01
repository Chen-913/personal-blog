<template>
	<div class="side-menu-container">
		<Avatar v-if="data" :url="data.avatar" />
		<Menu />
		<Contact />
		<span v-if="data" class="record">{{ data.icp }}</span>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar.vue";
import Menu from "@/components/SideAside/Menu/Menu.vue";
import Contact from "@/components/SideAside/Contact/Contact.vue";
import { mapState } from "vuex";
export default {
	components: {
		Avatar,
		Menu,
		Contact,
	},
	computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");

.side-menu-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	overflow-y: auto;
	overflow-x: hidden;
	height: 100%;
	width: 100%;
	background-color: @dark;

	.contact-container {
		margin-left: 30px;
	}

	.record {
		color: @words;
	}
}
</style>
