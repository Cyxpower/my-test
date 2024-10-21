<template>
	<view>
		<view class="home">
			<!-- 头部搜索开始 -->
			<view class="search-box">
				<!-- 左边 -->
				<view class="time-user">
					{{ message }}
					<span @click="toLogin">{{ Nickname }}</span>
				</view>
				<!-- 搜索框 -->
				<view class="search animate__fadeInDown">
					<form action="/">
						<van-search v-model="value" show-action placeholder="想买点什么吗？" input-align="left"
							placeholder-style="text-align:center" @cancel="onCancel" action-text="返回" shape="round"
							@search="toSearch" />
					</form>
				</view>
			</view>
			<!-- 头部搜索结束 -->
			<!-- 内容开始 -->
			<view class="home-content">
				<!-- 轮播图 -->


				<van-toast id="van-toast" />
				<view class="banner">
					<van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="good-job" scrollable
						text="现在购买可以获取往年以来最实惠的零件价格！！！自组装机未来会代替整机购买！！！ 现在不入手可就晚啦！！！">

					</van-notice-bar>
					<!-- 使用了触摸事件 -->
					<swiper class="swiper" indicator-dots autoplay="2000">
						<swiper-item @click="toDetail(item.pid)" v-for="(item) in bannerArr" :key="item.pid">
							<img :src="item.bannerImg" alt />
						</swiper-item>
					</swiper>
				</view>

				<!-- 轮播图结束 -->
				<!-- 热卖推荐开始 -->
				<view class="hot-recommend">
					<view class="text">热卖推荐</view>
				</view>
				<!-- 热卖推荐结束 -->

				<!-- 产品开始 -->
				<view class="product-box animate__fadeIn">
					<!-- 点击执行 toDetail 里面的代码-->
					<view class="product-item " v-for="item in productArr" @click="toDetail(item.pid)" :key="item.pid">
						<img :src="item.smallImg" alt />

						<view class="product-name"><span>{{ item.name }}</span></view>

						<view class="product-enname">
							<span>{{ item.enname }}</span>
						</view>
						<view class="product-price">
							<span :style="show?'color:red':'color:blue'" >¥{{show?item.price:Number(item.price) +700 }}
								<van-icon v-if="show" name="fire" color="#ee0a24" size="20px" /><span
									v-if="show">Hot</span>
							</span>
							<view class="count_down">{{ text }}
								<van-count-down v-if="show" @finish="finish" format="DD 天 HH 时 mm 分 ss 秒" millisecond 
									:time="time" />
							</view>
						</view>
					</view>
				</view>

				<!-- 产品结束 -->
			</view>
			<!-- 内容结束 -->
		</view>
	</view>
</template>

<script>
	import Toast from '../../wxcomponents/@vant/weapp/toast/toast.js'
	export default {
		onLoad() {
			this.getBanner();
			this.getProduct();
			this.getUser();
			this.getTime();
			this.loading = false
		},
		data() {
			return {
				show: true,
				text: "价格回调时间还剩下：",
				time: 60 * 1000,
				loading: true,
				message: '',
				bannerArr: [],
				current: 0,
				value: "",
				productArr: [],
				Nickname: {},
			};
		},
		methods: {
			finish() {
				this.show = false
				this.text = '价格已回调'
			},
			getTime() {
				let time = new Date()
				let hour = time.getHours()
				if (hour >= 0 && hour <= 12) {
					this.message = '早上好，'
				} else if (hour > 12 && hour <= 17) {
					this.message = '下午好，'
				} else {
					this.message = '晚上好，'
				}
			},
			toLogin() {
				if (uni.getStorageSync("_lk")) {
					uni.switchTab({
						url: "/pages/my/my"
					})
					return;
				} else {
					uni.redirectTo({
						url: "/pages/login/login"
					})
					Toast("请登录！");
				}
			},
			toSearch(value) {
				uni.switchTab({
					url: "/pages/list/list"
				})
				uni.setStorageSync('his',value )
			},

			onCancel() {
				if (uni.getStorageSync("_lk")) {
					Toast("您已登录！");
				} else {
					uni.reLaunch({
						url: "/pages/login/login"
					})
				}
			},

			//得到轮播图数据
			getBanner() {
				Toast.loading({
					message: "加载中...",
					forbidClick: true,
					duration: 0
				});
				// 笑死ios
				uni.request({
					url: "http://120.27.232.26:10002/banner",
					method: "get",
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA="
					},
					success: (res) => {
						this.bannerArr = res.data.result;
						//判断是否有值传过来
						if (res.data.code == 300) {
							this.bannerArr = res.data.result;
							Toast.clear();
						}
						this.bannerArr = res.data.result;
					},
					fail: (err) => {
						console.log("请求失败", err);
					}
				})
			},
			getUser() {
				if (!uni.getStorageSync('_lk')) {
					this.Nickname = "请登录";
					return;
				}
				uni.request({
					method: "get",
					url: "http://120.27.232.26:10002/findAccountInfo",
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						tokenString: uni.getStorageSync("_lk")
					},

					success: (res) => {
						this.Nickname = res.data.result[0].nickName;
						console.log("请求回来的个人信息", res);
					},
					fail: (err) => {

					}
				})
			},
			getProduct() {
				// 笑死ios
				uni.request({
					//请求的方式 get post
					method: "get",
					//请求的路径
					url: "http://120.27.232.26:10002/typeProducts",
					//get时候用的传递参数的格式 post data
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						key: "isHot",
						value: 1
					},
					success: (res) => {
						console.log("请求成功的产品", res);
						this.productArr = res.data.result;
					},
					fail: (err) => {
						console.log("请求失败", err);
					}

				})

			},
			toDetail(pid) {
				console.log(pid);
				//name 就是你想要跳转的页面名字 params传递参数
				//params传递的参数刷新后会消失
				//name 就是你想要跳转的页面名字 query传递参数
				uni.navigateTo({
					url: "/pages/detail/detail?pid=" + pid,
				})
			}
		}
	}
