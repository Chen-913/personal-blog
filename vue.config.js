const webpackConfig = require("./webpack.config");

module.exports = {
  devServer: {
    proxy: {
      // 所有以 /libraries 开头的请求都会代理到这个服务器上
      "/libraries": {
        target: "https://api.bootcdn.cn",
      },
      "/api": {
        target: "http://localhost:7001",
      },
      // 静态资源也代理到原来的服务器上
      "/static": {
        target: "http://localhost:7001",
      },
    },
  },
  configureWebpack: webpackConfig,
};
