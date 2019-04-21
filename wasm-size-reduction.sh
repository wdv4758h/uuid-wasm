#!/bin/sh

DIR="pkg"
NAME="uuid_wasm_bg"
SRC_WASM="${DIR}/${NAME}.wasm"
SNIP_WASM="${DIR}/${NAME}_snip.wasm"
OPT_WASM="${DIR}/${NAME}_opt.wasm"

wasm-snip --snip-rust-panicking-code ${SRC_WASM} -o ${SNIP_WASM}
wasm-opt ${SNIP_WASM} -Os -o ${OPT_WASM}
mv ${OPT_WASM} ${SRC_WASM}
