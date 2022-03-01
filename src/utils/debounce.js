/**
 * 利用setTimeout实现的debounce防抖函数
 */
export default (fn, duration = 100) => {
	let timer = null;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, duration);
	};
};
