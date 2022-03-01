import Vue from "vue";

/**
 * 获取某个组件渲染的Dom根元素
 * @param {Component} comp 要获取dom元素的组件
 * @param {Object} props 给组件传入的props
 * @returns
 */
export default function getComponentRootDom(comp, props = {}) {
	const vm = new Vue({
		render: (h) => h(comp, { props }),
	});
	vm.$mount();
	return vm.$el;
}
