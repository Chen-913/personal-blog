<template>
	<Layout>
		<template #main>
			<div class="main-container">
				<BlogList />
			</div>
		</template>
		<template #right>
			<div class="right-container">
				<BlogCategory />
			</div>
		</template>
	</Layout>
</template>

<script>
import Layout from "@/components/Layout/Layout.vue";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
export default {
	components: {
		Layout,
		BlogList,
		BlogCategory,
	},
};
</script>

<style scoped lang="less">
.main-container {
	height: 100%;
}
.right-container {
	position: relative;
	height: 100%;
}
</style>
