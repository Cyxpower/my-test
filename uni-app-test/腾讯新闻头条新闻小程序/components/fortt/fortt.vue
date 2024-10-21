<template>
	<view class="newsbox">
		<view class="pic">
			<image :src="item.image_url?item.image_url:item.media_info.avatar_url" mode=""></image>

		</view>
		<view class="text">
			<view class="title">
				{{item.title}}
			</view>
			<view class="info" v-if="item.publish_time">
				<view class="info-top">
					<image :src="item.media_info.avatar_url" mode=""></image>
					<text>{{item.media_info.name}}</text>
				</view>
				<view class="mid">
					<view class="mid1">
						<text>{{item.digg_count}}浏览</text>
					</view>
					<view class="mid1">
						<text>{{item.like_count}}赞</text>
					</view>
				</view>
				<text>发布时间：{{toTime(item.publish_time)}}</text>


			</view>

		</view>
	</view>
</template>

<script>
	import {
		parseTime
	} from "@/utils/tool.js"
	export default {
		name: "fortt",
		props: {
			item: {
				type: Object,
				default () {
					return {
						title: "组件内默认的标题",
						author: "张三",

					}
				}
			}
		},
		data() {
			return {
				toTime: parseTime
			};
		}
	}
</script>

<style lang="scss">
	.newsbox {
		display: flex;
		margin-bottom: 40rpx;

		.pic {
			width: 330rpx;
			height: 260rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.text {
			flex: 1;
			padding-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.title {
				font-size: 30rpx;
				color: #333;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden; //溢出内容隐藏
				text-overflow: ellipsis; //文本溢出部分用省略号表示
				display: -webkit-box; //特别显示模式
				-webkit-line-clamp: 2; //行数
				line-clamp: 2;
				-webkit-box-orient: vertical; //盒子中内容竖直排列			
			}

			.info {
				display: flex;
				flex-direction: column;
				font-size: 26rpx;
				color: #999;

				.info-top {
					padding-bottom: 15rpx;

					text {
						flex: 1;
						margin-bottom: 20rpx;
						padding-left: 10rpx;
					}

					image {
						flex: 1;
						width: 30rpx;
						height: 30rpx;
						border-radius: 30px;
					}


				}


			}

			.mid {
				display: flex;
				justify-content: space-between;
				height:50rpx;
				.mid1 {
				padding-right: 40rpx;
				width: 150rpx;
				}
			}

		}
	}
</style>
