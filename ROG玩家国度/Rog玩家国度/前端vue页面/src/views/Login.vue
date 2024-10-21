<template>
  <div class="login">
    <!-- 头部开始 -->
    <div class="nav-top">
      <div class="nav-left">
        <img src="../assets/icons/smalllogo.png" alt />
        <span>&nbsp;&nbsp; MY Computer</span>
      </div>
      <div class="nav-right" @click="toHome">先逛一逛</div>
    </div>
    <!-- 头部结束 -->

    <!-- 图标 -->
    <div class="logo">
      <img src="../assets/icons/logo.png" alt />
    </div>
    <!-- 图标结束 -->
    <div class="input">
      <!-- <van-form @submit="onSubmit"> -->
      <van-cell-group inset>
        <van-field @touchstart.native.stop="showkeyboard = true" clearable v-model="userInfo.phone" readonly="readonly"
          name="手机号" label="手机号" placeholder="请输入手机号" @keyup.enter="login" />
        <van-number-keyboard :show="showkeyboard" @blur="showkeyboard = false" v-model="userInfo.phone" />
        <van-field clearable v-model="userInfo.password" :type="showPassword ? 'password' : 'text'" name="密码" label="密码"
          placeholder="请输入密码" @keyup.enter="login" :right-icon="showPassword ? 'closed-eye' : 'eye-o'"
          @click-right-icon="changeEye" />
        <!-- 忘记密码 -->
      </van-cell-group>

      <div class="forget-span" @click="showForgetPassword">
        <span>忘记密码</span>
      </div>
      <div style="margin: 17px;margin-top:16px;">
        <van-button round block type="primary" native-type="submit" @click="login">登录</van-button>
      </div>
      <div style="margin: 17px;margin-top:16px;">
        <van-button style="background:white;color:black;border: 1px solid gray;" round block type="primary"
          native-type="submit" @click="showPopup">注册</van-button>
      </div>
      <!-- </van-form> -->
    </div>
    <!-- 这里是注册 -->
    <van-popup :close-on-click-overlay="false" v-model="show" closeable position="bottom" :style="{ height: '50%' }">
      <div class="register-box">
        <h1>注册</h1>
        <div class="register">
          <van-field v-model="registerInfo.phone" name="手机号" label="手机号" placeholder="请输入手机号" @keyup.enter="register" />

          <van-field v-model="registerInfo.password" :type="showPassword ? 'password' : 'text'" name="密码" label="密码"
            placeholder="由数字字母下划线组成(6-16字符)" @keyup.enter="register" :right-icon="showPassword ? 'closed-eye' : 'eye-o'"
            @click-right-icon="changeEye()" />
          <van-field v-model="registerInfo.nickName" name="昵称" label="昵称" placeholder="请输入昵称" @keyup.enter="register" />

          <div style="margin: 16px;margin-top:25px;">
            <van-button style="color:white;border: 1px solid gray;" round block type="primary" native-type="submit"
              @click="register">注册</van-button>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 这里是忘记密码 -->
    <van-popup :close-on-click-overlay="false" v-model="showForget" closeable position="bottom"
      :style="{ height: '50%' }">
      <div class="forget-box">
        <h1>忘记密码</h1>
        <div class="forget">
          <div class="forget-get">
            <van-field v-model="forgetInfo.email" name="邮箱" label="邮箱" placeholder="请输入密保邮箱" />
            <div class="forget-button" style="margin:0px;">
              <van-button v-show="timeTrue == true" style="color:white;border: 1px solid gray;background:#202023;" round
                block type="primary" text="获取验证码" native-type="submit" @click="getEmailValidCode"></van-button>
              <van-button type="primary" v-show="timeTrue == false"
                style="color:white;border: 1px solid gray;background:grey;" round block :disabled="true">{{ time
                }}s后重新获取</van-button>
            </div>
          </div>
          <van-field v-model="forgetInfo.ValidCode" name="验证码" label="验证码" placeholder="请输入验证码"
            @keyup.enter="checkValidCode" />

          <div style="margin: 16px;margin-top:25px;">
            <van-button style="color:white;border: 1px solid gray;" round block type="primary" native-type="submit"
              @click="checkValidCode">下一步</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import "../assets/less/login.less";
