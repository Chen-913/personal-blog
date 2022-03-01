<template>
	<div class="pager-container">
		<span
			:class="{
				disabled: current === 1,
			}"
			@click="PageChange(1)"
			>&lt;&lt;</span
		>
		<span
			:class="{
				disabled: current === 1,
			}"
			@click="PageChange(current - 1)"
			>&lt;</span
		>

		<span
			v-for="(item, i) in numbers"
			:key="i"
			:class="{ active: current === item }"
			@click="PageChange(item)"
			>{{ item }}</span
		>

		<span
			:class="{
				disabled: current === pageNumber,
			}"
			@click="PageChange(current + 1)"
			>&gt;</span
		>
		<span
			:class="{
				disabled: current === pageNumber,
			}"
			@click="PageChange(pageNumber)"
			>&gt;&gt;</span
		>
	</div>
</template>

<script>
export default {
	props: {
		current: {
			// 当前页码
			type: Number,
			default: 1,
		},
		total: {
			// 总的数据量
			type: Number,
			default: 0,
		},
		limit: {
			// 每页的容量
			type: Number,
			default: 10,
		},
		visibleNumber: {
			// 可见页码数
			type: Number,
			default: 10,
		},
	},

	computed: {
		pageNumber() {
			// 总页数
			return Math.ceil(this.total / this.limit);
		},
		minIndex() {
			// 显示的最小页码
			let min = this.current - Math.floor(this.visibleNumber / 2);
			return min < 1 ? 1 : min;
		},
		maxIndex() {
			// 显示的最大页码
			let max = this.minIndex + this.visibleNumber + 1;
			return max > this.pageNumber ? this.pageNumber : max;
		},
		numbers() {
			// 当前需要显示的页码数组
			let arr = [];
			for (let i = this.minIndex; i <= this.maxIndex; i++) {
				arr.push(i);
			}
			return arr;
		},
	},
	methods: {
		PageChange(pageIndex) {
			// 一个页码改变的处理函数，由于子组件不能改变props传入的数据
			// 所以需要使用this.$emit方法通知父组件改变传入的数据
			if (pageIndex < 1) {
				pageIndex = 1;
			}
			if (pageIndex > this.pageNumber) {
				pageIndex = this.pageNumber;
			}
			if (pageIndex === this.current) {
				return;
			}

			// 抛出一个事件
			this.$emit("page-change", pageIndex);
		},
	},
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.pager-container {
	display: flex;
	justify-content: center;
	align-content: center;

	span {
		display: block;
		padding: 5px 8px;
		cursor: pointer;
		font-size: inherit;
		margin: 10px 5px;
		text-align: center;
		border: 1px solid @dark;
		color: @primary;
		font-weight: bold;
		user-select: none;

		&.disabled {
			color: @lightWords;
			cursor: not-allowed;
		}

		&.active {
			color: @dark;
		}
	}
}
</style>
