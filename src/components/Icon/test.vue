<template>
	<div class="wrapper">
		<div class="box" v-for="(item, i) in classKeys" :key="i">
			<Icon :type="item" />
			<p>{{ item }}</p>
		</div>
	</div>
</template>

<script>
import Icon, { classKeys } from "./Icon.vue";
export default {
	name: "App",
	data() {
		return {
			classKeys,
		};
	},
	components: {
		Icon,
	},
};
</script>

<style scoped>
.wrapper {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 1000px;
	margin: 0 auto;
}

.iconfont {
	font-size: 50px;
}

.box {
	margin: 10px 20px;
	text-align: center;
}

.box p {
	margin-top: 5px;
}
</style>
