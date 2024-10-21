<template>
    <div>
        {{title}} {{title2}}
        <!-- 我想修改title的值 -->
        <button @click="change">修改title</button>
    </div>
</template>

<script>
    export default {
        // 接收我组件传递过来的值
        props:{
            title:String,
            title2:String
        },

        methods:{
            change(){
                this.$emit("fchange",{title:"我被修改了",title2:"232323"})
            }
        }
    }
</script>

