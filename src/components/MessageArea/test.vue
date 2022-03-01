<template>
	<div class="test-container">
		<message-area @submit="handleSubmit" />
	</div>
</template>

<script>
import MessageArea from "./MessageArea.vue";
import fetchData from "@/mixins/fetchData.js";
import "@/mock/";
import { getComments } from "@/api/blog.js";
export default {
	mixins: [fetchData({})],
	components: {
		MessageArea,
	},
	methods: {
		async getData() {
			return await getComments();
		},
		handleSubmit(formData, callback) {
			callback();
		},
	},
};
</script>

<style lang="less" scoped>
.test-container {
	height: 100%;
}
</style>