</script>

<style lang="less">
	.home {


		.search-box {
			animation: fadeInDown;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 0.5s;
			height: 55px;
			// 弹性布局
			display: flex;
			overflow: hidden;
			z-index: 999;
			position: fixed;
			width: 100%;

		}

		.time-user {
			background: linear-gradient(to right, #BAD4E3, white);
			flex: 1.7;
			font-size: 14px;
			text-align: center;
			// 只有一行的时候才用
			font-weight: 700;
			line-height: 55px;

			span {
				line-height: 50px;
				align-items: center;
				color: #0c34ba;

			}

		}

		.search {
			flex: 3;
		}


		.home-content {
			padding: 10px;
		}

		.swiper {
			height: 430rpx;
		}

		.banner {

			.notice-swipe {
				height: 40px;
				line-height: 40px;
			}

			margin-top: 50px;
			animation: fadeIn;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 0.5s;
			border-radius: 20px;
			overflow: hidden;
			height: 275px;

			img {
				height: 100%;
				width: 100%;
				border-radius: 0;
			}



		}

		.hot-recommend {
			animation: fadeIn;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 0.5s;
			height: 45px;
			background: white;
			margin-top: 5px;
			overflow: hidden;

			.text {
				text-align: -webkit-center;
				width: 150px;
				height: 40px;
				background: linear-gradient(to right, #BAD4E3, white);
				font-size: 22px;
				color: #3E74A8;
				line-height: 40px;
				margin-top: 5px;
				border-radius: 0 20px 0 0;
			}
		}

		.product-box {
			animation: fadeIn;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 2s;
			/* don't forget to set a duration! */

			overflow: hidden;
			padding-bottom: 50px;
			background: #f7f7f7;

		}

		.product-item {
			display: flex;
			float: left;
			//   减号前后有空格
			width: calc(50% - 10px);
			height: 280px;
			margin-right: 12px;
			margin-top: 25px;
			font-size: 12px;
			position: relative;
			border-radius: 10px;
			background: white;
			flex-direction: column;

			img {
				height: 60%;
				border-radius: 10px;
				width: 100%;

			}
		}

		.product-item:nth-child(2n) {
			margin-right: 0px;
		}

		.product-name {
			span {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				/* 根据业务需求设置第几行显示省略号 */
				overflow: hidden;
			}

			margin-top: 10px;
			font-size: 13px;
			margin-bottom: 7px;
			color: #676a70;
			font-weight: 900;
			margin-left: 7px;
		}

		.product-enname {
			span {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				/* 根据业务需求设置第几行显示省略号 */
				overflow: hidden;
			}

			font-size: 10px;
			color: #bba8a4;
			margin-left: 7px;
		}

		.product-price {
			color: red;
			font-size: 15px;
			font-weight: 700;
			margin-left: 7px;
			margin-top: 5px;

			.count_down {
				color: #676767;
				font-size: 7px;
			}
		}


	}
</style>
