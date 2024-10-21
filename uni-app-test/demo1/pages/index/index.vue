<template>
	<view class="all">



		<scroll-view class="out" scroll-x>
			<view class="box" v-for="(item,index) in navarr" :key="index" :class="navindex==index?'active':''"
				@click="choosenav(index)">
				{{item.title}}
			</view>


		</scroll-view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000" circular>
			<swiper-item v-for="(item,index) in banner" :key="index">
				<view class="swiper-item">
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>

		</swiper>

		----打开手机摄像头功能 ------
		<view>
			<camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
			<button type="primary" @click="takePhoto">拍照</button>
			<view>预览</view>
			<image mode="widthFix" :src="src"></image>
		</view>


		<button type="primary">确认按钮</button>
		<button type="primary">取消按钮</button>
		<button type="default" loading>等待按钮</button>
		<button type="warn">删除按钮</button>


		<view class="for" v-for="(item,index) in arr" :key="index">
			<view>
				皮肤名称：{{item.name}}
				价格：{{item.price}}
				购买权限：{{item.state}}
			</view>

		</view>




		<view class="colorbox" @click="changeColor" :style="{background:bgcolor}">
			{{randomNum}}
		</view>
		<view class="classbox" :class="{changeclass:state}" @click="changestate">
		</view>


		-------------表单案例--------------
		<view class="submit">
			<form @submit="onsubmit">
				<view class="row">
					<input class="border" type="text" name="username" placeholder="请输入姓名...">
				</view>
				<view class="row">
					<input class="border" type="text" name="tel" placeholder="请输入电话号码...">
				</view>
				<view class="row">
					<textarea class="border" name="content" placeholder="请输入留言内容..."></textarea>
				</view>
				<view class="row">
					<radio-group name="sex">
						<radio value="男">
							男
						</radio>
						<radio value="女">
							女
						</radio>
						<radio value="保密" checked>
							保密
						</radio>
					</radio-group>
					<picker name="school" :range="options" :value="index" @change="changeindex">
						学历选择：{{options[index]}}
					</picker>
				</view>
				<view class="row">
					<button type="primary" form-type="submit">提交内容</button>
					<button form-type="reset">重置内容</button>
					{{obj}}
				</view>
			</form>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "",
				banner: [{
						imgUrl: require("../../static/images/pic1.jpg")
					},
					{
						imgUrl: require("../../static/images/pic2.jpg")
					},
					{
						imgUrl: require("../../static/images/pic3.jpg")
					},
					{
						imgUrl: require("../../static/images/pic4.jpg")
					}
				],
				arr: [{
						name: "特种部队",
						price: 45,
						state: "可购买"
					},
					{
						name: "泳池派对",
						price: 99,
						state: "不可购买"
					},
					{
						name: "奥斯曼大帝",
						price: 109,
						state: "不可购买"
					}
				],
				bgcolor: "pink",
				randomNum: 1,
				state: false,
				navindex: 0,
				index: null,
				obj: null,
				options: ["高中", "本科", "硕士", "博士", "研究生"],
				navarr: [{
						title: "首页"
					},
					{
						title: "介绍"
					},
					{
						title: "教程"
					},
					{
						title: "组件"
					},
					{
						title: "个人"
					},
					{
						title: "个人"
					},
					{
						title: "个人"
					},
					{
						title: "个人"
					},
					{
						title: "个人"
					}

				]

			}
		},
		onLoad() {
			uni.setTabBarBadge({
				index: 3,
				text: "3"
			})
		},
		methods: {
			takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						this.src = res.tempImagePath
					}
				});
			},
			error(e) {
				console.log(e.detail);
			},
			changeColor() {
				let color = "#" + String(Math.random()).substr(3, 6)
				this.bgcolor = color
				this.randomNum = String(Math.random(1)).slice(2, 3)
			},
			changestate() {
				this.state = !this.state
			},
			choosenav(e) {
				this.navindex = e
			},
			onsubmit(e) {
				this.obj = e.detail.value
				this.obj.school = this.options[this.index],
					setTimeout(() => {
						uni.showToast({
							title: "提交成功",
							mask: true,
						})
					}, 500)
				setTimeout(() => {
					uni.navigateTo({
						url: "/pages/test/test?obj=" + JSON.stringify(this.obj)
					})
				}, 1500)
				uni.showToast({
					title: "请稍候...",
					mask: true,
					icon: "loading"
				})
			},
			changeindex(e) {
				this.index = e.detail.value
			}

		},


	}
</script>

<style lang="scss">
	.all {
		.out {

			box-sizing: border-box;
			white-space: nowrap;
			height: 100rpx;

			/deep/ ::-webkit-scrollbar {
				width: 4px !important;
				height: 1px !important;
				overflow: auto !important;
				background: transparent !important;
				-webkit-appearance: auto !important;
				display: block;
			}

			.box {
				font-size: 40rpx;
				background: #f7f8fA;
				padding: 0 30rpx;
				display: inline-block;
				text-align: center;
				line-height: 100rpx;

				&.active {
					color: green;
				}
			}
		}

		.swiper {
			height: 580rpx;
			width: 750rpx;

			.swiper-item {
				padding: 10rpx;

				box-sizing: border-box;
				height: 580rpx;

				image {
					border-radius: 40rpx;
					width: 100%;
					height: 100%;
				}

				width: 750rpx;
			}
		}

		.colorbox {
			width: 200rpx;
			height: 200rpx;
		}

		.classbox {
			width: 300rpx;
			height: 300rpx;
			background: yellow;
		}

		.changeclass {
			border-radius: 20px;
			background: blue;
		}


		.submit {
			padding: 30rpx;

			.row {
				margin-bottom: 10rpx;
			}

			.border {
				border: 1px solid #eee;
				box-sizing: border-box;
				width: 100%;
				padding: 0 20rpx;
			}
		}
	}
</style>
