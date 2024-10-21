<template>
  <div class="my">
    <div class="bg">
      <van-uploader preview-size="100%" image-fit="" v-model="bgList" :max-count="1" :deletable="false">
        <!-- <img :src="myArr.userBg ? myArr.userBg : defaultbg" alt /> -->
      </van-uploader>
    </div>
    <div class="mydata">
      <div class="my-head">
        <div class="myavatar">
          <van-uploader v-model="avatorList" :max-count="1" :deletable="false">
            <!-- <img :src="myArr.userImg ? myArr.userImg : defaultavatar" alt /> -->
          </van-uploader>
        </div>
        <div class="head-right">
          <div class="nickname">{{ myArr.nickName }}<div v-if="isVip == 1" class="vip"><img @click="notice" :src="vipimg"
                alt=""></div>
          </div>
          <div class="desc">{{ myArr.desc == "" ? "这家伙很懒，什么也没有留下！" : myArr.desc }}</div>
        </div>
      </div>
      <div class="bottom-link">
        <div class="link-item" @click="toMymsg">
          <div class="item-text">个人资料</div>
          <div class="item-icon">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="link-item" @click="toMyOrder">
          <div class="item-text">我的订单</div>
          <div class="item-icon">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="link-item" @click="toMylike">
          <div class="item-text">我的收藏</div>
          <div class="item-icon">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="link-item" @click="toMyaddress">
          <div class="item-text">地址管理</div>
          <div class="item-icon">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="link-item" @click="goSafe">
          <div class="item-text">安全中心</div>
          <div class="item-icon">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="footer">
          <div class="footer2">
          </div>
          <div class="footer1">
            <p>关于我们 | 联系我们 | 联系客服 | 合作招商 | 商家帮助</p>
            <p>营销中心 | 官方网站 | 友情链接 | 销售联盟 | MYcom社区</p>
            <p>风险监测 | 隐私政策 | MYC公益 | Media & IR</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/my.less";
import { Toast, Dialog } from "vant";
import { Notify } from 'vant';
export default {
  created() {
    if (!localStorage.getItem("_lk")) {
      this.$router.push({ name: "Login" });
      Toast("请先登录！");
      return;
    }
    this.getMe();
  },
  data() {
    return {
      vipimg: require('../assets/icons/vip.png'),
      isVip: 0,
      defaultbg: require("../assets/icons/shopbag_bg.png"),
      defaultavatar: require("../assets/icons/shopbag_bg.png"),
      myArr: {},
      type: [],
      avatorList: [{
        url: null,
        deletable: false,
      },],
      bgList: [{
        url: null,
        deletable: false
      }]
    };
  },
  methods: {
    notice() {
      Notify({
        message: '您是尊贵的VIP用户',
        color: '#ad0000',
        background: '#ffe1e1',
        duration:3000
      });
    },
    getMe() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
      });
      this.axios({
        method: "get",
        url: "/findMy",
        params: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk")
        } 
      }).then(res => {
        this.$toast.clear()
        this.myArr = res.data.result[0];
        this.avatorList[0].url = this.myArr.userImg
        this.bgList[0].url = this.myArr.userBg
        console.log("请求我的个人资料成功", this.myArr);
        this.isVip = this.myArr.vip
      });
    },
    // updateAvatar(e) {


    //   console.log('更新图片的信息', e);
    //   if (e.file.type == 'image/webp') {
    //     this.$toast('此格式的头像不可用')
    //     return
    //   }
    //   let type = e.file.type.split("/")[1];
    //   let content = e.content.replace("data:image/jpeg;base64,", "");
    //   this.axios({
    //     method: "post",
    //     url: "/updateAvatar",
    //     data: {
    //       appkey: this.appkey,
    //       tokenString: localStorage.getItem("_lk"),
    //       imgType: type,
    //       serverBase64Img: content
    //     }
    //   }).then(res => {
    //     Toast("更换头像成功");
    //     this.getMe();
    //     console.log(res);

    //   });
    // },
    // updateBg(e) {
    //   if (e.file.type == 'image/webp') {
    //     this.$toast('此格式的图片暂时不可用')
    //     return
    //   }
    //   let type = e.file.type.split("/")[1];
    //   let content = e.content.replace("data:image/jpeg;base64,", "");
    //   this.axios({
    //     method: "post",
    //     url: "/updateUserBg",
    //     data: {
    //       appkey: this.appkey,
    //       tokenString: localStorage.getItem("_lk"),
    //       imgType: type,
    //       serverBase64Img: content
    //     }
    //   }).then(res => {
    //     Toast("更换背景成功");
    //     this.getMe();
    //     console.log(res);
    //   });
    // },
    goSafe() {
      this.$router.push({ name: "Safe" });
    },

    toMylike() {
      this.$router.push({ name: "Mylike" });
    },
    toMyOrder() {
      this.$router.push({ name: "Order" });
    },
    toMyaddress() {
      this.$router.push({ name: "Address" });
    },
    toMymsg() {
      this.$router.push({ name: "Mymsg" });
    }
  }
};
</script>

