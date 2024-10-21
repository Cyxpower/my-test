<template>
  <div class="solution">
    <div class="banner">
      <div :class="{ nav_item: true, restoration: immediatelyshow }">
        <div class="nav-item-title">互视达直播机解决方案</div>
        <div class="nav-item-subtitle">
          轻松打造专业直播间，让你直播快速卖货
        </div>
        <div
          :class="{
            immediately: true,
            restoration: true,
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
    <div class="plague">
      <div :class="{ title: true, restoration: immediatelyshow }">
        我们了解您的困扰
      </div>
      <div :class="{ content: true, restoration: immediatelyshow }">
        使用传统直播，不仅硬件要求高，操作起来也十分繁杂，一定程度降低了直播的效率。
      </div>
      <div class="phone">
        <div
          :class="{ phone_1: true, one: true, restoration: scrollTop > 280 }"
        >
          小屏幕<br />看不清弹幕
        </div>
        <div :class="{ phone_2: true, restoration: scrollTop > 280 }">
          不支持绿幕虚拟背景
        </div>
        <div
          :class="{ phone_1: true, two: true, restoration: scrollTop > 280 }"
        >
          无法多镜头<br />场景切换
        </div>
        <div
          :class="{ phone_1: true, shree: true, restoration: scrollTop > 280 }"
        >
          手机发烫<br />损耗网络卡顿
        </div>
      </div>
      <div class="computer">
        <div
          :class="{ computer_1: true, one: true, restoration: scrollTop > 280 }"
        >
          搭建繁琐
        </div>
        <div
          :class="{ computer_1: true, two: true, restoration: scrollTop > 280 }"
        >
          需专业度高
        </div>
        <div
          :class="{
            computer_2: true,
            shree: true,
            restoration: scrollTop > 280,
          }"
        >
          价格贵
        </div>
        <div
          :class="{
            computer_2: true,
            four: true,
            restoration: scrollTop > 280,
          }"
        >
          不便携
        </div>
      </div>
    </div>
    <div class="solutionSelect">
      <div :class="{ title: true, restoration: immediatelyshow }">
        电商带货直播工具如何选？
      </div>
      <div :class="{ content: true, restoration: immediatelyshow }">
        手机直播 VS 电脑直播 VS 直播一体机
      </div>
      <div class="item bg1">
        <div></div>
        <div>
          <div class="item_title">手机直播</div>
          <div class="item_content">
            <div class="left">优&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点 :</div>
            <div class="right">成本低，操作简单</div>
          </div>
          <div class="item_content">
            <div class="left">缺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点 :</div>
            <div class="right">
              场景固定，背景单调，发热卡顿，容易掉线，
              特写麻烦，画面单一，装修成本高。
            </div>
          </div>
          <div class="item_content">
            <div class="left">适合人群 :</div>
            <div class="right">没有直播经验的新手小白入门时使用。</div>
          </div>
        </div>
      </div>
      <div class="item bg2">
        <div>
          <div class="item_title">电脑直播</div>
          <div class="item_content">
            <div class="left">优&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点 :</div>
            <div class="right">成本高，高清画质</div>
          </div>
          <div class="item_content">
            <div class="left">缺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点 :</div>
            <div class="right">
              搭建繁琐，操作复杂，门槛高，主播看不到直播画面，节奏不好把握，装修成本高
            </div>
          </div>
          <div class="item_content">
            <div class="left">适合人群 :</div>
            <div class="right">一线大牌或者明星团队</div>
          </div>
        </div>
        s
      </div>
      <div class="item bg3">
        <div></div>
        <div>
          <div class="item_title">
            <span style="color: #36ac5f">直播一体机</span>直播
          </div>
          <div class="item_content">
            <div class="left">优&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点 :</div>
            <div class="right">成本低，操作简单，高清画质，稳定</div>
          </div>

          <div class="item_content">
            <div class="left">适合人群 :</div>
            <div class="right">
              中小商家或者需要升级直播设备提升直播画质的团队
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fangan">
      <div :class="{ title: true, restoration: immediatelyshow }">
        互视达专业直播间硬件方案
      </div>
      <div :class="{ content: true, restoration: immediatelyshow }">
        直播设备一键齐全，让您省心又省力
      </div>
      <div class="fangan_box">
        <div class="item" v-for="(item, index) in imgageArr" :key="index">
          <div class="name">{{ item }}</div>
          <img
            :src="`../../../public/images/solution/yingjina_${index + 1}.png`"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="Technical_Proposal">
      <div :class="{ title: true, restoration: immediatelyshow }">
        互视达AI直播技术方案
      </div>
      <div :class="{ content: true, restoration: immediatelyshow }">
        由互视达科技自研开发的云标导播系统，专为赋能智慧直播而生。
      </div>
      <div class="Technical_Proposal_img"></div>
      <div class="Technical_Proposal_text_1 position_1">
        <div class="point"></div>
        <div class="text">实时弹幕欢迎新用户</div>
      </div>
      <div class="Technical_Proposal_text_1 position_2">
        <div class="point"></div>
        <div class="text">智能解答用户弹幕问题</div>
      </div>
      <div class="Technical_Proposal_text_1 position_3">
        <div class="point"></div>
        <div class="text">全直播平台兼容集成，一次配置即可开播</div>
      </div>
      <!-- <div class="Technical_Proposal_text_1 position_4">
        <div class="point"></div>
        <div class="text">支持动作定制和形态动作定制</div>
      </div> -->
      <div class="Technical_Proposal_text_1 position_5">
        <div class="point"></div>
        <div class="text">数十种职业、不同风格的数字人形象可供选择</div>
      </div>
      <div class="Technical_Proposal_text_1 position_6">
        <div class="point"></div>
        <div class="text">丰富的直播模版，一个人数字人即可驱动N个直播间</div>
      </div>
      <div class="Technical_Proposal_text_1 position_7">
        <div class="point"></div>
        <div class="text">1000+语音种类，支持外语，小语种</div>
      </div>
      <div class="Technical_Proposal_text_1 position_8">
        <div class="point"></div>
        <div class="text">TTS智能真声克隆，让声音更为逼真自然</div>
      </div>
      <div class="Technical_Proposal_text_1 position_9">
        <div class="point"></div>
        <div class="text">支持数字人形象定制，1：1复刻真人形象</div>
      </div>
      <div class="Technical_Proposal_text_1 position_10">
        <div class="point"></div>
        <div class="text">支持动作定制和形态动作定制</div>
      </div>
      <div class="Technical_Proposal_text_1 position_11">
        <div class="point"></div>
        <div class="text">7*24小时数字人自动化直播，省时省力省成本</div>
      </div>
      <div class="Technical_Proposal_text_1 position_12">
        <div class="point"></div>
        <div class="text">
          支持语音&真人离线音频驱动，支持真人AI双模式同屏互动
        </div>
      </div>
    </div>
    <div class="our_Strengths">
      <div :class="{ title: true, restoration: scrollTop > 660 }">
        我们的优势
      </div>
      <div class="our_Strengths_img">
        <div class="our_Strengths_img_box"></div>
        <div
          :class="{
            our_Strengths_img_box_item: true,
            restoration: scrollTop > item.scrollTop,
          }"
          :style="{
            top: item.top + 'rem',
            left: item.left + 'rem',
            transform: item.vw,
          }"
          v-for="item in ourStrengthsList"
          :key="item.title"
        >
          <div class="our_Strengths_img_box_item_title">{{ item.title }}</div>
          <div class="our_Strengths_img_box_item_content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="guarantee">
      <div :class="{ title: true, restoration: scrollTop > fontSize * 96 }">
        售后保障
      </div>
      <div class="box">
        <div class="item">
          <img
            src="../../../public/images/solution/icon_24xiaoshi.png"
            alt=""
          />
          <div class="item_title">24小时在线</div>
          <div class="item_content">随时为您解答疑问</div>
        </div>
        <div class="item">
          <img src="../../../public/images/solution/icon_zhibao.png" alt="" />
          <div class="item_title">质保1年</div>
          <div class="item_content">质量保证1年内有效</div>
        </div>
        <div class="item">
          <img src="../../../public/images/solution/icon_weihu.png" alt="" />
          <div class="item_title">终身维护</div>
          <div class="item_content">终身维护产品</div>
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
    <!-- <div class="My_Solution">
      <div :class="{ title: true, restoration: scrollTop > fontSize * 96 }">
        解决方案
      </div>
      <div
        :class="{ content_box: true, restoration: scrollTop > fontSize * 103 }"
      >
        <div class="content">
          AI数字直播通过各项技术赋能各行各业，实现24小时自动不间断，<br />
          释放主播压力，提升传播效率，一次直播一体机投入即可为客户提供永久可持续收益。
        </div>
      </div>
      <div class="My_Solution_box">
        <div
          :class="{
            My_Solution_box_item: true,
            restoration: scrollTop > item.scrollTop,
          }"
          v-for="(item, index) in mySolutionBoxList"
          :key="item.name"
        >
          <div class="name">
            {{ item.name }}
          </div>
          <img
            :src="`../../../public/images/solution/jiejuefangan_0${
              index + 1
            }.png`"
            alt=""
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
let dialogVisible = ref(false);
let imgageArr = ref([
  "10.1寸直播机",
  "15.6寸直播机",
  "32寸直播机",
  "43寸直播大屏",
  "绿幕",
  "摄像头",
  "小键盘",
  "麦克风",
  "补光灯",
  "领夹麦",
  "摄像头支架",
  "声卡套装",
]);
let str = getComputedStyle(window.document.documentElement)["font-size"];
let match = str.match(/\d+/); // \d+ 匹配一个或多个数字
let fontSize = ref(match[0]);
let immediatelyshow = ref(false);
setTimeout(() => {
  immediatelyshow.value = true;
}, 100);
let mySolutionBoxList = [
  {
    name: "电商带货直播",
    scrollTop: fontSize.value * 118.75,
  },
  {
    name: "户外旅游直播",
    scrollTop: fontSize.value * 118.75,
  },
  {
    name: "本地生活直播",
    scrollTop: fontSize.value * 118.75,
  },
  {
    name: "知识教学直播",
    scrollTop: fontSize.value * 125,
  },
  {
    name: "助农直播",
    scrollTop: fontSize.value * 125,
  },
  {
    name: "娱乐主播直播",
    scrollTop: fontSize.value * 125,
  },
];
let ourStrengthsList = ref([
  {
    title: "硬件优势",
    content: "4800W高清像素，内置直播录制功能",
    top: "1",
    left: "25.3",
    vw: "translateX(-10vw)",
    scrollTop: fontSize.value * 62,
  },
  {
    title: "便捷低成本",
    content: "一站式装备配备，快速开播",
    top: "8.1",
    left: "21.25",
    vw: "translateX(-10vw)",
    scrollTop: fontSize.value * 65,
  },
  {
    title: "矩阵直播",
    content: "多种互联网方式，内置主流直播平台",
    top: "15",
    left: "21.25",
    vw: "translateX(-10vw)",
    scrollTop: fontSize.value * 68,
  },
  {
    title: "多平台",
    content: "支持多平台直播",
    top: "22.5",
    left: "25.3",
    vw: "translateX(-10vw)",
    scrollTop: fontSize.value * 71,
  },
  {
    title: "稳定性",
    content: "强劲芯动力，长时间直播无压力",
    top: "1",
    left: "68.75",
    vw: "translateX(10vw)",
    scrollTop: fontSize.value * 62,
  },
  {
    title: "多场景切换",
    content: "绿幕抠图，多种虚拟场景即时切换",
    top: 8.1,
    left: 72.8,
    vw: "translateX(10vw)",
    scrollTop: fontSize.value * 65,
  },
  {
    title: "数字人直播",
    content: "数字人赋能直播间，降低增效",
    top: 15.6,
    left: 72.8,
    vw: "translateX(10vw)",
    scrollTop: fontSize.value * 68,
  },
  {
    title: "多功能参数调节",
    content: "多功能聚合，集成式智慧直播终端",
    top: "22.5",
    left: "68.75",
    vw: "translateX(10vw)",
    scrollTop: fontSize.value * 71,
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
.restoration {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transform: scale(1);
}
.solution {
  .immediately {
    width: 148px;
    height: 50px;
    background: linear-gradient(90deg, #a9e137, #2fd59d);
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    position: absolute;

    top: 115px;
    transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
    transform: translateY(2.08vw);
    opacity: 0;
    cursor: pointer;
  }
  width: 100%;
  height: 100%;
  margin-top: 49px;
  .guarantee {
    width: 100%;
    padding: 140px 0;
    background-color: #ececec;
    .title {
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;
      color: #2e3135;

      font-weight: bold;
    }
    .box {
      width: 1000px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 70px;
      .item {
        width: 140px;
        display: flex;
        flex-direction: column;

        img {
          width: 90px;
          height: 90px;
          margin: 0 auto;
        }
        div {
          width: 100%;
          text-align: center;
        }
      }
      .item_title {
        // width: 81px;
        width: 100%;
        height: 19px;
        font-family: Source Han Sans CN;
        font-weight: 400 !important;
        font-size: 20px !important;
        color: #2e3135;
        text-align: center;
        margin-bottom: 14px;
        // line-height: 30px;
      }
      .item_content {
        // width: 99px;
        width: 100%;
        text-align: center;
        height: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300 !important;
        font-size: 16px;
        color: #999999 !important;
        text-align: center;
        // line-height: 28px;
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
  .fangan {
    width: 100%;
    padding: 140px 0;

    // background-color: #ececec;
    .title {
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;
      color: #2e3135;

      font-weight: bold;
    }
    .content {
      width: 100%;
      height: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      color: #0e3135;
      line-height: 28px;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 80px;
    }
    .fangan_box {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 235px;
        height: 254px;
        position: relative;
        .name {
          position: absolute;
          width: 100%;
          height: 20px;
          text-align: center;
          font-weight: 400;
          font-size: 18px;
          color: #2e3135;
          left: 0;
          bottom: 24px;
        }
        img {
          width: 235px;
          height: 254px;
        }
        margin-bottom: 20px;
      }
    }
  }
  .Technical_Proposal {
    width: 100%;
    padding: 140px 0;
    background-color: #1e1e1e;
    position: relative;
    .position_1 {
      left: 582px;
      top: 370px;
    }
    .position_2 {
      left: 582px;
      top: 400px;
    }
    .position_3 {
      left: 430px;
      top: 500px;
    }
    .position_4 {
      left: 430px;
      top: 530px;
    }
    .position_5 {
      left: 430px;
      top: 630px;
    }
    .position_6 {
      left: 430px;
      top: 660px;
    }
    .position_7 {
      left: 1140px;
      top: 370px;
    }
    .position_8 {
      left: 1140px;
      top: 400px;
    }
    .position_9 {
      left: 1200px;
      top: 500px;
    }
    .position_10 {
      left: 1200px;
      top: 530px;
    }
    .position_11 {
      left: 1140px;
      top: 630px;
    }
    .position_12 {
      left: 1140px;
      top: 660px;
    }
    .Technical_Proposal_text_1 {
      display: flex;
      align-items: center;
      position: absolute;
      .point {
        width: 6px;
        height: 6px;
        background: #67d95e;
        border-radius: 50%;
      }
      .text {
        color: #ececec;
        margin-left: 10px;
      }
    }

    .Technical_Proposal_img {
      width: 382px;
      height: 357px;
      background-image: url("../../../public/images/solution/img_liubianxing.png");
      background-repeat: no-repeat;
      background-size: 100%;
      margin: 0 auto;
      margin-top: 140px;
    }
    .title {
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;
      color: #fff;

      font-weight: bold;
    }
    .content {
      width: 100%;
      height: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      color: #999999;
      line-height: 28px;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 80px;
    }
  }
  .solutionSelect {
    width: 100%;
    padding: 140px 0;
    background-color: #ececec;
    .title {
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;
      color: #2e3135;

      font-weight: bold;
    }
    .content {
      width: 100%;
      height: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      color: #0e3135;
      line-height: 28px;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 80px;
    }
    .item {
      width: 1000px;
      height: 300px;
      margin: 0 auto;
      margin-bottom: 20px;
      background-size: 100%;
      background-repeat: no-repeat;
      padding: 70px 90px 0;
      box-sizing: border-box;
      justify-content: space-between;
      display: flex;
      .item_title {
        // width: 106px;
        height: 25px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        font-size: 26px;
        color: #2e3135;
        margin-bottom: 30px;
        // line-height: 34px;
      }
      .item_content {
        width: 405px;
        // height: 32px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        font-size: 16px;
        color: #666666;
        display: flex;
        margin-bottom: 10px;
        .left {
          width: 85px;
        }
        .right {
          width: 330px;
        }
        // line-height: 30px;
      }
    }
    .bg1 {
      background-image: url("../../../public/images/solution/jiejuefangan_04 (3).png");
    }
    .bg2 {
      background-image: url("../../../public/images/solution/jiejuefangan_04 (1).png");
    }
    .bg3 {
      background-image: url("../../../public/images/solution/jiejuefangan_04 (2).png");
    }
  }
  .banner {
    width: 100%;
    height: 630px;
    // background: #01180f;
    background-image: url("../../../public/images/solution/banner\ \(1\).png");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    .nav_item {
      position: absolute;
      left: 460px;
      top: 230px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .nav-item-title {
        height: 40px;
        font-size: 40px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        // line-height: 152px;
      }
      .nav-item-subtitle {
        width: 336px;
        height: 18px;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        // line-height: 28px;
        margin-top: 17px;
      }
    }
  }
  .plague {
    width: 100%;
    height: 778px;
    background: #d9eaec;
    padding-top: 139px;
    box-sizing: border-box;
    position: relative;

    .phone {
      width: 130px;
      height: 264px;
      position: absolute;
      left: 584px;
      top: 324px;
      background-image: url("../../../public/images/solution/img_01.png");
      background-size: 100%;
      background-repeat: no-repeat;
      .phone_1 {
        width: 160px;
        height: 80px;
        background: #eef5f6;
        border: 1px solid #ffffff;
        border-radius: 10px;
        // padding-left: 30px;
        box-sizing: border-box;
        padding-top: 13px;

        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #a8747d;
        text-align: center;
        position: absolute;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        opacity: 0;
      }
      .phone_2 {
        width: 210px;
        height: 60px;
        background: #eef5f6;
        border: 1px solid #ffffff;
        border-radius: 10px;
        line-height: 60px;
        text-align: center;
        color: #a8747d;
        font-weight: 400;
        position: absolute;
        bottom: 10px;
        left: -180px;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateX(-5vw);
        opacity: 0;
      }
      .one {
        left: -150px;
        top: 20px;
        transform: translateX(-5vw);
      }
      .two {
        right: -140px;
        top: -10px;
        transform: translateX(5vw);
      }
      .shree {
        right: -150px;
        bottom: 20px;
        transform: translateX(5vw);
      }
    }
    .computer {
      width: 380px;
      height: 236px;
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: url("../../../public/images/solution/icon_02.png");
      position: absolute;
      right: 502px;
      top: 345px;
      .computer_1 {
        width: 140px;
        height: 60px;
        background: #eef5f6;
        border: 1px solid #ffffff;
        border-radius: 10px;
        line-height: 60px;
        text-align: center;
        font-weight: 400;
        color: #a88474;
        position: absolute;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        opacity: 0;
      }
      .computer_2 {
        width: 120px;
        height: 60px;
        background: #eef5f6;
        border: 1px solid #ffffff;
        border-radius: 10px;
        line-height: 60px;
        text-align: center;
        color: #a88474;
        position: absolute;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        opacity: 0;
      }
      .one {
        left: -20px;
        top: -20px;
        transform: translateX(-5vw);
      }
      .two {
        right: -80px;
        top: -20px;
        transform: translateX(5vw);
      }
      .shree {
        bottom: 20px;
        left: -20px;
        transform: translateX(-5vw);
      }
      .four {
        right: -40px;
        bottom: 20px;
        transform: translateX(5vw);
      }
    }
    .title {
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      font-size: 36px;
      color: #2e3135;

      font-weight: bold;
    }
    .content {
      width: 100%;
      height: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;

      color: #0e3135;
      line-height: 28px;
      text-align: center;
      margin-top: 20px;
    }
  }
  .our_Strengths {
    width: 100%;
    height: 858px;
    background: #ffffff;
    padding-top: 140px;
    box-sizing: border-box;
    .title {
      width: 100%;
      height: 36px;
      text-align: center;

      font-weight: bold;
      font-size: 36px;
      color: #2e3135;
      line-height: 36px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .our_Strengths_img {
      width: 100%;
      height: 480px;
      margin-top: 80px;
      position: relative;

      .our_Strengths_img_box {
        width: 480px;
        height: 480px;
        background-image: url("../../../public/images/solution/img_youshi.png");
        background-size: 100%;
        background-repeat: no-repeat;
        margin: 0 auto;
      }
      .our_Strengths_img_box_item {
        width: 400px;
        height: 90px;
        background: #ffffff;
        box-shadow: 0px 0px 35px 0px rgba(20, 140, 11, 0.1);
        border-radius: 6px;
        position: absolute;
        left: 0;
        top: 0;
        padding: 22px 30px;
        box-sizing: border-box;
        padding-right: 0px;
        padding-bottom: 0px;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        opacity: 0;
        .our_Strengths_img_box_item_title {
          // width: 82px;
          height: 19px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #2e3135;
          // line-height: 30px;
        }
        .our_Strengths_img_box_item_content {
          // width: 267px;
          height: 16px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 300;
          color: #999999;
          // line-height: 28px;
          margin-top: 13px;
        }
      }
    }
  }
  .My_Solution {
    width: 100%;
    height: 878px;
    background: #d9eaec;
    padding-top: 140px;
    box-sizing: border-box;
    .title {
      width: 100%;
      height: 36px;
      text-align: center;

      font-weight: bold;
      font-size: 36px;
      color: #2e3135;
      line-height: 36px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .content_box {
      width: 100%;
      height: 44px;
      margin-top: 20px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .content {
        width: 622px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #0e3135;
        line-height: 28px;
        margin: 0 auto;
        text-align: center;
        font-weight: 400;
      }
    }
    .My_Solution_box {
      width: 1000px;
      height: 440px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      margin: 0 auto;
      margin-top: 80px;
      .My_Solution_box_item {
        width: 320px;
        height: 200px;
        border-radius: 10px;
        overflow: hidden;
        line-height: 200px;
        text-align: center;

        font-weight: 500;

        font-size: 20px;
        position: relative;
        transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
        transform: translateY(2.08vw);
        opacity: 0;
        .name {
          width: 100%;
          height: 100%;
          line-height: 200px;
          text-align: center;
          color: #fff;
          font-size: 20px;
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 1;
        }
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
        }
      }
    }
  }
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