import { validForm } from "../assets/validForm.js";
export default {
  created() {
    if (localStorage.getItem("_lk")) {
      this.$router.push({ name: "Home" });
    }
  },
  data() {
    return {
      // 登录的信息
      userInfo: {
        phone: "",
        password: ""
      },
      // 注册的信息
      registerInfo: {
        phone: "",
        password: "",
        nickName: ""
      },
      // 忘记密码输入的信息
      forgetInfo: {
        email: "",
        ValidCode: ""
      },
      showPassword: true,
      show: false,
      showForget: false,
      timeTrue: true,
      time: 0,
      showkeyboard: false
    };
  },
  methods: {
    getEmailValidCode() {
      let o = {
        email: {
          value: this.forgetInfo.email,
          errorMsg: "请输入正确的邮箱格式",
          reg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        }
      };

      let isPass = validForm.valid(o);
      //   判断是否执行后面的代码
      if (!isPass) {
        // 终止后面的代码执行
        return;
      }

      this.timeTrue = false;
      this.time = 60;
      var setTimeoutS = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(setTimeoutS);
          this.timeTrue = true;
        }
      }, 1000);

      this.axios({
        method: "post",
        url: "/emailValidCode",
        data: {
          appkey: this.appkey,
          email: this.forgetInfo.email
        }
      }).then(res => {
        this.$toast(res.data.msg);
      });
    },
    checkValidCode() {
      this.axios({
        method: "post",
        url: "/checkValidCode",
        data: {
          appkey: this.appkey,
          validCode: this.forgetInfo.ValidCode
        }
      }).then(res => {
        if (res.data.code == "K001") {
          this.showForget = false;
          this.$toast(res.data.msg);
          this.$router.push({ name: "Updatepwd" });
        } else {
          this.$toast(res.data.msg);
        }
      });
    },

    showForgetPassword() {
      this.showForget = true;
    },
    showPopup() {
      this.show = true;
    },
    register() {
      //构造表单验证信息  注册正则
      let o = {
        phone: {
          value: this.registerInfo.phone,
          errorMsg: "手机号格式不正确",
          reg: /^1[3-9]\d{9}$/
        },
        password: {
          value: this.registerInfo.password,
          errorMsg: "密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/
        },
        nickName: {
          value: this.registerInfo.nickName,
          errorMsg: "昵称由字母数字下划线汉字组合(1-10字符)",
          reg: /^[\w\u4e00-\u9fa5]{1,10}$/
        }
      };

      console.log(o);

      let isPass = validForm.valid(o);
      //   判断是否执行后面的代码
      if (!isPass) {
        // 终止后面的代码执行
        return;
      }

      this.axios({
        method: "post",
        url: "/register",
        data: {
          appkey: this.appkey,
          nickName: this.registerInfo.nickName,
          password: this.registerInfo.password,
          phone: this.registerInfo.phone
        }
      })
        .then(res => {
          console.log("注册的信息", res);
          if (res.data.code == 100) {
            this.$toast(res.data.msg);
            this.show = false;
            this.userInfo.phone = this.registerInfo.phone;
            this.userInfo.password = this.registerInfo.password;
          } else {
            this.$toast(res.data.msg);
          }
        })
        .catch(res => {
          console.log(err);
        });
    },
    changeEye() {
      this.showPassword = !this.showPassword;
    },
    toHome() {
      this.$router.push({ name: "Home" });
    },
    login() {
      let o = {
        phone: {
          value: this.userInfo.phone,
          errorMsg: "请输入正确的11位手机号码",
          reg: /^1[3-9]\d{9}$/
        },
        password: {
          value: this.userInfo.password,
          errorMsg: "请输入正确的密码格式，由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/
        }
      };

      let isPass = validForm.valid(o);
      //   判断是否执行后面的代码
      if (!isPass) {
        // 终止后面的代码执行
        return;
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
      });
      this.axios({
        method: "post",
        url: "/login",
        data: {
          appkey: this.appkey,
          password: this.userInfo.password,
          phone: this.userInfo.phone
        }
      })
        .then(res => {
          this.$toast.clear();
          if (res.data.code == 200) {
            this.$toast("登录成功");
            localStorage.setItem("_lk", res.data.token);
            setTimeout(() => {
              this.$router.push("/home");
            }, 1000);
          } else {
            this.$toast(res.data.msg);
          }
        })
        .catch(err => {
          console.log("登录失败", err);
        });

      console.log(o);
    }
  }
};
</script>

