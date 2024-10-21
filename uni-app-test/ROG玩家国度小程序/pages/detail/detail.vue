<template>
	<view class="allDetail">
		<!-- <van-popup v-model="show"><img src="../../static/icons/Code.png" alt=""></van-popup> -->
		<!-- 		<view class="share">
			<van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow bind:click-left="onClickLeft"
				bind:click-right="onClickRight" />
			<van-cell title="分享" icon="share-o" @click="showShare = true" />
			<van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
		</view> -->
		<view class="detail">
			<image mode="scaleToFill" :src="detail.large_img" alt />
		</view>
		<view class="all-detail">
			<view class="name-detail">
				<view class="detail-name">
					<span>{{ detail.name }}</span>
				</view>
				<view class="detail-price">
					<span>¥{{ detail.price }}</span>
				</view>
			</view>
			<view class="detail-enname">
				<span>{{ detail.enname }}</span>
			</view>
			<view class="put"><span>推荐指数：</span>
				<van-rate icon="smile" void-icon="smile-o" v-model="starvalue" readonly />
			</view>
			<view class="van-hairline--top"></view>
			<!-- 规格开始 -->
			<view class="specs" v-for="(item, index) in rules" :key="index">
				<view class="specs-detail">{{ item.type }}</view>
				<view class="choose-box">
					<span :class="{ active: item.rulesIndex == count }" @click="item.rulesIndex = count"
						v-for="(k, count) in item.choose" :key="count" class="spece-choose">{{ k }}</span>
				</view>
			</view>

			<!-- 规格选择结束 -->
			<view class="van-hairline--top"></view>
			<view class="specs-detail">
				<view class="num">
					<span>选择数量</span>
					<view class="numCount">
						<van-stepper v-model="value" theme="round" max="8" button-size="22" />
					</view>
				</view>
				<view class="van-hairline--top"></view>
			</view>
			<view class="text-detail">
				<span>商品描述</span>
				<view class="desc">
					<p v-for="(item, index) in desc" :key="index">{{ index + 1 }}.{{ item }}</p>
				</view>
			</view>

		</view>

		<van-goods-action>
			<van-goods-action-icon icon="bag-o" text="购物袋" :badge="bagCount == 0 ? '' : bagCount"
				:color="bagCount > 0 ? '#0c34ba' : ''" @click="toCar" />
			<van-goods-action-icon :icon="status ? 'like-o' : 'like'" :text="status ? '未收藏' : '已收藏'" :badge="l ? l : ''"
				@click="onClickIcon" />
			<van-goods-action-button @click="addCar()" type="warning" color="#6a91ec" text="加入购物袋" />
			<van-goods-action-button type="danger" color="#0c34ba" text="立即购买" @click="onClickButton(true)" />
		</van-goods-action>
	</view>
</template>

