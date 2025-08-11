<script setup lang="ts">
import { useRouter } from 'vue-router';
import NavButton from './components/NavButton.vue';

const router = useRouter();

/**
 * @description Handles the click event from the NavButton component
 * @param {string} routeName - The name of the route to navigate to
 */
function handleNavClick(routeName: string) {
  // Use Vue Router to navigate to the specified route
  router.push(routeName);
}
</script>

<template>
  <div class="app-container">
    <header class="header-container">
      <h1 class="title">我的 Tauri 应用</h1>
      <nav class="navigation">
        <!-- Use NavButton components for navigation -->
        <NavButton label="首页" @click="handleNavClick('/')" />
        <NavButton label="详情页" @click="handleNavClick('/detail')" />
        <NavButton label="音乐" @click="handleNavClick('/music')" />
      </nav>
    </header>

    <!-- This is where the pages will be rendered based on the route -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for this component */
.app-container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  /* 使用 Flexbox 布局 */
  display: flex;
  flex-direction: column;
  height: 100vh; /* 确保占据整个视口高度 */
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #e0f2f1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  /* 确保头部不被挤压 */
  flex-shrink: 0;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1d3557;
}

.navigation {
  display: flex;
  gap: 10px;
}

.content {
  /* 确保内容区域占据剩余空间 */
  flex-grow: 1;
  /* 禁用内容区域的滚动条 */
  overflow: hidden;
  /* 移除 padding，让子元素可以铺满 */
  padding: 0;
  /* 移除 text-align */
  text-align: initial;
  /* 使用 Flexbox 布局来居中内容 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style>
/* Global styles to remove scrollbars */
body, html {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
