import Home from "@/views/Home/Home.vue";
// import Blog from "@/views/Blog/Blog.vue";
// import About from "@/views/About/About.vue";
// import Project from "@/views/Project/Project.vue";
// import Message from "@/views/Message/Message.vue";
// import Detail from "@/views/Blog/components/Detail.vue";

// 导入虚假的进度条
import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
// 进度条的配置函数
configure({
	easing: "ease-in",
	speed: 500,
	// 指定进度条右下角的加载圈圈是否显示
	showSpinner: false,
});

/**
 * 用于在开发环境中模拟网速慢的情况
 * @param {Number} duration 延迟时间
 * @returns
 */
function delay(duration) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, duration);
	});
}

/**
 * 用于在组件加载时做点事情
 * 传入
 * @param {Function} importFunc webpack 的 import()方法
 * @returns
 */
function loadComponent(importFunc) {
	return async () => {
		start();
		if (process.env.NODE_ENV === "development") {
			// 如果是开发环境，则模拟满网速情况等待2秒
			// process.env.NODE_ENV 这个属性本身不存在于浏览器环境，是由于vue在js代码中自动添加的，所以可以直接使用
			await delay(2000);
		}
		const result = await importFunc;
		done();
		return result;
	};
}

export default [
	// 路由规则
	// 当匹配到指定name的路由时，加载对应的组件
	{
		name: "Home",
		path: "/",
		component: Home,
		meta: {
			title: "首页",
		},
	},
	{
		name: "Blog",
		path: "/blog",
		/**
		 * 		路由懒加载，该行为将会使得每一个路由都分别被打包为一个单独的js文件
		 *    被懒加载的路由只有在被访问到的时候才会加载对应的组件
		 *    https://v3.router.vuejs.org/zh/guide/advanced/lazy-loading.html
		 */
		component: loadComponent(
			import(/* webpackChunkName: "blog" */ "@/views/Blog/Blog.vue")
		),
		meta: { title: "文章" },
	},
	{
		name: "BlogCategory",
		path: "/blog/cate/:categoryId",
		component: loadComponent(
			import(/* webpackChunkName: "blog" */ "@/views/Blog/Blog.vue")
		),
		meta: {
			title: "文章",
		},
	},
	{
		name: "Detail",
		path: "/blog/:blogId",
		component: loadComponent(
			import(
				/* webpackChunkName: "blogdetail" */ "@/views/Blog/components/Detail.vue"
			)
		),
		meta: {
			title: "文章详情",
		},
	},
	{
		name: "About",
		path: "/about",
		component: loadComponent(
			import(/* webpackChunkName: "about" */ "@/views/About/About.vue")
		),
		meta: { title: "关于" },
	},
	{
		name: "Project",
		path: "/project",
		component: loadComponent(
			import(/* webpackChunkName: "project" */ "@/views/Project/Project.vue")
		),
		meta: { title: "项目&效果" },
	},
	{
		name: "Message",
		path: "/message",
		component: loadComponent(
			import(/* webpackChunkName: "message" */ "@/views/Message/Message.vue")
		),
		meta: {
			title: "留言板",
		},
	},
	{
		name: "NotFound",
		// path 为*表示未匹配到上面的路由时，都会被这个路由所捕获
		path: "*",
		component: loadComponent(
			import(
				/* webpackChunkName: "notfound" */ "@/components/NotFound/NotFound.vue"
			)
		),
		meta: {
			title: "404",
		},
	},
];
