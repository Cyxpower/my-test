<template>
	<view class="content">
		<view class="container">
			<button class="primary" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">获取个人信息</button>
			<button @click="getNetworkType">获取手机电量</button>
			<text>手机电量为：{{netWorkType}}</text>
			{{Battery}}
			<button @click="goScan">点击开启扫一扫</button>
			<a :href="scanCode.result">通过扫一扫获取的网址</a>
			<view class="user-info">
				<image class="avatar" :src="avatarUrl" />
				<text class="nickname">{{ userInfo.nickName }}</text>
			</view>
		</view>
		<view class="gps">
			<button @click="getLocation">获取当前位置</button>
			<view class="location-info" v-if="location">
				<text>位置：{{ location.address_component.nation }}{{location.address_component.province}}{{location.address_component.city}}{{location.formatted_addresses.rough}}</text>
			</view>
		</view>
		<view class="btn">
			<button open-type="share" @tap="onShareButtonTap">分享</button>
		</view>
		<view class="small" v-for="(item,index) in more" :key="index">
			<newsbox :item="item" @click.native="todetail(item.link_info.url)"></newsbox>
		</view>

		<view class="loading" v-if="more.length">
			<view v-if="loading==1">数据加载中...</view>
		</view>
	</view>
</template>

<script>
	const QQMapWX = require('@/sdk/qqmap-wx-jssdk.min.js')
	const qqmapsdk = new QQMapWX({
		key: '5YXBZ-P5Z64-L2JU3-KN3D5-K3T33-WNFPS'
	})
	export default {
		data() {
			return {
				avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
				location: null,
				userInfo: null,
				more: [],
				loading: 0, //0默认  1加载中  2没有更多了
				first: true,
				Battery: '',
				netWorkType: '',
				scanCode:{
					type:'',
					result:''
				}
			}
		},
		onReachBottom() {
			this.getsome()

			this.loading = 1;

		},
		onPullDownRefresh() {
			this.refresh()
			uni.stopPullDownRefresh()
		},
		onLoad() {
			this.getsome()
		},

		methods: {
			goScan(){
				uni.scanCode({
					complete: (res) => {
						console.log(res.result);
						console.log(res.charSet);
						console.log(res.codeVersion);
						console.log(res.rawData);
						console.log(res.scanType);
						this.scanCode.type = res.scanType
						this.scanCode.result = res.result
						
					}
				})
			},
			getNetworkType() {
				uni.getNetworkType({
					success(res) {
						console.log(res.networkType);
						this.netWorkType = res.networkType
						console.log(this.netWorkType);
					}
				})
				uni.getBatteryInfo({
					success: (res) => {
						console.log(res)
						this.Battery = res.level
					}
				})

			},
			getLocation() {
				uni.getLocation({
					geocode: true,
					type: 'wgs84', // 使用 GPS 坐标定位
					success: (res) => {
						qqmapsdk.reverseGeocoder({
							location: {
								latitude: res.latitude,
								longitude: res.longitude
							},
							success: (res) => {
								console.log(res.result.address_component.city);
								console.log(res.result.address_component.nation);
								console.log(res.result.address_component.province);
								console.log(res.result.formatted_addresses)
								this.location = res.result;
							}

						})

					},
					fail: (err) => {
						console.error('获取位置信息失败', err);
					}
				});
			},
			onChooseAvatar(e) {
				console.log(e);
				this.avatarUrl = e.detail.avatarUrl

			},

			onShareButtonTap() {
				uni.showShareMenu({
					withShareTicket: true,
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			onShareAppMessage() {
				return {
					title: '我的自定义分享标题',
					path: '/pages/todetail/todetail'
				}
			},
			uniqueArr(arr1, arr2) {
				//合并两个数组
				let temp = [];
				const map = new Map()
				// if (this.first) {
				// 	arr2.forEach(e =>{
				// 		map.set((e.item_id, true))

				// 	})
				// } else {
				arr1.forEach(e => {
					map.set(e.id, true)
				})
				// }

				arr2.forEach(e => {
					if (!map.has((e.id))) {
						arr1.push(e)
					}
				})
			},
			getsome() {
				uni.showNavigationBarLoading()
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					method: 'POST',
					url: 'https://r.inews.qq.com/web_feed/getWebList',

					data: {
						adcode: "110000",
						device_id: "1_1632179818",
						channel_id: "news_news_wap",
						uin: "o1632179818",
						qimei36: "1_1632179818",
						base_req: {
							from: "qq_web"
						},
						forward: "2",
						is_local_chlid: "",
						flush_num: 0
					},

					success: (res) => {
						if (this.first) {
							this.more = res.data.data;
							this.first = false;
						} else {
							this.uniqueArr(this.more, res.data.data)
						}
						console.log(res.data.data)
						uni.hideNavigationBarLoading()
						uni.hideLoading()



						// function unique(arr) {
						// 	// 第一层for循环控制第一个数
						// 	for (let i = 0; i < arr.length; i++) {
						// 		// 第二层循环控制第二个数
						// 		for (let j = i + 1; j < arr.length; j++) {
						// 			// 判断前后是否相等
						// 			if (arr[i] === arr[j]) {
						// 				arr.splice(j, 1); //j：下标 1：删除个数
						// 				// 后面的往前移一位
						// 				j--;
						// 			}
						// 		}
						// 	}
						// }
						// unique(this.more);
						// console.log("hahha ", this.more);
					}
				})


			},
			refresh() {
				uni.showNavigationBarLoading()
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					method: 'POST',
					url: 'https://r.inews.qq.com/web_feed/getWebList',
					data: {
						adcode: "110000",
						device_id: "1_1632179818",
						channel_id: "news_news_wap",
						uin: "o1632179818",
						qimei36: "1_1632179818",
						base_req: {
							from: "qq_web"
						},
						forward: "2",
						is_local_chlid: "",
						flush_num: 0
					},
					success: (res) => {
						this.more = []
						this.more = res.data.data
						uni.hideNavigationBarLoading()
						uni.hideLoading()
					}
				})
				uni.vibrateLong({
					success: function() {
						console.log('success');
					}
				})
			},
			todetail(url) {
				console.log(url)
				uni.navigateTo({
					url: "/pages/tx-detail/tx-detail?url=" + url,
					data: {
						url
					}
				})


			}
		}
	}
</script>

<style lang="scss">
	.user-info {
		image {
			width: 100%;
		}
	}

	.content {
		background: #f8f8f8;

		.box {
			height: 560rpx;

			image {
				width: 100%;
				height: 400rpx;
			}
		}

		.loading {
			text-align: center;
			font-size: 26rpx;
			color: #888;
			line-height: 2em;
		}
	}
</style>