<template>
  <div class="car">
    <div class="car-top">
      <van-nav-bar title="购物袋" :right-text="showbutton ? '编辑' : '完成'" right-text-color="grey" @click-right="onClickRight"
        fixed />
      <img :src="logo" alt />
    </div>

    <!-- 购物车数据 -->
    <div class="big-car">
      <transition-group name="animate__animated animate__bounce" >
        <div class="car-item" v-for="item in carItem " :key="item.sid">
          <!-- 左边选择 -->
          <div class="choose-item">
            <van-checkbox v-model="item.isChoose" @click="changeStatus"></van-checkbox>
          </div>
          <!-- 右边内容 -->
          <div class="car-content">
            <img :src="item.small_img" alt @click="toDetail(item.pid)" />
            <div class="detail-content">
              <div class="pro-name">

                  <div class="title">{{ item.name }}</div>

                <div class="type">{{ item.rule }}</div>
              </div>
              <!-- 英文名字 -->
              <div class="enname">{{ item.enname }}</div>
              <!-- 价格和步进器 -->
              <div class="price-step">
                <div class="price">¥{{ item.price }}</div>
                <div class="step">
                  <van-stepper v-model="item.count" theme="round" button-size="22" @change="changeCount(item)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
      <div class="bottom-span" style="text-align:center;height:70px">
        <span>哎呀，没有数据可加载了！</span>
      </div>
    </div>
    <!-- 提交订单 -->
    <div class="submit-order">
      <van-submit-bar :price="allPrice * 100" v-show="showbutton == true" button-text="提交订单" @submit="placeOrder">
        <van-checkbox v-model="checked" @click="allChoose">全选</van-checkbox>
      </van-submit-bar>
      <van-submit-bar :price="allPrice * 100" v-show="showbutton == false" @submit="deleteOrder" button-color="#0c34ba"
        button-text="删除订单">
        <van-checkbox v-model="checked" @click="allChoose">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import "../assets/less/car.less";
import { Toast } from "vant";
export default {
  data() {
    return {
      showbutton: true,
      carItem: [],
      checked: false,
      logo: require("../assets/icons/shopbag_bg.png")
    };
  },
  inject:[
  'reload'
],
  computed: {
    allPrice() {
      let price = 0;
      this.carItem.map(o => {
        if (o.isChoose) {
          price += o.count * Number(o.price);
        }
      });
      return price;
    }
  },
  created() {
    this.getCar();
  },
  methods: {
    getCar() {
      // this.$toast.loading({
      //   message: "加载中...",
      //   forbidClick: true,
      //   duration: 0
      // });
      if (!localStorage.getItem("_lk")) {
        this.$toast("请登录！");
        return this.$router.push({ name: "Login" });
      }

      this.axios({
        method: "get",
        url: "/findAllShopcart",
        params: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk")
        }
      })
        .then(res => {
          this.$toast.clear()
          console.log("请求购物车成功", res);
          if (res.data.code == 5000) {
            res.data.result.map(o => {
              o.isChoose = false;
              this.carItem.push(o);
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeCount(item) {
      //sid: 购物袋sid
      //count: 商品数量

      //获取token
      let tokenString = localStorage.getItem("_lk");
      //
      if (!tokenString) {
        //跳回登录页面
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
      });

      this.axios({
        method: "POST",
        url: "/modifyShopcartCount",
        data: {
          appkey: this.appkey,
          tokenString,
          sid: item.sid,
          count: item.count
        }
      })
        .then(result => {
          this.$toast.clear();

          if (result.data.code == 700) {
            //token检验无效,则跳到登录页面
            this.$router.push({ name: "Login" });
          } else {

          }
        })
        .catch(err => {

        });
    },
    changeStatus() {
      // 遍历判断是否全选 只要有一个选项没有被勾选 那么全选按钮是不勾选
      let isPass = true;
      this.carItem.map(o => {
        if (o.isChoose == false) {
          this.checked = false;
          isPass = false;
        }
      });
      if (isPass) {
        this.checked = true;
      }
    },
    allChoose() {
      this.carItem.map(o => {
        o.isChoose = this.checked;
      });
    },

    onClickRight() {
      this.showbutton = !this.showbutton;
    },
    isSelectProduct(msg) {
      for (let i = 0; i < this.carItem.length; i++) {
        if (this.carItem[i].isChoose) {
          //如果存在勾选商品
          return true;
        }
      }

      return false;
    },
    placeOrder() {
      if (this.carItem.length == 0) {
        Toast("无订单可提交");
        return;
      }
      let sids = [];
      this.carItem.map(v => {
        if (v.isChoose) {
          sids.push(v.sid);
        }
      });
      if (sids.length == 0) {
        Toast("请勾选所需要提交的条目");
        return;
      }

      this.axios({
        method: "get",
        url: "/commitShopcart",
        params: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk"),
          sids: JSON.stringify(sids)
        }
      }).then(res => {
        let isHas = this.isSelectProduct();
        if (!isHas) {
          this.$toast("请选择购买的商品");
          return;
        }
        //sids: 勾选商品的购物袋sid集合
        let sids = [];
        this.carItem.map(v => {
          if (v.isChoose) {
            sids.push(v.sid);
          }
        });

        Toast("订单提交成功");
        //跳转到结算页面且携带sids查询参数
        setTimeout(() => {
          this.$router.push({ name: "Pay", query: { sids: sids.join("-") } });
        }, 1000);

        console.log("提交成功", res);
      });
    },
    deleteOrder() {
      if (this.carItem.length == 0) {
        Toast("无订单可删除");
        return;
      }
      let sids = [];
      this.carItem.map(v => {
        if (v.isChoose) {
          sids.push(v.sid);
        }
      });
      if (sids.length == 0) {
        Toast("请勾选所需要删除的条目");
        return;
      }

      this.axios({
        method: "post",
        url: "/deleteShopcart",
        data: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk"),
          sids: JSON.stringify(sids)
        }
      })
        .then(res => {
          if (res.data.code == 7000) {
            Toast("删除成功");
            this.carItem = [];
            this.reload()
            this.getCar();

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

