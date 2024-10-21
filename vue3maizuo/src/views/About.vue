<template>
    <div class="Mycontainer" v-for="i in arr" :key="i">
        <div class="flex"><img :src="i" alt=""></div>
    </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.query.id
const arr = ref([])
const axios = inject('axios')
function getData(id) {

    //   axios用法
    axios({
        url: `https://m.maizuo.com/gateway?filmId=${id}&k=1134578`,
        headers: {
            "X-Host": "mall.film-ticket.film.info"
        }
    }).then(res => {
        // console.log(res.data.data.film.photos);
        // arr.value = res.data.data.film.photos;
        
    }).catch(err => {
        console.log(err);
    })





    //fetch写法
    fetch(`https://m.maizuo.com/gateway?filmId=${id}&k=1134578`, {
        headers: {
            "X-Host": "mall.film-ticket.film.info",
        }
    }).then(res => res.json()).then(res => {
        console.log(res)
        arr.value = res.data.film.photos
    })
        .catch(err => console.log(err))
}
onMounted(() => {
    getData(id)
})
</script>


<style scoped>
.Mycontainer{
    display: flex;
}
</style>