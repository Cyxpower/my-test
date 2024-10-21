<template>
    <div class="flex justify-center items-center text-center">
        <van-search input-align="center" v-model="search" placeholder="请输入搜索关键词" @search="getData(search)" />
    </div>
    <div class="flex justify-center items-start  flex-wrap gap-6  px-64 w-full ">
        <div class="border-2 border-gray  rounded-md p-4 my-16 flex " v-for="i in arr" :key="i"
            @click="toDesc(i.filmId)">
            <img class="w-48 h-60 border-2 rounded-md " :src=i.poster alt="">
            <div class="px-8 pb-8">
                <p class="text-2xl font-bold mb-4">{{ i.name }}</p>
                <p class="text-xl  text-gray-500 mb-2">{{ i.category }}</p>
                <p v-if="i.grade">评分：{{ i.grade ? i.grade : '' }}</p>
                <p class="my-1">首映时间：{{ dayjs(i.premiereAt * 1000).format('YYYY年MM月DD日') }}</p>
                <p class="mytext">{{ i.synopsis }}</p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
const axios = inject("axios");
const router = useRouter();
const arr = ref([]);
const search = ref();
onMounted(() => {
})

function getData(pageSize) {
    axios({
        url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=${pageSize}&type=1&k=6845035`,
        method: "get",
        headers: {
            "X-Host": "mall.film-ticket.film.list"
        }
    }).then(res => {
        console.log(res);
        arr.value = res.data.data.films;
    }).catch(err => {
        console.log(err);

    })
}
function toDesc(id) {
    console.log(id);
    router.push({
        path: '/about',
        query: { id: id }
    })
}

</script>

<style scoped>
html{
    min-width: 1000px;
}
.mytext {
text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp:3;
    -webkit-box-orient: vertical;
    width: 400px;
}

</style>