<template>
	<view class="all">
		<view class="big_img">
			<image src="/static/images/bgimg.png" mode=""></image>
		</view>
		<view class="submit">
			账号：<input type="text" v-model="user.phone">
			密码：<input type="text" v-model="user.pwd">

		</view>
		<button type="primary" @click="login">立即登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					phone: "",
					pwd: "",
				}
			};
		},
		methods: {
			login() {
				uni.request({
					url: "https://apis.netstart.cn/login/cellphone",
					data: {
						phone: this.user.phone,
						password: this.user.pwd
					},
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.all {
		.big_img {
			padding: 130rpx;
			height: 150rpx;

			image {
				align-content: center;
				width: 100%;
				height: 280rpx;
			}

		}

		.submit {
			display: flex;
			flex-direction: column;
			padding: 130rpx;
			height: 100rpx;

			input {
				border: 1px solid #888;
			}
		}
	}
</style>
