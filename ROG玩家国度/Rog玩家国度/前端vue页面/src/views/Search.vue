<template>
  <div class="all">
    <div class="top-all">
      <div class="nav-left">
        <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
      </div>
      <div class="search">
        <form action="/">
          <van-search ref="search" v-model="value" placeholder="搜点你喜欢的比如：显示器..." @search="onSearch" shape="round" />
        </form>
      </div>
    </div>
    <div class="bg"></div>
    <!-- 搜索内容开始 -->
    <div class="circle"><van-circle v-if="open" v-model="currentRate" :rate="rate" :speed="100" size="100px"
        :color="gradientColor" text="正在加载中..." /></div>
    <div v-if="!open" class="result-box">
      <!-- 点击执行 toDetail 里面的代码-->
      <div class="result-item" v-for="item in resultArr" @click="toDetail(item.pid)" :key="item.pid">
        <img :src="item.smallImg" alt />
        <div class="result-name">{{ item.name }}</div>
        <div class="result-enname">
          <span>{{ item.enname }}</span>
        </div>
        <div class="result-price">
          <span>¥{{ item.price }}</span>
        </div>

      </div>

    </div>
    <div v-if="!open" class="bottom_message">
      <p>我们还在不停的进货当中,请耐心等候...</p>
      <p>可能会搜出一些奇奇怪怪的东西，请谅解...</p>
    </div>




  </div>
</template>

<script>
import "../assets/less/search.less";
export default {
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
  mounted() {
    this.$nextTick(() => {
      //获取搜索框
      let searchIpt = this.$refs.search.querySelector('[type="search"]');

      //获取焦点
      searchIpt.focus();
    });
  },

  created() {
    this.value = localStorage.getItem('his')
    if (this.value) {
      this.onSearch(this.value)
    }

  },

  // beforeDestroy(){
  // localStorage.removeItem('his')
  // },


  data() {
    return {







      value: '',
      open: false,
      resultArr: [],
      value: "",
      currentRate: 0,
      rate: null,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6',
      },
    };
  },
  methods: {










    onClickLeft() {
      this.$router.go(-1);
    },
    onSearch(name) {
      var regu = "^[ ]+$";
      var re = new RegExp(regu);
      var temp = name.indexOf(" ");
      if (re.test(name) || name.length == 0 || temp != -1) {
        this.$toast("请输入正确的商品关键字");
        return;
      }
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
      });
      this.axios({
        method: "get",
        url: "/search",
        params: {
          appkey: this.appkey,
          name: name
        }
      })
        .then(res => {
          localStorage.setItem('his', this.value)

          this.$toast.clear();
          console.log("搜索到的商品", res);
          this.rate = 100
          this.open = true
          setTimeout(() => {

            this.open = false
            this.currentRate = 0
            this.resultArr = res.data.result;
          }, 1000);

          if (res.data.result.length == 0) {
            this.open = false
            this.$toast("没有搜索到符合条件的商品");
            this.resultArr = []
          }
        })
        .catch(err => {
          console.log(err);
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

  