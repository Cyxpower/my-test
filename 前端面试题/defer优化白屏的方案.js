import { ref, onUnmounted } from 'vue'

/**
 * @author 陈彦欣
 * @param {Number} maxCount  默认的最大值
 * @return {Function}
 */


 


export function useDefer(maxCount = 100) {   //暴露一个方法 方法返回一个函数  //设置一个默认的数值 
    const frameCount = ref(1)
    let rafId;
    function updateFrameCount() {
        rafId = requestAnimationFrame(() => {
            frameCount.value++
            if (frameCount.value >= maxCount) { //超过默认值之后不在进行增加 
                return
            }
            updateFrameCount()
        })
    }
    updateFrameCount()   //一开始启动函数
    onUnmounted(() => {
        cancelAnimationFrame(rafId) //卸载组件之后进行停止渲染
    })
    return function (n) {
        return frameCount.value >= n
    }
}