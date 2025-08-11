<script setup lang="ts">
import { ref } from 'vue';
import { invoke } from '@tauri-apps/api/core';

// 使用 ref 创建响应式数据，用于存储用户输入和后端响应
const name = ref('');
const responseMessage = ref('');

/**
 * @description 调用 Tauri 后端命令 greet_cmd
 */
async function callBackend() {
  try {
    // 调用后台命令，并传入 name 作为参数
    // await 语法让异步代码看起来更像同步代码，更易读
    const response = await invoke('greet_cmd', { name: name.value });

    // 后台返回的数据是 JSON 字符串，直接赋值给响应式变量
    responseMessage.value = response as string;
    console.log('后台返回响应:', response);
  } catch (error) {
    // 如果调用失败，捕获错误并显示
    responseMessage.value = `调用后台失败: ${error}`;
    console.error('调用后台失败:', error);
  }
}
</script>

<template>
  <div class="container">
    <h1>欢迎使用柔和风格界面</h1>
    <p>这是一个 Vue + Tauri 应用</p>

    <div class="input-container">
      <input
          id="name-input"
          v-model="name"
          placeholder="输入你的名字"
          autocomplete="off"
          class="name-input"
      />
    </div>

    <button id="btn" @click="callBackend">点击调用后台</button>

    <div v-if="responseMessage" class="response-container">
      {{ responseMessage }}
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f4f8;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
}

p {
  font-size: 1rem;
  margin-bottom: 30px;
  color: #6b7280;
}

.input-container {
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
}

.name-input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  box-sizing: border-box;
  font-size: 1rem;
  color: #4a4a4a;
  transition: border-color 0.3s ease;
}

.name-input:focus {
  outline: none;
  border-color: #89c2d9;
  box-shadow: 0 0 0 3px rgba(137, 194, 217, 0.3);
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
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background: #89c2d9;
  box-shadow: 0 6px 16px rgba(137, 194, 217, 0.6);
}

button:active {
  background: #7bb0c4;
}

.response-container {
  margin-top: 30px;
  padding: 15px;
  border-radius: 8px;
  background: #e0f7fa;
  color: #1d3557;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
