<template>
  <div class="allDetail">
    <van-popup v-model="show"><img src="../assets/icons/Code.png" alt=""></van-popup>
    <div class="share">
      <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
      <van-cell title="分享" icon="share-o" @click="showShare = true" />
      <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    </div>
    <div class="detail">
      <img :src="detail.large_img" alt />
    </div>
    <div class="all-detail">
      <div class="name-detail">
        <div class="detail-name">
          <span>{{ detail.name }}</span>
        </div>
        <div class="detail-price">
          <span>¥{{ detail.price }}</span>
        </div>
      </div>
      <div class="detail-enname">
        <span>{{ detail.enname }}</span>
      </div>
      <div class="put"><span>推荐指数：</span> <van-rate icon="smile" void-icon="smile-o" v-model="starvalue" readonly /></div>
      <div class="van-hairline--top"></div>
      <!-- 规格开始 -->
      <div class="specs" v-for="(item, index) in rules" :key="index">
        <div class="specs-detail">{{ item.type }}</div>
        <div class="choose-box">
          <span :class="{ active: item.rulesIndex == count }" @click="item.rulesIndex = count"
            v-for="(k, count) in item.choose" :key="count" class="spece-choose">{{ k }}</span>
        </div>
      </div>

      <!-- 规格选择结束 -->
      <div class="van-hairline--top"></div>
      <div class="specs-detail">
        <div class="num">
          <span>选择数量</span>
          <div class="numCount">
            <van-stepper v-model="value" theme="round" max="8" button-size="22" />
          </div>
        </div>
        <div class="van-hairline--top"></div>
      </div>
      <div class="text-detail">
        <span>商品描述</span>
        <div class="desc">
          <p v-for="(item, index) in desc" :key="index">{{ index + 1 }}.{{ item }}</p>
        </div>
      </div>

    </div>

    <van-goods-action>
      <van-goods-action-icon icon="bag-o" text="购物袋" :badge="bagCount == 0 ? '' : bagCount"
        :color="bagCount > 0 ? '#0c34ba' : ''" @click="toCar" />
      <van-goods-action-icon :icon="status ? 'like-o' : 'like'" :text="status ? '未收藏' : '已收藏'" :badge="l ? l : ''"
        @click="onClickIcon" />
      <van-goods-action-button @click="addCar()" type="warning" color="#6a91ec" text="加入购物袋" />
      <van-goods-action-button type="danger" color="#0c34ba" text="立即购买" @click="onClickButton(true)" />
    </van-goods-action>
  </div>
</template>

