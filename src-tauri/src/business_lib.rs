// src-tauri/src/business_lib.rs

use rtd::greet;

#[tauri::command]
pub(crate) fn greet_cmd(name: &str) -> String {
    greet(name)
}
