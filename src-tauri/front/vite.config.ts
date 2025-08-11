import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // 确保端口号与 tauri.conf.json 匹配
    server: {
        port: 5173
    }
});