// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../pages/index/App.vue';   // 引入 index 的 App.vue
import FunctionPage from '../pages/function/App.vue'; // 引入 function 的 App.vue

const routes = [
    {
        path: '/',
        name: 'Index',
        component: IndexPage
    },
    {
        path: '/function',
        name: 'Function',
        component: FunctionPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

let isFirstLoad = true;

router.beforeEach((to, from, next) => {
    if (isFirstLoad) {
        // 显示加载动画
        setTimeout(() => {
            isFirstLoad = false; // 只在第一次加载后设置为 false
        }, 4500);
        next();
    } else {
        // 直接导航，不显示加载动画
        next();
    }
});
export {isFirstLoad};
export default router;
