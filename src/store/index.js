import Vue from "vue";
// 使用具名引入，利用 webpack 的 tree sharking 功能减少打包体积
import { Store, install } from "vuex";
import slogan from "./slogan";
import setting from "./setting";
import about from "./about";
import project from "./project";
// 如果采用CDN的形式，则会在window对象中挂载一个Vuex属性，如果没有，则需要将插件安装到Vue中
if (!window.Vuex) {
	install(Vue);
}

const store = new Store({
	strict: true,
	modules: {
		slogan,
		setting,
		about,
		project,
	},
});
export default store;
