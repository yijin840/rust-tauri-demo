<template>
  <div>
    <h2>这是首页</h2>
    <p>欢迎来到 Tauri + Vue 应用。</p>
    <router-link to="/detail" class="action-button">
      <button>去详情页</button>
    </router-link>
  </div>
</template>

<style scoped>
.action-button {
  text-decoration: none;
}
.action-button button {
  background: #a8dadc;
  border: none;
  border-radius: 8px;
  color: #1d3557;
  font-size: 1.25rem;
  padding: 14px 32px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(168, 218, 220, 0.4);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.action-button button:hover {
  background: #89c2d9;
}
</style>


<script setup lang="ts">
</script>