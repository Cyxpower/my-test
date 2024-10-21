<template>
  <div class="home">
    <div class="h_content1">
      <img class="banner" src="../assets/index/banner@2x.png" alt="" />
      <h1>10.1寸直播一体机</h1>
      <div class="detail">
        <span>轻巧便携 | 功能强大 | 操作简单</span>
      </div>
      <div class="check">立即查看</div>

      <!-- 两个按钮部分 -->
      <div class="left">
        <img class="btnTwo" src="../assets/index/icon_zuo@2x.png" alt="" />
      </div>
      <div class="right">
        <img class="btnTwo" src="../assets/index/icon_you@2x.png" alt="" />
      </div>
    </div>
    <div class="h_content2">
      <img class="bgp" src="../assets/index/img_01@2x.png" alt="" />
      <h1>直播间搭建</h1>
      <p>
        为您提供专业的直播间搭建整套软硬件应用解决方案，
        赋能客户直播间从“0”到“1”发展，大步迈进直播时代。
      </p>
      <div class="greenMore">
        <div class="g_one">绿幕虚拟直播间搭建</div>
        <div class="g_two">多机位直播间搭建</div>
      </div>
      <div class="more">了解更多 ></div>
    </div>
    <div class="h_content3">
      <div>
        <img src="../assets/index/img02@2x.png" alt="" />
        <h1>直播大屏</h1>
        <p>多功能聚合于一身，集成式智慧直播终端</p>
        <div class="size">
          <div>32寸</div>
          <div>43寸</div>
        </div>
        <div class="more">了解更多 ></div>
      </div>
      <div>
        <img src="../assets/index/img02@2x.png" alt="" />
        <h1>直播一体机</h1>
        <p>一机集成多项功能，一人一机即可完成直播123</p>
        <div class="size">
          <div>10.1寸</div>
          <div>15.6寸</div>
        </div>
        <div class="more">了解更多 ></div>
      </div>
    </div>
    <div class="h_content4">
      <h1>全场景直播解决方案</h1>
      <div class="ListBox">
        <div class="btnList">
          <div
            class="btn"
            :class="{ active4: index == active4Index }"
            v-for="(item, index) in 6"
            :key="index"
          >
            <span>电商直播</span>

            <span v-if="index == active4Index" class="line"></span>
            <span v-else class="line noLine"></span>
          </div>
        </div>
      </div>
      <!-- 内容展示 -->
      <div class="c4Detail">
        <img
          class="c4Bgp"
          src="../assets/index/img_xiaochengxu1@2x.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const pageHeight = ref(0);
const active4Index = ref(0);

// 滚动条监听
const con1 = ref(); //第一个板块的高度
const opacity = ref(0);
const con2 = ref();
onMounted(() => {
  // let con1Height = con1.value.clientHeight
  // var con2Hei= con1Height/2
  pageHeight.value = document.documentElement.scrollHeight;
  console.log(pageHeight);
  // 监听滚动条位置
  window.addEventListener("scroll", scrollTop, true);
});
// 实时滚动条高度
const scrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  let con1Height = con1.value.clientHeight;
  opacity.value = scroll / con1Height;
  // console.log(Number(pageHeight._value)/Number(scroll))
};
const activeIndex = ref(0);
const change = (index) => {
  activeIndex.value = index;
};
</script>
<style lang="scss" scoped>
.home {
  background-color: white;
}
.h_content1 {
  width: 100%;
  height: 680px;
  background-color: white;
  position: relative;
  margin-bottom: 10px;
  .banner {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  h1 {
    font-size: 40px;
    position: absolute;
    top: 250px;
    left: 463px;
    color: white;
    margin: 0 !important;
  }
  .detail {
    position: absolute;
    left: 463px;
    top: 316px;
    color: #999999;
    font-size: 18px;
  }
  .check {
    width: 148px;
    height: 50px;
    background: linear-gradient(90deg, #a9e137, #2fd59d);
    position: absolute;
    color: white;
    top: 365px;
    left: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    font-size: 18px;
    cursor: pointer;
  }
  .left {
    position: absolute;
    left: 356px;
    top: 576px;
  }
  .right {
    position: absolute;
    right: 356px;
    top: 576px;
  }
  .btnTwo {
    width: 44px;
    height: 44px;
    cursor: pointer;
  }
}
.h_content2 {
  width: 100%;
  height: 488px;
  background-color: white;
  position: relative;
  margin-bottom: 10px;
  color: white;
  .bgp {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  h1 {
    position: absolute;
    font-size: 32px;
    top: 171px;
    left: 461px;
    margin: 0 !important;
  }
  p {
    position: absolute;
    left: 461px;
    top: 220px;
    width: 424px;
    height: 44px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #999999;
    line-height: 28px;
    margin: 0 !important;
  }
  .greenMore {
    height: 30px;
    width: 330px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    position: absolute;
    top: 295px;
    left: 462px;
    color: #cacaca;
    .g_one {
      width: 160px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #282a2d;
    }
    .g_two {
      width: 160px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #282a2d;
    }
  }
  .more {
    position: absolute;
    top: 350px;
    left: 463px;
    font-size: 12px;
    color: #67d95e;
  }
}
.h_content3 {
  width: 100%;
  height: 488px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  > div {
    width: 955px;
    height: 100%;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    h1 {
      position: absolute;
      text-align: center;
      color: white;
      width: 100%;
      top: 70px;
      margin: 0 !important;
    }
    p {
      position: absolute;
      text-align: center;
      color: #999999;
      width: 100%;
      top: 120px;
      margin: 0 !important;
    }
    .size {
      position: absolute;
      top: 160px;
      left: 400px;
      display: flex;
      justify-content: space-between;
      width: 150px;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #666767;
        width: 70px;
        height: 30px;
        color: #cacaca;
      }
    }
    .more {
      width: 100%;
      color: #67d95e;
      position: absolute;
      top: 210px;
      text-align: center;
    }
  }
}
.h_content4 {
  width: 100%;
  height: 813px;
  margin-bottom: 10px;
  background: linear-gradient(0deg, #2e3135 0%, #2e3532 100%);
  padding-top: 100px;
  h1 {
    text-align: center;
    color: white;
    font-size: 36px;
    margin: 0 !important;
  }
  .ListBox {
    width: 100%;
    border-bottom: 1px solid #494949;
    .btnList {
      width: 1000px;
      margin: 0 auto;
      height: 100%;
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        color: #999999;
        cursor: pointer;
      }
      .line {
        display: block;
        width: 26px;
        height: 4px;
        background: #67d95e;
        margin-top: 22px;
      }
      .noLine {
        background: #2e3334;
      }
    }
  }
  .c4Detail {
    width: 1000px;
    height: 288px;
    background: linear-gradient(107deg, #585959 0%, #414344 100%);
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 130px;
    position: relative;
    padding: 0 49px 0 85px;
    .c4Bgp {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
.active4 {
  color: #67d95e !important;
}
</style>
