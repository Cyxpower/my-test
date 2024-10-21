<template>
  <div class="page flex-col">
    <div class="group_1 flex-col">
      <span class="text_8">关于我们</span>
    </div>
    <div class="group_4 flex-col">
      <span class="text_9">公司简介</span>
      <div class="paragraph_1">
        北京互视达科技有限公司简称互视达，成立于2010年5月，通过在液晶显示、产品设计、软件开发等领域积累的优势，多年来深耕智能显示设备生产研发和智慧软硬件集成开发，推出了一系列智能商显产品与一体化解决方案，业务覆盖国内各省市，出口多个海外国家与地区。
        <br />
        <br />
        <br />
        互视达自成立以来，一直坚持“创新、品质、服务、共赢”的经营核心价值观，发展至今，已在北京、广州、杭州、郑州、重庆和佛山等成立公司与区域营销服务中心，20余家城市代理商遍布国内外。互视达形成了IOT智慧商显、AI人脸识别、AI新零售云货架三大事业部，建立了一站式智慧商显服务生态圈。
        <br />
        <br />
        <br />
        2021年，互视达入驻佛山市顺德高新区中集智谷产业园，成为广东省佛山市高新区招商引资首批签约入驻的智慧商显物联服务高新技术企业，并建立15000平方米数字化生产工厂，多次受到广东省及佛山市高新区领导参观指导，未来互视达将持续为全球客户提供具有竞争价值的数字科技应用解决方案。
      </div>

      <div class="list_1 flex-row">
        <div
          class="text-wrapper_1 flex-col"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <span class="text_10" v-html="item.lanhutext0"></span>
          <span v-if="item.slot3 === 3" class="text_11">企业用户</span>
          <span v-if="item.slot2 === 2" class="text_12">接入设备</span>
          <span
            v-if="item.slot1 === 1"
            class="text_13"
            v-html="item.specialSlot1.lanhutext0"
          ></span>
        </div>
      </div>
    </div>
    <div class="group_5 flex-col">
      <span class="text_14">公司历程</span>
      <div class="group_6 flex-row justify-between">
        <img
          class="label_1"
          referrerpolicy="no-referrer"
          src="../../../public/images/aboutUs/icon_zuo.png"
          @click="labelMinusFn"
        />
        <div class="paragraph_2">
          {{ textWrapperList[textIndex] }}
        </div>
        <img
          class="label_2"
          referrerpolicy="no-referrer"
          src="../../../public/images/aboutUs/icon_you.png"
          @click="labelAddFn"
        />
      </div>
      <img
        class="thumbnail_3"
        :style="{ left: thumbnail + 'rem' }"
        referrerpolicy="no-referrer"
        src="../../../public/images/aboutUs/icon_01.png"
      />
      <img
        class="image_2"
        referrerpolicy="no-referrer"
        src="../../../public/images/aboutUs/juchi.png"
      />
      <img
        class="thumbnail_4"
        :style="{ left: thumbnail + 'rem' }"
        referrerpolicy="no-referrer"
        src="../../../public/images/aboutUs/icon_02.png"
      />
      <div class="text-wrapper_2 flex-row justify-between">
        <span
          v-for="(item, index) in yearList"
          :key="item"
          :class="{ text_15: true, active: textIndex == index }"
          >{{ item }}</span
        >
      </div>
    </div>
    <div class="group_7 flex-col">
      <span class="text_27">荣誉资质</span>
      <img
        class="image_3"
        referrerpolicy="no-referrer"
        src="../../../public/images/aboutUs/img_rongyu.png"
      />
    </div>
    <div class="group_8 flex-col">
      <span class="text_28">联系我们</span>
      <div class="box_1 flex-col">
        <img
          class="group_8Img"
          src="../../../public/images/aboutUs/img_ditu.png"
          alt=""
        />
        <div class="box_2 flex-col">
          <div class="text_29">广东互视达电子科技有限公司</div>
          <div class="image-text_1 flex-row justify-between">
            <img
              class="label_3"
              referrerpolicy="no-referrer"
              src="../../../public/images/aboutUs/icon_qiye.png"
            />
            <span class="text-group_1"
              >广东省广州市天河区柯木塱南路1号欧西创科空间1号楼701</span
            >
          </div>
          <div class="image-text_2 flex-row justify-between">
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="../../../public/images/aboutUs/icon_dianhua.png"
            />
            <span class="text-group_2">18210887345</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="address" v-for="(item, index) in addressList" :key="index">
      <div class="addressTitle">{{ item.title }}</div>
      <div class="addressContent">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
