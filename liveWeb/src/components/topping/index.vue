<template>
  <div
    :class="{ topping: true, restoration: scrollTop > 1500 }"
    @click="scrollTopFn"
  ></div>
</template>

<script setup>
import router from "@/router";
const scrollTop = ref(0);
const scrollHandler = () => {
  scrollTop.value = document.documentElement.scrollTop;
};
function scrollTopFn() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", scrollHandler);
watchEffect(() => {
  //判断路由是否真正的跳转到对应的路由，如果是，渲染新的菜单
  if (router.currentRoute.value.path) {
    scrollTopFn();
  }
});
</script>

<style lang="scss" scoped>
.topping {
  position: fixed;
  width: 64px;
  height: 64px;
  background-image: url("../../../public/images/home/icon_zhiding.png");
  background-repeat: no-repeat;
  background-size: 100%;
  right: 36px;
  bottom: 36px;
  z-index: 10000;
  transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
  transform: translateY(2.08vw);
  opacity: 0;
}
.restoration {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transform: scale(1);
}
</style>
