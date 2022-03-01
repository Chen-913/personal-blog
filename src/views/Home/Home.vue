<template>
	<div
		class="home-container"
		ref="container"
		@wheel="handleWheel"
		v-loading="isLoading"
	>
		<ul
			class="carousel"
			:style="{ marginTop }"
			@transitionend="handleTransitionEnd"
		>
			<li v-for="(item, i) in data" :key="item.id">
				<Carousel :data="item" v-if="index === i" />
			</li>
		</ul>

		<!-- 上下箭头 -->
		<div class="arrow-up" v-show="index > 0" @click="switchTo(index - 1)">
			<Icon type="arrowUp" />
		</div>
		<div
			class="arrow-down"
			v-show="index < indexMax"
			@click="switchTo(index + 1)"
		>
			<Icon type="arrowDown" />
		</div>

		<!-- 小圆点 -->
		<ul class="circle-list">
			<li
				v-for="(item, i) in data"
				:key="item.id"
				:class="{
					active: (index > 0 ? (index < indexMax ? index : indexMax) : 0) === i,
				}"
				@click="switchTo(i)"
			></li>
		</ul>
	</div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
import Carousel from "./Carousel.vue";
import "@/styles/global.less";
import { mapState } from "vuex";

export default {
	components: {
		Carousel,
		Icon,
	},
	data() {
		return {
			index: 0, // 表示当前所处页面的索引
			containerHeight: 0, // 轮播图的窗口高度
			indexMax: 0, // 轮播图数据的最大索引
			rolling: false, // 轮播图是否在滚动
		};
	},
	computed: {
		marginTop() {
			if (this.isIndexValid()) {
				// 合法索引内正常移动
				return -this.index * this.containerHeight + "px";
			} else if (this.index < 0) {
				// 索引小于0则规定为0
				return "0px";
			} else {
				// 索引大于0则规定为最大索引
				return -this.indexMax * this.containerHeight + "px";
			}
		},
		...mapState("slogan", ["data", "isLoading"]),
	},
	methods: {
		isIndexValid(i = this.index) {
			// 判断当前页码是否合理
			return i >= 0 && i <= this.indexMax;
		},
		switchTo(i) {
			this.isIndexValid(i) && (this.index = i);
		},
		changeWindowSize() {
			this.containerHeight = this.$refs.container.clientHeight;
		},
		handleWheel(e) {
			// 如果鼠标滚动幅度太小或正在滚动时，则什么都不做
			if (this.rolling || Math.abs(e.deltaY) < 5) {
				return;
			}
			if (e.deltaY > 0) {
				// 向下滚动
				this.index !== this.indexMax && (this.rolling = true);
				this.switchTo(this.index + 1);
			} else {
				// 向上滚动
				this.index !== 0 && (this.rolling = true);
				this.switchTo(this.index - 1);
			}
		},
		handleTransitionEnd() {
			this.rolling = false;
		},
	},

	async created() {
		await this.$store.dispatch("slogan/getSlogan");
		// 由于获取数据被抽离了代码，所以获取到了数据之后就得安排上最大有效索引
		this.indexMax = this.data.length - 1;
	},
	mounted: function () {
		// 在生成真实dom后获取容器的高度
		this.changeWindowSize();
		window.addEventListener("resize", this.changeWindowSize);
	},
	destroyed: function () {
		// 在组件销毁时移除窗口变化的事件
		window.removeEventListener("resize", this.changeWindowSize);
	},
};
</script>

<style lang="less" scoped>
@import url("~@/styles/mixins.less");
@import url("~@/styles/var.less");

.home-container {
	position: relative;
	height: 100%;
	background-color: @dark;
	overflow: hidden;

	.carousel {
		height: 100%;
		transition: all 0.5s;

		li {
			height: 100%;
			color: #fff;
		}
	}

	// 以 arrow- 开头的类名
	[class^="arrow-"] {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		font-size: 25px;
		color: @gray;
		cursor: pointer;
	}

	// 上箭头的动画
	@disY: 6px;
	@keyframes jump-up {
		0% {
			transform: translateX(-50%) translateY(-@disY);
		}
		50% {
			transform: translateX(-50%) translateY(@disY);
		}
		100% {
			transform: translateX(-50%) translateY(-@disY);
		}
	}
	// 下箭头的动画
	@keyframes jump-down {
		0% {
			transform: translateX(-50%) translateY(@disY);
		}
		50% {
			transform: translateX(-50%) translateY(-@disY);
		}
		100% {
			transform: translateX(-50%) translateY(@disY);
		}
	}

	.arrow-up {
		top: 25px;
		animation: jump-up 2s infinite;
	}
	.arrow-down {
		bottom: 25px;
		animation: jump-down 2s infinite;
	}

	// 圆点列表
	.circle-list {
		.self-center();
		left: auto;
		right: 30px;

		li {
			width: 10px;
			height: 10px;
			border: 1px solid #fff;
			margin-bottom: 10px;
			background-color: @dark;
			cursor: pointer;
			border-radius: 50%;
			transition: all 0.5s;

			&.active {
				background-color: #fff;
			}
		}
	}
}
</style>
