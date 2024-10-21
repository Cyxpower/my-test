import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./views/index";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 路由全局守卫
router.beforeEach((to, from, next) => {
  next();
});
export default router;
