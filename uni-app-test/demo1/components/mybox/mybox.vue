<template>

	<view class="item">
		<view class="big">
			{{title}}
		</view>
		<view class="small">
			{{subtitle}}
		</view>
		<view class="line">

		</view>
		<view>
			<input type="text" placeholder="请输入..." @input="oninput">
		</view>
	</view>

</template>

<script>
	export default {
		name: "mybox",
		props:{
			title:{
				type:String,
				default:"默认标题"
			},
			subtitle:{
				type:String,
				default:"默认副标题"
			}
		},
		data() {
			return {

			};
		},
		methods:{
			oninput(e){
				console.log(e.detail.value) 
				this.$emit("myvalue",{value:e.detail.value,time:Date.now()})
			}
		}
	}
</script>

<style lang="scss">
	.item {
		padding: 60rpx 30rpx;
		text-align: center;
		background: #5bd1d7;
		.big{
			font-size: 50rpx;
			font-weight: 600;
			color: #333;
		}
		.small{
			font-size: 28rpx;
			color: #888;
		}
		.line{
			display: inline-block;
			width: 80rpx;
			height: 8rpx;
			background: red;
		}
	}
</style>
