<template>
	<view class="newsbox">
		<view class="pic">
			<image @click="pre"  v-for="(i,index) in item.pic_info.small_img" :src="i"  mode=""></image>
		</view>
		<view class="text">
			<view class="title">				
				{{item.title}}	
			</view>
			<view class="info" v-if="item.publish_time">
				<text>{{item.author}}</text>
				<text>{{item.interation_info.read_num==undefind?'193':item.interation_info.read_num }}浏览</text>
				<text>发布时间：{{item.publish_time}}</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			pre(e){
				console.log(e);
			}
		},
		name:"newsbox",
		props:{
			item:{
				type:Object,
				default(){
					return {
						title:"组件内默认的标题",
						author:"张三",
					}
				}
			}
		},
		data() {
			return {
				
			};
		},

	}
</script>

<style lang="scss">
.newsbox{
	height: 220rpx;
	box-sizing: border-box;
	border: rgb(244, 244, 246) solid  1px;
	padding: 25rpx 0;
	display: flex;
	.pic{
		width: 30%;
		image{
			border-radius: 16px;
			width: 100%;
			height: 100%;
		}
	}
	.text{		
		padding:0 20rpx ;
		flex:1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title{
			font-size: 26rpx;
			color:#333;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;				//溢出内容隐藏
			text-overflow: ellipsis;		//文本溢出部分用省略号表示
			display: -webkit-box;			//特别显示模式
			-webkit-line-clamp: 2;			//行数
			line-clamp: 2;					
			-webkit-box-orient: vertical;	//盒子中内容竖直排列			
		}
		.info{
			display: flex;
			flex-direction: column;
			font-size: 22rpx;
			color:#999;
			text{
			}
		}
	}
}
</style>