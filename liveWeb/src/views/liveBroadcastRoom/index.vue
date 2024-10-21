<template>
  <div class="liveBroadcastRoom">
    <div class="banner">
      <div :class="{ banner_title: true, restoration: immediatelyshow }">
        直播间搭建
      </div>
      <div :class="{ banner_centent: true, restoration: immediatelyshow }">
        互视达为您提供专业的直播间搭建整套软硬件应用解决方案
      </div>
      <div
        :class="{ immediately: true, restoration: immediatelyshow }"
        @click="
          () => {
            dialogVisible = true;
          }
        "
      >
        立即咨询
      </div>
    </div>
    <div class="build">
      <div :class="{ banner_title: true, restoration: immediatelyshow }">
        互视达直播间搭建服务
      </div>
      <div :class="{ banner_centent: true, restoration: immediatelyshow }">
        赋能客户直播间从“0”到“1”发展，大步迈进直播时代
      </div>
      <div class="build_box">
        <div class="build_box_left">
          <div class="title">一站式装备配备，快速开播</div>
          <div class="content">
            可提供一整套专业直播间搭建所需的设备，包括直播一体机、补光灯、声卡套装和拍摄设备等，一站配全快速开播。
          </div>
        </div>
        <div class="build_box_right">
          <img
            src="../../../public/images/liveBroadcastRoom/icon_kaibo.png"
            alt=""
          />
        </div>
      </div>
      <div class="build_box">
        <div class="build_box_right">
          <img
            src="../../../public/images/liveBroadcastRoom/icon_changjing.png"
            alt=""
          />
        </div>
        <div class="build_box_left">
          <div class="title">虚拟背景直播，场景丰富多变</div>
          <div class="content">
            支持绿幕实时抠像，无需额外装修即可拥有高质量直播画面，支持PPT背景、视频背景和图片背景等。
          </div>
        </div>
      </div>
      <div class="build_box">
        <div class="build_box_left">
          <div class="title">数字人赋能直播间，降本增效</div>
          <div class="content">
            直播一体机内置互视达AI数字人系统，虚拟主播全天侯运转提供软硬件维护和技术支持，为客户直播降本增效。
          </div>
        </div>
        <div class="build_box_right">
          <img
            src="../../../public/images/liveBroadcastRoom/icon_shuziren.png"
            alt=""
          />
        </div>
      </div>
      <div class="build_box">
        <div class="build_box_right">
          <img
            src="../../../public/images/liveBroadcastRoom/icon_yuancheng.png"
            alt=""
          />
        </div>
        <div class="build_box_left">
          <div class="title">运营远程协同，有效辅助直播</div>
          <div class="content">
            内置互视达直播导播系统，多种功能一应俱全，支持远程协同，连接更大直播平台，一键案推流，直播简单有效。
          </div>
        </div>
      </div>
    </div>
    <div class="number_build">
      <div :class="{ banner_title: true, restoration: immediatelyshow }">
        数字直播间搭建
      </div>
      <div class="number_build_box_1">
        <div class="title">实景直播间</div>
        <div class="content">全实景搭建，适合拥有基础场景的实体货品商家</div>
        <img src="../../../public/images/liveBroadcastRoom/img_01.png" alt="" />
      </div>
      <div class="number_build_box_2">
        <div class="item">
          <div class="title">虚拟直播间</div>
          <div class="content">
            绿幕渲染，适合追求视觉效果场景替换需求的商家
          </div>
          <img
            src="../../../public/images/liveBroadcastRoom/img_02.png"
            alt=""
          />
        </div>
        <div class="item">
          <div class="title">多画面直播间</div>
          <div class="content">多机位多角度直播，追求画面质感近镜全景直播</div>
          <img
            src="../../../public/images/liveBroadcastRoom/img_03.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="bannerbottom">
      <div :class="{ banner_title: true, restoration: true }">
        演播室直播案例
      </div>
      <el-carousel
        :interval="4000"
        type="card"
        indicator-position="none"
        height="600px"
      >
        <el-carousel-item v-for="item in banner" :key="item">
          <img :src="item" style="width: 100%" alt="" />
        </el-carousel-item>
      </el-carousel>
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
let banner = ref([
  "../../../public/images/liveBroadcastRoom/img_001@2x.png",
  "../../../public/images/liveBroadcastRoom/img_002@2x.png",
  "../../../public/images/liveBroadcastRoom/img_003@2x.png",
  "../../../public/images/liveBroadcastRoom/img_004@2x.png",
]);
let dialogVisible = ref(false);
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

