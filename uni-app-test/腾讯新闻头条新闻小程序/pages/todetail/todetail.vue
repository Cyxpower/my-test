<template>
	<view class="all">
		<view v-for="(item,index) in newsarr" :key="index">
			<fortt :item="item" @click.native="detail(item.item_id)"></fortt>
		</view>

		<view class="loading" v-if="newsarr.length">
			<view v-if="loading==1">数据加载中...</view>
		</view>
	</view>
</template>

<script>
	import {
		parseTime
	} from "@/utils/tool.js"

	export default {
		data() {
			return {
				newsarr: [],
				loading: 0,
				first: true
			};
		},
		onPullDownRefresh() {
			this.refresh()
			uni.stopPullDownRefresh()
		},
		methods: {
			uniqueArr(arr1, arr2) {
				//合并两个数组
				let temp = [];
				const map = new Map()
				// if (this.first) {
				// 	arr2.forEach(e =>{
				// 		map.set((e.item_id, true))
						
				// 	})
				// } else {
					arr1.forEach(e =>{
						map.set(e.item_id, true)
					})
				// }
				
				arr2.forEach(e =>{
					if (!map.has((e.item_id))) {
						arr1.push(e)
					} 
				})
				console.log(arr1)
			},
			getttnews() {
				uni.showNavigationBarLoading()
				uni.showLoading({
					title: "加载中..."
				})
				this.loading = 1
				uni.request({
					url: "https://m.toutiao.com/list/?format=json_raw&as=A1C6139FE6F5B61",
					success: (res) => {
						console.log(res.data.data)
						console.log(this.newsarr)
						if(this.first) {
							this.newsarr = res.data.data;
							this.first = false;
						} else {
							this.uniqueArr(this.newsarr, res.data.data)
						}
						// this.uniqueArr(this.newsarr, res.data.data)
						uni.hideNavigationBarLoading()
						uni.hideLoading()
					}
				})
			},
			refresh() {
				uni.showNavigationBarLoading()
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: 'https://m.toutiao.com/list/?format=json_raw&as=A1C6139FE6F5B61',
					success: (res) => {
						this.newsarr = []
						this.newsarr = res.data.data
						uni.hideNavigationBarLoading()
						uni.hideLoading()
					}
				})
			},
			detail(id) {
				console.log(id)
				uni.navigateTo({
					url: "/pages/detail/detail?id=" + id,
					data: {
						id: id
					}
				})
			}
		},
		onLoad() {
			this.getttnews()
		},
		onReachBottom() {
			this.getttnews()
		}

	}
</script>

<style lang="scss">
	.all {
		.loading {
			text-align: center;
			font-size: 26rpx;
			color: #888;
			line-height: 2em;
		}
	}
</style>
