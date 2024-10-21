<template>

	<view class="menu">
		<view class="fix">
			<view class="search">
				<van-search placeholder="搜点你喜欢的比如：显示器..." v-model="value" @change="value=$event.detail" @search="onSearch">
				</van-search>
			</view>

			<!-- 
        <view class="type-one" v-for="(item, index) in typeData" :key="index" @click="changeType(index, item.type)">
          <img :src="iconIndex == index ? item.active : item.inactive" alt />
          <p :class="{ active: iconIndex == index }">{{ item.text }}</p>
        </view> -->
			<van-grid>
				<van-grid-item v-for="item, index in typeData" :key="index" @click="changeType(index, item.type)"
					:icon="iconIndex == index ? item.active : item.inactive" :text="item.text" />

			</van-grid>


		</view>
		<view class="result-box">
			<van-toast id="van-toast" />
			<view class="menu-item " v-for="item in menuData" :key="item.pid" @click="toDetail(item.pid)">
				<!-- 				<img :src="item.smallImg" alt />
				<view class="center">

					<view class="name">{{ item.name }}</view>

					<view class="enname">{{ item.enname }}</view>
				</view>
				<view class="right">
					<view :class=" [item.isHot? 'hot':'nohot' ]">
						<uni-icons type="fire-filled" size="22" color="red"></uni-icons>
						限时低价
					</view>
					<view :class="[item.isHot?'hotprice':'price']">¥{{ item.price }}</view>
				</view> -->
				<van-card :origin-price="item.isHot?Number(item.price)+700:''" :price="item.price" :desc="item.enname"
					:title="item.name" :thumb="item.smallImg" :tag="item.isHot?'热卖中':''"/>

				</van-card>
			</view>
		</view>

		<!-- <ProductItem :title=" title" :title2="title2" @fchange="fchange($event)" /> -->
			</view>
</template>

