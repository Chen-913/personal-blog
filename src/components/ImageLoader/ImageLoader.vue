<template>
	<div class="image-loader-container">
		<!-- 占位图 -->
		<img class="placeholder" :src="placeholder" alt="" />
		<!-- 原图 -->
		<img
			:src="src"
			alt=""
			@load="handleLoad"
			:style="{
				opacity: imageLoaded,
				transition: `opacity ${this.duration}ms`,
			}"
		/>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			// 原始图片的路径
			type: String,
			required: true,
		},
		placeholder: {
			// 原始图片加载完成前的占位图片
			type: String,
			required: true,
		},
		duration: {
			// 原始图片加载完成后，切换原始图经过的时间（毫秒）
			type: Number,
			default: 500,
		},
	},
	data() {
		return {
			status: false, // 原图是否已经加载完毕
			everyThingDone: false, // 所有的工作是否已经完成
			timer: null, // 记录定时器参数
		};
	},
	computed: {
		imageLoaded() {
			return this.status ? 1 : 0;
		},
	},
	methods: {
		handleLoad() {
			this.status = true;
			this.timer = setTimeout(() => {
				this.everyThingDone = true;
				clearTimeout(this.timer);
				this.$emit("load");
			}, this.duration);
		},
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixins.less");

.image-loader-container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	img {
		.self-fill();
		object-fit: cover;
	}

	.placeholder {
		filter: blur(10px);
	}
}
</style>
