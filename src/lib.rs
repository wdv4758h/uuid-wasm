use wasm_bindgen::prelude::*;
use uuid::Uuid;
use wee_alloc;


// Use `wee_alloc` as the global allocator.
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen]
pub fn uuid4() -> String {
    Uuid::new_v4().to_string()
}
