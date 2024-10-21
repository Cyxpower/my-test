import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: {
      name: "Home"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
  },
  {
    path: "/updatepwd",
    name: "Updatepwd",
    component: () => import('../views/Updatepwd.vue'),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import('../views/Detail.vue'),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import('../views/Search.vue'),
  },
  {
    path: "/mylike",
    name: "Mylike",
    component: () => import('../views/Mylike.vue'),
  },
  {
    path: "/address",
    name: "Address",
    component: () => import('../views/Address.vue'),
  },
  {
    path: "/newaddress",
    name: "NewAddress",
    component: () => import('../views/NewAddress.vue'),
  },
  {
    path: "/pay",
    name: "Pay",
    component: () => import('../views/Pay.vue'),
  },
  {
    path: "/safe",
    name: "Safe",
    component: () => import('../views/Safe.vue'),
  },
  {
    path: "/mymsg",
    name: "Mymsg",
    component: () => import('../views/Mymsg.vue'),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import('../views/Order.vue'),
  },
  {
    path: '/main',
    name: 'Main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [{
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/my',
        name: 'My',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/My.vue')
      },
      {
        path: '/menu',
        name: 'Menu',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Menu.vue')
      },
      {
        path: '/car',
        name: 'Car',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Car.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router