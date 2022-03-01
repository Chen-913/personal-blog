import getSetting from "@/api/globalSetting.js";
import siteTitle from "@/utils/siteTitle";

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
		async fetchData({ commit, state }) {
			if (state.data) {
				// 已经有数据了就不用再次发起请求
				return;
			} else {
				commit("setIsLoading", true);
				const result = await getSetting();
				if (result) {
					commit("setData", result);
					commit("setIsLoading", false);
					// <link rel="shortcut icon" href="favicon.ico" type="images/x-icon" />
					// 设置网站图标
					// let link = document.querySelector("link[rel*='icon']");
					let link = document.createElement("link");
					link.rel = "shortcut icon";
					link.type = "images/x-icon";
					link.href = result.favicon;
					document.querySelector("head").appendChild(link);
					// 设置网站标题
					if (result.siteTitle) {
						siteTitle.setSiteTitle(result.siteTitle);
					}
				}
			}
		},
	},
};
