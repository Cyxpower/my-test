<template>
    <div class="container">
        {{ counterStore.count }}
        <button  @click="incrementCount">点击我增加</button>
    </div>
</template>

<script setup>
import useCounter from '../store/counter';
import { onMounted } from 'vue';
const counterStore = useCounter()
onMounted(() => {
    init()
})
function incrementCount() {
    counterStore.count++
    sessionStorage.setItem('count', counterStore.count)
}
function init() {
    const i = sessionStorage.getItem('count')
    if (i) {
        counterStore.changecount(i)
    }

}
</script>

<style scoped>
.container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>