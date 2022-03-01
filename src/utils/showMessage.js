import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon/Icon.vue";
import styles from "./showMessage.module.less";

export default function ({
	content,
	type = "info", // info success error warn
	duration = 2000,
	dom = document.body,
}) {
	const div = document.createElement("div");
	// 获得Icon的dom元素
	const iconDom = getComponentRootDom(Icon, { type });
	// 添加内容：标签加提示语
	div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><span>${content}</span>`;
	// 传入不同的type时设置不同的样式
	const typeClassName = styles[`message-${type}`];
	// 给div设置样式名
	div.className = `${styles.message} ${typeClassName}`;
	// 判断父元素的position是否改动过，如果没有改动则设置为relative
	const domStyles = getComputedStyle(dom);
	// console.log(domStyles.position);
	if (domStyles.position === "static") {
		dom.style.position = "relative";
	}
	dom.appendChild(div);
	// 在获取一个元素的位置，大小时，会使得浏览器强制刷新也就是 reflow重排
	div.offsetHeight;
	// 状态的改变加上css的transition从而产生动态效果
	div.style.opacity = 1;
	div.style.marginTop = 0;
	setTimeout(() => {
		// 给该div注册一个当transition结束后触发的事件，并且只执行一次
		div.addEventListener(
			"transitionend",
			function () {
				// 移除该元素
				div.remove();
			},
			{ once: true }
		);
		// 延迟指定时间后需要向上滑动并消失
		div.style.opacity = 0;
		div.style.marginTop = "-30px";
	}, duration);
}
