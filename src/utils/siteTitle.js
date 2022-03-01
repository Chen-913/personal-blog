let routeTitle = "";
let siteTitle = "";

function setTitle() {
	if (!routeTitle && !siteTitle) {
		// 两种标题都没有
		document.title = "";
	} else if (!routeTitle) {
		// 没有路由标题
		document.title = siteTitle;
	} else if (!siteTitle) {
		// 没有主标题
		document.title = routeTitle;
	} else {
		// 两个标题都有
		document.title = routeTitle + " - " + siteTitle;
	}
}

/**
 * 导出一个对象，专门用于控制网站标题以及路由标题
 */
export default {
	setRouteTitle(title) {
		routeTitle = title;
		setTitle();
	},
	setSiteTitle(title) {
		siteTitle = title;
		setTitle();
	},
};