<script>
	import Toast from '../../wxcomponents/@vant/weapp/toast/toast.js'
	export default {
		onShow() {
			if(uni.getStorageSync('his')){
				this.value = uni.getStorageSync('his').detail
				this.onSearch(this.value)
			}else{
				this.getMenu("mainboard");
				
			}

		},
		onHide(){
			uni.removeStorageSync('his')
		},
		data() {
			return {
				value: "",
				iconIndex: 0,
				typeData: [{
						// 选中时候的路径
						active: require("../../static/listicons/zhuban.png"),
						inactive: require("../../static/listicons/zhuban.png"),
						text: "主板",
						type: "mainboard"
					},
					{
						// 选中时候的路径
						active: require("../../static/listicons/xianka.png"),
						inactive: require("../../static/listicons/xianka.png"),
						text: "显卡",
						type: "displayercard"
					},
					{
						// 选中时候的路径
						active: require("../../static/listicons/yingpan.png"),
						inactive: require("../../static/listicons/yingpan.png"),
						text: "硬盘",
						type: "HDD"
					},
					{
						// 选中时候的路径
						active: require("../../static/listicons/xianshiqi.png"),
						inactive: require("../../static/listicons/xianshiqi.png"),
						text: "显示器",
						type: "displayer"
					},
					{
						// 选中时候的路径
						active: require("../../static/listicons/jianpan.png"),
						inactive: require("../../static/listicons/jianpan.png"),
						text: "键盘",
						type: "keyboard"
					},
					{
						// 选中时候的路径
						active: require("../../static/listicons/shubiao.png"),
						inactive: require("../../static/listicons/shubiao.png"),
						text: "鼠标",
						type: "mouse"
					}, {
						// 选中时候的路径
						active: require("../../static/listicons/cpu.png"),
						inactive: require("../../static/listicons/cpu.png"),
						text: "处理器",
						type: "CPU"
					}, {
						// 选中时候的路径
						active: require("../../static/listicons/bijiben.png"),
						inactive: require("../../static/listicons/bijiben.png"),
						text: "一体机",
						type: "computer"
					}
				],
				// 菜单数据
				menuData: [],
				// 历史数据判定值
				history: null
			};

		},
		methods: {

			onSearch() {


				console.log(this.value)

				var regu = "^[ ]+$";
				var re = new RegExp(regu);
				var temp = this.value.indexOf(" ");
				if (re.test(this.value) || this.value.length == 0 || temp != -1) {
					Toast("请输入正确的商品关键字");
					return;
				}
				Toast.loading({
					message: "加载中...",
					forbidClick: true,
					duration: 0
				});

				uni.request({
					url: "http://120.27.232.26:10002/search",
					method: "get",
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						name: this.value
					},
					success: (res) => {
						console.log("搜索到的商品", res);
						Toast.clear()
						// this.menuData = []
						this.menuData = res.data.result;

						if (res.data.result.length == 0) {
							Toast("没有搜索到符合条件的商品");
							// this.menuData = []
						}
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			fchange(text) {
				this.title = text.str;
			},
			changeType(index, value) {
				this.iconIndex = index;
				this.getMenu(value, index)
				// 点击的时候调用方法去请求数据
			},
			getMenu(value, index) {
				if (this.menuData.length == 0 && this.history == value) {
					uni.request({
						url: "http://120.27.232.26:10002/typeProducts",
						method: "get",
						data: {
							appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
							key: "type",
							value
						},
						success: (res) => {
							console.log("请求类型成功", res);
							this.history = value;
							if (res.data.code == 500) {
								this.menuData = res.data.result;
								Toast.clear();
							} else {
								Toast("获取菜单失败");
							}
						},
						fail: (err) => {
							console.log(err)
						}
					})
				}
				if (this.history == value) {

					Toast(`目前已经在${this.typeData[index].text}页面了`)


					return
				}

				Toast.loading({
					message: "加载中...",
					forbidClick: true,
					duration: 0
				});
				uni.request({
					url: "http://120.27.232.26:10002/typeProducts",
					method: "get",
					data: {
						appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
						key: "type",
						value
					},
					success: (res) => {
						console.log("请求类型成功", res);
						this.history = value;
						if (res.data.code == 500) {
							this.menuData = []
							this.menuData = res.data.result;
							Toast.clear();
						} else {
							Toast("获取菜单失败");
						}
					},
					fail: (err) => {
						console.log(err)
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
	.menu {

		.active {
			color: #0c34ba;
		}

		.search {
			animation: fadeInDown;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 1s;
		}

		.fix {
			z-index: 1;
			width: 100%;
			position: fixed;
			height: 155px;
			top: 0;
		}

		.van-grid {
			animation: fadeInBottomLeft;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 1s;
		}

		// .type-box {
		//     animation: rollIn;
		//     /* referring directly to the animation's @keyframe declaration */
		//     animation-duration: 1s;
		//     display: flex;
		//     background: #fbfafa;
		//     align-items: center;
		//     justify-content: space-between;
		//     .van-grid{
		//         display: contents;
		//     }

		//     .type-one {
		//         margin-top: 10px;
		//         height: 100%;
		//         flex: 1;
		//         text-align: center;
		//     }

		//     p {
		//         margin: 5px 0;
		//     }


		// }

		.result-box {
			z-index: -1;
			animation: fadeInBottomRight;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 1s;
			margin-top: 235px;
			padding-bottom: 55px;
		}

		.menu-item {
			animation: fadeIn;
			/* referring directly to the animation's @keyframe declaration */
			animation-duration: 1s;
			// height: 100px;
			background: snow;
			margin: 10px;
			border-radius: 10px;
			// display: flex;

			// img {
			// 	padding: 10px;
			// 	height: 80px;
			// 	width: 80px;
			// }

			// .center {
			// 	padding: 15px 10px 10px 10px;
			// 	flex: 2;
			// }

			// .right {
			// 	flex: 1;
			// 	font-size: 14px;

			// 	.hot {
			// 		display: flex;
			// 		flex-direction: row;
			// 		color: crimson;
			// 		text-align: center;
			// 		margin-top: 15px;

			// 	}


			// 	.nohot {
			// 		display: flex;
			// 		flex-direction: row;
			// 		opacity: 0;
			// 		text-align: center;
			// 		margin-top: 15px;
			// 	}
			// }

			// .price {
			// 	font-size: 15px;
			// 	font-weight: 700;
			// 	width: 80px;
			// 	text-align: center;
			// 	color: #0c34ba;
			// 	font-weight: 700;

			// }

			// .hotprice {
			// 	font-size: 15px;
			// 	font-weight: 700;
			// 	width: 80px;
			// 	text-align: center;
			// 	color: crimson;
			// 	font-weight: 700;

			// }

			// .name {
			// 	font-weight: 600;
			// 	font-size: 15px;
			// 	color: #676a70;
			// 	display: -webkit-box;
			// 	-webkit-box-orient: vertical;
			// 	-webkit-line-clamp: 2;
			// 	/* 根据业务需求设置第几行显示省略号 */
			// 	overflow: hidden;
			// }

			// .enname {
			// 	margin-top: 12px;
			// 	font-size: 12px;
			// 	color: #bba8a4;

			// }
		}


	}
</style>
