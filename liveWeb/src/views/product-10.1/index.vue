<template>
  <div class="product">
    <div class="product__content">
      <div
        :class="{ product__content_one: true, restoration: immediatelyshow }"
      >
        10.1寸直播一体机
      </div>
      <div
        :class="{ product__content_two: true, restoration: immediatelyshow }"
      >
        <div class="test">轻巧便携 | 功能强大 | 操作简单</div>
      </div>
      <div
        :class="{ product__content_shree: true, restoration: immediatelyshow }"
      >
        <div class="product__content_shree_btn" @click="show">立即咨询</div>
      </div>
      <div
        :class="{ product__content_four: true, restoration: immediatelyshow }"
      >
        <div class="product__content_four_img"></div>
      </div>
    </div>
    <div class="core_highlights">
      <div class="core_highlights_nav">九大核心亮点</div>
      <div class="core_highlights_nav_two">灵巧智造，直播一体</div>
      <div
        :class="{
          core_highlights_one: true,
          restoration: scrollTop > fontSize * 18.4,
        }"
      >
        <div
          class="box"
          v-for="(item, index) in coreHighlights"
          :key="item.text"
        >
          <div class="img">
            <img
              :src="`../../../public/images/10.1/icon_00${index + 1}.png`"
              alt=""
            />
          </div>
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
      <div
        :class="{
          core_highlights_two: true,
          restoration: scrollTop > fontSize * 32.8,
        }"
      >
        <div
          class="box"
          v-for="(item, index) in coreHighlightsTwo"
          :key="item.text"
        >
          <div class="img">
            <img
              :src="`../../../public/images/10.1/icon_00${index + 6}.png`"
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
          restoration: scrollTop > fontSize * 67.5,
        }"
      >
        <div class="product_Introduction_title">
          全轻薄便携设计 户外也能畅快直播
        </div>
        <div class="product_Introduction_text">
          轻薄机身设计，全机重量比传统直播一体机轻70%
          新一代户外直播网红神器，随时随地马上开播
        </div>
      </div>
    </div>
    <div class="product_Introduction_two">
      <div
        :class="{
          product_Introduction_two_nav: true,
          restoration: scrollTop > fontSize * 103,
        }"
      >
        <div class="product_Introduction_two_nav_one">
          多种功能集成 高质量开播仅需一机
        </div>
        <div class="product_Introduction_two_nav_two">
          抛弃传统直播的多设备联动，直播一体机身兼数职
        </div>
        <div class="product_Introduction_two_nav_two">
          汇聚手机、导播台、麦克风、摄像机、电脑和专业监视器功能于一身
        </div>
      </div>
      <div class="product_Introduction_two_information">
        <div class="product_Introduction_img"></div>
        <div class="left"></div>
        <div :class="{ right: true, restoration: scrollTop > fontSize * 125 }">
          <div
            class="box"
            v-for="(item, index) in productIntroductionInformation"
            :key="item.name"
          >
            <img
              :src="`../../../public/images/10.1/img_product_${index}.png`"
              alt=""
            />
            <div class="text">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product_selling_points">
      <div
        :class="{
          product_selling_points_one: true,
          restoration: scrollTop > fontSize * 181,
        }"
      >
        <div class="title">清晰提词器</div>
        <div class="content">
          从客户真实场景出发，提供满足教育培训、知识付费、企业内训等知识直播需求。
        </div>
        <div class="img"></div>
      </div>
      <div
        :class="{
          product_selling_points_two: true,
          restoration: scrollTop > fontSize * 181,
        }"
      >
        <div class="images">
          <div class="title">5000W超清摄像</div>
          <div class="content">
            搭载5000w超清像素前置摄像头，清晰捕捉画面细节。
          </div>
          <div class="img"></div>
        </div>
        <div class="learning_costs">
          <div class="title">0学习成本即时上手</div>
          <div class="content">UI界面清晰易懂，新人可即时上手。</div>
          <div class="img"></div>
        </div>
      </div>
      <div
        :class="{
          product_selling_points_shree: true,
          restoration: scrollTop > fontSize * 181,
        }"
      >
        <div class="endurance">
          <div class="title">8000mAh长续航</div>
          <div class="content">自带长续航电池，理论使用时长达5小时。</div>
          <div class="img"></div>
        </div>
        <div class="live_broadcast">
          <div class="title">互视达AI数字人 技术辅助直播</div>
          <div class="content">
            打造虚拟主播，支持数字人7*24小时自动化直播。
          </div>
          <div class="img"></div>
        </div>
      </div>
      <div
        :class="{
          product_selling_points_four: true,
          restoration: scrollTop > fontSize * 181,
        }"
      >
        <div class="title">绿幕智能一键抠图</div>
        <div class="content">
          绿幕抠图可切换虚拟背景，支持视频图片幻灯片背景，直播画面可创建第三图层画面。
        </div>
        <div class="img"></div>
      </div>
    </div>
    <div class="diversification">
      <div class="diversification_title">多场景适用 打造智慧直播间</div>
      <div class="diversification_content">适用于多种直播场景及需求</div>
      <div :class="{ box_list: true }">
        <div :class="{ box: true, restoration: scrollTop > fontSize * 270 }">
          <div class="text">电商卖货直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 270 }">
          <div class="text">户外旅游直播</div>
        </div>
        250
        <div :class="{ box: true, restoration: scrollTop > fontSize * 270 }">
          <div class="text">探店体验直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 270 }">
          <div class="text">科普教学直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 270 }">
          <div class="text">助农直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 270 }">
          <div class="text">新闻直播</div>
        </div>
      </div>
    </div>
    <div class="product_parameters">
      <div class="title">相关参数</div>
      <div
        :class="{
          parameters_one: true,
          restoration: scrollTop > fontSize * 296,
        }"
      >
        <div class="box"></div>

        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div
        :class="{
          parameters_two: true,
          restoration: scrollTop > fontSize * 306,
        }"
      >
        <div class="box">
          <div class="title">屏幕尺寸</div>
          <div class="content">10.1英寸</div>
        </div>
        <div class="box">
          <div class="title">显示区域</div>
          <div class="content">216.96(H)x135.6(V)mm</div>
        </div>
        <div class="box">
          <div class="title">电池容量</div>
          <div class="content">8000mAh</div>
        </div>
        <div class="box">
          <div class="title">前置摄像头</div>
          <div class="content">5000w像素（支持PDAF自动对焦）</div>
        </div>
      </div>
      <div :class="{ parameters_shree: true, restoration: fontSize * 312 }">
        <div class="box">
          <div class="title">高度</div>
          <div class="content">30cm</div>
        </div>
        <div class="box">
          <div class="title">宽度</div>
          <div class="content">16.1cm</div>
        </div>
      </div>
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
let dialogVisible = ref(false);
let immediatelyshow = ref(false);
setTimeout(() => {
  immediatelyshow.value = true;
}, 100);
import { watchEffect } from "vue";
let str = getComputedStyle(window.document.documentElement)["font-size"];
let match = str.match(/\d+/); // \d+ 匹配一个或多个数字
let fontSize = ref(match[0]);
let coreHighlights = ref([
  {
    text: "轻薄便携设计",
  },
  {
    text: "5000w超清摄像",
  },
  {
    text: "AI数字人直播",
  },
  {
    text: "智能绿幕抠图",
  },
  {
    text: "内置电池长续航",
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
function show() {
  dialogVisible.value = true;
}
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
  // console.log(scrollTop.value, "scrollTop");
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
window.scrollTo(0, 0);
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
      height: 592px;
      margin-top: 50px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .product__content_four_img {
        width: 400px;
        height: 592px;
        background-image: url("../../../public/images/10.1/img_10.1.png");
        background-size: 100%;
        background-repeat: no-repeat;
        margin: 0 auto;
        transform: translateX(-50px);
      }
    }
  }
  .core_highlights {
    width: 100%;
    height: 780px;
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
      margin-top: 80px;
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
    background-image: url("../../../public/images/10.1/img_02 (1).png");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;

    transform: translateX(-1px);
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
        width: 365px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        line-height: 28px;
        margin-top: 20px;
      }
    }
  }
  .product_Introduction_two {
    width: 100%;
    height: 1147px;
    background-color: #000000;
    .product_Introduction_two_nav {
      width: 100%;
      height: 457px;
      background-color: #000000;
      padding-top: 200px;
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
      height: 412px;
      background: #1e1e1e;
      position: relative;
      display: flex;
      .product_Introduction_img {
        width: 284px;
        height: 529px;
        background-image: url("../../../public/images/10.1/img_10.1(2).png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        left: 490px;
        top: -60px;
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
      background-image: url("../../../public/images/10.1/img_jiqicanshu.10.1.png");
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
