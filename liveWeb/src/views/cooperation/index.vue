<template>
  <div class="cooperation">
    <div class="cooperation_banner">
      <div :class="{ title: true, restoration: immediatelyshow }">
        互视达全球火热招募中
      </div>
      <div :class="{ content: true, restoration: immediatelyshow }">
        各行各业直播营销风口共创共赢
      </div>
      <div :class="{ immediately: true, restoration: immediatelyshow }">
        立即咨询
      </div>
    </div>
    <div class="advantage">
      <div :class="{ title: true, restoration: immediatelyshow }">
        用互视达直播机,易上手、成本低、智能化、效率高
      </div>
      <div
        :style="{
          left: item.left + 'rem',
          top: item.top + 'rem',
        }"
        :class="{
          advantage_number_box: true,
          restoration: scrollTop > fontSize * 16.25,
        }"
        v-for="(item, index) in advantageNumberList"
      >
        <img
          :src="`../../../public/images/cooperation/icon_0${index + 1}.png`"
          alt=""
        />
      </div>
      <div
        :style="{ left: item.left + 'rem', top: item.top + 'rem' }"
        :class="{
          advantage_text_box: true,
          restoration: scrollTop > fontSize * 16.25,
        }"
        v-for="(item, index) in advantageTextList"
      >
        <div class="advantage_text_box_title">{{ item.title }}</div>
        <div class="advantage_text_box_content">{{ item.content }}</div>
      </div>
    </div>
    <div class="collaborativeSupport">
      <div :class="{ title: true, restoration: scrollTop > fontSize * 46.8 }">
        我们能够给您提供怎样的合作支持？
      </div>
      <div :class="{ cotent: true, restoration: scrollTop > fontSize * 47.1 }">
        一站式体系全盘输出，立即体验
      </div>
      <div class="bolangxian"></div>
      <div
        :style="{ left: item.left + 'rem', top: item.top + 'rem' }"
        :class="{ describe: true, restoration: scrollTop > item.describeTop }"
        v-for="(item, index) in describeList"
        :key="item.title"
      >
        <div class="icon">
          <img
            :src="`../../../public/images/cooperation/icon_box_${
              index + 1
            }.png`"
            alt=""
          />
        </div>
        <div class="describe_title">{{ item.title }}</div>
        <div class="describe_content">{{ item.content }}</div>
      </div>
    </div>
    <div class="highQualityProducts">
      <div :class="{ title: true, restoration: scrollTop > fontSize * 98.75 }">
        优质的产品让财富之路事半功倍
      </div>
      <div :class="{ cotent: true, restoration: scrollTop > fontSize * 99.5 }">
        一站式体系全盘输出，立即体验
      </div>
      <div class="product_box">
        <div class="product_box_item"></div>
        <div class="product_box_item"></div>
        <div class="product_box_item"></div>
        <div class="product_box_item"></div>
      </div>
      <div class="illustrate">
        由互视达科技自研开发的云标导播系统，专为赋能只会直播间而生。系统集成于各款直播一体机中，开机即可使用。拥有多机位直播、直播间循环文字、直播场景切换、手机电脑投屏和文档映射等多种功能，让每场直播更方便、更直接、更高效。
      </div>
      <div :class="{ immediately: true }">立即咨询</div>
    </div>
    <div class="Partners">
      <div :class="{ title: true, restoration: scrollTop > fontSize * 151.25 }">
        我们需要这样的合作伙伴
      </div>
      <div
        class="Partners_box"
        v-for="(item, index) in PartnersBoxList"
        :key="item.title"
        :style="{ left: item.left, top: item.top }"
      >
        <div class="icon">
          <img
            :src="`../../../public/images/cooperation/icon_hz_${index + 1}.png`"
            alt=""
          />
        </div>
        <div class="Partners_content">
          <div class="Partners_content_title">{{ item.title }}</div>
          <div class="Partners_content_illustrate">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="flowPath">
      <div :class="{ title: true, restoration: scrollTop > fontSize * 188.75 }">
        与互视达合作的申请流程
      </div>
      <div class="flowPath_box">
        <div
          :class="{
            flowPath_box_item: true,
            restoration: scrollTop > fontSize * 207,
          }"
        >
          <div class="flowPath_box_item_title">01</div>
          <div class="flowPath_box_item_content">点击咨询</div>
        </div>
        <div
          :class="{
            flowPath_box_item: true,
            restoration: scrollTop > fontSize * 210,
          }"
        >
          <div class="flowPath_box_item_title">02</div>
          <div class="flowPath_box_item_content">初步沟通</div>
        </div>
        <div
          :class="{
            flowPath_box_item: true,
            restoration: scrollTop > fontSize * 213,
          }"
        >
          <div class="flowPath_box_item_title">03</div>
          <div class="flowPath_box_item_content">达成共识</div>
        </div>
        <div
          :class="{
            flowPath_box_item: true,
            restoration: scrollTop > fontSize * 216,
          }"
        >
          <div class="flowPath_box_item_title">04</div>
          <div class="flowPath_box_item_content">合作签约</div>
        </div>
        <div
          :class="{ jiantou: true, restoration: scrollTop > fontSize * 208 }"
          style="left: 14.6rem"
        ></div>
        <div
          :class="{ jiantou: true, restoration: scrollTop > fontSize * 211 }"
          style="left: 30.25rem"
        ></div>
        <div
          :class="{ jiantou: true, restoration: scrollTop > fontSize * 214 }"
          style="left: 45.8rem"
        ></div>
        <div
          :class="{
            immediately: true,
            restoration: scrollTop > fontSize * 218,
          }"
          @click="
            () => {
              dialogVisible = true;
            }
          "
        >
          立即咨询
        </div>
      </div>
    </div>
    <div class="winBanner">
      <div :class="{ title: true, restoration: scrollTop > fontSize * 228 }">
        现在选择互视达，让我们一起共创共赢
      </div>
      <div :class="{ hz: true, restoration: scrollTop > fontSize * 230 }">
        合作热线：400-188-6581
      </div>
    </div>
    <el-dialog v-model="dialogVisible" width="384" :before-close="handleClose">
      <div class="dialogzixun">
        <div class="dialog-title">立即咨询</div>
        <img src="../../../public/images/units/ma_zhangping.png" alt="" />
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
let PartnersBoxList = ref([
  {
    title: "认可互视达文化",
    content: "认同互视达产品价值和文化理念，愿意和互视达 长期合作。",
    left: "28.75rem",
    top: "17rem",
  },
  {
    title: "具有公司资质",
    content: "有合法营业执照和独立法人代表，有良好商业信誉和口碑。",
    left: "63.8rem",
    top: "17rem",
  },
  {
    title: "具有客户资源",
    content: "拥有当地丰富的资源或线下门店资源等。",
    left: "28.75rem",
    top: "28rem",
  },
  {
    title: "具有行业背景",
    content: "有直播、新零售、教育、电商等行业背景，足够了解背景相关知识。",
    left: "63.8rem",
    top: "28rem",
  },
]);
let describeList = ref([
  {
    title: "教学培训",
    content: "一对一教学上手",
    left: "28.43",
    top: "23.1",
    describeTop: fontSize.value * 74,
  },
  {
    title: "服务支持",
    content: "随时为您解答疑问",
    left: "41.25",
    top: "18.1",
    describeTop: fontSize.value * 75,
  },
  {
    title: "质量支持",
    content: "质量保证1年有效",
    left: 54.25,
    top: "23.1",
    describeTop: fontSize.value * 76,
  },
  {
    title: "保修支持",
    content: "终身维护产品",
    left: "67.5",
    top: "18.1",
    describeTop: fontSize.value * 77,
  },
  {
    title: "技术支持",
    content: "为您提供优质技术",
    left: 80,
    top: "23.1",
    describeTop: fontSize.value * 78,
  },
]);
let advantageNumberList = ref([
  {
    left: 26.5,
    top: 15.7,
  },
  {
    left: 58.7,
    top: 15.7,
  },
  {
    left: 26.5,
    top: 32,
  },
  {
    left: 59,
    top: 32,
  },
]);
let advantageTextList = ref([
  {
    title: "易上手",
    content: "简单一目了然的操作界面，1分钟即可上手操作，无需过多时间摸索。",
    left: 34.3,
    top: 16,
  },
  {
    title: "成本低",
    content: "一站式装备配置，无需其它过多的设备辅助，开机可快速开播。",
    left: 66.8,
    top: 16,
  },
  {
    title: "智能化",
    content: "打造虚拟主播，支持数字人7*24小时自动化直播，减轻了主播的负担。",
    left: 34.3,
    top: 32,
  },
  {
    title: "效率高",
    content: "多功能聚合，集成式智慧直播终端，支持多平台直播，强劲芯动力。",
    left: 66.8,
    top: 32,
  },
]);
let immediatelyshow = ref(false);
setTimeout(() => {
  immediatelyshow.value = true;
}, 100);
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
.restoration {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transform: scale(1);
}
.cooperation {
  width: 100%;
  margin-top: 48px;
  .cooperation_banner {
    width: 100%;
    height: 630px;
    background-image: url("../../../public/images/cooperation/banner\ \(1\).png");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    .title {
      //   width: 411px;
      height: 39px;
      font-size: 40px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      //   line-height: 152px;
      position: absolute;
      left: 460px;
      top: 200px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .content {
      // width: 261px;
      height: 17px;
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #999999;
      // line-height: 152px;
      position: absolute;
      left: 460px;
      top: 256px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .immediately {
      width: 148px;
      height: 50px;
      background: linear-gradient(90deg, #a9e137, #2fd59d);
      border-radius: 25px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      position: absolute;
      left: 460px;
      top: 300px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      cursor: pointer;
    }
  }
  .advantage {
    width: 100%;
    height: 870px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url("../../../public/images/cooperation/img_01.png");
    padding-top: 140px;
    box-sizing: border-box;
    position: relative;
    .title {
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      color: #000;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;

      font-weight: bold;

      font-family: Source Han Sans CN;
    }
    .advantage_number_box {
      width: 169px;
      height: 169px;
      position: absolute;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      opacity: 0;
      transform: translateY(2.08vw);
      img {
        width: 169px;
        height: 169px;
      }
    }
    .advantage_text_box {
      width: 399px;
      height: 318px;
      background-image: url("../../../public/images/cooperation/img_beijingdi.png");
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      padding-top: 40px;
      padding-left: 64px;
      box-sizing: border-box;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      opacity: 0;
      transform: translateX(2.08vw);
      .advantage_text_box_title {
        // width: 61px;
        height: 19px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #2e3135;
        // line-height: 30px;
      }
      .advantage_text_box_content {
        width: 269px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        margin-top: 13px;
        line-height: 32px;
      }
    }
  }
  .collaborativeSupport {
    width: 100%;
    height: 774px;
    background: #f5f5f5;
    padding-top: 140px;
    box-sizing: border-box;
    position: relative;
    .title {
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      color: #000;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;

      font-weight: bold;

      font-family: Source Han Sans CN;
    }
    .cotent {
      width: 100%;
      height: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      text-align: center;
      color: #0e3135;
      margin-top: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      //   line-height: 28px;
    }
    .bolangxian {
      width: 1000px;
      height: 107px;
      background-image: url("../../../public/images/cooperation/img_bolangxian.png");
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      left: 460px;
      top: 532px;
    }
    .describe {
      width: 176px;
      height: 189px;
      background-image: url("../../../public/images/cooperation/img_kuang.png");
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      padding-top: 96px;
      box-sizing: border-box;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .icon {
        width: 60px;
        height: 60px;
        position: absolute;
        left: 58px;
        top: 22px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .describe_title {
        width: 100%;
        text-align: center;
        height: 19px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #2e3135;
        // line-height: 30px;
      }
      .describe_content {
        width: 100%;
        height: 16px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        // line-height: 28px;
        text-align: center;
        margin-top: 14px;
      }
    }
  }
  .highQualityProducts {
    width: 100%;
    height: 868px;
    background: #ffffff;
    padding-top: 140px;
    box-sizing: border-box;
    position: relative;
    .title {
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      color: #000;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;

      font-weight: bold;

      font-family: Source Han Sans CN;
    }
    .cotent {
      width: 100%;
      height: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      text-align: center;
      color: #0e3135;
      margin-top: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      //   line-height: 28px;
    }
    .product_box {
      width: 1000px;
      height: 300px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 460px;
      top: 290px;
      .product_box_item {
        width: 235px;
        height: 300px;
        background-size: 100%;
        background-repeat: no-repeat;
      }
      .product_box_item:nth-child(1) {
        background-image: url("../../../public/images/cooperation/img_product_1.png");
      }
      .product_box_item:nth-child(2) {
        background-image: url("../../../public/images/cooperation/img_product_2.png");
      }
      .product_box_item:nth-child(3) {
        background-image: url("../../../public/images/cooperation/img_product_3.png");
      }
      .product_box_item:nth-child(4) {
        background-image: url("../../../public/images/cooperation/img_product_4.png");
      }
    }
    .illustrate {
      width: 772px;
      height: 72px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #999999;
      line-height: 28px;
      margin: 0 auto;
      margin-top: 400px;
    }
    .immediately {
      width: 148px;
      height: 50px;
      background: linear-gradient(90deg, #a9e137, #2fd59d);
      border-radius: 25px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      position: absolute;
      left: 886px;
      top: 716px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      cursor: pointer;
    }
  }
  .Partners {
    width: 100%;
    height: 632px;
    background: #121212;
    padding-top: 140px;
    box-sizing: border-box;
    position: relative;
    .title {
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      color: #fff;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;

      font-weight: bold;

      font-family: Source Han Sans CN;
    }
    .Partners_box {
      display: flex;
      height: 80px;
      position: absolute;
      .icon {
        width: 70px;
        height: 70px;
        img {
          width: 70px;
          height: 70px;
        }
      }
      .Partners_content {
        width: 348px;
        height: 80px;
        margin-left: 20px;
        .Partners_content_title {
          // width: 144px;
          height: 19px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          // line-height: 30px;
          margin-bottom: 20px;
        }
        .Partners_content_illustrate {
          width: 348px;
          height: 44px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 300;
          color: #999999;
          line-height: 28px;
        }
      }
    }
  }
  .flowPath {
    width: 100%;

    height: 620px;

    background: #f5f5f5;

    position: relative;
    padding-top: 140px;
    box-sizing: border-box;
    .title {
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      color: #000;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;

      font-weight: bold;

      font-family: Source Han Sans CN;
    }
    .flowPath_box {
      width: 1000px;
      height: 200px;
      margin: 0 auto;
      margin-top: 80px;
      background-color: #fff;
      display: flex;
      position: relative;
      .flowPath_box_item {
        width: 250px;
        height: 200px;
        padding-top: 70px;
        box-sizing: border-box;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateY(2.08vw);
        opacity: 0;
        .flowPath_box_item_title {
          width: 39px;
          height: 42px;
          font-size: 42px;
          font-family: DINPro;
          font-weight: bold;
          color: #2e3135;
          margin: 0 auto;
          line-height: 42px;
          cursor: pointer;
        }
        .flowPath_box_item_content {
          width: 81px;
          height: 20px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #2e3135;
          // line-height: 152px;
          margin: 0 auto;
          margin-top: 25px;
          cursor: pointer;
        }
      }
      .jiantou {
        width: 30px;
        height: 20px;
        background-image: url("../../../public//images/cooperation/icon_jiantou.png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        top: 91px;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateY(2.08vw);
        opacity: 0;
      }
      .immediately {
        width: 148px;
        height: 50px;
        background: linear-gradient(90deg, #a9e137, #2fd59d);
        border-radius: 25px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        position: absolute;
        left: 426px;
        top: 175px;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateY(2.08vw);
        opacity: 0;
        cursor: pointer;
      }
    }
  }
  .winBanner {
    width: 100%;
    height: 340px;
    background-image: url("../../../public/images/cooperation/img_beijing.png");
    // background-repeat: no-repeat;
    background-size: 100%;
    padding-top: 140px;
    box-sizing: border-box;
    .title {
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      color: #fff;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;

      font-weight: bold;

      font-family: Source Han Sans CN;
    }
    .hz {
      width: 100%;
      height: 16px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      margin-top: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
  }
}
</style>
