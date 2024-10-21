<template>
    <div class="container">
        <van-nav-bar>
            <template #title>
                <van-icon name="fire-o" color="#ee0a24" size="40" />
            </template>
            <template #right>
                <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" size="40" />
            </template>
            <template #left>
                <van-icon name="chat-o" size="40" />
            </template>
        </van-nav-bar>
    </div>
    <div class="h-16 bg-gray-800 flex text-gray-300 px-5 items-center">
        <a href="" class="mr-5"><van-icon class="h-full" name="phone" size="40"></van-icon></a>
        <nav class="flex items-center ">
            <a href="" class="px-5 hover:bg-black mx-1 py-2 rounded-lg">仪表盘</a>
            <a href="" class="px-5 hover:bg-black mx-1 py-2 rounded-lg">工程</a>
            <a href="" class="px-5 hover:bg-black mx-1 py-2 rounded-lg">团队</a>
            <a href="" class="px-5 hover:bg-black mx-1 py-2 rounded-lg">日历</a>
        </nav>
        <div class="group ml-auto flex items-center relative">
            <van-icon name="user" size="40" class="rounded-full"></van-icon>
            <div
                class="absolute bg-white text-gray-700 text-sm top-14 w-48 right-0 shadow-lg ring-1 ring-black ring-opacity-5 rounded-md py-2 scale-0 group-hover:scale-100 duration-300 origin-top-right">
                <nav>
                    <a href="" class="block px-4 py-2 hover:bg-gray-200">个人资料</a>
                    <a href="" class="block px-4 py-2 hover:bg-gray-200">设置</a>
                    <a href="" class="block px-4 py-2 hover:bg-gray-200">重置</a>
                    <a href="" class="block px-4 py-2 hover:bg-gray-200">退出</a>
                </nav>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center">
        <van-button @click="animation(1500, price, toPrice, (val) => {
            price = val.toFixed(2)
        })" class="bg-blue-500" type="primary">打印</van-button>
        <label>价格：{{ price }}</label>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const price = ref(5000)
const toPrice = ref(100)

//动画函数的实现
function animation(duration, from, to, onProgress) {
    const startTime = Date.now()  //定义一个开始的时间
    const speed = (to - from) / duration //定义一个动画的速度
    let value = from
    function _run() {
        //让value发生变化
        const now = Date.now()
        const time = now - startTime

        if (time >= duration) {
            value = to
            onProgress && onProgress(value)
            return
        }
        value = from + speed * time
        onProgress && onProgress(value)

        //注册下一次的变化
        requestAnimationFrame(_run)
    }
    _run()

}

</script>

<style scoped></style>
