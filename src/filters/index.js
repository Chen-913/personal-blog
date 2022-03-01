import Vue from "vue";

// 使用webpack提供的api读取自定义指令目录下的.js文件
const files = require.context(
	// 指令目录
	"@/filters",
	// 不查找子目录
	false,
	// js文件
	/.+\.js$/
);

// 对配匹出来的的文件进行操作
files.keys().forEach((fileName) => {
	// 获取过滤器函数
	const filterConfig = files(fileName);

	// 获取过滤器名称，以文件名作为过滤器的名称
	const filterName = fileName
		// 移除开始的 './'
		.replace(/^\.\//, "")
		// 移除文件扩展
		.replace(/\.\w+$/, "");

	// 全局注册过滤器, 文件名作为过滤器名
	Vue.filter(filterName, filterConfig.default || filterConfig);
});
