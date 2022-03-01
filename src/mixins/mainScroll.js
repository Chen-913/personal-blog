/**
 * 在有滚动条的容器中设置显示 ToTop 组件以及点击回顶部
 * @param {String} refValue 指定容器的 ref 属性
 * @returns
 */
export default function (refValue) {
	return {
		methods: {
			handleMainScroll() {
				this.$eventBus.$emit("mainScroll", this.$refs[refValue]);
			},
			handleSetMainScroll(distance) {
				this.$refs[refValue].scrollTop = distance;
			},
		},
		mounted() {
			// 在挂载了真实dom后给元素绑定滚动事件
			this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
			// 监听点击组件 ToTop 的 setMainScroll 事件
			this.$eventBus.$on("setMainScroll", this.handleSetMainScroll);
		},
		beforeDestroy() {
			// 在销毁前重新触发一遍事件，使得 ToTop 组件隐藏
			this.$eventBus.$emit("mainScroll", undefined);
			this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
			this.$eventBus.$off("setMainScroll", this.handleSetMainScroll);
		},
	};
}
