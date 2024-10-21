<template>
  <div class="footer">
    <div class="footer_box">
      <div class="footer_box_left">
        <div class="footer_box_left_box">
          <div v-for="item in productIntroductionList" :key="item.name">
            {{ item.name }}
          </div>
        </div>
        <div class="footer_box_left_box">
          <div v-for="item in solutionList" :key="item.name">
            {{ item.name }}
          </div>
        </div>
        <div class="footer_box_left_box">
          <div
            v-for="item in aboutUsList"
            :key="item.name"
            @click="routePath(item.path)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="xian"></div>
      <div class="footer_box_right">
        <div class="footer_box_right_top">
          <div class="corporate_name">北京互视达科技有限公司</div>
          <div class="phone_icon"></div>
          <div class="phone">400-188-6581</div>
        </div>
        <div class="footer_box_right_qr">
          <div class="footer_box_right_qr_box">
            <div class="qr_1"></div>
            <div class="name">互视达公众号</div>
          </div>
          <div class="footer_box_right_qr_box">
            <div class="qr_2"></div>
            <div class="name">互视达小程序</div>
          </div>
          <div class="footer_box_right_qr_box">
            <div class="qr_3"></div>
            <div class="name">互视达抖音号</div>
          </div>
        </div>
      </div>
    </div>
    <div class="filing_Information">
      <div class="filing_Information_left">
        <div>©2015-2023 hushida.com 版权所有 京ICP备17022985号-4</div>
        <div class="xian"></div>
        <div>北京市海淀区信息路甲28号科实大厦B座10D</div>
      </div>
      <div class="filing_Information_right">
        <div></div>
        <div @click="pathFn('https://weibo.com/u/5365014402')"></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
function pathFn(item) {
  window.open(item);
}
let productIntroductionList = ref([
  {
    name: "产品介绍",
  },
  {
    name: "直播一体机",
  },
  {
    name: "直播大屏",
  },
  {
    name: "直播间搭建",
  },
  {
    name: "解决方案",
  },
]);
let solutionList = ref([
  {
    name: "解决方案",
  },
  {
    name: "场景解决方案",
  },
  {
    name: "行业解决方案",
  },
  {
    name: "解决方案详情",
  },
]);
let aboutUsList = ref([
  {
    name: "关于我们",
    path: "/aboutUs",
  },
  {
    name: "企业简介",
    path: "/aboutUs",
  },
  {
    name: "企业文化",
    path: "/aboutUs",
  },
  {
    name: "发展历程",
    path: "/aboutUs",
  },
  {
    name: "荣誉资质",
    path: "/aboutUs",
  },
]);
function routePath(path) {
  router.push(path);
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 310px;
  // background-color: #fff;

  background: #141414;
  .footer_box {
    width: 1000px;
    height: 260px;
    margin: 0 auto;
    // background-color: aqua;
    display: flex;
    .footer_box_left {
      width: 50%;
      height: 260px;
      display: flex;
      .footer_box_left_box {
        width: 100%;
        height: 180px;
        margin-top: 60px;
        // background-color: #999999;
        margin-right: 10px;
        div {
          width: 100%;
          height: 12px;
          color: #999999;
          margin-bottom: 20px;
          cursor: pointer;
          font-size: 12px;
        }
        div:nth-child(1) {
          color: #fff !important;

          font-weight: 400;
          font-size: 14px !important;
          height: 14px !important;
          margin-bottom: 22px;
        }
      }
      // background-color: antiquewhite;
    }
    .xian {
      width: 1px;
      height: 60px;
      background: #666666;
      margin-top: 125px;
    }
    .footer_box_right {
      width: 50%;
      height: 260px;
      // background-color: aqua;
      padding-top: 37px;
      box-sizing: border-box;
      .footer_box_right_top {
        width: 100%;
        display: flex;
        height: 24px;
        // flex-direction: row-reverse;
        justify-content: flex-end;
        .corporate_name {
          width: 136px;

          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 300;
          color: #999999;
          height: 24px;
          line-height: 24px;
        }
        .phone {
          // width: 136px;
          height: 24px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          // line-height: 28px;
          line-height: 24px;
        }
        .phone_icon {
          width: 24px;
          height: 24px;
          background-image: url("../../../public/images/footer/icon_dianhua_sel.png");
          background-size: 100%;
          background-repeat: no-repeat;
          margin: 0px 10px 0px 55px;
        }
      }
      .footer_box_right_qr {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        height: 124px;
        margin-top: 30px;
        .footer_box_right_qr_box {
          width: 100px;
          height: 124px;
          margin-left: 30px;
          .name {
            width: 100%;
            height: 12px;
            line-height: 12px;
            text-align: center;
            color: #fff;

            font-size: 12px;
            margin-top: 10px;
          }
          .qr_1 {
            width: 100px;
            height: 100px;
            background-image: url("../../../public/images/footer/img_gongzhonghao.png");
            background-size: 100%;
            background-repeat: no-repeat;
            border-radius: 5px;
          }
          .qr_2 {
            width: 100px;
            height: 100px;
            background-image: url("../../../public/images/footer/下载.png");
            background-size: 100%;
            background-repeat: no-repeat;
            border-radius: 5px;
            // overflow: hidden;
          }
          .qr_3 {
            width: 100px;
            height: 100px;
            background-image: url("../../../public/images/footer/img_douyinhao.png");
            background-size: 100%;
            background-repeat: no-repeat;
            border-radius: 5px;
          }
        }
      }
    }
  }
  .filing_Information {
    width: 1000px;
    height: 50px;
    border-top: 1px solid #666666;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    color: #999999;
    .filing_Information_left {
      height: 50px;
      line-height: 50px;

      font-size: 12px;
      display: flex;
      .xian {
        width: 1px;
        height: 14px;
        background: #666666;
        margin-top: 18px;
        margin-left: 14px;
        margin-right: 14px;
      }
    }
    .filing_Information_right {
      display: flex;
      div {
        width: 24px;
        height: 24px;
        margin-left: 10px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 13px;
        cursor: pointer;
      }
      div:nth-child(1) {
        background-image: url("../../../public/images/footer/icon_01.png");
      }
      div:nth-child(2) {
        background-image: url("../../../public/images/footer/icon_02.png");
      }
      div:nth-child(3) {
        background-image: url("../../../public/images/footer/icon_03.png");
      }
      div:nth-child(4) {
        background-image: url("../../../public/images/footer/icon_04.png");
      }
    }
  }
}
</style>
