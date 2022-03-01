<template>
	<div
		class="to-top-container"
		@click="handleClick"
		:class="{ active: isActive }"
	>
		<span>top</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		handleShow(dom) {
			if (!dom) {
				// 如果是undefined 表示dom元素已经不存在了，那么ToTop也不需要显示出来了
				this.isActive = false;
				return;
			}
			// distance 为向下滚动的距离
			let distance = dom.scrollTop;
			this.isActive = distance >= 500;
		},
		handleClick() {
			this.$eventBus.$emit("setMainScroll", 0);
		},
	},
	created() {
		this.$eventBus.$on("mainScroll", this.handleShow);
	},
	beforeDestroy() {
		this.$eventBus.$off("mainScroll", this.handleShow);
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
@size: 50px;
.to-top-container {
	position: fixed;
	bottom: 50px;
	right: 120px;
	width: @size;
	height: @size;
	line-height: @size;
	color: #fff;
	background-color: @primary;
	text-align: center;
	cursor: pointer;
	user-select: none;
	opacity: 0;
	border-radius: 50%;
	transition: all 0.5s;
	transform: translateY(120px);
	z-index: 99;
	&.active {
		opacity: 1;
		transform: translateY(0px);
	}
}
</style>
