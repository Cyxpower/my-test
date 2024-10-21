<template>
	<view class="content">
		<view class="test">
			<button type="default" @click="getCode">发送get请求到自己的服务器</button>
			<button type="primary" @click="Register">发送post请求到自己的服务器</button>
			<button type="primary" @click="Login">登录</button>
			<button type="warn" @click="getUser">获取用户信息</button>
			<button type="primary" @click="getImage">获取图形验证码</button>
			<view class="img">
				<image @click="getImage" :src="url" mode=""></image>
			</view>
		</view>
	</view>
</template>

// <script>
	import {
		pathToBase64,
		base64ToPath
	} from 'image-tools'
	export default {
		data() {
			return {
				url: "",
				code: "079034"
			}
		},
		onLoad() {

		},
		methods: {
			getCode() {
				uni.request({
					method:'GET',
					url: 'http://127.0.0.1/api',
					success: (res) => {
						console.log(res)
					}
				})

			},
			Register() {
				uni.request({
					method: 'POST',
					url: 'http://127.0.0.1/api',
					data: {
						"code": "642303",
						"email": "1632179818@qq.com",
						"password": "123456789"
					},
					success: (res) => {
						console.log(res)
					}
				})
			},
			Login() {
				uni.request({
					method: 'POST',
					url: 'http://192.168.3.50:9901/authority/public/login/email',
					data: {
						code: this.code,
						email: "1632179818@qq.com"
					},
					success: (res) => {
						console.log(res)
						uni.setStorageSync("mytoken", res.header.token)
					}
				})
			},
			getUser() {
				let a = uni.getStorageSync("mytoken")
				console.log(a)
				uni.request({
					url: 'http://192.168.3.50:9901/authority/user',
					header: {
						token: a
					},
					success: (res) => {
						console.log(res)
					}
				})
			},
			getImage() {
				uni.request({
					url: 'http://192.168.3.50:9901/authority/captcha/image',
					success: (res) => {
						base64ToPath("data:image/jpeg;base64," + res.data.data)
							.then(path => {
								this.url = path
							})
							.catch(error => {
								console.error(error)
							})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		.test {
			

			.img {
				display: flex;
				justify-content: center;
				// align-items: center;
				image {
					// justify-content: center;
					width: 190rpx;
					height: 120rpx;
				}

			}



		}
	}
</style>
