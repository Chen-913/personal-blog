import getProject from "@/api/project.js";
// 项目列表仓库
export default {
	namespaced: true,
	state: {
		data: null,
		isLoading: false,
	},
	mutations: {
		setData(state, data) {
			state.data = data;
		},
		setIsLoading(state, isLoading) {
			state.isLoading = isLoading;
		},
	},
	actions: {
		async fetchData(ctx) {
			if (ctx.state.data) {
				// 如果已经有数据了，则什么都不做
				return;
			}
			ctx.commit("setIsLoading", true);
			const result = await getProject();
			ctx.commit("setData", result);
			ctx.commit("setIsLoading", false);
		},
	},
};
