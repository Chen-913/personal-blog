import Vue from "vue";

// 使用webpack提供的api读取自定义指令目录下的.js文件
const files = require.context(
	// 指令目录
	"@/directives",
	// 不查找子目录
	false,
	// js文件
	/.+\.js$/
);

// 对配匹出来的的文件进行操作
files.keys().forEach((fileName) => {
	// 获取指令函数
	const directiveConfig = files(fileName);

	// 获取指令名称
	const directiveName = fileName
		// 移除开始的 './'
		.replace(/^\.\//, "")
		// 移除文件扩展
		.replace(/\.\w+$/, "");

	// 注册指令, 文件名作为指令名
	Vue.directive(directiveName, directiveConfig.default || directiveConfig);
});
