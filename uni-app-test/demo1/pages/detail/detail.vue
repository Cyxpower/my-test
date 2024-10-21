<template>
	<view class>
		<view class="detail">
			<view class="title">
				{{itemobj.title}}
			</view>
			<view class="content">
				{{itemobj.body}}
			</view>
		</view>
		<view class="comments">
			<view class="title">
				评论
			</view>
			<view class="row" v-for="(item,index) in comments">
				<view class="text">
					{{item.name}}
				</view>
				<view class="email">
					{{item.email}}
				</view>
				<view class="body">
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
				itemobj: {},
				id: 1,
				comments: []
			};
		},
		onLoad(e) {
			this.id = e.id
			console.log(e)
			this.getdetail()
			this.getcomments()
		},
		methods: {
			getdetail() {
				uni.request({
					url: "http://jsonplaceholder.typicode.com/posts/" + this.id,
					success: res => {
						this.itemobj = res.data
					}
				})
			},
			getcomments() {
				uni.request({
					url: `http://jsonplaceholder.typicode.com/posts/${this.id}/comments`,
					success: res => {
						console.log(res)
						this.comments = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 30rpx;

		.title {
			font-size: 46rpx;
			color: #000;
			padding-bottom: 20rpx;
		}

		.content {
			font-size: 30rpx;
			color: #666;
		}
	}

	.comments {
		padding: 30rpx;
		background: #f8f8f8;

		.title {
			font-size: 46rpx;

			margin-bottom: 30rpx;
		}
		

		.row {

			font-size: 22rpx;
			color: #999;
			padding-bottom: 15rpx;

			.body {

				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				color: #555;
				border-bottom: #cfcfcf 1px solid;
				padding: 20rpx 0;
			}
		}




	}
</style>
