<template>
	<view class="login">
		<!-- 头部开始 -->
		<view class="nav-top">
			<view class="nav-left">
				<img src="../../static/icons/smalllogo.png" alt />
				<span>&nbsp;&nbsp; MY Computer</span>
			</view>
			<view class="nav-right" @click="toHome">先逛一逛</view>
		</view>
		<!-- 头部结束 -->

		<!-- 图标 -->
		<view class="logo">
			<img src="../../static/icons/logo.png" alt />
		</view>
		<!-- 图标结束 -->
		<view class="input">
			<!-- <van-form @submit="onSubmit"> -->
			<van-cell-group inset>
				<van-field clearable type="number" v-model="userInfo.phone" name="手机号" label="手机号" placeholder="请输入手机号"
					maxlength="11" @confirm="login" @change="userInfo.phone = $event.detail" />
				<van-toast id="van-toast" />
				<!-- <van-number-keyboard :show="showkeyboard" @blur="showkeyboard = false" v-model="userInfo.phone" /> -->
				<van-field clearable v-model="userInfo.password" type="password" name="密码"
					label="密码" placeholder="请输入密码" @confirm="login" @change="userInfo.password = $event.detail"
					 />
				<!-- 忘记密码 -->
			</van-cell-group>

			<view class="forget-span" @click="showForgetPassword">
				<span>忘记密码</span>
			</view>
			<view style="margin: 17px;margin-top:16px;">
				<van-button round block type="primary" native-type="submit" @click="login">登录</van-button>
			</view>
			<view style="margin: 17px;margin-top:16px;">
				<van-button style="background:white;color:black;border: 1px solid gray;" round block type="primary"
					native-type="submit" @click="showPopup">注册</van-button>
			</view>
			<!-- </van-form> -->
		</view>
		<!-- 这里是注册 -->

		<van-popup :close-on-click-overlay="true" :show="show" closeable position="bottom" @close="this.show=false"
			:style="{ height: '50%' }">
			<view class="register-box">
				<h1>注册</h1>
				<view class="register">
					<van-cell-group inset>
						<van-field type="number" required clearable v-model="registerInfo.phone" name="手机号" label="手机号"
							placeholder="请输入手机号" @confirm="register" @change="registerInfo.phone=$event.detail" />

						<van-field  required clearable v-model="registerInfo.password"
							type="password" name="密码" label="密码"
							placeholder="由数字字母下划线组成(6-16字符)" @confirm="register"
							@change="registerInfo.password=$event.detail" />
						<van-field  required clearable v-model="registerInfo.nickName" name="昵称" label="昵称"
							placeholder="请输入昵称" @change="registerInfo.nickName=$event.detail" @confirm="register" />
					</van-cell-group>
					<view style="margin: 16px;margin-top:25px;">
						<van-button style="color:white;border: 1px solid gray;" round block type="primary"
							native-type="submit" @click="register">注册</van-button>
					</view>
				</view>
			</view>
		</van-popup>
		<!-- 注册结束 -->
		<!-- 这里是忘记密码 -->
		<van-popup :close-on-click-overlay="true" :show="showForget" closeable position="bottom"
			@close="this.showForget=false" :style="{ height: '50%' }">
			<view class="forget-box">
				<h1>忘记密码</h1>
				<view class="forget">
					<view class="forget-get">
						<van-field v-model="forgetInfo.email" name="邮箱" label="邮箱" placeholder="请输入密保邮箱" />
						<view class="forget-button" style="margin:0px;">
							<van-button v-show="timeTrue == true"
								style="color:white;border: 1px solid gray;background:#202023;" round block
								type="primary" text="获取验证码" native-type="submit" @click="getEmailValidCode">
							</van-button>
							<van-button type="primary" v-show="timeTrue == false"
								style="color:white;border: 1px solid gray;background:grey;" round block
								:disabled="true">{{ time
                }}s后重新获取</van-button>
						</view>
					</view>
					<van-field v-model="forgetInfo.ValidCode" name="验证码" label="验证码" placeholder="请输入验证码"
						@confirm="checkValidCode" />

					<view style="margin: 16px;margin-top:25px;">
						<van-button style="color:white;border: 1px solid gray;" round block type="primary"
							native-type="submit" @click="checkValidCode">下一步</van-button>
					</view>
				</view>
			</view>
		</van-popup>
		<!-- 忘记密码结束-->
	</view>
</template>

