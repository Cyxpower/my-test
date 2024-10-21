<template>
  <div class="page flex-col">
    <div class="box_12 flex-col">
      <!-- <div class="group_3 flex-row justify-between">
        <span class="text_8">32寸直播大屏</span>
        <div class="text-wrapper_1 flex-col">
          <span class="text_9">立即咨询</span>
        </div>
      </div> -->
      <div
        :class="{
          group_4: true,
          'flex-col': true,
          restoration: immediatelyshow,
        }"
      >
        <div class="text-wrapper_2">32寸直播一体机</div>
        <div class="text_12">赋能打造专业智慧直播间</div>
        <div class="text-wrapper_3 flex-col">
          <span
            class="text_13"
            @click="
              () => {
                dialogVisible = true;
              }
            "
            >立即咨询</span
          >
        </div>
      </div>
      <img
        :class="{ image_2: true, restoration: immediatelyshow }"
        referrerpolicy="no-referrer"
        src="../../../public/images/32/jiqi_32.0.png"
      />
    </div>
    <div class="box_9 flex-col">
      <span class="text_55">直播时被这些问题困扰？</span>
      <div class="flex-cols">
        <div class="box_14 flex-row justify-between">
          <div class="text-wrapper_16 flex-col">
            <div class="paragraph_2">手机直播屏幕小<br />看不清弹幕</div>
          </div>
        </div>
        <div class="box_15 flex-row justify-between">
          <div class="text-wrapper_18 flex-col">
            <div class="paragraph_2">手机发烫损耗严重 <br />直播卡顿</div>
          </div>
        </div>
      </div>
      <div class="flex-cols">
        <div class="text-wrapper_17 flex-col">
          <div class="paragraph_2">手机直播无法实现 <br />多镜头场景切换</div>
        </div>
        <div class="text-wrapper_19 flex-col">
          <div class="paragraph_2">手机直播无法实现<br />虚拟背景切换</div>
        </div>
      </div>
      <div class="text-group_17 flex-col justify-between">
        <span class="text_56"
          >多直播功能聚合&nbsp;&nbsp;轻松开启一场专业直播</span
        >
        <span class="text_57"
          >智能背景、镜头特写、绿幕抠图、直播提词，一机集合多种功能，一人一机即可完成直播支持预存直播设置，开机即可直播</span
        >
      </div>
      <div class="grid_2 flex-row">
        <div
          class="image-text_8 flex-col justify-between"
          v-for="(item, index) in loopData1"
          :key="index"
        >
          <img
            class="image_17"
            referrerpolicy="no-referrer"
            :src="item.lanhuimage0"
          />
          <span class="text-group_11" v-html="item.lanhutext0"></span>
        </div>
      </div>
    </div>
    <div class="box_2 flex-col">
      <div class="block_8 flex-row">
        <div class="text-group_12 flex-col justify-between">
          <span class="text_14">绿幕抠像&nbsp;&nbsp;多种虚拟场景即时切换</span>
          <span class="text_15"
            >直播场景无需换来换去，一键即可更换直播间背景，多种背景方式任你选择，让你直播带货先人一步。</span
          >
        </div>
      </div>
      <div class="image-wrapper_13 flex-row">
        <!-- <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps22y8q3azgvvmrk7bax888s3hgeh8ed4xl511465a0-eb44-48b9-a1e2-652f05249f68"
        /> -->
        <img
          src="../../../public/images/32/img_11.png"
          alt=""
          class="beijing"
        />
        <img
          src="../../../public/images/32/img_jiqi.png"
          alt=""
          class="zhiboji"
        />
        <img
          src="../../../public/images/32/img_renwu.png"
          alt=""
          class="renwu"
        />
        <img
          :src="`../../../public/images/32/beijing_0${item}.png`"
          alt=""
          :class="{ beijing_two: true, active: index == item }"
          v-for="item in 10"
          :key="item"
        />
      </div>
      <div class="block_9 flex-row justify-between">
        <img
          class="label_1"
          referrerpolicy="no-referrer"
          src="../../../public/images/32/icon_zuo.png"
          @click="changeLeft"
        />
        <div class="box_3 flex-col">
          <div
            class="box_13 flex-row"
            :style="{
              width: imgageIndex * 10.8 + 'rem',
              left: leftIndex + 'rem',
            }"
          >
            <div
              class="item_1"
              v-for="item in 10"
              :key="item"
              @mouseover="change(item)"
              @mouseleave="leave"
            >
              <img
                class="image_4"
                referrerpolicy="no-referrer"
                :src="`../../../public/images/32/beijing_0${item}.png`"
              />
              <div class="xuanzhong" v-if="item == index"></div>
            </div>
          </div>
        </div>
        <img
          class="label_2"
          referrerpolicy="no-referrer"
          src="../../../public/images/32/icon_you.png"
          @click="changeRight(10)"
        />
      </div>
    </div>
    <div class="box_5 flex-col">
      <div class="block_10 flex-row justify-between">
        <div class="text-group_13 flex-col justify-between">
          <div class="paragraph_1">多机位摄像头<br />多角度呈现直播间场景</div>
          <div class="text_16">
            支持三路HDMI超清接口，通过搭配多个摄像头可以实现多个机位切换多角度呈现直播间场景，详细展示产品细节，带货更轻松。
          </div>
        </div>
        <img
          class="image_10"
          referrerpolicy="no-referrer"
          src="../../../public/images/32/img_17.png"
        />
      </div>
      <div class="block_4 flex-col">
        <div class="block_11 flex-row">
          <div class="text-group_14 flex-col justify-between">
            <div class="text_17">远程直播&nbsp;&nbsp;直播场景多元化</div>
            <div class="text_18">
              不仅支持物理摄像头，还支持远程推流实现远程直播、监控慢直播等功能实现远程互动。
            </div>
          </div>
        </div>

        <img
          class="image_11"
          referrerpolicy="no-referrer"
          src="../../../public/images/32/img_18.png"
        />
      </div>

      <div class="image-wrapper_14 flex-row justify-between">
        <img
          class="image_12"
          referrerpolicy="no-referrer"
          src="../../../public/images/32/img_21.png"
        />
        <img
          class="image_13"
          referrerpolicy="no-referrer"
          src="../../../public/images/32/img_22.png"
        />
      </div>

      <div class="text-wrapper_21 flex-row justify-between">
        <span class="text_21">地区三</span> <span class="text_22">地区四</span>
      </div>
      <div class="text-wrapper_212 flex-row justify-between">
        <span class="text_21">地区一</span> <span class="text_22">地区二</span>
      </div>
      <img
        class="image_14"
        referrerpolicy="no-referrer"
        src="../../../public/images/32/img_20.png"
      />
      <img
        class="image_15"
        referrerpolicy="no-referrer"
        src="../../../public/images/32/img_19.png"
      />
    </div>
    <div class="box_6 flex-col">
      <div class="text-group_15 flex-col justify-between">
        <div class="text_23">智能直播软件，让直播更简单</div>
        <div class="text_24">
          内置直播提词器，便于直播讲解产品信息；内置主流直播平台，随时随地开播；高清直播大屏，实时预览大数据。
        </div>
      </div>
      <div class="list_2 flex-row">
        <div
          class="text-group_5 flex-col"
          :style="{
            background: item.lanhuBg0,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <span class="text_25" v-html="item.lanhutext0"></span>
          <span class="text_26" v-html="item.lanhutext1"></span>
        </div>
      </div>
    </div>
    <div class="box_7 flex-col">
      <div class="text-wrapper_6 flex-col">
        <div class="title">强劲芯动力 长时直播无压力</div>
        <span class="text_27"
          >升级旗舰骁龙8系八核处理器，8G+128G大内存，速度再进化，直播流畅无卡顿，长<br />时直播更轻松；配置丰富接口，可外接摄像头、麦克风、声卡、键盘鼠标等设备。</span
        >
      </div>
    </div>
    <div class="diversification">
      <div class="diversification_title">多场景适用 打造智慧直播间</div>
      <div class="diversification_content">适用于多种直播场景及需求</div>
      <div :class="{ box_list: true }">
        <div :class="{ box: true, restoration: scrollTop > fontSize * 470 }">
          <div class="text">电商卖货直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 470 }">
          <div class="text">户外旅游直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 470 }">
          <div class="text">探店体验直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 470 }">
          <div class="text">科普教学直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 470 }">
          <div class="text">助农直播</div>
        </div>
        <div :class="{ box: true, restoration: scrollTop > fontSize * 470 }">
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
let imgageIndex = ref(10);
let leftIndex = ref(0);
function changeRight() {
  console.log(leftIndex.value, imgageIndex.value * 10.8 - 62.5);
  if (Math.abs(leftIndex.value) > imgageIndex.value * 10.8 - 62.5) return;
  leftIndex.value -= 11.5;
}
function changeLeft() {
  if (leftIndex.value == 0) return;
  leftIndex.value += 11.5;
}
let index = ref(1);


