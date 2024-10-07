import { createApp } from 'vue'
import App from './App.vue'
import router from './router';  // 导入路由
// Vue.use(ElementuI);
const app = createApp(App);
app.use(router);
// 挂载应用
app.mount('#app');
