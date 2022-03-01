// 导入模块分析插件，分析打包结果
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// 只在生产环境下使用分析插件，在开发环境下则不使用
if (process.env.NODE_ENV === "production") {
	module.exports = {
		devtool: "none",
		// 通过 configureWebpack 选项，可对 webpack 进行额外的配置
		// 该配置最终会和 vue-cli 的默认配置进行合并（webpack-merge）
		plugins: [new BundleAnalyzerPlugin()],
		// 排除对公共库的打包，在 index.html 中使用免费的 CDN 加速
		externals: {
			vue: "Vue",
			vuex: "Vuex",
			"vue-router": "VueRouter",
			axios: "axios",
		},
	};
} else {
	module.exports = {};
}
