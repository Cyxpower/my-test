<template>
  <div class="product">
    <div class="product__content">
      <div
        :class="{ product__content_one: true, restoration: immediatelyshow }"
      >
        15.6寸直播一体机
      </div>
      <div
        :class="{ product__content_two: true, restoration: immediatelyshow }"
      >
        <div class="test">多功能聚合 | 高清像素 | 绿幕抠图</div>
      </div>
      <div
        :class="{ product__content_shree: true, restoration: immediatelyshow }"
      >
        <div
          class="product__content_shree_btn"
          @click="
            () => {
              dialogVisible = true;
            }
          "
        >
          立即咨询
        </div>
      </div>
      <div
        :class="{ product__content_four: true, restoration: immediatelyshow }"
      >
        <div class="product__content_four_img"></div>
      </div>
    </div>
    <div class="core_highlights">
      <div class="core_highlights_nav">多功能聚合 集成式智慧直播终端</div>
      <div class="core_highlights_nav_two">
        智能背景、镜头特写、绿幕抠图、直播提词，一机集合多种功能，一人一机即可完成直播支持预存直播设置，开机即可直播
      </div>
      <div
        :class="{
          core_highlights_one: true,
          restoration: scrollTop > match[0] * 34,
        }"
      >
        <div
          class="box"
          v-for="(item, index) in coreHighlights"
          :key="item.text"
        >
          <div class="img">
            <img
              :src="`../../../public/images/15.6/img_0${index + 1}.png`"
              alt=""
            />
          </div>
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="product_Introduction">
      <div
        :class="{
          product_Introduction_box: true,
          restoration: scrollTop > fontSize * 92.5,
        }"
      >
        <div
          :class="{
            product_Introduction_title: true,
          }"
        >
          4800高清像素&nbsp;&nbsp;&nbsp; 内置直播录制功能
        </div>
        <div class="product_Introduction_text">
          内置4800w超清像素，支持双摄+AF自动聚焦，可在直播时切换任意镜头，方便介绍产品等内容，可同时接入多个摄像头画面；支持视频录制，直播时可将直播画面录制储存到本地硬盘，随时回看直播，轻松复盘。
        </div>
      </div>
      <div
        :class="{
          product_Introduction_init: true,
          restoration: scrollTop > fontSize * 92.5,
        }"
      ></div>
    </div>
    <div class="product_Introduction_shree">
      <div
        :class="{
          product_Introduction_box: true,
          restoration: scrollTop > fontSize * 132,
        }"
      >
        <div
          :class="{
            product_Introduction_title: true,
          }"
        >
          绿幕抠图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          智能背景贴图更换
        </div>
        <div class="product_Introduction_text">
          绿幕抠图可切换虚拟背景，支持视频图片幻灯片。
          直播画面可创建第三图层画面，可进行贴图
        </div>
      </div>
      <div
        :class="{
          product_Introduction_init: true,
          restoration: scrollTop > fontSize * 130,
        }"
      ></div>
    </div>
    <div class="product_Introduction_two">
      <div
        :class="{
          product_Introduction_two_nav: true,
          restoration: scrollTop > fontSize * 160,
        }"
      >
        <div class="product_Introduction_two_nav_one">
          15.6寸可旋转屏 大屏提词器弹幕互动
        </div>
        <div class="product_Introduction_two_nav_two">
          屏幕支持最大90°旋转，竖屏横屏灵活开播；可添加文字提词功能，并可
        </div>
        <div class="product_Introduction_two_nav_two">
          任意移动位置，滚动播放速度、文字大小及颜色均可调节。
        </div>
      </div>
      <div class="product_Introduction_two_information">
        <div
          :class="{
            product_Introduction_img: true,
            restoration: scrollTop > fontSize * 181,
          }"
        ></div>
        <div class="product_Introduction_img_two"></div>
        <div
          :class="{
            product_Introduction_img_three: true,
            restoration: scrollTop > fontSize * 193,
          }"
        ></div>
      </div>
    </div>
    <div class="swiper">
      <div :class="{ test: true, restoration: scrollTop > fontSize * 225 }">
        <div class="test_one">7色LED高颜值补光灯</div>
        <div class="test_two">
          直播一体机自带原型美颜补光灯，支持7种不同颜色自由切换
        </div>
        <div class="test_two">光线充足直播更好看。</div>
      </div>
      <img
        v-for="item in 7"
        :key="item"
        :src="`../../../public/images/15.6/0${item}.png`"
        :class="{ active: item == backgroudIndex, imgpo: true }"
        alt=""
      />
    </div>
    <div class="system">
      <div :class="{ navs: true, restoration: scrollTop > 4800 }">
        <div class="title">安卓11.0系统 配置升级</div>
        <div class="content">
          内置Android11.0系统，强劲性能 支持7*24小时待机，长时直播流畅不卡顿
        </div>
      </div>
    </div>
    <div class="platform">
      <div class="title">丰富扩展接口 支持主流直播平台</div>
      <div class="content">
        支持鼠标和键盘外接，多平台开机随机直播，丰富的多功能接口，满足您不同的直播需求
      </div>
      <div class="box_list">
        <div class="boxs" v-for="item in platformList" :key="item.name">
          <div class="imgs"></div>
          <div class="test">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="product_parameters">
      <div class="title">相关参数</div>
      <div :class="{ parameters_one: true, restoration: scrollTop > 4750 }">
        <div class="box"></div>

        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div :class="{ parameters_two: true, restoration: scrollTop > 4900 }">
        <div class="box">
          <div class="title">屏幕尺寸</div>
          <div class="content">15.6英寸</div>
        </div>
        <div class="box">
          <div class="title">显示区域</div>
          <div class="content">344.2(H)x193.6(V)mm</div>
        </div>
        <div class="box">
          <div class="title">内存</div>
          <div class="content">8+128G</div>
        </div>
        <div class="box">
          <div class="title">前置摄像头</div>
          <div class="content">4800w像素（支持AF自动对焦）</div>
        </div>
      </div>
      <!-- <div :class="{ parameters_shree: true, restoration: scrollTop > 5000 }">
        <div class="box">
          <div class="title">高度</div>
          <div class="content">30cm</div>
        </div>
        <div class="box">
          <div class="title">宽度</div>
          <div class="content">16.1cm</div>
        </div>
      </div> -->
    </div>
    <el-dialog v-model="dialogVisible" width="384" :before-close="handleClose">
      <div class="dialogzixun">
        <div class="dialog-title">立即咨询</div>
        <img src="../../../public/images/units/ma_liurong.png" alt="" />
        <div class="dialog-content">请使用手机微信扫描二维码咨询</div>
      </div>
      <template #footer>
        <!-- <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </div> -->
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";
let dialogVisible = ref(false);
let immediatelyshow = ref(false);
setTimeout(() => {
  immediatelyshow.value = true;
}, 100);
let str = getComputedStyle(window.document.documentElement)["font-size"];
let match = str.match(/\d+/); // \d+ 匹配一个或多个数字
let fontSize = ref(match[0]);
let platformList = ref([
  {
    name: "单反",
  },
  {
    name: "麦克风",
  },
  {
    name: "摄像头",
  },
  {
    name: "键鼠",
  },
  {
    name: "微单",
  },
  {
    name: "声卡",
  },
]);
let coreHighlights = ref([
  {
    text: "专业音响",
  },
  {
    text: "高端手机",
  },
  {
    text: "导播台",
  },
  {
    text: "补光灯",
  },
  {
    text: "专业相机",
  },
  {
    text: "麦克风",
  },
  {
    text: "直播电脑",
  },
  {
    text: "监视器",
  },
]);
let coreHighlightsTwo = ref([
  {
    text: "主流直播平台",
  },
  {
    text: "多机位拍摄",
  },
  {
    text: "直播提词",
  },
  {
    text: "5G无线传屏",
  },
]);
let productIntroductionInformation = ref([
  {
    name: "手机",
  },
  {
    name: "麦克风",
  },
  {
    name: "导播台",
  },
  {
    name: "摄像机",
  },
  {
    name: "电脑",
  },
  {
    name: "监视器",
  },
]);
let backgroudIndex = ref(1);
function setTimebackgroud() {
  setInterval(() => {
    if (backgroudIndex.value == 7) {
      backgroudIndex.value = 1;
    } else {
      backgroudIndex.value += 1;
    }
    console.log(backgroudIndex.value);
  }, 2000);
}
setTimebackgroud();
let productIntroductionShow = ref(false);
let coreHighlightsShow = ref(false);
let coreHighlightsShowTwo = ref(false);
const scrollTop = ref(0);
const scrollHandler = () => {
  scrollTop.value = document.documentElement.scrollTop;
};
window.addEventListener("scroll", scrollHandler);
watchEffect(() => {
  // console.log(document.documentElement.scrollTop);
  // scrollTop.value = document.documentElement.scrollTop;
  console.log(scrollTop.value, "scrollTop");
  if (scrollTop.value > 295) {
    coreHighlightsShow.value = true;
  }
  if (scrollTop.value > 525) {
    coreHighlightsShowTwo.value = true;
  }
  if (scrollTop.value > 1090) {
    productIntroductionShow.value = true;
  }
});
</script>

