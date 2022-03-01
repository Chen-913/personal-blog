<template>
	<div class="test-container">
		<Layout>
			<template v-slot:left>
				<div class="left">
					<SideMenu />
				</div>
			</template>
			<template v-slot:main>
				<div class="main">这是主区域插槽中的内容</div>
			</template>
			<template v-slot:right>
				<div class="right">这是右侧插槽中的内容</div>
			</template>
		</Layout>
	</div>
</template>

<script>
import Layout from "./Layout.vue";
import SideMenu from "@/components/SideAside/SideAside.vue";
import "@/styles/global.less";

export default {
	components: {
		Layout,
		SideMenu,
	},
};
</script>

<style scoped lang="less">
.test-container {
	height: 100%;

	.left {
		width: 250px;
		height: 100%;
	}

	.main {
		height: 100%;
	}

	.right {
		width: 200px;
		height: 100%;
	}
}
</style>