<script>
	import Toast from '../../wxcomponents/@vant/weapp/toast/toast.js'
	import {
		validForm
	} from "../../js/validForm.js";
	export default {
		onLoad() {
			Toast("请先登录！");
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
						this.$router.push({
							name: "Updatepwd"
						});
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

				console.log("注册信息", o);

				let isPass = validForm.valid(o);
				//   判断是否执行后面的代码
				if (!isPass) {
					// 终止后面的代码执行
					return;
				}
				uni.request({
					url: 'http://120.27.232.26:10002/register',
					method: "post",
					data: {
						nickName: this.registerInfo.nickName,
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						password: this.registerInfo.password,
						phone: this.registerInfo.phone
					},
					header: {

						'content-type': 'application/x-www-form-urlencoded'

					},
					success: (res) => {
						console.log("注册的信息", res);
						if (res.data.code == 100) {
							Toast(res.data.msg);
							this.show = false;
							this.userInfo.phone = this.registerInfo.phone;
							this.userInfo.password = this.registerInfo.password;
						} else {
							Toast(res.data.msg);
						}
					},
					fail: (err) => {
						console.log("登录失败", err);
					}
				})
			},
			toHome() {
				uni.switchTab({
					url: "/pages/home/home"
				})
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
				console.log("登录信息", o);
				let isPass = validForm.valid(o);
				//   判断是否执行后面的代码
				if (!isPass) {
					// 终止后面的代码执行
					return;
				}


				Toast.loading({
					message: "加载中...",
					forbidClick: true,
					duration: 0
				});
				uni.request({
					url: 'http://120.27.232.26:10002/login',
					method: "post",
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						password: this.userInfo.password,
						phone: this.userInfo.phone
					},
					header: {

						'content-type': 'application/x-www-form-urlencoded'

					},
					success: (res) => {
						Toast.clear()
						if (res.data.code == 200) {
							Toast("登录成功");
							uni.setStorageSync("_lk", res.data.token);
							setTimeout(() => {
								uni.switchTab({
									url: "/pages/home/home"
								})
							}, 1000);
						} else {
							Toast(res.data.msg);
						}
					},
					fail: (err) => {
						console.log("登录失败", err);
					}
				})

			}
		}
	}
</script>

<style lang="less">
	.login {
		width: 100vw;
		height: 100vh;
		background: linear-gradient(to right, #BAD4E3, white);



		.nav-top {
			height: 50px;
			border-bottom: 1px solid gray;
			display: flex;
			justify-content: space-between;
			padding: 0 10px;
			align-items: center;

			img {
				width: 30px;
				height: 30px;
			}
		}

		.nav-left {
			display: flex;
			align-items: center;

			span {
				font-size: 16px;
				font-weight: 500;
				color: #0c34ba;
			}
		}

		.nav-right {
			animation: swing;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 1.5s;

			animation-iteration-count: infinite;
			color: darkblue
		}

		.van-button--round {
			background: #212770;
		}

		.van-button--primary {
			border: 1px solid grey;
		}

		.logo {

			text-align: center;

			img {
				width: 220px;
				height: 200px;
				border-radius: 50%;
				margin: 50px;
			}
		}

		.forget-span {
			text-align: right;
			margin: 10px 20px 0 0;
			font-size: 13px;
			color: blueviolet;
		}

		.forget {
			text-align: right;
		}

		.forget-button {
			width: 92px;

			button {
				flex: 8;
				font-size: 10px;
				height: 30px;
				margin-top: 10px;
				margin-right: 15px;
			}

		}

		.forget-get {
			display: flex;

			.van-field {
				flex: 8;
			}

			.van-field__control {
				width: 154px;
			}

			.van-field__label {


				span {
					display: inline-block;
					padding-top: 3px;
					padding-left: 5px;

				}
			}

			.van-cell {
				line-height: 0.84rem;
				width: 85px;
			}

			.van-cell__value {
				padding-top: 3px;
			}

			.span {
				text-align: right;
				padding-right: 20px;
				margin-top: 10px;
			}
		}

		.register-box {
			padding: 10px;

			.van-field__label {}

			h1 {
				font-size: 26px;
				margin-left: 26px;
				margin-bottom: 22px;
				margin-top: 22px;
			}
		}

		.forget-box {
			padding: 10px 7px;

			h1 {
				font-size: 26px;
				margin-left: 13px;
			}
		}
	}
</style>
