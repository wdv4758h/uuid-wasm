use wasm_bindgen::prelude::*;
use uuid::Uuid;


#[wasm_bindgen]
pub fn uuid4() -> String {
    Uuid::new_v4().to_string()
}
