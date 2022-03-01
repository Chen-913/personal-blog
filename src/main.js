import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/styles/global.less";

Vue.config.productionTip = false;

import showMessage from "@/utils/showMessage.js";

// 放入到Vue实例中，可随时调用，以$开头，防止混淆
Vue.prototype.$showMessage = showMessage;

// 模拟后台的数据
import "@/mock/";

// 为全局注册自定义指令
import "./directives/index.js";
// 为全局注册过滤器
import "./filters/index.js";

// 为项目添加数据仓库vuex
import store from "./store";

// 为项目加载全局设置
store.dispatch("setting/fetchData");

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