let yearList = [
  "2010",
  "2011",
  "2012",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];
let loopData0 = ref([
  {
    lanhutext0: "434+",
    specialSlot1: { lanhutext0: "覆盖城市" },
    slot1: 1,
  },
  { lanhutext0: "136988+", slot2: 2 },
  { lanhutext0: "43517+", slot3: 3 },
  {
    lanhutext0: "2亿+",
    specialSlot1: { lanhutext0: "覆盖人群" },
    slot1: 1,
  },
]);
let textIndex = ref(0);
let thumbnailLoad = ref(19);
let thumbnail = ref(19);
let textWrapperList = ref([
  "北京互视达科技有限公司正式成立",
  "于北京海淀区成立第一座工厂",
  "北京工厂扩建2千平米，“互视达”商标正式注册",
  "互视达于浙江杭州成立分公司互视达产品获得外观设计专利认证，获得研发软件著作权登记证书",
  "互视达成立软件研发团队（北京云标科技有限公司）及外贸、运营团队、云标物联平台上线",
  "互视达于广州成立工厂，总面积达1万平米，云标在线设备突破3万台，联通公司推出物联网流量集成，通过IOS9001质量体系认证、IOS14001环境管理体系认证",
  "互视达累计销售额突破1.52亿，云标在线设备突破8万台，云标物联平台加入百度聚屏共享广告平台，同年通过3C产品认证、高新技术企业认证、EMC认证、LVD认证、ROHS认证",
  "互视达代理商城市已达17座，云标在线突破设别185万台，云标全线产品进入AI、新零售板块；同年获得“中关村高新技术企业”认证证书，荣获第九届数字标牌行业“金孔雀将",
  "成功召开第一届经销商大会，实现目标销售额突破2.5亿，人脸AI通行板块产品上线，云标志加入中关村创客体系，斩获第十届数字标牌行业“金孔雀奖”；获得3C中国国家强制性产品证书",
  "北京互视达科技有限公司挂牌新四板，股票代码：100132,互视达于河南省郑州市成立分公司荣获2020中国企服行业最具成长力50强；全年实际目标销售额突破3亿",
  "作为招商引资企业受邀入驻佛山市顺德区高新区中集智谷产业园；广东互视达电子科技有限公司佛山顺德新生产基地，建立1.5万平方米数字化工厂",
  "广东互视达分公司荣获广东省高新技术企业认证,数字化工厂扩建至2万平方米，互视达荣获北京市“专精特新”企业称号",
  "互视达于重庆江北区成立分公司",
]);
function labelAddFn() {
  if (textIndex.value == 12) return;
  textIndex.value += 1;
  thumbnail.value =
    thumbnailLoad.value +
    ((fontSize.value * 6.62) / fontSize.value) * textIndex.value;
}
function labelMinusFn() {
  if (textIndex.value == 0) return;
  textIndex.value = textIndex.value - 1;
  thumbnail.value =
    thumbnailLoad.value +
    ((fontSize.value * 6.62) / fontSize.value) * textIndex.value;
}
let str = getComputedStyle(window.document.documentElement)["font-size"];
let match = str.match(/\d+/); // \d+ 匹配一个或多个数字
let fontSize = ref(match[0]);
setInterval(() => {
  if (textIndex.value == 12) {
    textIndex.value = 0;
    thumbnail.value =
      thumbnailLoad.value +
      ((fontSize.value * 6.63) / fontSize.value) * textIndex.value;
  } else {
    textIndex.value += 1;
    thumbnail.value =
      thumbnailLoad.value +
      ((fontSize.value * 6.62) / fontSize.value) * textIndex.value;
  }
}, 3000);


//地址列表
const addressList = ref([
  {
    title:'广东佛山',
    content:'广东省佛山市顺德区杏坛镇顺业西路15号中集智谷7栋8层'
  },
  {
    title:'北京',
    content:'北京市海淀区上地街道信息路甲28号科实大厦B座10D'
  },
  {
    title:'郑州',
    content:'郑州市郑东新区绿地云峰B座1015'
  },
  {
    title:'重庆',
    content:'重庆市江北区北滨一路363号1层中心商业区3-E'
  },
  {
    title:'杭州',
    content:'浙江省杭州市西湖区转塘街道石龙山路7号3幢301'
  },
  {
    title:'马德里',
    content:'Paseo San Millán de la Cogolla, 26, Puerta B'
  }
])
</script>

