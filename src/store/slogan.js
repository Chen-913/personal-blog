import banner from "@/api/banner.js";
export default {
	namespaced: true,
	state: {
		isLoading: false,
		data: null,
	},
	mutations: {
		setIsLoading(state, loading) {
			state.loading = loading;
		},
		setData(state, data) {
			state.data = data;
		},
	},
	actions: {
		async getSlogan({ commit, state }) {
			if (state.data) {
				// 已经有数据了就不用再次发起请求
				return;
			} else {
				commit("setIsLoading", true);
				const result = await banner();
				if (result) {
					commit("setData", result);
					commit("setIsLoading", false);
				}
			}
		},
	},
};