const slide = () => {
  if(index.value <= 9){
    index.value = index.value+=1
    if(index.value>3){
      changeRight()
    }
  }else{
    index.value = 1
    leftIndex.value = 0
}
}
var timer = setInterval(slide,2000)

function change(item) {
  console.log(item)
  index.value = item;
  clearInterval(timer)
}

function leave(){
  timer = setInterval(slide,2000)
}

let loopData0 = ref([
  {
    lanhuBg0:
      "url(../../../public/images/32/img_23.png) 100% no-repeat",
    lanhutext0: "大屏提词器",
    lanhutext1:
      "可以对需讲解的产品信息进行设置，并悬浮显示在屏幕上，无需另外配置提词器。",
  },
  {
    lanhuBg0:
      "url(../../../public/images/32/img_24.png) 100% no-repeat",
    lanhutext0: "内置主流直播软件",
    lanhutext1:
      "支持5G全网通和WIFI网络，支持国内外多款主流APP，随时随地一键开播。",
  },
  {
    lanhuBg0:
      "url(../../../public/images/32/img_25.png) 100% no-repeat",
    lanhutext0: "高清大屏实时查看数据",
    lanhutext1:
      "1080P高清分辨率，色瓷丰富画质细腻；支持查看与管理后台直播数据。",
  },
]);
let loopData1 = ref([
  {
    lanhuimage0:
      "../../../public/images/32/img_05.png",
    lanhutext0: "骁龙八核处理器",
  },
  {
    lanhuimage0:
      "../../../public/images/32/img_06.png",
    lanhutext0: "绿幕抠像更换背景",
  },
  {
    lanhuimage0:
      "../../../public/images/32/img_07.png",
    lanhutext0: "支持多机位切换",
  },
  {
    lanhuimage0:
      "../../../public/images/32/img_08.png",
    lanhutext0: "专业移动导播台功能",
  },
  {
    lanhuimage0:
      "../../../public/images/32/img_09.png",
    lanhutext0: "支持主流直播平台",
  },
  {
    lanhuimage0:
      "../../../public/images/32/img_10.png",
    lanhutext0: "可24小时不间断直播",
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
.page {
  background-color: rgba(236, 236, 236, 1);
  //   position: relative;
  width: 100%;
  //   height: 800px;
  overflow: hidden;
  // margin-top: 50px;
  .box_12 {
    position: relative;
    width: 100%;
    height: 900px;
    background-color: rgba(0, 0, 0, 1);
    overflow: hidden;
    .group_1 {
      background-color: rgba(0, 0, 0, 1);
      width: 100%;
      height: 50px;
      justify-content: flex-center;
      .image_1 {
        width: 80px;
        height: 13px;
        margin: 19px 0 0 460px;
      }
      .text_1 {
        width: 24px;
        height: 12px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 151px;
        margin: 20px 0 0 49px;
      }
      .text_2 {
        width: 50px;
        height: 12px;
        overflow-wrap: break-word;
        color: rgba(103, 217, 94, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 151px;
        margin: 20px 0 0 40px;
      }
      .text_3 {
        width: 50px;
        height: 13px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 151px;
        margin: 18px 0 0 39px;
      }
      .text_4 {
        width: 50px;
        height: 12px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 151px;
        margin: 20px 0 0 39px;
      }
      .text_5 {
        width: 49px;
        height: 12px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 151px;
        margin: 20px 0 0 39px;
      }
      .image-wrapper_1 {
        background-color: rgba(41, 57, 76, 0);
        height: 22px;
        width: 22px;
        margin: 14px 0 0 268px;
        .thumbnail_1 {
          width: 16px;
          height: 16px;
          margin: 3px 0 0 3px;
        }
      }
      .text_6 {
        width: 50px;
        height: 13px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 151px;
        margin: 18px 0 0 4px;
      }
      .group_2 {
        background-color: rgba(255, 255, 255, 0.2);
        width: 1px;
        height: 16px;
        margin: 17px 0 0 16px;
      }
      .image-wrapper_2 {
        background-color: rgba(41, 57, 76, 0);
        height: 22px;
        width: 22px;
        margin: 14px 0 0 14px;
        .thumbnail_2 {
          width: 16px;
          height: 16px;
          margin: 3px 0 0 3px;
        }
      }
      .text_7 {
        width: 91px;
        height: 11px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-family: DINPro-Medium;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        line-height: 151px;
        margin: 20px 459px 0 4px;
      }
    }
    .group_3 {
      background-color: rgba(38, 38, 38, 1);
      width: 100%;
      height: 50px;
      .text_8 {
        width: 76px;
        height: 12px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 151px;
        margin: 20px 0 0 460px;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &:nth-last-child(-n + 3) {
          margin-bottom: 0;
        }
      }
      .text-wrapper_1 {
        border-radius: 15px;
        height: 30px;
        border: 1px solid rgba(255, 255, 255, 1);
        width: 72px;
        margin: 10px 460px 0 0;
        .text_9 {
          width: 49px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(237, 237, 237, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Normal;
          font-weight: normal;
          text-align: left;
          white-space: nowrap;
          line-height: 151px;
          margin: 9px 0 0 12px;
        }
      }
    }
    .group_4 {
      //   background-color: rgba(0, 0, 0, 1);
      width: 100%;
      height: 900px;
      margin-bottom: 1px;
      padding-top: 80px;
      box-sizing: border-box;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      .text-wrapper_2 {
        width: 100%;
        height: 39px;

        font-size: 44px;

        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        line-height: 39px;
        // line-height: 151px;
        // margin: 80px 0 0 789px;
        color: #fff !important;

        .text_10 {
          width: 338px;
          height: 39px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 44px;
          font-family: DINPro-Bold;
          font-weight: 700;
          text-align: left;
          white-space: nowrap;
          //   line-height: 151px;
        }
        .text_11 {
          width: 338px;
          height: 39px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 40px;
          font-family: SourceHanSansCN-Bold;
          font-weight: 700;
          text-align: left;
          white-space: nowrap;
          line-height: 151px;
        }
      }
      .text_12 {
        // width: 227px;
        width: 100%;
        height: 19px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 20px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        margin-top: 20px;
        // line-height: 151px;
        // margin: 19px 0 0 846px;
      }
      .text-wrapper_3 {
        height: 50px;
        background: linear-gradient(90deg, #A9E137, #2FD59D);
        border-radius: 25px;
        width: 148px;
        // margin: 33px 0 660px 886px;
        text-align: center;
        line-height: 50px;
        // position: absolute;
        // left: 886px;
        // top: 190px;
        margin: 0 auto;
        margin-top: 34px;
        .text_13 {
          width: 73px;
          height: 18px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 18px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
          //   line-height: 151px;
          //   margin: 16px 0 0 37px;
        }
      }
    }
    .image_2 {
      position: absolute;
      left: 842px;
      top: 288px;
      width: 236px;
      height: 685px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
  }
  .box_2 {
    background-color: rgba(0, 0, 0, 1);
    height: 1152px;
    // margin-top: 1774px;
    width: 100%;
    padding-top: 140px;
    box-sizing: border-box;
    .block_8 {
      width: 100%;
      height: 97px;
      //   margin: 139px 0 0 689px;
      .text-group_12 {
        width: 100%;
        height: 97px;
        .text_14 {
          width: 100%;
          height: 35px;
          overflow-wrap: break-word;
          color: rgba(254, 254, 254, 1);
          font-size: 36px;
          font-family: SourceHanSansCN-Bold;
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
          //   line-height: 50px;
          display: block;
        }
        .text_15 {
          width: 100%;
          height: 44px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 16px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: center;
          line-height: 28px;
          display: block;
          margin: 18px 0 0 10px;
        }
      }
    }
    .image-wrapper_13 {
      width: 1078px;
      height: 416px;
      //   margin: 52px 0 0 382px;
      margin: 0 auto;
      margin-top: 52px;
      position: relative;
      //   .image_3 {
      //     width: 1078px;
      //     height: 416px;
      //   }
      .beijing {
        width: 1078px;
        height: 416px;
      }
      .zhiboji {
        width: 213px;
        height: 416px;
        position: absolute;
        bottom: 0;
        right: 118px;
      }
      .renwu {
        position: absolute;
        width: 185px;
        height: 331px;
        right: 132px;
        top: 24px;
        z-index: 100;
      }
      .beijing_two {
        position: absolute;
        width: 185px;
        height: 331px;
        right: 132px;
        top: 24px;
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }
    }
    .block_9 {
      width: 1207px;
      height: 288px;
      //   margin: 0 0 160px 357px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-top: 80px;

      .label_1 {
        width: 44px;
        height: 44px;
        // margin-top: 172px;
      }
      .box_3 {
        background-color: rgba(0, 0, 0, 1);
        height: 250px;
        // margin-left: 59px;
        width: 1000px;
        display: flex;
        margin: 0 auto;
        // overflow: hidden;
        overflow: hidden;

        .box_13 {
          //   width: 1000px;
          height: 250px;

          display: flex;
          padding-left: 20px;
          padding-bottom: 10px;
          position: relative;
          padding-top: 10px;
          transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
          .item_1 {
            width: 128px;
            height: 228px;
            position: relative;
            margin-right: 46px;
            .image_4 {
              width: 128px;
              height: 228px;
              position: absolute;
              z-index: 100;
            }
            .xuanzhong {
              width: 148px;
              height: 248px;
              background-image: url("../../../public/images/32/beijing_xuanzhong.png");
              background-repeat: no-repeat;
              background-size: 100%;
              position: absolute;
              left: -10px;
              top: -10px;
            }
          }

          .image-wrapper_4 {
            height: 248px;
            background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps4q8mqa8q7o7zu7spmai11mrfku01m9sddaf510e1-f7f0-4b0b-9be3-4c0c64c45f1c)
              100% no-repeat;
            background-size: 100% 100%;
            margin-left: 36px;
            width: 148px;
            .image_5 {
              width: 128px;
              height: 228px;
              margin: 10px 0 0 10px;
            }
          }
          .image_6 {
            width: 128px;
            height: 228px;
            margin: 10px 0 0 37px;
          }
          .image_7 {
            width: 128px;
            height: 228px;
            margin: 10px 0 0 46px;
          }
          .image_8 {
            width: 128px;
            height: 228px;
            margin: 10px 0 0 47px;
          }
          .image_9 {
            width: 128px;
            height: 228px;
            margin: 10px 0 0 46px;
          }
        }
      }
      .label_2 {
        width: 44px;
        height: 44px;
        margin: 172px 0 0 60px;
        margin-top: 0;
      }
    }
  }
  .box_5 {
    background-color: rgba(18, 18, 18, 1);
    position: relative;
    width: 100%;
    height: 1876px;
    justify-content: flex-center;
    padding-top: 140px;
    box-sizing: border-box;
    .block_10 {
      width: 999px;
      //   width: 100%;
      height: 360px;
      //   padding-top: 140px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin: 0 auto;
      .text-group_13 {
        width: 470px;
        height: 175px;
        // margin-top: 86px;
        .paragraph_1 {
          width: 370px;
          //   width: 100%;
          height: 85px;
          overflow-wrap: break-word;
          color: rgba(254, 254, 254, 1);
          font-size: 36px;
          font-family: SourceHanSansCN-Bold;
          font-weight: 700;
          text-align: left;
          line-height: 50px;
          margin-left: 1px;
          //   display: block;
          //   margin: 0 auto;
        }
        .text_16 {
          width: 409px;
          height: 72px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 16px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          line-height: 28px;
          margin-top: 18px;
        }
      }
      .image_10 {
        width: 540px;
        height: 360px;
      }
    }
    .block_4 {
      height: 463px;
      background: url(../../../public/images/32/img_99.png)
        100% no-repeat;
      background-size: 100% 100%;
      width: 1170px;
      position: relative;
      margin: 208px 0 0 375px;
      padding-top: 10px;
      box-sizing: border-box;
      .block_11 {
        width: 521px;
        height: 97px;
        margin: 114px 0 0 324px;
        .text-group_14 {
          width: 521px;
          height: 97px;
          .text_17 {
            width: 428px;
            height: 35px;
            overflow-wrap: break-word;
            color: rgba(254, 254, 254, 1);
            font-size: 36px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: center;
            white-space: nowrap;
            line-height: 50px;
            margin-left: 47px;
          }
          .text_18 {
            width: 521px;
            height: 44px;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Light;
            font-weight: 300;
            text-align: center;
            line-height: 28px;
            margin-top: 18px;
          }
        }
      }

      .image_11 {
        position: absolute;
        left: 97px;
        top: 300px;
        width: 337px;
        height: 892px;
      }
    }
    .text-wrapper_21 {
      width: 400px;
      height: 15px;
      //   margin: 229px 0 0 1116px;
      position: relative;
      left: 1056px;
      top: -80px;
      display: flex;
      justify-content: space-between;
      .text_21 {
        width: 40%;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(254, 254, 254, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 50px;
        display: block;
      }
      .text_22 {
        width: 40%;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(254, 254, 254, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 50px;
        display: block;
      }
    }
    .text-wrapper_212 {
      width: 400px;
      height: 15px;
      //   margin: 229px 0 0 1116px;
      position: relative;
      left: 1056px;
      top: -480px;
      display: flex;
      justify-content: space-between;
      .text_21 {
        width: 40%;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(254, 254, 254, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 50px;
        display: block;
      }
      .text_22 {
        width: 40%;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(254, 254, 254, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 50px;
        display: block;
      }
    }
    .image-wrapper_14 {
      width: 405px;
      height: 300px;
      //   margin: 21px 0 142px 1056px;
      display: flex;
      justify-content: space-between;
      position: relative;
      left: 1056px;
      top: 275px;
      .image_12 {
        width: 170px;
        height: 300px;
      }
      .image_13 {
        width: 170px;
        height: 300px;
      }
    }
    .image_14 {
      position: absolute;
      left: 1290px;
      top: 1059px;
      width: 170px;
      height: 300px;
    }
    .image_15 {
      position: absolute;
      left: 1055px;
      top: 1059px;
      width: 170px;
      height: 300px;
    }
  }
  .box_6 {
    background-color: rgba(0, 0, 0, 1);
    width: 100%;
    height: 890px;
    padding-top: 140px;
    box-sizing: border-box;
    // justify-content: flex-center;
    .text-group_15 {
      width: 100%;
      height: 98px;
      //   margin: 139px 0 0 700px;
      .text_23 {
        // width: 484px;
        width: 100%;
        height: 37px;
        overflow-wrap: break-word;
        color: rgba(254, 254, 254, 1);
        font-size: 36px;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        line-height: 50px;
        margin-left: 18px;
      }
      .text_24 {
        width: 100%;
        height: 45px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        text-align: center;
        line-height: 28px;
        margin-top: 16px;
      }
    }
    .list_2 {
      width: 1000px;
      height: 432px;
      display: flex;
      justify-content: space-between;
      margin: 80px 0 141px 460px;
      .text-group_5 {
        width: 320px;
        height: 432px;
        background-size: 100% 100%;
        margin-right: 20px;
        .text_25 {
          width: 206px;
          height: 20px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
          //   line-height: 151px;
          //   margin: 335px 0 0 20px;
          margin-top: 335px;
          margin-left: 20px;
          display: block;
        }
        .text_26 {
          width: 280px;
          height: 36px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 14px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          line-height: 22px;
          //   margin: 13px 0 28px 20px;
          padding-left: 20px;
          box-sizing: border-box;
          display: block;
          margin-top: 13px;
        }
      }
    }
  }
  .box_7 {
    background-color: rgba(0, 0, 0, 1);
    position: relative;
    width: 100%;
    height: 900px;
    padding-top: 140px;
    box-sizing: border-box;
    .text-wrapper_6 {
      height: 700px;
      background: url(../../../public/images/32/img_26.png)
        100% no-repeat;
      background-size: 100% 100%;
      //   margin-top: 88px;
      width: 100%;
      .title {
        width: 100%;
        height: 36px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #fefefe;
        text-align: center;
        margin-bottom: 20px;
        // line-height: 50px;
      }
      .text_27 {
        // width: 666px;
        width: 100%;
        height: 45px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        text-align: center;
        line-height: 28px;
        display: block;
        // margin: 44px 0 0 627px;
      }
    }
    .text-group_16 {
      width: 464px;
      height: 70px;
      margin: 201px 0 0 728px;
      .text_28 {
        width: 464px;
        height: 35px;
        overflow-wrap: break-word;
        color: rgba(254, 254, 254, 1);
        font-size: 36px;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        line-height: 50px;
      }
      .text_29 {
        width: 198px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin: 20px 0 0 133px;
      }
    }
    .text-wrapper_7 {
      background-color: rgba(129, 129, 129, 1);
      border-radius: 10px;
      height: 500px;
      width: 266px;
      margin: 80px 0 145px 212px;
      .text_30 {
        width: 24px;
        height: 182px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: center;
        line-height: 50px;
        margin: 159px 0 0 120px;
      }
    }
    .text_31 {
      position: absolute;
      left: 727px;
      top: 79px;
      width: 464px;
      height: 36px;
      overflow-wrap: break-word;
      color: rgba(254, 254, 254, 1);
      font-size: 36px;
      font-family: SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      line-height: 50px;
    }
    .text-wrapper_8 {
      background-color: rgba(129, 129, 129, 1);
      border-radius: 10px;
      height: 500px;
      width: 266px;
      position: absolute;
      left: 458px;
      top: 1139px;
      .text_32 {
        width: 24px;
        height: 182px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: center;
        line-height: 50px;
        margin: 159px 0 0 120px;
      }
    }
    .text-wrapper_9 {
      background-color: rgba(129, 129, 129, 1);
      border-radius: 10px;
      height: 500px;
      width: 266px;
      position: absolute;
      left: 704px;
      top: 1139px;
      .text_33 {
        width: 24px;
        height: 182px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: center;
        line-height: 50px;
        margin: 159px 0 0 120px;
      }
    }
    .text-wrapper_10 {
      background-color: rgba(129, 129, 129, 1);
      border-radius: 10px;
      height: 500px;
      width: 266px;
      position: absolute;
      left: 950px;
      top: 1139px;
      .text_34 {
        width: 24px;
        height: 182px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: center;
        line-height: 50px;
        margin: 159px 0 0 120px;
      }
    }
    .text-wrapper_11 {
      background-color: rgba(129, 129, 129, 1);
      border-radius: 10px;
      height: 500px;
      width: 266px;
      position: absolute;
      left: 1196px;
      top: 1139px;
      .text_35 {
        width: 24px;
        height: 119px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: center;
        line-height: 50px;
        margin: 190px 0 0 120px;
      }
    }
    .text-wrapper_12 {
      background-color: rgba(129, 129, 129, 1);
      border-radius: 10px;
      height: 500px;
      width: 266px;
      position: absolute;
      left: 1442px;
      top: 1139px;
      .text_36 {
        width: 24px;
        height: 182px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: center;
        line-height: 50px;
        margin: 159px 0 0 120px;
      }
    }
  }
  .box_8 {
    background-color: rgba(20, 20, 20, 1);
    width: 100%;
    height: 309px;
    .block_12 {
      width: 1001px;
      height: 37px;
      margin: 37px 0 0 460px;
      .text_37 {
        width: 57px;
        height: 14px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 28px;
        margin-top: 23px;
      }
      .text_38 {
        width: 57px;
        height: 14px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 28px;
        margin: 23px 0 0 100px;
      }
      .text_39 {
        width: 57px;
        height: 14px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 28px;
        margin: 23px 0 0 101px;
      }
      .text_40 {
        width: 136px;
        height: 12px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        text-align: left;
        white-space: nowrap;
        line-height: 28px;
        margin: 8px 0 0 268px;
      }
      .image-wrapper_6 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 55px;
        width: 24px;
        .image_16 {
          width: 22px;
          height: 20px;
          margin: 2px 0 0 1px;
        }
      }
      .text_41 {
        width: 136px;
        height: 17px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 20px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        line-height: 28px;
        margin: 3px 0 0 10px;
      }
    }
    .block_13 {
      width: 999px;
      height: 122px;
      margin: 12px 0 0 461px;
      .text-wrapper_22 {
        width: 62px;
        height: 108px;
        margin-top: 10px;
        .text_42 {
          width: 62px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
        }
        .text_43 {
          width: 49px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin-top: 20px;
        }
        .text_44 {
          width: 62px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin-top: 20px;
        }
        .text_45 {
          width: 49px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin-top: 20px;
        }
      }
      .text-wrapper_23 {
        width: 75px;
        height: 76px;
        margin: 10px 0 0 93px;
        .text_46 {
          width: 74px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin-left: 1px;
        }
        .text_47 {
          width: 75px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin-top: 20px;
        }
        .text_48 {
          width: 74px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin: 20px 0 0 1px;
        }
      }
      .text-wrapper_24 {
        width: 49px;
        height: 108px;
        margin: 10px 0 0 85px;
        .text_49 {
          width: 49px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
        }
        .text_50 {
          width: 49px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin-top: 20px;
        }
        .text_51 {
          width: 49px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin-top: 20px;
        }
        .text_52 {
          width: 49px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin-top: 20px;
        }
      }
      .block_6 {
        background-color: rgba(102, 102, 102, 1);
        width: 1px;
        height: 60px;
        margin: 20px 0 0 137px;
      }
      .image-text_5 {
        width: 100px;
        height: 122px;
        margin-left: 137px;
        .group_5 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 2px;
          width: 100px;
          height: 100px;
        }
        .text-group_7 {
          width: 74px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: center;
          white-space: nowrap;
          line-height: 28px;
          margin: 10px 0 0 12px;
        }
      }
      .image-text_6 {
        width: 100px;
        height: 122px;
        margin-left: 30px;
        .section_3 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 2px;
          width: 100px;
          height: 100px;
        }
        .text-group_8 {
          width: 75px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: center;
          white-space: nowrap;
          line-height: 28px;
          margin: 10px 0 0 13px;
        }
      }
      .image-text_7 {
        width: 100px;
        height: 122px;
        margin-left: 30px;
        .section_4 {
          height: 100px;
          background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps4gzx5fdt941w3dotmekjop7hc4k6bm983bfabbf78-d3f5-4678-81c5-0ac38a8488e9)
            100% no-repeat;
          background-size: 100% 100%;
          width: 100px;
          .block_7 {
            height: 81px;
            background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psefzvan1u9bkna6w9ohs6ldgb75lkw4yg0d7c6b9a-20fc-4737-9447-2b4b8e4c458d)
              100% no-repeat;
            background-size: 100% 100%;
            width: 81px;
            margin: 9px 0 0 10px;
            .image-wrapper_7 {
              background-color: rgba(255, 255, 255, 1);
              border-radius: 50%;
              height: 40px;
              width: 40px;
              margin: 21px 0 0 20px;
              .label_3 {
                width: 21px;
                height: 31px;
                margin: 3px 0 0 9px;
              }
            }
          }
        }
        .text-group_9 {
          width: 74px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 12px;
          font-family: SourceHanSansCN-Light;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
          line-height: 28px;
          margin: 10px 0 0 13px;
        }
      }
    }
    .section_5 {
      background-color: rgba(102, 102, 102, 1);
      width: 1000px;
      height: 1px;
      margin: 50px 0 0 460px;
    }
    .block_14 {
      width: 1000px;
      height: 24px;
      margin: 13px 0 13px 460px;
      .image-wrapper_8 {
        border-radius: 50%;
        height: 12px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        margin-top: 6px;
        width: 12px;
        .thumbnail_3 {
          width: 6px;
          height: 8px;
          margin: 2px 0 0 3px;
        }
      }
      .text_53 {
        width: 318px;
        height: 12px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        text-align: left;
        white-space: nowrap;
        line-height: 28px;
        margin: 6px 0 0 2px;
      }
      .section_7 {
        background-color: rgba(102, 102, 102, 1);
        width: 1px;
        height: 14px;
        margin: 5px 0 0 13px;
      }
      .text_54 {
        width: 243px;
        height: 12px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 12px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        text-align: left;
        white-space: nowrap;
        line-height: 28px;
        margin: 6px 0 0 14px;
      }
      .image-wrapper_9 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 271px;
        width: 24px;
        .thumbnail_4 {
          width: 15px;
          height: 16px;
          margin: 4px 0 0 5px;
        }
      }
      .image-wrapper_10 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 10px;
        width: 24px;
        .thumbnail_5 {
          width: 19px;
          height: 15px;
          margin: 5px 0 0 3px;
        }
      }
      .image-wrapper_11 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 10px;
        width: 24px;
        .thumbnail_6 {
          width: 15px;
          height: 15px;
          margin: 5px 0 0 4px;
        }
      }
      .image-wrapper_12 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 10px;
        width: 24px;
        .thumbnail_7 {
          width: 18px;
          height: 18px;
          margin: 3px 0 0 3px;
        }
      }
    }
  }
  .box_9 {
    background-color: rgba(18, 18, 18, 1);
    // position: absolute;
    position: relative;
    // left: 0;
    // top: 900px;
    width: 100%;
    height: 1775px;
    justify-content: flex-center;
    padding-top: 140px;
    box-sizing: border-box;
    .text_55 {
      width: 100% !important;
      height: 35px;
      display: inline-block;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 36px;
      font-family: SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      margin-bottom: 100px;
      //   line-height: 151px;
      //   margin: 139px 0 0 765px;
    }
    .box_14 {
      width: 1000px;
      height: 240px;
      //   margin: 100px 0 0 460px;
      .text-wrapper_16 {
        height: 240px;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psqsggba6ikgrnt2ihg9rzugxt7rn3vluoa538b7108-6295-423b-856a-4a2f01e7e2c6)
          100% no-repeat;
        background-size: 100% 100%;
        width: 600px;
        padding-top: 90px;
        box-sizing: border-box;
      }
    }
    .box_15 {
      //   width: 1000px;
      width: 380px;
      height: 240px;
      //   margin: 20px 0 0 460px;
      .text-wrapper_18 {
        height: 240px;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psr3ufg6ja16h5eglq1xsgapvt7gfppp44d154bb-f446-4181-a5ab-efbe3a80c563)
          100% no-repeat;
        background-size: 100% 100%;
        width: 380px;
        padding-top: 90px;
        box-sizing: border-box;
        .paragraph_4 {
          width: 165px;
          height: 50px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          text-align: center;
          line-height: 30px;
          margin: 95px 0 0 107px;
        }
      }
    }
    .text-group_17 {
      width: 898px;
      //   height: 71px;
      margin: 219px 0 0 511px;
      .text_56 {
        width: 100%;
        height: 35px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 36px;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        display: block;
        text-align: center;
        white-space: nowrap;
        // line-height: 151px;
        // margin-left: 132px;
        margin-bottom: 20px;
      }
      .text_57 {
        width: 898px;
        height: 16px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-bottom: 100px;
        display: block;
      }
    }
    .grid_2 {
      width: 1000px;
      height: 472px;
      flex-wrap: wrap;
      //   margin: 99px 0 140px 460px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .image-text_8 {
        width: 320px;
        height: 216px;
        margin: 0 20px 40px 0;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &:nth-last-child(-n + 3) {
          margin-bottom: 0;
        }
        .image_17 {
          width: 320px;
          height: 180px;
        }
        .text-group_11 {
          width: 152px;
          height: 16px;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 16px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
          line-height: 28px;
          margin: 20px 0 0 102px;
        }
      }
    }
  }
}
.flex-cols {
  width: 1000px;
  height: 240px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
  .text-wrapper_17 {
    height: 240px;

    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psfnjzflv4nq1n0vq06gjosws3xgtchvln8d98d42d-7db2-4edc-9939-1af1c88c2c6e)
      100% no-repeat;
    background-size: 100% 100%;
    width: 380px;
    padding-top: 90px;
    box-sizing: border-box;
    .paragraph_3 {
      width: 165px;
      height: 49px;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 20px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      text-align: center;
      line-height: 30px;
      margin: 96px 0 0 107px;
    }
  }
  .text-wrapper_19 {
    height: 240px;

    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps47z1l57x484co5aviw7669wik4d9emdci390cf2c2-9a50-4c89-b444-f24cd2b6bd45)
      100% no-repeat;
    background-size: 100% 100%;
    width: 600px;
    padding-top: 90px;
    box-sizing: border-box;
    .paragraph_5 {
      width: 165px;
      height: 50px;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 20px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      text-align: center;
      line-height: 30px;
      margin: 95px 0 0 217px;
    }
  }
  .paragraph_2 {
    width: 100%;

    height: 49px;
    //   overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    text-align: center;
    //   margin-top: 90px;
    //   line-height: 238px;
    //   margin: 96px 0 0 228px;
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
.active {
  opacity: 1 !important;
}
.text-wrapper_20 {
  width: 284px;
  height: 15px;
  // margin: 106px 0 131px 740px;
  position: absolute;
  left: 0;
  .text_19 {
    width: 50px;
    height: 15px;
    overflow-wrap: break-word;
    color: rgba(254, 254, 254, 1);
    font-size: 16px;
    font-family: SourceHanSansCN-Regular;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    line-height: 50px;
  }
  .text_20 {
    width: 49px;
    height: 15px;
    overflow-wrap: break-word;
    color: rgba(254, 254, 254, 1);
    font-size: 16px;
    font-family: SourceHanSansCN-Regular;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    line-height: 50px;
  }
}
.chip {
}
</style>
