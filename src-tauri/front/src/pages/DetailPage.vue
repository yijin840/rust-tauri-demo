<script setup lang="ts">
import { ref } from 'vue';
import { invoke } from '@tauri-apps/api/core';

const name = ref('');
const responseMessage = ref('');

async function callBackend() {
  try {
    const response = await invoke('greet_cmd', { name: name.value });
    responseMessage.value = response as string;
  } catch (error) {
    responseMessage.value = `调用后台失败: ${error}`;
  }
}
</script>

<template>
  <div>
    <h2>这是详情页</h2>
    <p>在这个页面，我们可以调用 Tauri 后端命令。</p>

    <div class="input-container">
      <input
          v-model="name"
          placeholder="输入你的名字"
          class="name-input"
      />
    </div>

    <button @click="callBackend">调用后台</button>

    <div v-if="responseMessage" class="response-container">
      {{ responseMessage }}
    </div>
  </div>
</template>

<style scoped>
.input-container {
  margin-bottom: 20px;
}

.name-input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
}

button {
  background: #a8dadc;
  border: none;
  border-radius: 8px;
  color: #1d3557;
  font-size: 1.25rem;
  padding: 14px 32px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(168, 218, 220, 0.4);
}

.response-container {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #e0f2f1;
  color: #1d3557;
}
</style>
