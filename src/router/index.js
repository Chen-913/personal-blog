import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import title from "@/utils/siteTitle";

// 如果采用CDN的形式，则会在window对象中挂载一个VueRouter属性，如果没有，则需要将插件安装到Vue中
if (!window.VueRouter) {
  Vue.use(VueRouter);
}

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 路由配置

const router = new VueRouter({
  routes,
  mode: "history", // 配置路由模式
});
router.afterEach((to, from) => {
  if (to.meta.title) {
    // 设置路由标题
    title.setRouteTitle(to.meta.title);
  }
});

export default router;
