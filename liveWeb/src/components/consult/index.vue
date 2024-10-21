<template>
  <div class="consult" v-if="consultShow">
    <div class="consult_banner">
      <div class="left">{{ name }}</div>
      <div class="right" @click="showScan">立即咨询</div>
    </div>
    <el-dialog v-model="dialogVisible" width="384" :before-close="showScan">
      <div class="dialogzixun">
        <div class="dialog-title">立即咨询</div>
        <img src="../../../public/images/units/ma_liurong.png" alt="" />
        <div class="dialog-content">请使用手机微信扫描二维码咨询</div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import router from "@/router";
let name = ref("");
let consultShow = ref(true);


const dialogVisible = ref(false)
const showScan = () => {
  dialogVisible.value = !dialogVisible.value
}

watchEffect(() => {
  console.log(router.currentRoute.value);
  if (router.currentRoute.value.name) {
    name.value = router.currentRoute.value.name;
    consultShow.value = router.currentRoute.value.meta.isAuth;
  }

  //   //判断路由是否真正的跳转到对应的路由，如果是，渲染新的菜单
  //   if (router.currentRoute.value.path) {
  //     routeName.value = router.currentRoute.value.path;
  //     console.log(routeName.value);
  //     let arr = list.value.filter(
  //       (e) => e.router == router.currentRoute.value.path
  //     );
  //     activeIndex.value = arr[0].index;
  //   }
});
</script>

<style lang="scss" scoped>
:deep(.el-dialog) {
  height: 396px;
  border-radius: 10px;

  .dialogzixun {
    width: 100%;

    img {
      width: 222px;
      height: 222px;
      margin: 0 auto;
      display: block;
      margin-top: 30px;
      margin-bottom: 25px;
    }

    .dialog-content {
      width: 100%;
      height: 14px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      font-size: 14px;
      color: #666666;
      text-align: center;
    }
  }

  .dialog-title {
    width: 100%;
    height: 23px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    font-size: 24px;
    color: #2e3135;
    // line-height: 152px;
    text-align: center;
  }
}

.consult {
  width: 100%;

  height: 40px;

  background: #262626;
  margin-top: 70px;

  .consult_banner {
    width: 1000px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right {
      width: 60px;
      height: 20px;
      border: 1px solid #ededed;
      border-radius: 8px;
      text-align: center;
      line-height: 20px;
      color: #ededed;
      font-size: 12px;
      cursor: pointer;
    }

    .left {
      color: #999999;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
    }
  }
}
</style>
