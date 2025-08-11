<script setup lang="ts">
// 定义组件的 props，用于接收外部传入的文本
interface Props {
  label: string;
}
const props = defineProps<Props>();

// 定义组件的事件，用于向父组件发送点击事件
const emit = defineEmits(['click']);

/**
 * @description 处理按钮点击事件，并向父组件发出通知
 */
function handleClick() {
  emit('click');
}
</script>

<template>
  <button class="nav-button" @click="handleClick">
    {{ props.label }}
  </button>
</template>

<style scoped>
.nav-button {
  background-color: rgba(168, 218, 220, 0.7); /* 半透明柔和背景色 */
  border: none;
  border-radius: 8px; /* 柔和圆角 */
  color: #1d3557;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 20px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(168, 218, 220, 0.1); /* 柔和的阴影 */
  transition: all 0.3s ease; /* 平滑过渡 */
}

.nav-button:hover {
  background-color: rgba(137, 194, 217, 0.95); /* 悬停时颜色加深 */
  box-shadow: 0 4px 12px rgba(137, 194, 217, 0.6); /* 阴影变大 */
  transform: translateY(-1px); /* 轻微上浮 */
}

.nav-button:active {
  background-color: #7bb0c4;
  box-shadow: 0 1px 4px rgba(123, 176, 196, 0.1);
  transform: translateY(0);
}
</style>
