<template>
	<div
		class="carousel-container"
		ref="wrapper"
		@mousemove="handleMouseMove"
		@mouseleave="handleMouseLeave"
	>
		<ImageLoader
			:src="data.bigImg"
			:placeholder="data.midImg"
			@load="handleLoad"
			ref="imgContainer"
			:style="moveStyle"
		/>

		<div class="sentence">
			<span class="title" ref="title">{{ data.title }}</span>
			<br />
			<span class="description" ref="desc">{{ data.description }}</span>
		</div>
	</div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/ImageLoader.vue";

export default {
	components: {
		ImageLoader,
	},
	props: ["data"],
	data() {
		return {
			titleWidth: 0, // 标题文字的宽度
			descWidth: 0, // 描述文字的宽度
			wrapper: null, // 每一个轮播项的容器
			imgContainer: null, // 包裹图片的容器
			mouseX: 0, // 鼠标在该轮播项中的相对横坐标位置
			mouseY: 0, // 鼠标在该轮播项中的相对纵坐标位置
		};
	},
	computed: {
		moveStyle() {
			if (this.imgContainer && this.wrapper) {
				// 在挂载生成真实dom之后再得出这个计算属性
				const extraX = this.imgContainer.width - this.wrapper.width;
				const extraY = this.imgContainer.height - this.wrapper.height;
				// 依据比例值相等：  ?/this.mouseX = extraX/this.wrapper.width*;
				const disX = (-extraX / this.wrapper.width) * this.mouseX + "px";
				const disY = (-extraY / this.wrapper.height) * this.mouseY + "px";
				return {
					transform: `translate(${disX}, ${disY})`,
				};
			}
		},
	},

	methods: {
		showWords() {
			// 在图片加载完毕之后，再将文字显现出来
			this.$refs.title.style.width = "0";
			this.$refs.desc.style.width = "0";
			this.$refs.desc.style.transition = "all 1s 1s";
			// 强制让浏览器重新渲染一次（reflow）
			this.$refs.desc.offsetWidth;
			this.$refs.title.style.opacity = "1";
			this.$refs.desc.style.opacity = "1";

			this.$refs.title.style.width = this.titleWidth + "px";
			this.$refs.desc.style.width = this.descWidth + "px";
		},
		handleLoad() {
			this.showWords();
		},
		setSize() {
			// 将this.wrapper的内容设置为包含宽高的对象
			this.wrapper = {
				width: this.$refs.wrapper.clientWidth,
				height: this.$refs.wrapper.clientHeight,
			};

			// 将this.imgContainer的内容设置为包含宽高的对象
			this.imgContainer = {
				width: this.$refs.imgContainer.$el.clientWidth,
				height: this.$refs.imgContainer.$el.clientHeight,
			};
		},
		handleMouseMove(e) {
			// dom.getBoundingClientRect方法返回一个包含元素的width、height、top、bottom、left、right、x、y等值的对象
			const rect = this.$refs.wrapper.getBoundingClientRect();
			this.mouseX = e.pageX - rect.x;
			this.mouseY = e.pageY - rect.y;
		},
		handleMouseLeave() {
			this.mouseX = this.wrapper.width / 2;
			this.mouseY = this.wrapper.height / 2;
		},
	},

	mounted: function () {
		this.titleWidth = this.$refs.title.offsetWidth;
		this.descWidth = this.$refs.desc.offsetWidth;
		this.mouseX = this.$refs.wrapper.clientWidth / 2;
		this.mouseY = this.$refs.wrapper.clientHeight / 2;
		this.setSize();
		// 如果窗口有改变，将重新设置容器的大小
		window.addEventListener("resize", this.setSize);
	},
	destroyed: function () {
		// 组件被销毁时须删除该事件
		window.removeEventListener("resize", this.setSize);
	},
};
</script>

<style scoped lang="less">
.carousel-container {
	position: relative;
	height: 100%;

	.image-loader-container {
		width: 110%;
		height: 110%;
		transition: all 0.2s;
	}

	.sentence {
		position: absolute;
		top: 70%;
		left: 50px;

		span {
			display: inline-block;
			opacity: 0;
			letter-spacing: 0.2em;
			white-space: nowrap;
			overflow: hidden;
			// 给文字添加阴影，使得在较亮的图片上也能够显示清楚
			text-shadow: -2px 0 2px rgba(0, 0, 0, 0.3), 2px 0 2px rgba(0, 0, 0, 0.3),
				0 2px 2px rgba(0, 0, 0, 0.3), 0 -2px 2px rgba(0, 0, 0, 0.3);

			transition: all 1s;
		}

		.title {
			font-size: 2em;
			margin-bottom: 0.8em;
		}

		.description {
			font-size: 1.5em;
		}
	}
}
</style>
