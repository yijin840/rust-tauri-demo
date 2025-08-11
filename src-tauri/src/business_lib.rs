// src-tauri/src/business_lib.rs

#[tauri::command]
pub(crate) fn greet_cmd(name: &str) -> String {
    println!("greet_cmd 被调用，name={}", name);
    format!("你好，{}！", name)
}
