import { invoke } from "@tauri-apps/api/core";

// 移除不必要的 waitForTauri 函数，因为 vite 会确保模块加载
window.addEventListener('DOMContentLoaded', () => {
    console.log("页面加载完成");
    setupButtonHandler();
});

function setupButtonHandler() {
    const btn = document.getElementById("btn");

    if (!btn) {
        console.error("找不到按钮元素，请检查 HTML");
        return;
    }

    btn.addEventListener("click", async () => {
        console.log("按钮点击事件触发");
        try {
            console.log("调用后台命令 greet_cmd，参数：{ name: 'Tauri用户' }");
            const response = await invoke("greet_cmd", { name: "Tauri用户" });
            console.log("后台返回响应：", response);
            alert(response);
        } catch (e) {
            console.error("调用后台失败，错误信息：", e);
            alert("调用后台失败：" + e);
        }
    });
}