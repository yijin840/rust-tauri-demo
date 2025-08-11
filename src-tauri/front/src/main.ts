import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue';

// 导入页面组件
import HomePage from './pages/HomePage.vue';
import DetailPage from './pages/DetailPage.vue';

// 定义路由规则
const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/detail', name: 'Detail', component: DetailPage },
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 创建 Vue 应用实例并挂载
const app = createApp(App);
app.use(router); // 使用路由
app.mount('#app');
