<template>
	<div class="app-container">
		<Layout>
			<template #left>
				<div class="left">
					<SideAside />
				</div>
			</template>
			<template v-slot:main>
				<div class="main">
					<RouterView />
				</div>
			</template>
		</Layout>
		<!-- 返回顶部 -->
		<ToTop />
	</div>
</template>

<script>
import Layout from "@/components/Layout/Layout.vue";
import SideAside from "@/components/SideAside/SideAside.vue";
import "@/styles/global.less";
import ToTop from "@/components/ToTop/ToTop.vue";
export default {
	name: "App",
	components: {
		Layout,
		SideAside,
		ToTop,
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixins.less");
.app-container {
	.self-fill(fixed);

	.left {
		width: 300px;
		height: 100%;
	}
	.main {
		height: 100%;
	}
	.right {
		height: 100%;
	}
}
</style>
