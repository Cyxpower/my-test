<template>
    <div class="bg">
        <div @click="haha"> 我是语法1:{{ c }} <span>(我会被缓存)</span> </div>
        <div> 我是语法2计算属性:{{ isLong }}</div>
        <div><input type="text" ref="oninput" v-model="c"></div>
        <div><router-link to="About">echarts中国地图</router-link></div>
        <div><router-link to="List">点击我查看持久化存储</router-link></div>
        <div><router-link to="Slot">点击我查看插槽</router-link></div>
        <div><router-link to="Background">点击查看星空音乐</router-link></div>
        <Navbar message="你好我是父组件传来的东西" :bol="true"></Navbar>
        <van-cell draggable class="w-1/2" center :title="` ${theme === 'light' ? '亮色' : '暗色'}主题（点击切换）`">
            <template #right-icon>
                <van-switch v-model="checked" inactive-color="gray" @change="print1" />
            </template>
        </van-cell>
    </div>
</template>

<script setup>



import { reactive, computed, onMounted, watch, ref } from 'vue'
import Navbar from './Navbar.vue';
import { useTheme } from '../store/useTheme'



const { theme } = useTheme()
const checked = ref(true)
function print1(e) {
    if (e) {
        theme.value = 'light'
    }
    else {
        theme.value = 'dark'
    }
}
onMounted(() => {
    oninput.value.focus()
})
const f = reactive({ d: 111, e: 2222 })
const c = ref(2) // 使用 ref 创建响应式数据
const oninput = ref(null)
const b = 1111
function haha() {
    let a = 1
    console.log(c.value);
    console.log(f.d);
    c.value = 3
    f.e = "erewrew"
    console.log(f.e);
}
watch(c, (newValue, oldValue) => {
    console.log(oldValue + '改变成了 ' + newValue);
})
const isLong = computed(() => {
    return 'NO'
})

</script>

<style scoped>
.bg {
    height: 100vh;
    background: linear-gradient(to bottom, var(--bg1), var(--bg2));
}
</style>

