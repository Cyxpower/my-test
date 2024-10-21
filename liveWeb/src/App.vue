<template>
  <Header />
  <Consult />
  <Topping />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>
<script setup>
import { RouterView, useRouter, useRoute } from "vue-router";
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";
import Topping from "@/components/topping/index.vue";
import Consult from "@/components/consult/index.vue";
import { ref, watch } from "vue";
const router = useRouter();
const route = useRoute();
// 监听路由变化
watch(
  () => route.path,
  () => {
    console.log(route.path);
    // if(route.path == '/'){
    //   activeIndex.value = 0;
    //   bgc.value = '#F9FFFB'
    // }else if(route.path == '/advantage'){
    //   activeIndex.value = 1;
    //   bgc.value = '#B6F3E0'

    // }else if(route.path == '/case'){
    //   activeIndex.value = 2;
    //   bgc.value = '#C4FAE8'

    // }else if(route.path == '/join'){
    //   activeIndex.value = 3;
    //   bgc.value = '#F8FFFB'

    // }
  }
);

const list = ref([
  {
    title: "首页",
    router: "/",
    color: "#F9FFFB",
  },
  {
    title: "产品中心",
    router: "/advantage",
    color: "#B6F3E0",
  },
  {
    title: "解决方案",
    router: "/case",
    color: "#C4FAE8",
  },
  {
    title: "渠道合作",
    router: "/join",
    color: "#F8FFFB",
  },
  {
    title: "关于我们",
    router: "/join",
    color: "#F8FFFB",
  },
]);
const bgc = ref("#000000");
const activeIndex = ref(0);
const change = (index) => {
  activeIndex.value = index;
  // bgc.value = list._rawValue[index].color
  activeIndex.value = index;
  router.push({
    path: list._rawValue[index].router,
  });
};
</script>
<style lang="scss" scoped>
.container {
  // min-height: 2000px;
}
</style>
