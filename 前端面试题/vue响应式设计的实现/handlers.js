import { track, trigger } from "./effect.js"
import { reactive } from "./reactive.js"
import { isObject } from "./utils.js"

export const handlers = {
    get(target, key,recievier) {
        //依赖收集
        track(target, key)
        const result = Reflect.get(target, key, recievier) //返回对象相应属性值
        if (isObject(result)) {
            return reactive(result)
        }
        return result
    },
    set(target, key, value,recievier) {
        //派发更新
        trigger(target, key)
        return Reflect.set(target, key, value,recievier)
    },
    has(target,key) { 
        track(target, key)
        return Reflect.has(target,key)
    }                   
}