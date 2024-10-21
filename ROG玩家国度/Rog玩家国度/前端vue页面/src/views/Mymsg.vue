<template>
  <div class="all">
    <van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="bg"></div>
    <div class="msg-box">
      <div class="msg-item">
        <div class="item-text">头像</div>
        <div class="avatar">
          <van-uploader :after-read="updateAvatar">
            <img :src="Mymsg.userImg" alt />
          </van-uploader>
        </div>
      </div>
      <div class="van-hairline--top"></div>
      <div class="msg-item">
        <div class="item-text">用户id</div>
        <div class="avatar">
          <span>{{ Mymsg.userId }}</span>
        </div>
      </div>
      <div class="van-hairline--top"></div>
      <div class="msg-item">
        <div class="item-text">昵称</div>
        <div class="avatar">
          <span>
            <van-field v-model="Mymsg.nickName" @change="updateNickname" />
          </span>
        </div>
      </div>
      <div class="van-hairline--top"></div>
      <div class="msg-item">
        <div class="item-text">简介</div>
        <div class="avatar">
          <span>
            <van-field v-model="Mymsg.desc" autosize @change="updateDesc" />
          </span>
        </div>
      </div>
      <van-uploader class="updateBg" :max-count="1" :deletable="false" :after-read="updateBg">
        <van-button icon="plus" type="default">修改背景</van-button>
      </van-uploader>
    </div>
  </div>
</template>

<script>
import "../assets/less/mymsg.less";
import { Toast } from "vant";
export default {
  created() {
    this.getMymsg();
  },
  data() {
    return {
      Mymsg: {}
    };
  },
  methods: {
    updateBg(e) {
      if (e.file.type == 'image/webp') {
        this.$toast('此格式的图片暂时不可用')
        return
      }
      let type = e.file.type.split("/")[1];
      let content = e.content.replace("data:image/jpeg;base64,", "");
      this.axios({
        method: "post",
        url: "/updateUserBg",
        data: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk"),
          imgType: type,
          serverBase64Img: content
        }
      }).then(res => {
        Toast("更换背景成功");
        console.log(res);
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    getMymsg() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
      });
      this.axios({
        method: "get",
        url: "/findAccountInfo",
        params: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk")
        }
      }).then(res => {
        Toast.clear();
        console.log("res", res);
        this.Mymsg = res.data.result[0];
        if (this.Mymsg.desc.length == 0) {
          this.Mymsg.desc = "这家伙很懒，什么也没有留下！";
        }
      });
    },
    updateAvatar(e) {
      if (e.file.type == 'image/webp') {
        this.$toast('此格式的头像不可用')
        return
      }
      let type = e.file.type.split("/")[1];
      let content = e.content.replace("data:image/jpeg;base64,", "");
      this.axios({
        method: "post",
        url: "/updateAvatar",
        data: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk"),
          imgType: type,
          serverBase64Img: content
        }
      }).then(res => {
        Toast("更换头像成功");
        this.getMymsg();
        console.log(res);
      });
    },
    updateNickname() {
      if (this.Mymsg.nickName.length == 0) {
        Toast("昵称不可以为空！");
        return;
      }
      this.axios({
        method: "post",
        url: "/updateNickName",
        data: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk"),
          nickName: this.Mymsg.nickName
        }
      }).then(res => {
        Toast("修改昵称成功！");
        console.log("修改后的昵称", res);
      });
    },
    updateDesc() {
      if (this.Mymsg.desc.length == 0) {
        this.Mymsg.desc = "这家伙很懒，什么也没有留下！";
      }
      this.axios({
        method: "post",
        url: "/updateDesc",
        data: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk"),
          desc: this.Mymsg.desc
        }
      }).then(res => {
        Toast("修改简介成功！");
        console.log("修改简介成功", res);
      });
    }
  }
};
</script>

