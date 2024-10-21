export default [
  {
    path: "/home",
    name: "首页",
    component: () => import("@/views/home/index.vue"), // 懒加载组件
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/case",
    name: "解决方案",
    component: () => import("@/views/case/case.vue"), // 懒加载组件
  },
  {
    path: "/product-10.1",
    name: "10.1寸直播一体机",
    meta: {
      isAuth: true,
    },
    component: () => import("@/views/product-10.1/index.vue"), // 懒加载组件
  },

  {
    path: "/product-32",
    name: "32寸直播一体机",
    meta: {
      isAuth: true,
    },
    component: () => import("@/views/product-32/index.vue"), // 懒加载组件
  },
  {
    path: "/product-screen-32",
    name: "32寸直播大屏",
    meta: {
      isAuth: true,
    },
    component: () => import("@/views/product-screen-32/index.vue"), // 懒加载组件
  },
  {
    path: "/product-43",
    name: "43寸直播大屏",
    meta: {
      isAuth: true,
    },
    component: () => import("@/views/product-43/index.vue"), // 懒加载组件
  },
  {
    path: "/product-55",
    name: "55寸直播大屏",
    meta: {
      isAuth: true,
    },
    component: () => import("@/views/product-55/index.vue"), // 懒加载组件
  },
  {
    path: "/product-15.6",
    name: "15.6寸直播一体机",
    meta: {
      isAuth: true,
    },
    component: () => import("@/views/product-15.6/index.vue"), // 懒加载组件
  },
  {
    path: "/aboutUs",
    name: "关于我们",
    component: () => import("@/views/aboutUs/index.vue"), // 懒加载组件
  },
  {
    path: "/solution",
    name: "解决方案",
    component: () => import("@/views/solution/index.vue"), // 懒加载组件
  },
  {
    path: "/cooperation",
    name: "渠道合作",
    component: () => import("@/views/cooperation/index.vue"), // 懒加载组件
  },
  {
    path: "/liveBroadcastRoom",
    name: "直播见搭建",
    component: () => import("@/views/liveBroadcastRoom/index.vue"),
  },
  {
    path: "/feature",
    name: "功能介绍",
    component: () => import("@/views/feature/index.vue"),
  },
  // {
  //   path: "/404",
  //   name: "404",
  //   component: () => import("@/views/error-page/404.vue"), // 懒加载组件
  // },

  // {
  //   path: "/:pathMatch(.*)",
  //   redirect: "/404",
  // },
];
