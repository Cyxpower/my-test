// router.js

import {
    createRouter,
    createWebHistory
} from 'vue-router';

// router.js

const routes = [
    // 定义路由规则
    {
        path: '/',
        redirect: 'Background',
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/home',
        component: () => import('@/components/Home.vue'), // 使用懒加载
        name: 'Home', // 路由名称
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/about',
        component: () => import('@/components/About.vue'), // 使用懒加载
        name: 'About',
    },
    {
        path: '/list',
        component: () => import('@/components/List.vue'), // 使用懒加载
        name: 'List',
    },
    {
        path: '/navbar',
        component: () => import('@/components/Navbar.vue'), // 使用懒加载
        name: 'Navbar',
    },
    {
        path: '/slot',
        component: () => import('@/components/Slot.vue'), // 使用懒加载
        name: 'Slot',
    },
    {
        path: '/background',
        component: () => import('@/components/Background.vue'), // 使用懒加载
        name: 'Background',
    },
    {
        path: '/main',
        component: () => import('@/views/Main.vue'), // 使用懒加载
        name: 'main',
    },
    // 添加其他路由规则
];


const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 History 模式
    routes,
});

export default router;