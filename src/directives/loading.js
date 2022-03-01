import loadingURL from "@/assets/loading.svg";

/**
 * 生成一个 img 元素，并相对父元素居中定位，要求父元素的 position 属性为 relative 或 fixed
 * 传入的参数为 true，显示加载中的图片，否则隐藏
 * @param {String} url 图片的src资源地址
 * @returns
 */
function createImg(url) {
	const img = document.createElement("img");
	img.src = url;
	img.alt = "loading";
	img.dataset.load = "load";
	img.style.position = "absolute";
	img.width = 50;
	img.height = 50;
	img.style.top = "50%";
	img.style.left = "50%";
	img.style.transform = "translate(-50%,-50%)";
	return img;
}

export default function (el, binding) {
	// 这里合并了bind和update钩子
	const loadingDom = el.querySelector("[data-load]");
	if (binding.value) {
		if (!loadingDom) {
			let img = createImg(loadingURL);
			el.appendChild(img);
		}
	} else {
		if (loadingDom) {
			loadingDom.remove();
		}
	}
}
