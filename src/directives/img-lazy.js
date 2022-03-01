/**
 * v-img-lazy指令，只用于<img />标签，实现图片懒加载，需要修改默认图片直接修改导入的defaultImg
 */

import { debounce, eventBus } from "@/utils/";
import defaultImg from "@/assets/imgLoading.gif";

// 存放关于图片的一些信息，包括dom和img.src
let imgs = [];

function handleImgs() {
	for (const imgInfo of imgs) {
		setImage(imgInfo);
	}
}

function setImage(imgInfo) {
	// 图片还没加载好时，设置临时的占位图
	imgInfo.dom.src = defaultImg;
	// 判断图片当前是否在可视区
	// imgInfo.dom.offsetTop
	const rect = imgInfo.dom.getBoundingClientRect();
	const height = imgInfo.dom.height || 150;
	const windowHeight = document.documentElement.clientHeight;
	if (rect.top >= -height && rect.top <= windowHeight) {
		// 在可显示范围内
		let tempImg = new Image();
		// 提前给临时的Image对象注册加载完毕的事件
		tempImg.onload = () => {
			// 当真实图片加载完成之后
			imgInfo.dom.src = imgInfo.src;
			tempImg = null;
		};
		tempImg.src = imgInfo.src;
		// 已经设置好了的图片不需要重新设置，直接清除
		imgs = imgs.filter((i) => i !== imgInfo);
	}
}

const handleScroll = debounce(handleImgs, 50);

eventBus.$on("mainScroll", handleScroll);
export default {
	inserted(el, bind) {
		// 对img元素做初始化
		const imgInfo = {
			dom: el,
			src: bind.value,
		};
		imgs.push(imgInfo);
		// 在插入后立刻执行一遍
		setImage(imgInfo);
	},
	unbind(el) {
		eventBus.$off("mainScroll", handleScroll);
		// 在指令解绑时，清除数组中对应的元素
		imgs = imgs.filter((i) => i.dom !== el);
	},
};
