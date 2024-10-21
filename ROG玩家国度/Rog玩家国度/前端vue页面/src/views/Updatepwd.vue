<template>
  <div class="updatepwd-box">
    <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="update">
      <van-field
        @touchstart.native.stop="showkeyboard = true"
        readonly="readonly"
        v-model="newpwdInfo.phone"
        name="注册手机号"
        label="注册手机号"
        placeholder="请输入注册时使用的手机号"
        @keyup.enter="updatePwd"
      />
      <van-number-keyboard
        :show="showkeyboard"
        @blur="showkeyboard = false"
        v-model="newpwdInfo.phone"
      />
      <van-field
        v-model="newpwdInfo.password"
        :type="showPassword?'password':'text'"
        name="新密码"
        label="新密码"
        placeholder="请输入新密码"
        @keyup.enter="updatePwd"
        :right-icon="showPassword?'closed-eye':'eye-o'"
        @click-right-icon="changeEye"
      />

      <div style="margin: 16px;margin-top:25px;">
        <van-button
          style="color:white;border: 1px solid gray;"
          round
          block
          type="primary"
          text="重置密码"
          native-type="submit"
          @click="updatePwd"
        ></van-button>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/updatepwd.less";
import { validForm } from "../assets/validForm.js";
export default {
  data() {
    return {
      showkeyboard: false,
      showPassword: true,
      //   修改后的密码
      newpwdInfo: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    changeEye() {
      this.showPassword = !this.showPassword;
    },
    onClickLeft() {
      this.$router.push("/login");
    },
    updatePwd() {
      let o = {
        phone: {
          value: this.newpwdInfo.phone,
          errorMsg: "手机号格式不正确",
          reg: /^1[3-9]\d{9}$/
        },
        password: {
          value: this.newpwdInfo.password,
          errorMsg: "密码由数字字母下划线组合(6-16字符)",
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
        url: "/retrievePassword",
        data: {
          appkey: this.appkey,
          phone: this.newpwdInfo.phone,
          password: this.newpwdInfo.password
        }
      })
        .then(res => {
          console.log("请求回来的", res);
          this.$toast.clear();
          if (res.data.code == "L001") {
            this.$toast(res.data.msg);
            this.$router.push("/login");
          } else {
            this.$toast(res.data.msg);
          }
        })
        .catch(err => {
          console.log("登录失败", err);
        });
    }
  }
};
</script>

