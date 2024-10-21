<template>
  <div class="header">
    <div class="h_b">
      <div class="h_b_l">
        <div class="logo">
          <img src="../../assets/index/logo@2x.png" alt="" />
        </div>
        <div class="tab">
          <!-- <div
            v-for="(item, index) in list"
            :class="{ active: index == activeIndex }"
            :key="index"
            @click="change(index)"
          >
            <span>{{ item.title }}</span>
          </div> -->
          <div
            @click="change(0)"
            :class="{ active: 0 == activeIndex, product_center: true }"
          >
            <span>首页</span>
          </div>
          <div :class="{ active: 1 == activeIndex, product_center: true }">
            <span>产品中心</span>
            <div class="drop_down">
              <div class="drop_down_box">
                <div class="drop_down_left">
                  <div
                    :class="{ activeDrop: activeDropIndex == 0 }"
                    @click="activeDropFn(0)"
                  >
                    直播一体机
                  </div>
                  <div
                    :class="{ activeDrop: activeDropIndex == 1 }"
                    @click="activeDropFn(1)"
                  >
                    直播大屏
                  </div>
                  <div
                    :class="{ activeDrop: activeDropIndex == 2 }"
                    @click="activeDropFn(2)"
                  >
                    直播间搭建
                  </div>
                </div>
                <div class="drop_down_rgiht">
                  <div
                    class="drop_down_rgiht_box"
                    v-for="item in devices[activeDropIndex]"
                    :key="item.name"
                    @click="dropDown(item.route)"
                  >
                    <img :src="item.url" alt="" />
                    <div class="name">{{ item.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            @click="change(2)"
            :class="{ active: 2 == activeIndex, product_center: true }"
          >
            <span>解决方案</span>
          </div>
          <div
            @click="change(3)"
            :class="{ active: 3 == activeIndex, product_center: true }"
          >
            <span>渠道合作</span>
          </div>
          <div
            @click="change(4)"
            :class="{ active: 4 == activeIndex, product_center: true }"
          >
            <span>关于我们</span>
          </div>
          <div
            @click="change(5)"
            :class="{ active: 5 == activeIndex, product_center: true }"
          >
            <span>功能介绍</span>
          </div>
        </div>
      </div>
      <div class="h_b_r">
        <img src="../../../public/images/header/icon_dianhua.png" alt="" />
        400-188-6581
      </div>
    </div>

    <!-- <div class="h_b_bottom">
      <div class="h_b_bottom_l">10.1寸直播一体机</div>
      <div class="h_b_bottom_r">立即咨询</div>
    </div> -->
  </div>
</template>

<script setup>
// const router = useRouter();
// const route = useRoute();
// 监听路由变化
import router from "@/router";
const list = ref([
  {
    title: "首页",
    router: "/",

    index: 0,
  },
  {
    title: "首页",
    router: "/home",

    index: 0,
  },
  {
    title: "10.1",
    router: "/product-10.1",

    index: 1,
  },
  {
    title: "15.6",
    router: "/product-15.6",

    index: 1,
  },
  {
    title: "32",
    router: "/product-32",

    index: 1,
  },
  {
    title: "32",
    router: "/product-screen-32",

    index: 1,
  },
  {
    title: "55",
    router: "/product-55",

    index: 1,
  },
  {
    title: "直播机搭建",
    router: "/liveBroadcastRoom",

    index: 1,
  },
  {
    title: "43",
    router: "/product-43",

    index: 1,
  },
  {
    title: "解决方案",
    router: "/solution",

    index: 2,
  },
  {
    title: "渠道合作",
    router: "/cooperation",

    index: 3,
  },
  {
    title: "关于我们",
    router: "/aboutUs",
    index: 4,
  },
  {
    title: "功能介绍",
    router: "/feature",
    index: 5,
  },
]);

const activeIndex = ref(0);
const change = (index) => {
  activeIndex.value = index;
  // bgc.value = list._rawValue[index].color
  activeIndex.value = index;
  let arr = list.value.filter((e) => e.index == index);
  console.log(arr);
  router.push({
    path: arr[0].router,
  });
};
let activeDropIndex = ref(0);
function activeDropFn(index) {
  activeDropIndex.value = index;
}

const devices = ref([
  [
    {
      name: "10.1寸直播一体机",
      url: "../../../public/images/header/img_10.1@2x.png",
      route: "/product-10.1",
    },
    {
      name: "15.6寸直播一体机",
      url: "../../../public/images/header/img_15.6.png",
      route: "/product-15.6",
    },
    {
      name: "32寸直播一体机",
      url: "../../../public/images/header/img_32.png",
      route: "/product-32",
    },
  ],
  [
    {
      name: "32寸智能直播大屏",
      url: "../../../public/images/header/img_screen_32.png",
      route: "/product-screen-32",
    },
    {
      name: "43寸智能直播大屏",
      url: "../../../public/images/header/img_43.png",
      route: "/product-43",
    },
    {
      name: "55寸智能直播大屏",
      url: "../../../public/images/header/img_55.png",
      route: "/product-55",
    },
  ],
  [
    {
      name: "直播机搭建",
      url: "../../../public/images/header/img_zhibojian.png",
      route: "/liveBroadcastRoom",
    },
  ],
]);
function dropDown(route) {
  router.push(route);
  activeIndex.value = 1;
}
let routeName = ref();

watchEffect(() => {
  //判断路由是否真正的跳转到对应的路由，如果是，渲染新的菜单
  if (router.currentRoute.value.path) {
    routeName.value = router.currentRoute.value.path;

    let arr = list.value.filter(
      (e) => e.router == router.currentRoute.value.path
    );
    activeIndex.value = arr[0].index;
  }
});
</script>

<style lang="scss" scoped>
.drop_down {
  width: 100%;
  height: 0;
  background: #fafafa;
  position: fixed;
  left: 0;
  top:70px;
  transition-property: height;
  transition-duration: 0.5s;
  //   display: flex;
  overflow: hidden;
  .drop_down_box {
    width: 1000px;
    height: 0;
    margin: 0 auto;
    display: flex;
    position: relative;
    transition-property: height;
    transition-duration: 0.5s;
    .drop_down_left {
      width: 160px;
      height: 0;
      padding: 50px 0px 0px 30px;
      box-sizing: border-box;

      display: none;
      margin: 0;
      position: absolute;
      left: 0;
      top: 0;
      background: #f2f2f2;
      color: #2e3135;
      transition-property: height;
      font-size: 16px;
      transition-duration: 0.5;
      div {
        font-weight: normal;
      }
    }
    .drop_down_rgiht {
      width: calc(100% - 160px);
      height: 0px;
      background: #fafafa !important;
      transition-property: height;
      transition-duration: 0.5s;
      padding-top: 40px;
      box-sizing: border-box;
      display: none;
      position: absolute;
      right: 0;
      top: 0;
      .drop_down_rgiht_box {
        min-width: 115px;
        min-height: 160px;
        margin-left: 70px;
        img {
          width: 100%;
          height: 138px;
        }
        .name {
          width: 100%;
          height: 12px;
          line-height: 12px;
          text-align: center;
          color: #2e3135;
          margin-top: 20px;
          font-size: 12px;
        }
      }
    }
  }

  //   display: none;
}
.product_center {
  margin-right: 50px;
  align-items: center;
  cursor: pointer;
  line-height: 50px;
  
}
.product_center:hover {
  //   background-color: #67d95e;
  color: #67d95e !important;
  .drop_down {
    height: 242px !important;
    .drop_down_box {
      height: 242px !important;
    }
    .drop_down_left {
      height: 242px !important;

      display: flex;
      flex-direction: column;
    }
    .drop_down_rgiht {
      display: flex;
      height: 242px;
    }
  }
}
.header {
  width: 100%;
  height: 70px;
  transition: all 0.3s;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: black !important;
  color: white;
  .h_b {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .h_b_l {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .h_b_r {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      img {
        width: 22px;
        height: 22px;
        margin-right: 14px;
      }
    }
  }
  .h_b_bottom {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #262626;
    align-items: center;
    padding: 10px 50px;
  }
  .h_b_bottom_l {
    color: #999999;
  }
  .h_b_bottom_r {
    font-size: 11px;
    color: #ededed;
    padding: 3px 12px;
    border: 1px solid #ffffff;
    border-radius: 17px;
    font-family: Source Han Sans CN;
  }
}

.logo {
  margin-right: 3.125rem;
  width: 96px;
  padding-bottom: 4px;
  img {
    width: 100%;
  }
}

.tab {
  display: flex;
  font-size: 18px;
  height: 100%;
  align-items: center;
  //   div {
  //     margin-right: 40px;
  //     // display: flex;
  //     // flex-direction: column;
  //     align-items: center;
  //     cursor: pointer;
  //     line-height: 50px;
  //   }
}

.active {
  color: #67d95e !important;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.activeDrop {
  color: #67d95e !important;
}
</style>