<style lang="scss" scoped>
.group_8Img {
  width: 1000px;
  height: 563px;
}

.active {
  color: #fff !important;
  font-weight: 400 !important;
}
.container {
  width: 1000px;
  flex-wrap: wrap;
  height: 400px;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 165px;
  .address {
    width: 485px;
    height: 110px;
    background: #f4f4f4;
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .addressTitle {
      font-weight: 500;
      font-size: 20px;
      color: #2e3135;
      margin-bottom: 15px;
    }
    .addressContent {
      font-size: 16px;
      color: #999999;
    }
  }
}

.page {
  position: relative;
  width: 100%;
  height: 4600px;
  overflow: hidden;
  .group_1 {
    width: 100%;
    height: 681px;
    background: url(../../../public/images/aboutUs/banner.png)
      100% no-repeat;
    background-size: 100% 100%;
    position: relative;
    .group_2 {
      background-color: rgba(0, 0, 0, 0);
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
        color: rgba(255, 255, 255, 1);
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
        color: rgba(236, 236, 236, 1);
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
        color: rgba(103, 217, 94, 1);
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
      .group_3 {
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
    .text_8 {
      width: 162px;
      height: 39px;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 40px;
      font-family: SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      line-height: 151px;
      //   margin: 266px 0 326px 879px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .group_4 {
    width: 100%;
    height: 933px;
    background: url(../../../public/images/aboutUs/img_01.png)
      100% no-repeat;
    background-size: 100% 100%;
    margin-top: -2px;
    justify-content: flex-center;
    position: relative;
    .text_9 {
      width: 147px;
      height: 35px;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 36px;
      font-family: SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      line-height: 151px;
      margin: 140px 0 0 886px;
    }
    .paragraph_1 {
      width: 1000px;
      height: 317px;
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 18px;
      font-family: SourceHanSansCN-Light;
      font-weight: 300;
      text-align: justifyLeft;
      line-height: 30px;
      margin: 78px 0 0 460px;
    }
    .list_1 {
      width: 1030px;
      height: 77px;
      //   margin: 146px 0 140px 436px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      position: absolute;
      bottom: 140px;
      left: 436px;
      padding-top: 10px;
      .text-wrapper_1 {
        width: 200px;
        height: 73px;
        // margin: 4px 168px 0 0;
        display: flex;
        flex-direction: column;

        .text_10 {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0,
            rgba(169, 225, 55, 1) 0,
            rgba(169, 225, 55, 1) 0,
            rgba(47, 213, 157, 1) 100%,
            rgba(47, 213, 157, 1) 100%
          );

          width: 100%;
          height: 40px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 44px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;

          white-space: nowrap;
          line-height: 40px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          margin-bottom: 20px;
        }
        .text_11 {
          //   width: 80px;
          width: 100%;
          height: 19px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          font-family: SourceHanSansCN-Regular;
          font-weight: normal;
          text-align: center;
          white-space: nowrap;
          line-height: 30px;
          //   margin: 20px 0 0 89px;
          text-align: center;
        }
        .text_12 {
          //   width: 82px;
          width: 100%;
          height: 19px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          font-family: SourceHanSansCN-Regular;
          font-weight: normal;
          text-align: center;
          white-space: nowrap;
          line-height: 30px;
          //   margin: 20px 0 0 49px;
          text-align: center;
        }
        .text_13 {
          //   width: 82px;
          width: 100%;
          height: 19px;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          font-family: SourceHanSansCN-Regular;
          font-weight: normal;
          text-align: center;
          white-space: nowrap;
          line-height: 30px;
          //   margin: 20px 0 0 10px;
          text-align: center;
        }
      }
    }
  }
  .group_5 {
    width: 100%;
    height: 1001px;
    background: url(../../../public/images/aboutUs/img_02.png) -1px
      0px no-repeat;
    background-size: 1921px 1001px;
    margin-top: -1px;
    position: relative;
    .text_14 {
      width: 147px;
      height: 34px;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 36px;
      font-family: SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      line-height: 151px;
      margin: 140px 0 0 887px;
    }
    .group_6 {
      width: 1208px;
      height: 47px;
      //   margin: 103px 0 0 356px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .label_1 {
        width: 44px;
        height: 44px;
        margin-top: 1px;
      }
      .paragraph_2 {
        width: 838px;
        height: 47px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        line-height: 28px;
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
        // margin-left: 141px;
      }
      .label_2 {
        width: 44px;
        height: 44px;
        // margin: 1px 0 0 141px;
      }
    }
    .thumbnail_3 {
      width: 17px;
      height: 15px;
      //   margin: 89px 0 0 1127px;
      position: absolute;
      //   left: 315px;
      top: 275px;
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    }
    .image_2 {
      width: 100%;
      height: 15px;
      margin-top: 100px;
    }
    .thumbnail_4 {
      width: 17px;
      height: 15px;
      //   margin: 20px 0 0 1127px;
      position: absolute;
      //   left: 315px;
      top: 330px;
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    }
    .text-wrapper_2 {
      width: 1320px;
      height: 30px;
      //   margin: 26px 0 467px 414px;

      margin: 0 auto;
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      .text_15 {
        width: 42px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
      }
      .text_16 {
        width: 41px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 57px;
      }
      .text_17 {
        width: 42px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 59px;
      }
      .text_18 {
        width: 41px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 57px;
      }
      .text_19 {
        width: 42px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 59px;
      }
      .text_20 {
        width: 42px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 57px;
      }
      .text_21 {
        width: 42px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 58px;
      }
      .text_22 {
        width: 42px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgb(153, 153, 153);
        font-size: 18px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 57px;
      }
      .text_23 {
        width: 42px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 58px;
      }
      .text_24 {
        width: 41px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 58px;
      }
      .text_25 {
        width: 42px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 58px;
      }
      .text_26 {
        width: 41px;
        height: 15px;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 28px;
        margin-left: 57px;
      }
    }
  }
  .group_7 {
    background-color: rgba(217, 234, 236, 1);
    width: 100%;
    height: 1050px;
    justify-content: flex-center;
    .text_27 {
      width: 147px;
      height: 35px;
      overflow-wrap: break-word;
      color: rgba(46, 49, 53, 1);
      font-size: 36px;
      font-family: SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      line-height: 151px;
      margin: 140px 0 0 889px;
    }
    .image_3 {
      width: 1164px;
      height: 637px;
      margin: 99px 0 139px 378px;
    }
  }
  .group_8 {
    width: 100%;
    background-color: white;
    justify-content: flex-center;
    padding-top: 139px;
    .text_28 {
      overflow-wrap: break-word;
      color: rgba(46, 49, 53, 1);
      font-size: 36px;
      font-family: SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      line-height: 151px;
      // margin: 139px 0 0 886px;
      width: 100vw !important;
      display: block;
      margin-bottom: 80px;
    }
    .box_1 {
      height: 563px;
      background-size: 100% 100%;
      width: 1000px;
      margin: 79px 0 30px 460px;
      position: relative;
      .box_2 {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 6px;
        width: 486px;
        height: 164px;
        // justify-content: flex-center;
        // margin: 83px 0 0 257px;
        position: absolute;
        left: 257px;
        top: 83px;

        .text_29 {
          width: 218px;
          height: 20px;
          overflow-wrap: break-word;
          color: rgba(46, 49, 53, 1);
          font-size: 20px;
          font-family: SourceHanSansCN-Regular;
          font-weight: normal;
          text-align: center;
          white-space: nowrap;
          //   line-height: 151px;
          margin: 30px 0 0 24px;
        }
        .image-text_1 {
          width: 412px;
          height: 25px;
          margin: 18px 0 0 20px;
          display: flex;
          align-items: center;
          .label_3 {
            width: 25px;
            height: 25px;
          }
          .text-group_1 {
            width: 377px;
            // height: 16px;
            margin-left: 10px;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Regular;
            font-weight: normal;
            text-align: center;
            white-space: nowrap;
            // line-height: 151px;
            margin-top: 4px;
          }
        }
        .image-text_2 {
          //   width: 139px;
          height: 25px;
          margin: 16px 0 30px 20px;
          .label_4 {
            width: 25px;
            height: 25px;
          }
          .text-group_2 {
            width: 104px;
            height: 13px;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 16px;
            font-family: DINPro-Medium;
            font-weight: 500;
            text-align: left;
            white-space: nowrap;
            // line-height: 151px;
            margin-top: 6px;
            margin-left: 10px;
          }
        }
      }
    }
  }
  .group_9 {
    background-color: rgba(20, 20, 20, 1);
    width: 100%;
    height: 309px;
    .group_10 {
      width: 1001px;
      height: 37px;
      margin: 37px 0 0 460px;
      .text_30 {
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
      .text_31 {
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
      .text_32 {
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
      .text_33 {
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
      .image-wrapper_3 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 55px;
        width: 24px;
        .image_4 {
          width: 22px;
          height: 20px;
          margin: 2px 0 0 1px;
        }
      }
      .text_34 {
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
    .group_11 {
      width: 999px;
      height: 122px;
      margin: 12px 0 0 461px;
      .text-wrapper_3 {
        width: 62px;
        height: 108px;
        margin-top: 10px;
        .text_35 {
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
        .text_36 {
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
        .text_37 {
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
        .text_38 {
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
      .text-wrapper_4 {
        width: 75px;
        height: 76px;
        margin: 10px 0 0 93px;
        .text_39 {
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
        .text_40 {
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
        .text_41 {
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
      .text-wrapper_5 {
        width: 49px;
        height: 108px;
        margin: 10px 0 0 85px;
        .text_42 {
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
      .block_1 {
        background-color: rgba(102, 102, 102, 1);
        width: 1px;
        height: 60px;
        margin: 20px 0 0 137px;
      }
      .image-text_3 {
        width: 100px;
        height: 122px;
        margin-left: 137px;
        .group_12 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 2px;
          width: 100px;
          height: 100px;
        }
        .text-group_3 {
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
      .image-text_4 {
        width: 100px;
        height: 122px;
        margin-left: 30px;
        .box_3 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 2px;
          width: 100px;
          height: 100px;
        }
        .text-group_4 {
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
      .block_2 {
        width: 100px;
        height: 122px;
        margin-left: 30px;
        .box_4 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 2px;
          height: 100px;
          width: 100px;
          .box_5 {
            height: 100px;
            background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pspcg3zwgzfgll94us0s0h1dwqm4e83atkibd16bae7-2ef9-4367-8339-7a49ac8ebc78)
              100% no-repeat;
            background-size: 100% 100%;
            width: 100px;
            .group_13 {
              height: 81px;
              background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps58jpz19oonv1bxy1471lfly49hzuoraie954d374-6df6-4d8d-88c6-ce2c8054e52b)
                100% no-repeat;
              background-size: 100% 100%;
              width: 81px;
              margin: 9px 0 0 10px;
              .image-wrapper_4 {
                height: 40px;
                background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psr3dopz3z7klcd0hby0n46ckj5gee3m3e3d02713-f051-422d-bb8c-eeab84c95609) -1px -1px
                  no-repeat;
                background-size: 42px 42px;
                width: 41px;
                margin: 21px 0 0 20px;
                .label_5 {
                  width: 21px;
                  height: 31px;
                  margin: 3px 0 0 9px;
                }
              }
            }
          }
        }
        .text_46 {
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
    .group_14 {
      background-color: rgba(102, 102, 102, 1);
      width: 1000px;
      height: 1px;
      margin: 50px 0 0 460px;
    }
    .group_15 {
      width: 1000px;
      height: 24px;
      margin: 13px 0 13px 460px;
      .image-wrapper_5 {
        border-radius: 50%;
        height: 12px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        margin-top: 6px;
        width: 12px;
        .thumbnail_5 {
          width: 6px;
          height: 8px;
          margin: 2px 0 0 3px;
        }
      }
      .text_47 {
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
      .block_3 {
        background-color: rgba(102, 102, 102, 1);
        width: 1px;
        height: 14px;
        margin: 5px 0 0 13px;
      }
      .text_48 {
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
      .image-wrapper_6 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 271px;
        width: 24px;
        .thumbnail_6 {
          width: 15px;
          height: 16px;
          margin: 4px 0 0 5px;
        }
      }
      .image-wrapper_7 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 10px;
        width: 24px;
        .thumbnail_7 {
          width: 19px;
          height: 15px;
          margin: 5px 0 0 3px;
        }
      }
      .image-wrapper_8 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 10px;
        width: 24px;
        .thumbnail_8 {
          width: 15px;
          height: 15px;
          margin: 5px 0 0 4px;
        }
      }
      .image-wrapper_9 {
        background-color: rgba(255, 255, 255, 0);
        height: 24px;
        margin-left: 10px;
        width: 24px;
        .thumbnail_9 {
          width: 18px;
          height: 18px;
          margin: 3px 0 0 3px;
        }
      }
    }
  }
}
</style>
