<template>
	<view>
		<mybox title="列表" subtitle="列表小标题"></mybox>
		<view class="out">


			<view class="row" v-for="(item,index) in newsarr" :key="item.id" @click="todetail(item.id)">
				<view class="title">
					{{item.title}}
				</view>
				<view class="content">
					{{item.body}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsarr: []
			}
		},
		methods: {
			getnews() {
				uni.request({
					url: "http://jsonplaceholder.typicode.com/posts",
					success: res => {
						console.log(res)
						this.newsarr = res.data
					}
				})
			},
			todetail(e){
				uni.navigateTo({
					url:"/pages/detail/detail?id="+e,
				})
			}
		},
		onLoad() {
			this.getnews()
		}
	}
</script>

<style lang="scss">
	.out {
		padding: 50rpx 30rpx;
		.row {
			padding: 20rpx 10rpx;
			border: 1px dotted #e4e4e4;
			margin-bottom: 20rpx;

			.title {
				font-size: 36rpx;
				font-weight: 600;
				padding-bottom: 15rpx;
			}

			.content {
				font-size: 30rpx;
				color: darkgrey;
			}
		}
	}
</style>
