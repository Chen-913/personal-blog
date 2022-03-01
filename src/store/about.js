import getAbout from "@/api/about.js";

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
		async fetchData({ commit }) {
			commit("setIsLoading", true);
			const result = await getAbout();
			commit("setData", result);
			commit("setIsLoading", false);
		},
	},
};
