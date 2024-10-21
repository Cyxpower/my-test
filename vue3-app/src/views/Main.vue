<template>
    <MyInput a="1" b="2" c="3" v-model="text">
        <template #prepend>
            <el-button>Http://</el-button>
        </template>
        <template #append>
            <el-button>Search</el-button>
        </template>

    </MyInput>
</template>

<script setup>
import MyInput from '../components/MyInput.vue'
import { ref } from 'vue';

const text = ref('hello world')

</script>

<style lang="scss" scoped>

</style>