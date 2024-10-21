<template>
	<view class="all">
		<view class="title">
			您的基本信息
		</view>
		<view class="more" v-for="(item,j,index) in a" :key="index">

			{{b[index]}}:<input class="small" type="text" :value="item" disabled />
		</view>
		<view class="test">
			<button type="primary" @click="check">验证手机号码</button>
		</view>


	</view>

</template>

<script>
	export default {
		data() {
			return {
				a: {},
				b: [
					"用户名",

					"电话号码",

					"个人简介",

					"性别",

					"学历"
				]
			};
		},
		onLoad(e) {

			this.a = JSON.parse(e.obj)
		},
		methods: {
			check() {
				uni.showModal({
					title: "验证手机号码",
					placeholderText: "请输入您的手机号码...",
					editable: true,
					success: (res) => {
						if (res.content != '') {

							if (res.content == this.a.tel) {
								uni.showToast({
									title: "验证成功！",
								})
								console.log("您的手机号码已验证成功！手机号码为：" + res.content)
								setTimeout(() => {
									uni.showModal({
										title: "手机号码验证成功",
										content: "您的手机号为" + res.content,
										showCancel: false
									})
								}, 500)
							} else if (res.cancel) {
							} else {
								uni.showToast({
									title: "手机号不正确",
									icon: 'error'
								})
							}
						} else {
							uni.showToast({
								title: "请填写正确的手机号...",
								icon: 'none'
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.all {
		padding: 70rpx;

		.title {
			text-align: center;
		}

		.more {
			align-items: center;
			display: flex;
			width: 100%;
			border: 1px darkgray solid;
			padding: 20rpx 60rpx;
			box-sizing: border-box;
			margin-top: 20rpx;

			.small {
				align-items: center;
				line-height: 50rpx;

			}
		}

		.test {
			margin-top: 20rpx;
		}
	}
</style>
