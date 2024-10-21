<template>
  <div class="product_55">
    <div class="banner">
      <div :class="{ title: true, restoration: immediatelyshow }">
        55寸智能直播大屏
      </div>
      <div :class="{ tips: true, restoration: immediatelyshow }">
        玩转直播，轻松带货
      </div>
      <div
        :class="{ zixun: true, restoration: immediatelyshow }"
        @click="
          () => {
            dialogVisible = true;
          }
        "
      >
        立即咨询
      </div>
      <div :class="{ machine: true, restoration: immediatelyshow }"></div>
    </div>
    <div class="buyingPoint">
      <div
        :class="{
          buyingPoint_one: true,
          restoration: scrollTop > fontSize * 26,
        }"
      >
        <div class="one">
          <div class="title">5G传屏</div>
          <div class="content">四方无线传屏</div>
        </div>
        <div class="two">
          <div class="title">直播提词</div>
          <div class="content">产品信息清晰展示</div>
        </div>
        <div class="sthree">
          <div class="stree">
            <div class="title">直播截屏</div>
            <div class="content">联网下载</div>
          </div>
          <div class="four">
            <div class="title">海量应用</div>
            <div class="content">保存精彩瞬间</div>
          </div>
        </div>
      </div>
      <div
        :class="{
          buyingPoint_two: true,
          restoration: scrollTop > fontSize * 38,
        }"
      >
        <div class="item">
          <div class="title">多点触控</div>
          <div class="content">高精度触控</div>
        </div>
        <div class="item">
          <div class="title">电子白板</div>
          <div class="content">随心书写批注</div>
        </div>
        <div class="item">
          <div class="title">横竖切换</div>
          <div class="content">支持90°旋转</div>
        </div>
        <div class="item">
          <div class="title">双向操控</div>
          <div class="content">大屏自由控小屏</div>
        </div>
      </div>
    </div>
    <div class="buyingPoint_two">
      <div class="box">
        <div :class="{ title: true, restoration: scrollTop > fontSize * 59 }">
          多机合一 智慧集成
        </div>
        <div :class="{ content: true, restoration: scrollTop > fontSize * 59 }">
          互视达直播大屏集成手机、平板、提词器、展示板、音响为一体，一机满足直播带货需求，高性价比之选。
        </div>
        <div class="img_two">
          <div class="img_1"></div>
          <div
            :class="{ img_2: true, restoration: scrollTop > fontSize * 86 }"
          ></div>
          <div class="img_3"></div>
        </div>
      </div>
      <div class="box">
        <div :class="{ title: true, restoration: scrollTop > fontSize * 59 }">
          直播提词 产品解说
        </div>
        <div :class="{ content: true, restoration: scrollTop > fontSize * 59 }">
          直播过程中需要讲解的产品信息显示在直播屏上，手机画面太小，直播大屏显示更直观。
        </div>
        <div class="img"></div>
      </div>
    </div>
    <div class="margin">
      <div class="title">电子白板 多点触控</div>
      <div class="content">
        任意直播界面支持圈画重点，支持单点/多点手写触控、手势擦除、字体颜色大小任意选择。
      </div>
      <div class="operate">
        <img
          :src="`../../../public/images/43/chukong_0${item}.png`"
          alt=""
          class="item"
          v-for="item in 8"
          :key="item"
        />
      </div>
      <div class="video">
        <video
          src="https://yunbiao.oss-cn-beijing.aliyuncs.com/liveHelp/newHelp/13-%E7%9B%B4%E6%92%AD%E9%97%B4%E7%94%BB%E7%AC%94%E6%93%8D%E4%BD%9C/%E7%9B%B4%E6%92%AD%E9%97%B4%E7%94%BB%E7%AC%94%E6%93%8D%E4%BD%9C.mp4"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        ></video>
      </div>
    </div>
    <div class="screenProjection">
      <div class="title">5G无线投屏 双向操控</div>
      <div class="content">
        支持安卓/苹果手机四方投屏，快速进入直播界面，声画同步无延迟不卡顿，大屏可反向操控手机屏幕，轻松应对场场直播。
      </div>
      <div class="img"></div>
    </div>
    <div class="application">
      <div :class="{ title: true, restoration: scrollTop > fontSize * 221 }">
        海量应用支持下载
      </div>
      <div :class="{ content: true, restoration: scrollTop > fontSize * 224 }">
        可下载主流短视频软件以及其它娱乐、影视、音乐游戏等APP；支持插入U盘播放内容、直播娱乐两不误。
      </div>
      <div class="box">
        <div
          class="item"
          v-for="(item, index) in applicationList"
          :key="item.left"
          :style="{
            left: item.left + 'rem',
            top: item.top + 'rem',
            transform: item.translate,
          }"
          :class="{ restoration: scrollTop > item.scrollTop }"
        >
          <img
            :src="`../../../public/images/43/icon_${index + 1}.png`"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="diversification">
      <div class="diversification_title">多场景适用 打造智慧直播间</div>
      <div class="diversification_content">适用于多种直播场景及需求</div>
      <div :class="{ box_list: true }">
        <div :class="{ box: true, restoration: scrollTop > fontSize * 300 }">
          <div class="text">电商卖货直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 300 }">
          <div class="text">户外旅游直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 300 }">
          <div class="text">探店体验直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 300 }">
          <div class="text">科普教学直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 300 }">
          <div class="text">助农直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 300 }">
          <div class="text">新闻直播</div>
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
let str = getComputedStyle(window.document.documentElement)["font-size"];
let match = str.match(/\d+/); // \d+ 匹配一个或多个数字
let fontSize = ref(match[0]);
let immediatelyshow = ref(false);
setTimeout(() => {
  immediatelyshow.value = true;
}, 100);
let applicationList = ref([
  {
    left: 0,
    top: 14,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 250,
  },
  {
    left: 9.3,
    top: 9,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 243,
  },
  {
    left: 9.3,
    top: 19,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 256,
  },
  {
    left: 18.75,
    top: 4.6,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 237,
  },
  {
    left: 18.75,
    top: 14,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 250,
  },
  {
    left: 18.75,
    top: 24,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 262,
  },
  {
    left: 28.1,
    top: 0,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 231,
  },
  {
    left: 28.1,
    top: 10,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 243,
  },
  {
    left: 28.1,
    top: 20,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 256,
  },
  {
    left: 28.1,
    top: 30,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 268,
  },
  {
    left: 38.1,
    top: 4.6,
    top: 4.6,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 237,
  },
  {
    left: 38.1,
    top: 14,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 250,
  },
  {
    left: 38.1,
    top: 24,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 262,
  },
  {
    left: 48,
    top: 9,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 243,
  },
  {
    left: 48,
    top: 19,

    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 256,
  },
  {
    left: 58,
    top: 14,
    translate: "translateY(2.08vw)",
    scrollTop: fontSize.value * 250,
  },
]);
const scrollTop = ref(0);
const scrollHandler = () => {
  scrollTop.value = document.documentElement.scrollTop;
};
window.addEventListener("scroll", scrollHandler);
watchEffect(() => {
  // console.log(document.documentElement.scrollTop);
  // scrollTop.value = document.documentElement.scrollTop;
  console.log(scrollTop.value);
});
window.scrollTo(0, 0);
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
.product_55 {
  width: 100%;
  // margin-top: 48px;
  background: #000000;
  border-bottom: 1px solid #000000;
  .banner {
    width: 100%;
    height: 900px;
    padding-top: 80px;
    box-sizing: border-box;

    position: relative;
    .title {
      width: 100%;
      height: 44px;
      font-size: 44px;
      font-family: DINPro;
      font-weight: bold;
      color: #ffffff;
      //   line-height: 152px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .tips {
      width: 100%;
      height: 20px;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #999999;
      text-align: center;
      margin-top: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      //   line-height: 152px;
    }
    .zixun {
      width: 148px;
      height: 50px;
      background: linear-gradient(90deg, #a9e137, #2fd59d);
      border-radius: 25px;
      color: #fff;
      font-size: 18px;
      text-align: center;
      line-height: 50px;
      margin: 0 auto;
      margin-top: 32px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .machine {
      width: 213px;
      height: 604px;
      background-image: url("../../../public/images/43/jiqi43.png");
      background-repeat: no-repeat;
      background-size: 100%;
      bottom: 0;
      position: absolute;
      left: 854px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
  }
  .buyingPoint {
    width: 1000px;
    padding-top: 187px;
    margin: 0 auto;
    margin-bottom: 212px;
    .title {
      //   width: 87px;
      width: 100%;
      height: 25px;
      font-size: 26px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
      //   line-height: 34px;
    }
    .content {
      // width: 98px;
      height: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #999999;
      // line-height: 30px;
      margin-top: 16px;
    }
    .buyingPoint_one {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .one {
        width: 362px;
        height: 240px;
        background-image: url("../../../public/images/43/img_1.png");
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 30px;
        box-sizing: border-box;
        padding-bottom: 0;
      }
      .two {
        width: 362px;
        height: 240px;
        background-image: url("../../../public/images/43/img_02.png");
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 30px;
        box-sizing: border-box;
        padding-bottom: 0;
      }
      .sthree {
        width: 235px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .stree {
          width: 235px;
          height: 110px;
          background-image: url("../../../public/images/43/img_03.png");
          background-repeat: no-repeat;
          background-size: 100%;
          padding: 30px;
          box-sizing: border-box;
          padding-bottom: 0;
        }
        .four {
          width: 235px;
          height: 110px;
          background-image: url("../../../public/images/43/img_04.png");
          background-repeat: no-repeat;
          background-size: 100%;
          padding: 30px;
          box-sizing: border-box;
          padding-bottom: 0;
        }
      }
    }
    .buyingPoint_two {
      width: 1000px;
      height: 240px;
      display: flex;
      justify-content: space-between;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .item {
        width: 235px;
        height: 240px;
        background-size: 100%;
        background-repeat: no-repeat;
        padding: 30px;
        box-sizing: border-box;
      }
      .item:nth-child(1) {
        background-image: url("../../../public/images/43/img_05.png");
      }
      .item:nth-child(2) {
        background-image: url("../../../public/images/43/img_06.png");
      }
      .item:nth-child(3) {
        background-image: url("../../../public/images/43/img_07.png");
      }
      .item:nth-child(4) {
        background-image: url("../../../public/images/43/img_08.png");
      }
    }
  }
  .buyingPoint_two {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .box {
      width: 408px;
      .title {
        width: 100%;
        height: 36px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateY(2.08vw);
        opacity: 0;
        // line-height: 152px;
      }
      .content {
        width: 406px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        line-height: 28px;
        margin-top: 20px;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateY(2.08vw);
        opacity: 0;
      }
      .img {
        width: 410px;
        height: 346px;
        margin-top: 87px;
        background-image: url("../../../public/images/43/img_11.png");
        background-repeat: no-repeat;
        background-size: 100%;
      }
      .img_two {
        width: 410px;
        height: 346px;
        margin-top: 87px;
        position: relative;
        .img_1 {
          width: 189px;
          height: 343px;
          background-image: url("../../../public/images/43/jiqi_09.png");
          background-repeat: no-repeat;
          background-size: 100%;
          position: absolute;
          z-index: 2;
        }
        .img_2 {
          width: 323px;
          height: 189px;
          background-image: url("../../../public/images/43/jiqi_10.png");
          background-repeat: no-repeat;
          background-size: 100%;
          position: absolute;
          transform: rotate(-90deg);
          left: 65px;
          top: 130px;
          z-index: 0;
          transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);

          opacity: 0;
        }
        .img_3 {
          width: 85px;
          height: 81px;
          position: absolute;
          left: 225px;
          top: 28px;
          background-repeat: no-repeat;
          background-size: 100%;
          background-image: url("../../../public/images/43/icon_jiantou.png");
        }
      }

      // height: ;
    }
  }
  .margin {
    padding-top: 220px;
    width: 1040px;
    margin: 0 auto;
    .title {
      width: 100%;
      height: 35px;
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      //   line-height: 152px;
    }
    .content {
      height: 17px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #999999;
      line-height: 28px;
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }
    .operate {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-between;
      margin-top: 85px;
      .item {
        width: 106px;
        height: 120px;
        cursor: pointer;
      }
    }
    .video {
      width: 100%;
      height: 395px;
      margin: 0 auto;
      // border: 1px solid #fff;
      background-color: #292929;

      margin-top: 20px;
      video {
        width: 100%;
        height: 395px;
      }
    }
  }
  .screenProjection {
    padding-top: 220px;
    width: 1000px;
    margin: 0 auto;
    .title {
      width: 100%;
      height: 35px;
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      //   line-height: 152px;
    }
    .content {
      height: 17px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #999999;
      line-height: 28px;
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }
    .img {
      width: 490px;
      height: 438px;
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: url("../../../public/images/43/img_12.png");
      margin: 0 auto;
      margin-top: 80px;
    }
  }
  .application {
    padding-top: 220px;
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 140px;
    .title {
      width: 100%;
      height: 35px;
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);

      opacity: 0;
      //   line-height: 152px;
    }
    .content {
      height: 17px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #999999;
      line-height: 28px;
      width: 100%;
      text-align: center;
      margin-top: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);

      opacity: 0;
    }
    .box {
      width: 100%;
      height: 550px;
      margin: 0 auto;
      position: relative;
      margin-top: 120px;
      .item {
        width: 100px;
        height: 100px;
        position: absolute;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);

        opacity: 0;
      }
    }
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
.restoration {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transform: scale(1);
}
</style>
