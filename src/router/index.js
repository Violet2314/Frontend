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

export default router;