<script>
import { a } from '../mixin'
import "../assets/less/detail.less";
import { Toast } from "vant";
export default {
  data() {
    return {
      starvalue: Math.ceil(Math.random() * 5),
      show: false,
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat', message: '分享给微信好友', description: '你最常用的' },
          { name: 'QQ', icon: 'qq', message: '分享给QQ好友' },
          { name: '朋友圈', icon: 'wechat-moments', message: '分享到朋友圈' },
          { name: '微博', icon: 'weibo', message: '分享到微博' },
          { name: '复制链接', icon: 'link', message: '链接已复制' },
          { name: '分享海报', icon: 'poster', message: '海报已生成' },

        ],
        [
          { name: '图片保存至本地', icon: 'poster', message: '图片已保存到本地' },
          { name: '小程序码', icon: 'weapp-qrcode', message: '分享到小程序' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],

      bagCount: 0,
      detail: {},
      rules: [],
      value: 1,
      desc: [],
      status: true,
      pid: "",
      l: "",

    };
  },
  mixins: [a],
  //生命周期
  created() {
    this.getDetail(this.$route.query.pid);
    this.pid = this.$route.query.pid;
    this.getMylike();
    this.getProductstasus();
    this.shopBagCount();
  },
  methods: {
    onSelect(option) {
      if (option.name == "二维码") {
        this.show = true;
        return
      }
      if (option.name == "微博") {
        window.location.href = 'https://www.weibo.com'
        return
      }
      if (option.name == "微信") {
        window.location.href = 'https://weixin.qq.com/'
        return
      }
      if (option.name == "QQ") {
        window.location.href = 'https://im.qq.com/'
        return
      }
      Toast(option.message);
      this.showShare = false;
    },
    getMylike() {
      if (!localStorage.getItem("_lk")) {
        return;
      }
      this.axios({
        method: "get",
        url: "/findAllLike",
        params: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk")
        }
      }).then(res => {
        console.log("查询成功", res);
        this.l = res.data.result.length;
      });
    },
    getProductstasus() {
      if (!localStorage.getItem("_lk")) {
        return;
      }
      this.axios({
        method: "get",
        url: "/findlike",
        params: {
          appkey: this.appkey,
          pid: this.pid,
          tokenString: localStorage.getItem("_lk")
        }
      }).then(res => {
        console.log("查询收藏成功", res);
        if (res.data.result.length == 0) {
          this.status = true;
        } else {
          this.status = false;
        }
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    toCar() {
      if (!localStorage.getItem("_lk")) {
        Toast("请先登录！");
      } else {
        this.$router.push({ name: "Car" });
      }
    },
    onClickIcon() {
      if (!localStorage.getItem("_lk")) {
        Toast("请先登录！");
        return;
      }
      this.status = !this.status;
      if (!this.status) {
        this.axios({
          //请求的方式 get post
          method: "post",
          //请求的路径
          url: "/like",
          //get时候用的传递参数的格式 post data
          data: {
            appkey: this.appkey,
            pid: this.pid,
            tokenString: localStorage.getItem("_lk")
          }
          //then表示请求成功的意思
        }).then(res => {
          console.log("加入收藏成功", res);
          this.l += 1;
        });
        this.$toast({
          icon: "like",
          message: "已加入收藏",
          duration: 1000
        });
      } else {
        this.axios({
          method: "post",
          url: "/notlike",
          data: {
            appkey: this.appkey,
            pid: this.pid,
            tokenString: localStorage.getItem("_lk")
          }
        }).then(res => {
          console.log("取消收藏成功", res);
          this.l = this.l - 1;
          if (this.l == 0) {
            this.l = false;
          }
        });
        this.$toast({
          icon: "like-o",
          message: "已取消收藏",
          duration: 1000
        });
      }
    },
    addCar(isBuy) {
      if (!localStorage.getItem("_lk")) {
        this.$toast("请登录！");
        this.$router.push({ name: "Login" });
        return;
      }
      let rule = this.rules.map(o => {
        return o.choose[o.rulesIndex];
      });

      this.axios({
        method: "post",
        url: "/addShopcart",
        data: {
          rule: rule.join("/"),
          pid: this.pid,
          count: this.value,
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk")
        }
      })
        .then(res => {
          console.log("加入购物车成功", res);

          if (res.data.code == 3000) {
            this.$toast("加入购物车成功");
            if (!isBuy) {
              if (res.data.status == 1) {
                this.bagCount++;
              }
            } else {
              this.$router.push({
                name: "Pay",
                query: { sids: res.data.sid }
              });
            }
          } else {
            this.$toast("加入购物车失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClickButton(isBuy) {
      this.addCar(isBuy);
    },
    getDetail(pid) {
      // 给加载提示
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
        url: "/productDetail",
        //get时候用的传递参数的格式 post data
        params: {
          appkey: this.appkey,
          pid: pid
        }
        //then表示请求成功的意思
      })
        .then(res => {
          // 请求成功之后清空加载提示
          this.$toast.clear();
          console.log("请求成功的产品详情", res);
          this.detail = res.data.result[0];
          this.desc = res.data.result[0].desc.split(/\n/);
          let data = res.data.result[0];
          let dataType = ["cream", "milk", "sugar", "tem"];
          dataType.map(o => {
            //每次遍历的时候我都新定义一个空的对象
            let obj = {};
            obj.choose = [];
            obj.rulesIndex = 0;
            // 类型
            obj.type = data[o + "_desc"];
            let dataChoose = data[o].split("/");
            dataChoose.map(k => {
              if (k != "") {
                obj.choose.push(k);
              }
            });
            // 判断这个数组是否为空
            if (obj.choose.length > 0) {
              this.rules.push(obj);
            }
          });
          // 继续加判断，如果这个数组不为空我就给rules添加
        })
        .catch(err => {
          console.log("请求失败", err);
        });
    }
  }
};
</script>
