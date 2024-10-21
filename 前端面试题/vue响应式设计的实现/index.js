import {
    reactive
} from "./reactive.js";
const obj = {
    a: 1,
    b: 2,
    c: {
        d:1
    }
}
const state1 = reactive(obj)

function fn() {
    state1.c.d
}
fn()
// state.a++