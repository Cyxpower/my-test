<template>
  <div class="menu">
    <div class="fix">
      <div class="search">
        <van-search placeholder="请输入搜索关键词" @click="toSearch" />
      </div>

      <!-- 
        <div class="type-one" v-for="(item, index) in typeData" :key="index" @click="changeType(index, item.type)">
          <img :src="iconIndex == index ? item.active : item.inactive" alt />
          <p :class="{ active: iconIndex == index }">{{ item.text }}</p>
        </div> -->
      <van-grid>
        <van-grid-item v-for="item, index in typeData" :key="index" @click="changeType(index, item.type)"
          :icon="iconIndex == index ? item.active : item.inactive" :text="item.text" />

      </van-grid>


    </div>
    <div class="result-box">
      <div class="menu-item " v-for="item in menuData" :key="item.pid" @click="toDetail(item.pid)">
        <img :src="item.smallImg" alt />
        <div class="center">
          <div class="name">{{ item.name }}</div>

          <div class="enname">{{ item.enname }}</div>
        </div>
        <div class="right">
          <div class="price">¥{{ item.price }}</div>
        </div>
      </div>
    </div>
    <!-- <ProductItem :title="title" :title2="title2" @fchange="fchange($event)" /> -->
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import "../assets/less/menu.less";
import { Toast } from "vant";
export default {
  created() {
    this.getMenu("mainboard");
  },
  data() {
    return {
      title: "我是主播，挂A，不要杀我",
      title2: "6666",
      iconIndex: 0,
      typeData: [
        {
          // 选中时候的路径
          active: require("../assets/listicons/zhuban.png"),
          inactive: require("../assets/listicons/zhuban.png"),
          text: "主板",
          type: "mainboard"
        },
        {
          // 选中时候的路径
          active: require("../assets/listicons/xianka.png"),
          inactive: require("../assets/listicons/xianka.png"),
          text: "显卡",
          type: "displayercard"
        },
        {
          // 选中时候的路径
          active: require("../assets/listicons/yingpan.png"),
          inactive: require("../assets/listicons/yingpan.png"),
          text: "硬盘",
          type: "HDD"
        },
        {
          // 选中时候的路径
          active: require("../assets/listicons/xianshiqi.png"),
          inactive: require("../assets/listicons/xianshiqi.png"),
          text: "显示器",
          type: "displayer"
        },
        {
          // 选中时候的路径
          active: require("../assets/listicons/jianpan.png"),
          inactive: require("../assets/listicons/jianpan.png"),
          text: "键盘",
          type: "keyboard"
        },
        {
          // 选中时候的路径
          active: require("../assets/listicons/shubiao.png"),
          inactive: require("../assets/listicons/shubiao.png"),
          text: "鼠标",
          type: "mouse"
        }, {
          // 选中时候的路径
          active: require("../assets/listicons/cpu.png"),
          inactive: require("../assets/listicons/cpu.png"),
          text: "处理器",
          type: "CPU"
        }, {
          // 选中时候的路径
          active: require("../assets/listicons/bijiben.png"),
          inactive: require("../assets/listicons/bijiben.png"),
          text: "一体机",
          type: "computer"
        }
      ],
      // 菜单数据
      menuData: [],
      // 历史数据判定值
      history: null
    };
  },
  // 监视属性watch
  // watch: {

  //   history(newvalue) {
  //     this.history = newvalue;
  //     this.getMenu(this.history);
  //     console.log("类型改变了");
  //   }
  // },

  components: {
    ProductItem
  },
  methods: {
    toSearch() {
      localStorage.setItem('his', '')
      this.$router.push({ name: "Search" });
    },
    fchange(text) {
      this.title = text.str;
    },
    changeType(index, value) {
      this.iconIndex = index;
      this.getMenu(value, index)
      // 点击的时候调用方法去请求数据
    },
    getMenu(value, index) {
      if (this.history == value) {
        this.$toast(`目前已经在${this.typeData[index].text}页面了`)
        return
      }
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
      });
      this.axios({
        method: "get",
        url: "/typeProducts",
        params: {
          appkey: this.appkey,
          key: "type",
          value
        }
      })
        .then(res => {
          console.log("请求类型成功", res);
          this.history = value;
          if (res.data.code == 500) {
            this.menuData = res.data.result;
            Toast.clear();
          } else {
            Toast("获取菜单失败");
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

