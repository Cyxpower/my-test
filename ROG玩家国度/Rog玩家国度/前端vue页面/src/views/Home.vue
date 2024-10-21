<template>
  <div class="home">
    <!-- 头部搜索开始 -->
    <div class="search-box">
      <!-- 左边 -->
      <div class="time-user">
        {{ message }}
        <span @click="toLogin">{{ Nickname }}</span>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <form action="/">
          <van-search v-model="value" show-action placeholder="想买点什么吗？" input-align="center" @click="toSearch"
            @cancel="onCancel" action-text="返回" shape="round" />
        </form>
      </div>
    </div>
    <!-- 头部搜索结束 -->
    <!-- 内容开始 -->
    <div class="home-content">
      <!-- 轮播图 -->



      <div class="banner">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="good-job" :scrollable="false">
          <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
            <van-swipe-item>现在购买可以获取往年以来最实惠的零件价格！！！</van-swipe-item>
            <van-swipe-item>自组装机未来会代替整机购买！！！</van-swipe-item>
            <van-swipe-item>现在不入手可就晚啦！！！</van-swipe-item>
          </van-swipe>
        </van-notice-bar>
        <!-- 使用了触摸事件 -->
        <van-swipe @change="onChange" autoplay="2000">
          <van-swipe-item @click="toDetail(item.pid)" v-for="(item) in bannerArr" :key="item.pid">
            <img v-lazy="item.bannerImg" alt />
          </van-swipe-item>

          <template #indicator>
            <div class="dots">
              <div class="custom-indicator" v-for="(item, index) in bannerArr" :key="index"
                :class="{ active: current == index }"></div>
            </div>
          </template>
        </van-swipe>
      </div>

      <!-- 轮播图结束 -->
      <!-- 热卖推荐开始 -->
      <div class="hot-recommend">
        <div class="text">热卖推荐</div>
      </div>
      <!-- 热卖推荐结束 -->

      <!-- 产品开始 -->
      <div class="product-box">
        <!-- 点击执行 toDetail 里面的代码-->
        <div class="product-item" v-for="item in productArr" @click="toDetail(item.pid)" :key="item.pid">
          <img :src="item.smallImg" alt />

          <div class="product-name"><span>{{ item.name }}</span></div>

          <div class="product-enname">
            <span>{{ item.enname }}</span>
          </div>
          <div class="product-price">
            <span>¥{{ item.price }} <van-icon name="fire" color="#ee0a24" size="20px" />Hot</span>
            <div class="count_down">{{ text }} <van-count-down v-if="show" @finish="finish" format="HH:mm:ss:SS"
                millisecond :time="time" /></div>
          </div>
        </div>
      </div>

      <!-- 产品结束 -->
    </div>
    <!-- 内容结束 -->
  </div>
</template>

<script>

import "../assets/less/home.less";
import { Toast } from "vant";

export default {
  data() {
    return {
      show: true,
      text: "价格回调时间还剩下：",
      time: 1 * 30 * 60 * 1000,
      loading: true,
      message: '',
      bannerArr: [],
      current: 0,
      value: "",
      productArr: [],
      Nickname: {},
    };
  },

  // 生命周期
  created() {
    this.getBanner();
    this.getProduct();
    this.getUser();
    this.getTime();
    this.loading = false
  },

  methods: {
    finish() {
      this.show = false
      this.text = '价格已回调'
    },
    getTime() {
      let time = new Date()
      let hour = time.getHours()
      if (hour >= 0 && hour <= 12) {
        this.message = '早上好，'
      } else if (hour > 12 && hour <= 17) {
        this.message = '下午好，'
      } else {
        this.message = '晚上好，'
      }
    },
    toLogin() {
      if (localStorage.getItem("_lk")) {
        this.$router.push({ name: "My" });
        return;
      } else {
        this.$router.push({ name: "Login" });
        Toast("请登录！");
      }
    },
    toSearch() {
      this.$router.push({ name: "Search" });
      localStorage.setItem('his', '')
    },

    onCancel() {
      if (localStorage.getItem("_lk")) {
        this.$toast("您已登录！");
      } else {
        this.$router.push({ name: "Login" });
      }
    },

    onChange(index) {
      this.current = index;
    },
    //得到轮播图数据
    getBanner() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
      });
      // 笑死ios
      this.axios({
        //请求的方式 get post
        method: "get",
        //请求的路径
        url: "/banner",
        //get时候用的传递参数的格式 post的时候params改成 data
        params: {
          appkey: this.appkey
        }
        //then表示请求成功的意思
      })
        .then(res => {
          console.log("请求成功的轮播图", res);
          this.bannerArr = res.data.result;
          //判断是否有值传过来
          if (res.data.code == 300) {
            this.bannerArr = res.data.result;
            Toast.clear();
          }
          this.bannerArr = res.data.result;
        })
        .catch(err => {
          console.log("请求失败", err);
        });
    },
    getUser() {
      if (!localStorage.getItem("_lk")) {
        this.Nickname = "请登录";
        return;
      }
      this.axios({
        method: "get",
        url: "/findAccountInfo",
        params: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk")
        }
      }).then(res => {
        this.Nickname = res.data.result[0].nickName;
        console.log("请求回来的个人信息", res);
      });
    },
    getProduct() {
      // 笑死ios
      this.axios({
        //请求的方式 get post
        method: "get",
        //请求的路径
        url: "/typeProducts",
        //get时候用的传递参数的格式 post data
        params: {
          appkey: this.appkey,
          key: "isHot",
          value: 1
        }
        //then表示请求成功的意思
      })
        .then(res => {
          console.log("请求成功的产品", res);
          this.productArr = res.data.result;
          //判断是否有值传过来
        })
        .catch(err => {
          console.log("请求失败", err);
        });
    },
    toDetail(pid) {
      console.log(pid);
      //name 就是你想要跳转的页面名字 params传递参数
      //params传递的参数刷新后会消失
      //name 就是你想要跳转的页面名字 query传递参数
      this.$router.push({ name: "Detail", query: { pid: pid } });
    }
  }
};
</script>