<style lang="scss" scoped>
.product {
  height: 100%;
  width: 100%;
  // margin-top: 50px;
  .product__content {
    width: 100%;
    height: 900px;
    background: #000000;
    padding-top: 80px;
    box-sizing: border-box;
    .product__content_one {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 40px;

      font-family: Source Han Sans CN;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .product__content_two {
      width: 100%;
      height: 24px;
      margin-top: 24px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .test {
        width: 303px;
        height: 23px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        // line-height: 152px;
        margin: 0 auto;
        text-align: center;
      }
    }
    .product__content_shree {
      width: 100%;
      height: 50px;
      margin-top: 30px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .product__content_shree_btn {
        width: 148px;
        height: 50px;
        background: linear-gradient(90deg, #a9e137, #2fd59d);
        border-radius: 25px;
        color: #fff;

        font-size: 18px;
        line-height: 50px;
        text-align: center;
        margin: 0 auto;
      }
    }
    .product__content_four {
      width: 100%;
      height: 522px;
      margin-top: 80px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .product__content_four_img {
        width: 212px;
        height: 522px;
        background-image: url("../../../public/images/15.6/img_15.6.png");
        background-size: 100%;
        background-repeat: no-repeat;
        margin: 0 auto;
        // transform: translateX(-50px);
      }
    }
  }
  .core_highlights {
    width: 100%;

    height: 929px;
    background: #121212;
    padding-top: 140px;

    padding-left: 450px;
    padding-right: 450px;
    box-sizing: border-box;
    .core_highlights_nav {
      width: 100%;
      height: 35px;
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      line-height: 35px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      // transform: translateY(2.08vw);
    }
    .core_highlights_nav_two {
      width: 100%;

      height: 16px;

      color: #999999;
      text-align: center;
      font-size: 16px;
      margin-top: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      // transform: translateY(2.08vw);
    }
    .core_highlights_one {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 80px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .box {
        width: 235px;
        height: 240px;
        margin-bottom: 20px;
        position: relative;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        img {
          width: 235px;
          height: 240px;
        }
        .text {
          width: 100%;
          // margin-top: 20px;
          text-align: center;

          font-size: 20px;

          font-family: Source Han Sans CN;

          color: #ffffff;
          position: absolute;
          bottom: 30px;
        }
      }
      .box:hover {
        transform: scale(1.1);
      }
    }
    .core_highlights_two {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
      padding: 0px 110px;
      box-sizing: border-box;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .box {
        width: 110px;
        height: 150px;
        img {
          width: 110px;
          height: 110px;
        }
        .text {
          width: 100%;
          margin-top: 20px;
          text-align: center;

          font-size: 15px;

          font-family: Source Han Sans CN;

          color: #ffffff;
        }
      }
    }
  }
  .product_Introduction {
    width: 100%;
    height: 712px;
    // background-image: url("../../../public/images/10.1/img_02 (1).png");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    background-color: #000000;

    // transform: translateX(-1px);
    .product_Introduction_box {
      position: absolute;
      width: 370px;
      height: 200px;
      left: 460px;
      top: 285px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .product_Introduction_title {
        width: 298px;
        height: 85px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #fefefe;
        line-height: 50px;
      }
      .product_Introduction_text {
        width: 407px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        line-height: 28px;
        margin-top: 20px;
      }
    }
    .product_Introduction_init {
      width: 540px;
      height: 360px;
      background-image: url("../../../public/images/15.6/img_luzhi.png");
      background-size: 100%;
      background-repeat: no-repeat;
      position: absolute;
      right: 460px;
      top: 220px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateX(10vw);
      opacity: 0;
    }
  }
  .product_Introduction_shree {
    width: 100%;
    height: 712px;
    // background-image: url("../../../public/images/10.1/img_02 (1).png");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    background-color: #000000;

    // transform: translateX(-1px);
    .product_Introduction_box {
      position: absolute;
      width: 370px;
      height: 200px;
      right: 460px;
      top: 285px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .product_Introduction_title {
        width: 298px;
        height: 85px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #fefefe;
        line-height: 50px;
      }
      .product_Introduction_text {
        width: 407px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        line-height: 28px;
        margin-top: 20px;
      }
    }
    .product_Introduction_init {
      width: 540px;
      height: 360px;
      background-image: url("../../../public/images/15.6/img_lvmu.png");
      background-size: 100%;
      background-repeat: no-repeat;
      position: absolute;
      left: 460px;
      top: 220px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateX(-10vw);
      opacity: 0;
    }
  }
  .product_Introduction_two {
    width: 100%;
    height: 1147px;
    background-color: #000000;
    .product_Introduction_two_nav {
      width: 100%;
      height: 300px;
      background-color: #000000;
      // padding-top: 200px;
      box-sizing: border-box;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .product_Introduction_two_nav_one {
        text-align: center;
        width: 100%;

        height: 50px;

        font-size: 36px;
        line-height: 50px;
        font-weight: bold;
        color: #fff;
      }
      .product_Introduction_two_nav_two {
        width: 100%;
        text-align: center;

        color: #999999;

        font-size: 16px;
        margin-top: 10px;
      }
    }
    .product_Introduction_two_information {
      width: 100%;
      height: 440px;
      // background: #1e1e1e;
      position: relative;
      display: flex;
      .product_Introduction_img {
        width: 338px;
        height: 348px;
        background-image: url("../../../public/images/15.6/img_gaozi.png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        right: 490px;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateY(2.08vw);
        opacity: 0;
        top: 80px;
      }
      .product_Introduction_img_two {
        width: 360px;
        height: 440px;
        position: absolute;
        left: 490px;
        background-image: url("../../../public/images/15.6/jiqi-xuanzhuan01.png");
        background-repeat: no-repeat;
        background-size: 100%;
      }
      .product_Introduction_img_three {
        width: 314px;
        height: 158px;
        position: absolute;
        left: 520px;
        position: absolute;
        top: 160px;
        background-image: url("../../../public/images/15.6/jiqi-xuanzhuan02.png");
        background-repeat: no-repeat;
        background-size: 100%;
        transform: rotate(-90deg);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      }
      .left {
        width: 50%;
        height: 412px;
      }
      .right {
        width: 50%;
        height: 412px;
        display: flex;
        justify-content: space-between;
        padding-right: 400px;
        box-sizing: border-box;
        flex-wrap: wrap;
        padding-top: 68px;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateY(2.08vw);
        opacity: 0;
        .box {
          width: 90px;
          height: 120px;
          margin-left: 90px;
          img {
            width: 90px;
            height: 90px;
          }
          .text {
            text-align: center;
            width: 100%;
            height: 16px;

            font-size: 16px;
            text-align: center;

            color: #ffffff;

            font-weight: 500;
            margin-top: 12px;
          }
        }
      }
    }
  }
  .swiper {
    width: 100%;
    height: 1000px;
    position: relative;
    background-color: #000000;
    .test {
      width: 100%;
      position: absolute;
      left: 0;
      top: 140px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      z-index: 10000;
      .test_one {
        width: 100%;
        // height: 35px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #fefefe;
        text-align: center;
        // line-height: 50px;
      }
      .test_two {
        width: 100%;
        // height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        // line-height: 28px;
        text-align: center;
        margin-top: 16px;
      }
    }
    img {
      width: 100%;
      height: 1000px;
      opacity: 0; /* 初始化所有轮播图都处于完全透明状态 */
      transition: opacity 1s ease-in-out; /* 添加过渡效果，持续1秒，ease-in-out表示平滑进行 */
      position: absolute;
      left: 0;
      top: 0;
    }
    .active {
      opacity: 1;
    }
  }
  .system {
    width: 100%;
    height: 712px;
    background-image: url("../../../public/images/15.6/img_peizhi.png");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    .navs {
      width: 397px;
      position: absolute;
      left: 460px;
      top: 140px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      // opacity: 0;
      .title {
        width: 397px;
        height: 35px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #fefefe;
        line-height: 50px;
      }
      .content {
        width: 301px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        line-height: 28px;
        margin-top: 16px;
      }
    }
  }
  .platform {
    width: 100%;
    height: 840px;
    background: #000000;
    padding-top: 140px;
    padding-left: 460px;
    padding-right: 460px;
    box-sizing: border-box;
    .title {
      width: 100%;
      height: 35px;
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #fefefe;
      // line-height: 50px;
      text-align: center;
    }
    .content {
      width: 100%;
      height: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #999999;
      text-align: center;
      margin-top: 20px;
      // line-height: 28px;
    }
    .box_list {
      width: 100%;
      height: 440px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 100px;
      .boxs {
        width: 320px;
        height: 200px;
        position: relative;
        background: linear-gradient(
          90deg,
          #353534 0%,
          #444444 47%,
          #353534 98%
        );
        border-radius: 10px;
        .imgs {
          width: 220px;
          height: 150px;
          position: absolute;
          left: 0;
          top: 0;
          margin: auto;
          bottom: 0;
          right: 0;
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .test {
          width: 100%;
          height: 16px;
          text-align: center;

          color: #999999;
          position: absolute;
          bottom: 20px;
        }
      }
      .boxs:nth-child(1) {
        .imgs {
          background-image: url("../../../public/images/15.6/img_platform_0.png");
        }
      }
      .boxs:nth-child(2) {
        .imgs {
          background-image: url("../../../public/images/15.6/img_platform_1.png");
        }
      }
      .boxs:nth-child(3) {
        .imgs {
          background-image: url("../../../public/images/15.6/img_platform_2.png");
        }
      }
      .boxs:nth-child(4) {
        .imgs {
          background-image: url("../../../public/images/15.6/img_platform_3.png");
        }
      }
      .boxs:nth-child(5) {
        .imgs {
          background-image: url("../../../public/images/15.6/img_platform_4.png");
        }
      }
      .boxs:nth-child(6) {
        .imgs {
          background-image: url("../../../public/images/15.6/img_platform_5.png");
        }
      }
    }
  }
  .product_selling_points {
    width: 100%;
    height: 780px;
    background: #000000;
    padding: 140px 230px;
    box-sizing: border-box;
    display: flex;
    .product_selling_points_one {
      width: 420px;
      height: 500px;
      background: linear-gradient(0deg, #181c29 0%, #171b27 100%);
      border-radius: 10px;
      padding: 30px 30px 0px 30px;
      box-sizing: border-box;
      position: relative;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .title {
        width: 134px;
        height: 25px;
        font-size: 26px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        line-height: 34px;
      }
      .content {
        width: 359px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        line-height: 28px;
        margin-top: 15px;
      }
      .img {
        width: 273px;
        height: 283px;
        background-image: url("../../../public//images/10.1/img_ticiqi.png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        bottom: 0;
        left: 74px;
      }
    }
    .product_selling_points_one:hover {
      transform: scale(1.05);
    }
    .product_selling_points_two {
      width: 280px;
      height: 100%;
      // background-color: #2fd59d;
      margin: 0px 20px;
      display: flex;
      flex-direction: column;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .images {
        width: 280px;
        height: 280px;
        background: linear-gradient(0deg, #171b27 0%, #171b27 100%);
        border-radius: 10px;
        padding: 30px 30px 0px 30px;
        position: relative;
        box-sizing: border-box;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        .title {
          width: 194px;
          height: 25px;
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          line-height: 34px;
        }
        .content {
          width: 220px;
          height: 44px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
          line-height: 28px;
          margin-top: 15px;
        }
        .img {
          width: 137px;
          height: 102px;
          background-image: url("../../../public/images/10.1/img_chaoqing.png");
          position: absolute;
          background-repeat: no-repeat;
          background-size: 100%;
          bottom: 0;
          left: 72px;
        }
      }
      .learning_costs {
        width: 280px;
        height: 200px;
        background: linear-gradient(0deg, #181c29 0%, #171b27 100%);
        border-radius: 10px;
        margin-top: 20px;
        position: relative;
        box-sizing: border-box;
        padding: 30px 0px 0px 30px;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        .title {
          width: 230px;
          height: 25px;
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          line-height: 34px;
        }
        .content {
          width: 219px;
          height: 44px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
          line-height: 28px;
          margin-top: 15px;
        }
        .img {
          width: 135px;
          height: 98px;
          position: absolute;
          right: 0;
          bottom: 0;
          background-image: url("../../../public/images/10.1/img_xuexi.png");
          background-repeat: no-repeat;
          background-size: 100%;
        }
      }
      .images:hover {
        transform: scale(1.05);
      }
      .learning_costs:hover {
        transform: scale(1.05);
      }
    }
    .product_selling_points_shree {
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .endurance {
        width: 280px;
        height: 200px;
        background: linear-gradient(0deg, #181c29 0%, #171b27 100%);
        border-radius: 10px;
        margin-bottom: 24px;
        padding: 30px 0px 0px 30px;
        box-sizing: border-box;
        position: relative;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        .title {
          width: 203px;
          height: 25px;
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          line-height: 34px;
        }
        .content {
          width: 219px;
          height: 44px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
          line-height: 28px;
          margin-top: 15px;
        }
        .img {
          width: 122px;
          height: 93px;
          position: absolute;
          background-image: url("../../../public/images/10.1/img_xuhang.png");
          background-size: 100%;
          background-repeat: no-repeat;
          bottom: 0;
          left: 94px;
        }
      }
      .live_broadcast {
        width: 280px;
        height: 276px;
        background: linear-gradient(0deg, #181c29 0%, #070d19 100%);
        border-radius: 10px;
        position: relative;
        padding: 30px 0px 0px 30px;
        box-sizing: border-box;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        .title {
          width: 187px;
          height: 59px;
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          line-height: 34px;
        }
        .content {
          width: 220px;
          height: 44px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
          line-height: 28px;
          margin-top: 15px;
        }
        .img {
          position: absolute;
          width: 100px;
          height: 100px;
          background-image: url("../../../public/images/10.1/img_shuziren.png");
          background-size: 100%;
          background-repeat: no-repeat;
          left: 90px;
          bottom: 0;
        }
      }
      .endurance:hover {
        transform: scale(1.05);
      }
      .live_broadcast:hover {
        transform: scale(1.05);
      }
    }

    .product_selling_points_four {
      width: 420px;
      height: 500px;
      background: linear-gradient(0deg, #181c29 0%, #171b27 100%);
      border-radius: 10px;
      padding: 30px 0px 0px 30px;
      box-sizing: border-box;
      position: relative;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .title {
        width: 213px;
        height: 25px;
        font-size: 26px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        line-height: 34px;
      }
      .content {
        width: 359px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        margin-top: 15px;
        line-height: 28px;
      }
      .img {
        width: 330px;
        height: 285px;
        position: absolute;
        bottom: 0;
        left: 45px;
        background-image: url("../../../public//images/10.1/img_lvmu.png");
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }
    .product_selling_points_four:hover {
      transform: scale(1.05);
    }
  }
  .diversification {
    width: 100%;
    height: 934px;
    background: #000000;
    padding-top: 140px;
    box-sizing: border-box;
    padding-left: 212px;
    padding-right: 212px;
    .diversification_title {
      width: 100%;
      text-align: center;

      height: 35px;
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #fefefe;
      line-height: 50px;
    }
    .diversification_content {
      width: 100%;
      height: 15px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #999999;
      line-height: 28px;
      text-align: center;
      margin-top: 20px;
    }
    .box_list {
      width: 100%;
      height: 475px;
      display: flex;
      margin-top: 80px;
      .box {
        width: 266px;
        height: 475px;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        transform: scale(1.2);
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        overflow: hidden;
        opacity: 0;
        .text {
          width: 24px;
          height: 182px;
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          position: absolute;
          left: 0;
          bottom: 0;
          top: 0;
          right: 0;
          margin: auto;
          // line-height: 50px;
        }
      }
      .box:nth-child(1) {
        background-image: url("../../../public/images/10.1/img_hangye01.png");
      }
      .box:nth-child(2) {
        background-image: url("../../../public/images/10.1/img_hangye02.png");
      }
      .box:nth-child(3) {
        background-image: url("../../../public/images/10.1/img_hangye03.png");
      }
      .box:nth-child(4) {
        background-image: url("../../../public/images/10.1/img_hangye04.png");
      }
      .box:nth-child(5) {
        background-image: url("../../../public/images/10.1/img_hangye05.png");
      }
      .box:nth-child(6) {
        background-image: url("../../../public/images/10.1/img_hangye06.png");
      }
    }
  }
  .product_parameters {
    width: 100%;
    height: 886px;
    background: #000000;
    padding-top: 140px;
    box-sizing: border-box;
    padding-left: 460px;
    .title {
      width: 148px;
      height: 35px;
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      line-height: 50px;
    }
    .parameters_one {
      width: 1000px;
      height: 260px;
      background: #353534;
      border-radius: 10px;
      margin-top: 80px;
      padding: 10px 37px;
      box-sizing: border-box;
      background-image: url("../../../public/images/15.6/img_jiqicanshu15.6.png");
      background-size: 100%;
      background-repeat: no-repeat;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .parameters_two {
      width: 1000px;

      height: 102px;
      display: flex;
      margin-top: 20px;
      justify-content: space-between;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .box {
        width: 235px;
        height: 102px;
        background: #353534;
        border-radius: 10px;
        padding: 30px;
        box-sizing: border-box;
        padding-right: 0;
        padding-bottom: 0;
        .title {
          // width: 80px;
          height: 15px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          line-height: 15px;
          // line-height: 50px;
        }
        .content {
          // width: 134px;
          height: 13px;
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
          // line-height: 50px;
          margin-top: 10px;
          // line-height: 13px;
        }
        // .box:nth-child(4) {
        //   margin: 0;
        // }
      }
    }
    .parameters_shree {
      width: 1000px;

      height: 102px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .box {
        width: 490px;
        height: 102px;
        background: #353534;
        border-radius: 10px;
        padding: 30px;
        box-sizing: border-box;
        .title {
          // width: 32px;
          height: 16px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          line-height: 16px;
        }
        .content {
          // width: 32px;
          height: 10px;
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
          // line-height: 50px;
          margin-top: 16px;
          line-height: 10px;
        }
      }
    }
  }
}
.restoration {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transform: translateX(0) !important;
  transform: rotate(0) !important;
  transform: scale(1);
}
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
</style>
