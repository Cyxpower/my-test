<template>
	<view class="my">
		<van-toast id="van-toast" />
		<view class="bg">
			<van-uploader preview-size="100% 100%" :file-list="bgList" :max-count="1" :deletable="false">
				<!-- <img :src="myArr.userBg ? myArr.userBg : defaultbg" alt /> -->
			</van-uploader>
		</view>
		<view class="mydata">
			<view class="my-head">
				<view class="myavatar">
					<van-uploader :file-list="avatorList" :max-count="1" :deletable="false">
						<!-- <img :src="myArr.userImg ? myArr.userImg : defaultavatar" alt /> -->
					</van-uploader>
				</view>
				<view class="head-right">
					<view class="nickname">{{ myArr.nickName }}
						<view v-if="isVip == 1" class="vip"><img :src="vipimg" @click="notice" alt="">
							<van-notify id="van-notify" />
						</view>
					</view>
					<view class="desc">{{ myArr.desc == "" ? "这家伙很懒，什么也没有留下！" : myArr.desc }}</view>
				</view>
			</view>
			<view class="bottom-link">
				<view class="link-item" @click="toMymsg">
					<view class="item-text">个人资料</view>
					<view class="item-icon">
						<van-icon name="arrow" />
					</view>
				</view>
				<view class="link-item" @click="toMyOrder">
					<view class="item-text">我的订单</view>
					<view class="item-icon">
						<van-icon name="arrow" />
					</view>
				</view>
				<view class="link-item" @click="toMylike">
					<view class="item-text">我的收藏</view>
					<view class="item-icon">
						<van-icon name="arrow" />
					</view>
				</view>
				<view class="link-item" @click="toMyaddress">
					<view class="item-text">地址管理</view>
					<view class="item-icon">
						<van-icon name="arrow" />
					</view>
				</view>
				<view class="link-item" @click="goSafe">
					<view class="item-text">安全中心</view>
					<view class="item-icon">
						<van-icon name="arrow" />
					</view>
				</view>
				<view class="footer">
					<view class="footer2">
					</view>
					<view class="footer1">
						<p>关于我们 | 联系我们 | 联系客服 | 合作招商 | 商家帮助</p>
						<p>营销中心 | 官方网站 | 友情链接 | 销售联盟 | MYcom社区</p>
						<p>风险监测 | 隐私政策 | MYC公益 | Media & IR</p>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Toast from '../../wxcomponents/@vant/weapp/toast/toast';
	import Notify from '../../wxcomponents/@vant/weapp/notify/notify';
	export default {
		onLoad() {
			if (!uni.getStorageSync("_lk")) {
				uni.redirectTo({
					url: "/pages/login/login"
				})
				return;
			}
			this.getMe();
		},
		data() {
			return {
				vipimg: require('../../static/icons/vip.png'),
				isVip: 0,
				defaultbg: require("../../static/icons/shopbag_bg.png"),
				defaultavatar: require("../../static/icons/shopbag_bg.png"),
				myArr: {},
				type: [],
				avatorList: [{
					url: null,
					deletable: false,
				}, ],
				bgList: [{
					url: null,
					deletable: false,
				}]
			};
		},
		methods: {
			notice() {
				Notify({
					message: '您是尊贵的VIP用户',
					color: '#ad0000',
					background: '#ffe1e1',
					duration: 3000
				});
			},
			getMe() {
				Toast.loading({
					message: "加载中...",
					forbidClick: true,
					duration: 0
				});
				uni.request({
					url: "http://120.27.232.26:10002/findMy",
					method: 'GET',
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						tokenString: uni.getStorageSync("_lk")
					},
					success: (res) => {
						console.log(res)
						Toast.clear()
						this.myArr = res.data.result[0];
						this.avatorList[0].url = this.myArr.userImg
						this.bgList[0].url = this.myArr.userBg
						console.log("请求我的个人资料成功", this.myArr);
						this.isVip = this.myArr.vip
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			goSafe() {
				uni.navigateTo({
					url: "/pages/safe/safe"
				})
			},

			toMylike() {
				uni.navigateTo({
					url: "/pages/mylike/mylike"
				})
			},
			toMyOrder() {
				uni.navigateTo({
					url: "/pages/order/order"
				})
			},
			toMyaddress() {
				uni.navigateTo({
					url: "/pages/myaddress/myaddress"
				})
			},
			toMymsg() {
				uni.navigateTo({
					url: "/pages/mymsg/mymsg"
				})
			}
		}
	}
</script>

<style lang="less">
	.my {

		background-color: #f7f7f7;
		height: 650px;

		.myavatar {

			margin: 10px 0 0 10px;

			image {
				height: 80px;
				width: 80px;
				border-radius: 50%;
			}

		}

		.bg {
			animation: fadeInDown;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 0.75s;

			image {
				width: 100vw;
				height: 30vh;

			}
		}

		.van-uploader {
			width: 100%;

			.van-uploader__wrapper {
				width: 100%;

				.van-uploader__preview {
					width: 100%;

					.van-image van-uploader__preview-image {
						width: 100%;
					}
				}
			}
		}

		.mydata {
			animation: fadeIn;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 0.75s;
			width: 90%;
			background-color: white;
			margin: auto;
			position: absolute;
			top: 140px;
			left: 0;
			right: 0;
			opacity: 0.8;
			border-radius: 8px;
			padding-bottom: 15px;

			.my-head {
				height: 130px;
				display: flex;
				justify-content: space-between;
			}

			.nickname {
				color: #0730ba;
				font-size: 20px;
				margin-top: 15px;
				font-weight: bolder;
			}

			.vip {
				img {
					height: 20px;
					width: 35px;
					padding-top: 10px;
				}
			}

			.desc {
				margin-right: 20px;
				color: #a0a4a4;
				font-size: 13px;
				margin-top: 5px;
				width: 200px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link-item {
				display: flex;
				justify-content: space-between;
				font-size: 16px;
				color: #3b4653;
				margin: 0 15px;

				.item-text {
					margin-bottom: 20px;
				}
			}

			.link-item:nth-child(-n+4) {
				border-bottom: 1px solid #b8b7b7;
				margin-bottom: 12px;
			}
		}

		.footer {
			p {
				text-align: center;
				font-size: 12px;
				color: #b8b7b7;
				display: flow-root;
			}

			.footer1 {
				padding-bottom: 70px;
			}

			.footer2 {
				margin-top: 110px;
			}
		}

		.logout {
			font-size: 25px;
		}
	}
</style>
