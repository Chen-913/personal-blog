<template>
	<div class="empty-container">
		<Icon type="empty" />
		<p>{{ text }}</p>
	</div>
</template>

<script>
// 在script行为中 @ 表示项目的根目录
// 在style样式中用 ~@ 表示项目的根目录
import Icon from "@/components/Icon/Icon.vue";
export default {
	props: {
		text: {
			type: String,
			default: "无数据",
		},
	},
	components: {
		Icon,
	},
};
</script>

<style lang="less" scoped>
@import url("~@/styles/global.less");
@import url("~@/styles/mixins.less");

.empty-container {
	.self-center();
	text-align: center;
	color: @gray;

	.icon-container {
		font-size: 5em;
	}

	p {
		margin-top: 0.5em;
		font-size: 0.9em;
	}
}
</style>
