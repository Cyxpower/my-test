<template>
    <div>
        Navbar组件:{{ props.message }}
        {{ props.bol }}
    </div>
</template>


<script setup >
import { defineProps } from 'vue';
const props = defineProps({
    message: String,
    bol: Boolean
});
</script>
