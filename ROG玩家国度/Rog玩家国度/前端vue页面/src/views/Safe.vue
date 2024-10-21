<template>
  <div class="safe">
    <van-nav-bar title="安全中心" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="bg"></div>
    <div class="safe-box">
      <div class="safe-item" @click="showPopup">
        <div class="item-text">修改密码</div>
        <div class="item-icon">
          <van-icon name="arrow" />
        </div>
      </div>
      <van-popup
        :close-on-click-overlay="false"
        v-model="show"
        closeable
        position="bottom"
        :style="{height:'50%'}"
      >
        <div class="updatePwd-box">
          <h1>修改密码</h1>
          <div class="updataPwd">
            <van-field
              v-model="userInfo.oldpwd"
              :type="showoldPassword?'password':'text'"
              name="旧密码"
              label="旧密码"
              placeholder="旧密码（首字符必须为字母）"
              :right-icon="showoldPassword?'closed-eye':'eye-o'"
              @click-right-icon="changeoldpwdEye()"
              @keyup.enter="updatePassword"
            />
            <van-field
              v-model="userInfo.newpwd"
              :type="shownewPassword?'password':'text'"
              name="新密码"
              label="新密码"
              placeholder="新密码（首字符必须为字母）"
              @keyup.enter="updatePassword"
              :right-icon="shownewPassword?'closed-eye':'eye-o'"
              @click-right-icon="changenewpwdEye()"
            />

            <div style="margin: 16px;margin-top:25px;">
              <van-button
                style="color:white;border: 1px solid gray;"
                round
                block
                type="primary"
                native-type="submit"
                @click="updatePassword"
              >修改密码</van-button>
            </div>
          </div>
        </div>
      </van-popup>
      <div class="van-hairline--top"></div>
      <div class="safe-item" @click="destroyAccount">
        <div class="item-text">注销账号</div>
        <div class="item-icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="logout" style="margin: 16px;margin-top:200px;">
      <van-button
        style="color:white;border: 1px solid gray;"
        round
        block
        type="primary"
        native-type="submit"
        @click="logout"
      >退出登录</van-button>
    </div>
  </div>
</template>

<script>
import "../assets/less/safe.less";
import { validForm } from "../assets/validForm.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      userInfo: {
        oldpwd: "",
        newpwd: ""
      },
      showoldPassword: true,
      shownewPassword: true,
      show: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    changeoldpwdEye() {
      this.showoldPassword = !this.showoldPassword;
    },
    changenewpwdEye() {
      this.shownewPassword = !this.shownewPassword;
    },
    updatePassword() {
      let o = {
        oldpwd: {
          value: this.userInfo.oldpwd,
          errorMsg: "旧密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/
        },
        newpwd: {
          value: this.userInfo.newpwd,
          errorMsg: "新密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/
        }
      };

      let isPass = validForm.valid(o);
      //   判断是否执行后面的代码
      if (!isPass) {
        // 终止后面的代码执行
        return;
      }
      this.axios({
        method: "post",
        url: "/updatePassword",
        data: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk"),
          password: this.userInfo.newpwd,
          oldPassword: this.userInfo.oldpwd
        }
      }).then(res => {
        if (res.data.code == "E001") {
          Toast(res.data.msg);
          console.log("修改密码成功", res);
          setTimeout(() => {
            localStorage.removeItem("_lk");
            this.$router.push({ name: "Login" });
          }, 1000);
        } else {
          Toast(res.data.msg);
        }
      });
    },
    destroyAccount() {
      this.$dialog
        .confirm({
          title: "注销账号",
          message: "是否确定注销账号，一旦注销无法恢复！"
        })
        .then(() => {
          this.axios({
            method: "post",
            url: "/destroyAccount",
            data: {
              appkey: this.appkey,
              tokenString: localStorage.getItem("_lk")
            }
          }).then(res => {
            this.$toast("注销账号成功！");
            console.log("注销账号成功", res);
            setTimeout(() => {
              localStorage.removeItem("_lk");
              this.$router.push({ name: "Login" });
            }, 1000);
          });
        })
        .catch(() => {
          return;
        });
    },
    logout() {
      this.$dialog
        .confirm({
          message: "确定退出登录吗？"
        })
        .then(() => {
          this.axios({
            method: "post",
            url: "/logout",
            params: {
              appkey: this.appkey,
              tokenString: localStorage.getItem("_lk")
            }
          })
            .then(res => {
              console.log("退出登录成功", res);
              Toast("退出登录成功");
              this.$router.push({ name: "Login" });
              localStorage.removeItem("_lk");
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          return;
        });
    }
  }
};
</script>
