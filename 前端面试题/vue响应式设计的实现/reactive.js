
import { handlers } from "./handlers.js"
import { isObject } from "./utils.js"
const targetMap = new WeakMap() 
export function reactive(target) { 
    if (!isObject(target)) {
        return target  //如果不是对象那么直接返回原来的值
    }
    if (targetMap.has(target)) {
        return targetMap.get(target)   //如果已经代理过了 那么直接返回代理
    }
    const proxy =  new Proxy(target,handlers )
    targetMap.set(target, proxy)
    return proxy
}