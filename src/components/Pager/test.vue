<template>
	<Pager
		:current="current"
		:total="total"
		@page-change="handlePageChange($event)"
	/>
</template>

<script>
import Pager from "./Pager";
export default {
	name: "App",
	data() {
		return {
			current: 10,
			total: 101,
		};
	},
	components: {
		Pager,
	},
	methods: {
		handlePageChange(e) {
			console.log(e);
			this.current = e;
		},
	},
};
</script>

<style></style>
