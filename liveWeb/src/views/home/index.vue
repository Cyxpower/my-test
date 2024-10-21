<template>
  <div class="home">
    <div class="h_content1">
      <!-- <img
        class="banner"
        :src="`../../../public/images/home/banner${bannerIndex + 1}.png`"
        alt=""
      /> -->
      <img
        :key="item"
        :class="{ banner: true, active6: bannerIndex + 1 == item }"
        :src="`../../../public/images/home/banner${item}.png`"
        alt=""
        v-for="item in 6"
      />
      <h1
        :class="{ active6: bannerIndex == index }"
        v-for="(item, index) in bannerList"
        :key="item.title"
      >
        {{ bannerList[bannerIndex].title }}
      </h1>
      <div class="detail">
        <span>{{ bannerList[bannerIndex].content }}</span>
      </div>
      <div class="check" @click="viewNow">立即查看</div>

      <!-- 两个按钮部分 -->
      <div class="left" @click="bannerIndexsub">
        <img class="btnTwo" src="../../assets/index/icon_zuo@2x.png" alt="" />
      </div>
      <div class="right" @click="bannerIndexadd">
        <img class="btnTwo" src="../../assets/index/icon_you@2x.png" alt="" />
      </div>
    </div>
    <div class="h_content2">
      <img class="bgp" src="../../assets/index/img_01@2x.png" alt="" />
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
        <img src="../../assets/index/img02@2x.png" alt="" />
        <h1>直播大屏</h1>
        <p>多功能聚合于一身，集成式智慧直播终端</p>
        <div class="size">
          <div @click="routePath('product-32')">32寸</div>
          <div @click="routePath('product-43')">43寸</div>
        </div>
        <div @click="routePath('product-32')" class="more">了解更多 ></div>
      </div>
      <div>
        <img src="../../assets/index/img03@2x.png" alt="" />
        <h1>直播一体机</h1>
        <p>一机集成多项功能，一人一机即可完成直播</p>
        <div class="size">
          <div @click="routePath('product-10.1')">10.1寸</div>
          <div @click="routePath('product-15.6')">15.6寸</div>
        </div>
        <div class="more" @click="routePath('product-10.1')">了解更多 ></div>
      </div>
    </div>
    <div class="h_content4">
      <h1>全场景直播解决方案</h1>
      <div class="ListBox">
        <div class="btnList">
          <div
            class="btn"
            :class="{ active4: index == active4Index }"
            v-for="(item, index) in active4NameList"
            :key="index"
            @click="active4Index = index"
          >
            <span>{{ item.name }}</span>

            <span v-if="index == active4Index" class="line"></span>
            <span v-else class="line noLine"></span>
          </div>
        </div>
      </div>
      <!-- 内容展示 -->
      <div class="c4Detail">
        <img
          class="c4Bgp"
          src="../../assets/index/img_xiaochengxu1@2x.png"
          alt=""
        />
        <div class="c4Left">
          <div class="logoTitle">
            <img :src="`../../../public/images/home/icon_03.png`" alt="" />
            <h1>{{ active4NameList[active4Index].name }}</h1>
          </div>
          <div class="c4Content">
            {{ active4NameList[active4Index].title }}
          </div>
          <!-- <div class="more">了解更多 ></div> -->
        </div>
        <div class="c4Right">
          <img
            class="taitop"
            :src="`../../../public/images/home/icon_maozi${
              active4Index + 1
            }.png`"
            alt=""
          />
          <img class="tai" src="../../assets/index/img_tai@2x.png" alt="" />
        </div>
      </div>
    </div>
    <div class="h_content5">
      <img class="c5Bgp" src="../../assets/index/img_04@2x.png" alt="" />
      <h1 class="c5Title">十几年技术与服务积累，成就行业口碑</h1>
      <div class="fourList">
        <div v-for="(item, index) in fourList" :key="index">
          <img
            :src="`../../../public/images/home/icon_four_0${index + 1}.png`"
            alt=""
          />
          <p class="smallTitle">{{ item.title }}</p>
          <p class="smallContent">{{ item.content }}</p>
        </div>
      </div>
      <h1 class="s_t">十三年技术与服务积累，成就行业口碑</h1>
      <!-- 滚动模块 -->
      <div class="cert">
        <img
          class="c_btn"
          src="../../assets/index/icon_zuo@2x.png"
          alt=""
          @click="c6BoxDe"
        />
        <div class="cBox">
          <div class="cBox_list" :style="{ transform: CboxRemTwo }">
            <div v-for="(item, index) in awardsList" :key="index">
              <img
                :src="`../../../public/images/home/${index + 1}.png`"
                alt=""
              />
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
        <img
          class="c_btn"
          src="../../assets/index/icon_you@2x.png"
          alt=""
          @click="c6Box"
        />
      </div>
    </div>
    <div class="h_content5-2">
      <img src="../../assets/index/img_zhuanli@2x.png" alt="" />
    </div>
    <div class="h_content6">
      <div class="c6Box">
        <h1>新闻资讯</h1>
        <div class="c6Content">
          <img
            class="c6Left"
            src="../../assets/index/img_xinwen@2x.png"
            alt=""
          />
          <div class="c6Right">
            <div class="c6Box" v-for="(item, index) in 2" :key="index">
              <div class="time">
                <div class="month">01/08</div>
                <div class="year">2024</div>
              </div>
              <div class="c6BoxContent">
                中国教育行业盛会第79届中国教育装备展在厦门国际会展中心圆满落下帷幕。据悉，本次会展...
              </div>
              <div class="more">
                <img src="../../assets/index/icon-gengduo@2x.png" alt="" />
              </div>
            </div>
            <div class="checkMore">查看更多></div>
          </div>
        </div>
      </div>
    </div>

    <div class="h_content7">
      <img class="c7Bgp" src="../../assets/index/img_di@2x.png" alt="" />
      <h1 class="c7Title">互视达大数据平台</h1>
      <p class="c7Detail">
        互视达合作伙伴，覆盖了全球各个区域，我们致力为用户提供解决方案
      </p>
      <div class="numberList">
        <div v-for="(item, index) in dataList" :key="index">
          <div class="number">{{ item.number }}</div>
          <div class="city">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
let str = getComputedStyle(window.document.documentElement)["font-size"];
let match = str.match(/\d+/); // \d+ 匹配一个或多个数字
let fontSize = ref(match[0]);
let CboxRem = ref(0);
let CboxRemTwo = ref();
function c6BoxDe() {
  if (Math.abs(CboxRem.value) <= 0) return;

  CboxRem.value += 10;
  CboxRemTwo.value = `translateX(${CboxRem.value}rem)`;
}
function c6Box() {
  if (Math.abs(CboxRem.value) >= 210) return;

  CboxRem.value -= 10;
  CboxRemTwo.value = `translateX(${CboxRem.value}rem)`;
}
let awardsList = ref([
  {
    title: "国家高新技术企业",
  },
  {
    title: "中关村高新技术企业",
  },
  {
    title: "北京市“专精特新”中小企业",
  },
  {
    title: "互视达商标注册",
  },
  {
    title: "中国节能产品认证证书",
  },
  {
    title: "国家3C认证",
  },
  {
    title: "外观设计专利",
  },
  {
    title: "质量管理体系认证",
  },
  {
    title: "环境管理体系认证",
  },
  {
    title: "美国FCC认证",
  },
  {
    title: "欧盟ROHS认证",
  },
  {
    title: "欧盟CE LVD认证",
  },
  {
    title: "欧盟CE EMC认证",
  },
  {
    title: "云标科技营业执照",
  },
  {
    title: "云标物联商标注册",
  },
  {
    title: "信息发布显示软著认证",
  },
  {
    title: "信息发布控制软著认证",
  },
  {
    title: "云标排队叫号软著认证",
  },
  {
    title: "云标自主点餐软著认证",
  },
  {
    title: "云标自主服务软著认证",
  },
]);
function routePath(name) {
  router.push(name);
}

let dataList = ref([
  {
    name: "国家地区",
    number: "434+",
  },
  {
    name: "接入设备",
    number: "136988+",
  },
  {
    name: "企业用户",
    number: "43517+",
  },
  {
    name: "覆盖人群",
    number: "2亿+",
  },
]);
let bannerIndex = ref(0);
let fourList = ref([
  {
    title: "技术过硬",
    content: "国家高新技术企业",
  },
  {
    title: "权威认证",
    content: "拥有多项企业品牌荣誉",
  },
  {
    title: "经验丰富",
    content: "十几万客户百万级直播",
  },
  {
    title: "售后保障",
    content: "强大售后团队指导调试",
  },
]);
let active4NameList = ref([
  {
    name: "电商带货直播",
    title:
      "为电商企业、带货达人、品牌商家提供从直播设备、直播系统的全链路解决方案。",
  },
  {
    name: "助农直播",
    title:
      "为农企、农人、农产品基地提供“乡村数字化直播间建设”，全力助推数字乡村、共同富裕建设。",
  },
  {
    name: "知识教学直播",
    title:
      "从客户真实场景出发，为职业院校、培训机构等，提供满足教育培训、知识付费、企业内训等知识直播需求。",
  },
  {
    name: "本地生活直播",
    title:
      "为当地门店商家提供适用于门店直播场景的直播间搭建方案，助力门店高效，直播提高生活水平。",
  },
  {
    name: "户外旅游直播",
    title: "满足户外直播场景搭建，使用便携式直播一体机，让直播更方便。",
  },
  {
    name: "娱乐主播直播",
    title:
      "直播硬件+直播软件系统，满足各种娱乐直播场景的需求，提供最有效的直播方式。",
  },
]);
let bannerList = [
  {
    title: "10.1寸直播一体机",
    content: "轻巧便携  |  功能强大  |  操作简单",
    route: "/product-10.1",
  },
  {
    title: "15.6寸直播一体机",
    content: "多场景智慧直播必备之选",
    route: "/product-15.6",
  },
  {
    title: "32寸直播一体机",
    content: "赋能打造智慧直播间",
    route: "/product-32",
  },
  {
    title: "43寸直播大屏",
    content: "玩转直播  轻松带货",
    route: "/product-43",
  },
  {
    title: "55寸直播大屏",
    content: "玩转直播  轻松带货",
    route: "/product-55",
  },
  {
    title: "32寸直播大屏",
    content: "玩转直播  轻松带货",
    route: "/product-screen-32",
  },
];
function viewNow() {
  router.push(bannerList[bannerIndex.value].route);
}
function bannerIndexadd() {
  if (bannerIndex.value >= 5) {
    bannerIndex.value = 0;
  } else {
    bannerIndex.value += 1;
  }
}
function bannerIndexsub() {
  if (bannerIndex.value <= 0) {
    bannerIndex.value = 5;
  } else {
    bannerIndex.value -= 1;
  }
}
setInterval(() => {
  bannerIndexadd();
}, 5000);
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
  // let con1Height = con1.value.clientHeight;
  // opacity.value = scroll / con1Height;
  // console.log(Number(pageHeight._value)/Number(scroll))
};
const activeIndex = ref(0);
const change = (index) => {
  activeIndex.value = index;
};
window.scrollTo(0, 0);
</script>
<style lang="scss" scoped>
.home {
  background-color: #ececec;
  width: 100%;
  overflow: hidden;
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
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }
  .active6 {
    opacity: 1;
  }
  h1 {
    font-size: 40px;
    position: absolute;
    top: 250px;
    left: 463px;
    color: white;
    margin: 0 !important;
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }
  .detail {
    position: absolute;
    left: 463px;
    top: 316px;
    color: #fff;
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
      cursor: pointer;
    }
    .g_two {
      width: 160px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #282a2d;
      cursor: pointer;
    }
  }
  .more {
    position: absolute;
    top: 350px;
    left: 463px;
    font-size: 12px;
    color: #67d95e;
    cursor: pointer;
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
        cursor: pointer;
      }
    }
    .more {
      width: 100%;
      color: #67d95e;
      position: absolute;
      top: 210px;
      text-align: center;
      cursor: pointer;
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
    display: flex;
    justify-content: space-between;
    .c4Bgp {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .c4Left {
      position: absolute;
      top: 70px;
      left: 85px;
      z-index: 9;
      .logoTitle {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        img {
          width: 36px;
          height: 44px;
          margin-right: 15px;
        }
        h1 {
          font-size: 26px;
        }
      }
      .c4Content {
        width: 398px;
        height: 44px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #999999;
        margin-bottom: 30px;
      }
      .more {
        color: #00e079;
        cursor: pointer;
      }
    }
    .c4Right {
      position: absolute;
      right: 50px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      bottom: 60px;
      .taitop {
        width: 116px;
        height: 108px;
      }
      .tai {
        width: 257px;
        height: 81px;
      }
    }
  }
}
.active4 {
  color: #67d95e !important;
}
.h_content5 {
  width: 100%;
  height: 970px;
  position: relative;
  margin-bottom: 10px;
  .c5Bgp {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .c5Title {
    position: absolute;
    top: 100px;
    text-align: center;
    width: 100%;
    font-size: 36px;
  }
  .fourList {
    height: 220px;
    position: absolute;
    top: 217px;
    left: 460px;
    display: flex;
    justify-content: space-between;
    width: 1000px;
    > div {
      width: 220px;
      height: 100%;
      background: white;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 66px;
        height: 66px;
      }
      .smallTitle {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #2e3135;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .smallContent {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #666666;
      }
    }
  }
  .s_t {
    position: absolute;
    top: 537px;
    width: 100%;
    text-align: center;
    font-weight: 400;
    color: #2e3135;
    font-size: 32px;
  }
  .cert {
    width: 1208px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 648px;
    left: 356px;
    .c_btn {
      width: 44px;
      height: 44px;
      z-index: 99;
      background: #423434;
      opacity: 0.2;
      border-radius: 50%;
    }
    .cBox {
      width: 1000px;
      overflow: hidden;
      > div {
        // width: 1500px;
        > div {
          float: left;
          margin-right: 62px;
          img {
            max-width: 292px;
            max-height: 196px;
          }
          p {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #794515;
            margin-top: 15px;
            text-align: center;
          }
        }
      }
    }
  }
}
.h_content5-2 {
  width: 100%;
  margin-bottom: 10px;
  img {
    width: 1920px;
  }
}
.h_content6 {
  width: 100%;
  height: 534px;
  background: white;
  padding-top: 100px;
  margin-bottom: 10px;
  .c6Box {
    width: 1000px;
    margin: 0 auto;
    h1 {
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #2e3135;
      margin-bottom: 60px;
    }
    .c6Content {
      width: 100%;

      height: 240px;
      display: flex;
      justify-content: space-between;
      .c6Left {
        width: 322px;
        height: 100%;
      }
      .c6Right {
        width: 658px;
        height: 100%;
        .c6Box {
          width: 100%;
          height: 100px;
          background: #f8f8f8;
          border-radius: 10px;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          margin-bottom: 20px;
          .time {
            .month {
              font-size: 20px;
              font-family: DINPro;
              font-weight: 500;
              color: #2e3135;
            }
            .year {
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 300;
              color: #666666;
            }
          }
          .c6BoxContent {
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 300;
            color: #2e3135;
            line-height: 28px;
            width: 451px;
          }
          .more {
            width: 36px;
            height: 36px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .checkMore {
          float: right;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 300;
          color: #2e3135;
          cursor: pointer;
        }
      }
    }
  }
}
.h_content7 {
  width: 100%;
  height: 456px;
  position: relative;
  .c7Bgp {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .c7Title {
    position: absolute;
    top: 100px;
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #fefefe;
  }
  .c7Detail {
    position: absolute;
    width: 100%;
    top: 170px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #999999;
    text-align: center;
  }
  .numberList {
    position: absolute;
    top: 278px;
    left: 461px;
    width: 1000px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .number {
        font-size: 44px;
        font-family: DINPro;
        font-weight: 600;
        color: #32a25a;
        background: linear-gradient(0deg, #ffffff 0%, #a9e137 0%, #2fd59d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .city {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        margin-top: 15px;
      }
    }
  }
}
.cBox_list {
  // width: 500px;
  width: 4500px !important;
  height: 100%;
  overflow: hidden;
  display: flex;
  transition: all 0.5s cubic-bezier(0, 0, 0.5, 1);
}
</style>