<style scoped lang="scss">
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
.bannerbottom {
  width: 100%;

  padding-top: 140px;
  padding-bottom: 140px;
  .banner_title {
    width: 100%;
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 100px;
    color: #2e3135;
  }
}
.restoration {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transform: scale(1);
}
.immediately {
  width: 148px;
  height: 50px;
  margin: 28px 450px;
  background: linear-gradient(90deg, #a9e137, #2fd59d);
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  // position: absolute;
  // left: 886px;
  // top: 716px;
  transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
  transform: translateY(2.08vw);
  opacity: 0;
  cursor: pointer;
}
.liveBroadcastRoom {
  width: 100%;
  margin-top: 48px;
  .banner {
    width: 100%;
    height: 630px;
    background-image: url("../../../public/images/liveBroadcastRoom/banner (1).png");
    background-repeat: no-repeat;
    background-size: 100%;
    border-top: 1px solid #ffffff;
    .banner_title {
      width: 58%;
      text-align: center;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-size: 40px;
      color: #ffffff;
      margin-top: 205px;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
    }
    .banner_centent {
      width: 72%;
      height: 17px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 18px;
      color: #999999;
      margin-top: 17px;
      text-align: center;
      transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      transform: translateY(2.08vw);
      opacity: 0;
      //   line-height: 32px;
    }
    // .banner_btn {
    //   width: 100%;
    //   height: 50px;
    //   margin-top: 28px;
    // }
  }
  .build {
    width: 100%;
    background-color: #ececec;
    padding-top: 140px;
    padding-bottom: 120px;
    .banner_title {
      width: 100%;
      text-align: center;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-size: 40px;

      color: #2e3135;

      // margin-top: 205px;
      // transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      // transform: translateY(2.08vw);
      // opacity: 0;
    }
    .banner_centent {
      width: 100%;
      height: 17px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 18px;
      color: #999999;
      margin-top: 17px;
      text-align: center;
      margin-bottom: 80px;
      // transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      // transform: translateY(2.08vw);
      // opacity: 0;
      //   line-height: 32px;
    }
    .build_box {
      width: 1000px;
      height: 300px;
      background: #ffffff;
      border-radius: 10px;
      margin: 0 auto;
      margin-bottom: 20px;
      padding: 30px 54px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .build_box_right {
        img {
          width: 240px;
          height: 240px;
        }
      }
      .build_box_left {
        margin-top: 57px;
        .title {
          // width: 323px;
          height: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          font-size: 26px;
          color: #2e3135;
          line-height: 34px;
        }
        .content {
          width: 386px;
          height: 76px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 16px;
          color: #666666;
          line-height: 30px;
          margin-top: 30px;
        }
      }
    }
    :hover {
      img {
        transform: scale(1.15);
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
      }
    }
  }
  .number_build {
    width: 100%;

    padding-top: 140px;
    padding-bottom: 140px;
    .banner_title {
      width: 100%;
      text-align: center;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-size: 40px;

      color: #2e3135;

      // margin-top: 205px;
      // transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
      // transform: translateY(2.08vw);
      // opacity: 0;
    }
    .number_build_box_1 {
      width: 1000px;
      height: 470px;
      background: #f0f0f0;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 80px;
      padding: 60px 200px;
      box-sizing: border-box;
      .title {
        width: 100%;
        text-align: center;
        height: 25px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        font-size: 26px;
        color: #2e3135;
        // line-height: 34px;
      }
      .content {
        width: 100%;
        height: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        font-size: 16px;
        color: #666666;
        // line-height: 30px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 50px;
      }
      img {
        width: 600px;
        height: 238px;
      }
    }
    .number_build_box_2 {
      width: 1000px;
      height: 485px;
      display: flex;
      justify-content: space-between;

      margin: 0 auto;
      margin-top: 20px;
      .item {
        width: 490px;
        height: 485px;
        background: #f0f0f0;
        border-radius: 10px;
        padding: 60px;
        box-sizing: border-box;
        .title {
          width: 100%;
          height: 25px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          font-size: 26px;
          color: #2e3135;
          text-align: center;
        }
        .content {
          width: 100%;
          height: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 16px;
          color: #666666;
          margin-bottom: 50px;
          text-align: center;
          margin-top: 20px;
        }
        img {
          width: 100%;
          height: 254px;
        }
      }
    }
  }
}
</style>
