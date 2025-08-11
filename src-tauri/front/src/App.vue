<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';

// 你可以在 App.vue 中保留全局的 Tauri 逻辑
// 例如：一个全局的函数来调用后端命令
async function greet(name: string) {
  try {
    const response = await invoke('greet_cmd', { name });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div id="app">
    <!-- 路由导航链接 -->
    <nav class="navigation">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/detail" class="nav-link">详情页</router-link>
    </nav>

    <div class="content">
      <!-- 路由视图，用于显示当前页面 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
/* 全局样式可以放在这里 */
body, html, #app {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.navigation {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #0056b3;
}

.content {
  padding: 2rem;
  text-align: center;
}
</style>

