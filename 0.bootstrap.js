(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg sync recursive":
/*!*******************!*\
  !*** ../pkg sync ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"../pkg sync recursive\";\n\n//# sourceURL=webpack:///../pkg_sync?");

/***/ }),

/***/ "../pkg/uuid_wasm.js":
/*!***************************!*\
  !*** ../pkg/uuid_wasm.js ***!
  \***************************/
/*! exports provided: __wbg_new_3a746f2619705add, __wbg_call_f54d3a6dadb199ca, __wbg_self_ac379e780a0d8b94, __wbg_crypto_1e4302b85d4f64a2, __wbg_getRandomValues_1b4ba144162a5c9e, __wbg_getRandomValues_1ef11e888e5228e9, __wbg_require_6461b1e9a0d7c34a, __wbg_randomFillSync_1b52c8482374c55b, uuid4, __wbindgen_is_undefined, __wbindgen_jsval_eq, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_3a746f2619705add\", function() { return __wbg_new_3a746f2619705add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_f54d3a6dadb199ca\", function() { return __wbg_call_f54d3a6dadb199ca; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_ac379e780a0d8b94\", function() { return __wbg_self_ac379e780a0d8b94; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_1e4302b85d4f64a2\", function() { return __wbg_crypto_1e4302b85d4f64a2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_1b4ba144162a5c9e\", function() { return __wbg_getRandomValues_1b4ba144162a5c9e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_1ef11e888e5228e9\", function() { return __wbg_getRandomValues_1ef11e888e5228e9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_6461b1e9a0d7c34a\", function() { return __wbg_require_6461b1e9a0d7c34a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_1b52c8482374c55b\", function() { return __wbg_randomFillSync_1b52c8482374c55b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uuid4\", function() { return uuid4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_jsval_eq\", function() { return __wbindgen_jsval_eq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _uuid_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uuid_wasm_bg */ \"../pkg/uuid_wasm_bg.wasm\");\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _uuid_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_uuid_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __wbg_new_3a746f2619705add(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __wbg_call_f54d3a6dadb199ca(arg0, arg1) {\n    return addHeapObject(getObject(arg0).call(getObject(arg1)));\n}\n\nfunction __wbg_self_ac379e780a0d8b94(arg0) {\n    return addHeapObject(getObject(arg0).self);\n}\n\nfunction __wbg_crypto_1e4302b85d4f64a2(arg0) {\n    return addHeapObject(getObject(arg0).crypto);\n}\n\nfunction __wbg_getRandomValues_1b4ba144162a5c9e(arg0) {\n    return addHeapObject(getObject(arg0).getRandomValues);\n}\n\nfunction getArrayU8FromWasm(ptr, len) {\n    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction __wbg_getRandomValues_1ef11e888e5228e9(arg0, arg1, arg2) {\n    let varg1 = getArrayU8FromWasm(arg1, arg2);\n    getObject(arg0).getRandomValues(varg1);\n}\n\nfunction __wbg_require_6461b1e9a0d7c34a(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(__webpack_require__(\"../pkg sync recursive\")(varg0));\n}\n\nfunction __wbg_randomFillSync_1b52c8482374c55b(arg0, arg1, arg2) {\n    let varg1 = getArrayU8FromWasm(arg1, arg2);\n    getObject(arg0).randomFillSync(varg1);\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _uuid_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _uuid_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_uuid_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n/**\n* @returns {string}\n*/\nfunction uuid4() {\n    const retptr = globalArgumentPtr();\n    _uuid_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"uuid4\"](retptr);\n    const mem = getUint32Memory();\n    const rustptr = mem[retptr / 4];\n    const rustlen = mem[retptr / 4 + 1];\n\n    const realRet = getStringFromWasm(rustptr, rustlen).slice();\n    _uuid_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n    return realRet;\n\n}\n\nfunction __wbindgen_is_undefined(i) { return getObject(i) === undefined ? 1 : 0; }\n\nfunction __wbindgen_jsval_eq(a, b) { return getObject(a) === getObject(b) ? 1 : 0; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n\n\n//# sourceURL=webpack:///../pkg/uuid_wasm.js?");

/***/ }),

/***/ "../pkg/uuid_wasm_bg.wasm":
/*!********************************!*\
  !*** ../pkg/uuid_wasm_bg.wasm ***!
  \********************************/
/*! exports provided: memory, __wbindgen_global_argument_ptr, __wbindgen_free, uuid4 */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./uuid_wasm */ \"../pkg/uuid_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/uuid_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid-wasm */ \"../pkg/uuid_wasm.js\");\n\n\ndocument.getElementById(\"myuuid\").innerHTML = uuid_wasm__WEBPACK_IMPORTED_MODULE_0__[\"uuid4\"]();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);