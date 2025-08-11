import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue';

// Import the page components
import HomePage from './pages/HomePage.vue';
import DetailPage from './pages/DetailPage.vue';
import MusicPage from "./pages/MusicPage.vue";

// Define the routes
const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/detail', name: 'Detail', component: DetailPage },
    { path: '/music', name: 'Music', component: MusicPage },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Create the Vue app and mount it
const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');
