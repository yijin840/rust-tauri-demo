// src/lib.rs

pub fn greet(name: &str) -> String {
    println!("你好，{}！来自 src/lib.rs 的问候。", name);
    format!("你好，{}！来自 src/lib.rs 的问候。", name)
}
