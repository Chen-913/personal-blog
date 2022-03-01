// 进一步抽离出关于获取数据的代码，在需要的时候将其混入组件中
// 使用时，需要在混合时传入 data 的参数，比如：mixins:[fetchData(null)]
// 然后在 methods 中定义一个名为 getData 的方法
export default function (dataType = null) {
	return {
		data() {
			return {
				data: dataType, // 请求得来的数据体
				isLoading: true, // 数据是否正在加载
			};
		},
		created: async function () {
			this.data = await this.getData();
			this.isLoading = false;
		},
	};
}
