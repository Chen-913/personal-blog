/**
 * 事件总线，用于处理不同层级的组件之间的通信，灵活度极大
 */
// const listeners = {};
// export default {
//   // 监听某一个事件
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   // 取消监听
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   // 触发事件
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   },
// };
import Vue from "vue";
const app = new Vue();
Vue.prototype.$eventBus = app;

export default app;
/**
 * 事件名称：mainScroll
 * 参数：dom 元素
 * 描述：监听组件的滚动事件，并在触发时传入一个参数，该参数为滚动元素本身的 dom 元素，如果没有传递该参数，则表示dom不存在
 */

/**
 * 事件名称：setMainScroll
 * 参数：要滚动的距离
 * 描述：监听组件的滚动事件，并在触发时传入一个参数，该参数为滚动的距离
 */