<script>
	import Toast from '../../wxcomponents/@vant/weapp/toast/toast.js'
	export default {
		onLoad(e) {
			console.log(e.pid)
			this.pid = e.pid
			this.getDetail(this.pid)
		},
		data() {
			return {
				starvalue: Math.ceil(Math.random() * 5),
				show: false,
				showShare: false,
				options: [
					[{
							name: '微信',
							icon: 'wechat',
							message: '分享给微信好友',
							description: '你最常用的'
						},
						{
							name: 'QQ',
							icon: 'qq',
							message: '分享给QQ好友'
						},
						{
							name: '朋友圈',
							icon: 'wechat-moments',
							message: '分享到朋友圈'
						},
						{
							name: '微博',
							icon: 'weibo',
							message: '分享到微博'
						},
						{
							name: '复制链接',
							icon: 'link',
							message: '链接已复制'
						},
						{
							name: '分享海报',
							icon: 'poster',
							message: '海报已生成'
						},

					],
					[{
							name: '图片保存至本地',
							icon: 'poster',
							message: '图片已保存到本地'
						},
						{
							name: '小程序码',
							icon: 'weapp-qrcode',
							message: '分享到小程序'
						},
						{
							name: '二维码',
							icon: 'qrcode'
						},
					],
				],

				bagCount: 0,
				detail: {},
				rules: [],
				value: 1,
				desc: [],
				status: true,
				pid: "",
				l: "",

			};
		},
		methods: {
			onSelect(option) {
				if (option.name == "二维码") {
					this.show = true;
					return
				}
				if (option.name == "微博") {
					window.location.href = 'https://www.weibo.com'
					return
				}
				if (option.name == "微信") {
					window.location.href = 'https://weixin.qq.com/'
					return
				}
				if (option.name == "QQ") {
					window.location.href = 'https://im.qq.com/'
					return
				}
				Toast(option.message);
				this.showShare = false;
			},
			getMylike() {
				if (!uni.getStorageSync("_lk")) {
					return;
				}
				uni.request({
					url: "http://120.27.232.26:10002/findAllLike",
					method: "get",
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						tokenString: uni.getStorageSync("_lk")
					},
					success: (res) => {
						console.log("查询成功", res);
						this.l = res.data.result.length;
					}
				})
			},
			getProductstasus() {
				if (!uni.getStorageSync("_lk")) {
					return;
				}
				this.axios({
					method: "get",
					url: "/findlike",
					params: {
						appkey: this.appkey,
						pid: this.pid,
						tokenString: localStorage.getItem("_lk")
					}
				}).then(res => {
					console.log("查询收藏成功", res);
					if (res.data.result.length == 0) {
						this.status = true;
					} else {
						this.status = false;
					}
				});
			},
			onClickLeft() {
				uni.navigateBack({
					delta: 1
				});
			},
			toCar() {
				if (!uni.getStorageSync("_lk")) {
					Toast("请先登录！");
				} else {
					this.$router.push({
						name: "Car"
					});
				}
			},
			onClickIcon() {
				if (!localStorage.getItem("_lk")) {
					Toast("请先登录！");
					return;
				}
				this.status = !this.status;
				if (!this.status) {
					this.axios({
						//请求的方式 get post
						method: "post",
						//请求的路径
						url: "/like",
						//get时候用的传递参数的格式 post data
						data: {
							appkey: this.appkey,
							pid: this.pid,
							tokenString: localStorage.getItem("_lk")
						}
						//then表示请求成功的意思
					}).then(res => {
						console.log("加入收藏成功", res);
						this.l += 1;
					});
					this.$toast({
						icon: "like",
						message: "已加入收藏",
						duration: 1000
					});
				} else {
					this.axios({
						method: "post",
						url: "/notlike",
						data: {
							appkey: this.appkey,
							pid: this.pid,
							tokenString: localStorage.getItem("_lk")
						}
					}).then(res => {
						console.log("取消收藏成功", res);
						this.l = this.l - 1;
						if (this.l == 0) {
							this.l = false;
						}
					});
					this.$toast({
						icon: "like-o",
						message: "已取消收藏",
						duration: 1000
					});
				}
			},
			addCar(isBuy) {
				if (!localStorage.getItem("_lk")) {
					this.$toast("请登录！");
					this.$router.push({
						name: "Login"
					});
					return;
				}
				let rule = this.rules.map(o => {
					return o.choose[o.rulesIndex];
				});

				this.axios({
						method: "post",
						url: "/addShopcart",
						data: {
							rule: rule.join("/"),
							pid: this.pid,
							count: this.value,
							appkey: this.appkey,
							tokenString: localStorage.getItem("_lk")
						}
					})
					.then(res => {
						console.log("加入购物车成功", res);

						if (res.data.code == 3000) {
							this.$toast("加入购物车成功");
							if (!isBuy) {
								if (res.data.status == 1) {
									this.bagCount++;
								}
							} else {
								this.$router.push({
									name: "Pay",
									query: {
										sids: res.data.sid
									}
								});
							}
						} else {
							this.$toast("加入购物车失败");
						}
					})
					.catch(err => {
						console.log(err);
					});
			},
			onClickButton(isBuy) {
				this.addCar(isBuy);
			},
			getDetail(pid) {
				// 给加载提示
				Toast.loading({
					message: "加载中...",
					forbidClick: true,
					duration: 0
				});
				// 笑死ios
				uni.request({
					url: "http://120.27.232.26:10002/productDetail",
					method: "get",
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						pid: pid
					},
					success: (res) => {
						Toast.clear()
						console.log("请求成功的产品详情", res);
						this.detail = res.data.result[0];
						this.desc = res.data.result[0].desc.split(/\n/);
						let data = res.data.result[0];
						let dataType = ["cream", "milk", "sugar", "tem"];
						dataType.map(o => {
							//每次遍历的时候我都新定义一个空的对象
							let obj = {};
							obj.choose = [];
							obj.rulesIndex = 0;
							// 类型
							obj.type = data[o + "_desc"];
							let dataChoose = data[o].split("/");
							dataChoose.map(k => {
								if (k != "") {
									obj.choose.push(k);
								}
							});

							if (obj.choose.length > 0) {
								this.rules.push(obj);
							}
						});
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.allDetail {
		background: #f7f7f7;

		.share {
			// display: flex;

			// .van-nav-bar {
			// 	flex: 9;

			// 	.van-nav-bar__title {
			// 		margin-right: 25%;
			// 	}
			// }

			// .van-cell {
			// 	flex: 2;
			// 	padding: 10px 0;

			// 	span {
			// 		color: #1989fa;
			// 	}

			// 	.van-icon-share-o:before {
			// 		color: #1989fa;
			// 	}
			// }
		}

		.detail {
			animation: fadeIn;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 1s;

			image {
				width: 100%;
				height: 300px;
				border-radius: 0;
			}
		}

		.all-detail {
			animation: fadeInLeft;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 1s;
			margin: 5px;
			padding: 20px;
			overflow: hidden;
			padding-bottom: 100px;
			background: #ffffff;
			position: relative;
			top: -40px;
			border-radius: 10px;

			.put {
				font-size: 15px;
				margin-bottom: 20px;
				display: flex;
				span {
					flex: 2;
					margin-top: 3px;
				}

				.van-rate {
					flex: 6;
					margin-right: 160px;
				}
			}

		}


		.name-detail {
			display: flex;
		}

		.detail-name {
			flex: 8;
			margin-top: 10px 0;
			font-size: 15px;
			color: #676a70;
			font-weight: 750;
		}

		.detail-enname {
			margin: 20px 0;
			font-size: 10px;
			color: #bba8a4;
		}

		.detail-price {
			margin-left: 10px;
			flex: 2;
			color: #0c34ba;
			font-size: 15px;
			font-weight: 750;

		}

		.van-hairline--top {
			height: 0.4rem;
			margin: 10px;
		}

		.specs {
			display: flex;
		}

		.specs-detail {
			line-height: 30px;
			font-size: 15px;
			flex: 1;
			color: #646566;
		}

		.choose-box {
			display: flex;
			width: 70px;
			flex: 4;

		}

		.spece-choose {
			margin-bottom: 10px;
			border-radius: 15px;
			background: #e8e8e8;
			display: inline-block;
			height: 29px;
			width: 60px;
			margin-right: 15px;
			line-height: 29px;
			text-align: center;
			font-size: 13px;
		}

		.active {
			background: #0c34ba;
			color: white;
		}

		.num {


			span {
				font-size: 15px;
			}
		}

		.numCount {
			overflow: hidden;
			float: right;
		}

		.van-stepper--round .van-stepper__plus {
			color: #fff;
			background-color: blue;
		}

		.van-stepper--round .van-stepper__minus {
			color: #c4cdee;
			background-color: #0c34ba;
			border: #7d7d7e;
		}

		.text-detail {

			color: #7c6d7b;
			font-size: 15px;

		}

		.desc {
			margin-top: 15px;
			color: #a4a2a4;
			font-size: smaller;

		}

		.van-button__content {
			animation: pulse;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 1.7s;

			animation-iteration-count: infinite;
		}
	}
</style>
