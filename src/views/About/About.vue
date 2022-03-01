<template>
	<div class="about-container" v-loading="isLoading || !srcLoaded">
		<iframe
			v-if="data"
			:src="data"
			@load="srcLoaded = true"
			frameborder="0"
		></iframe>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	data() {
		return {
			srcLoaded: false,
		};
	},
	computed: mapState("about", ["data", "isLoading"]),
	created() {
		this.$store.dispatch("about/fetchData");
	},
};
</script>

<style scoped lang="less">
.about-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
}
</style>
