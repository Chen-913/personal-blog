<template>
	<div class="wrapper">
		<Empty />
	</div>
</template>

<script>
import Empty from "./Empty.vue";
export default {
	components: { Empty },
};
</script>

<style lang="less" scoped>
.wrapper {
	position: relative;
	width: 400px;
	height: 400px;
	border: 1px solid;
}
</style>
