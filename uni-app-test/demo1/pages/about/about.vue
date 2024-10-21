<template>
	<view>
		<mybox title="关于" subtitle="关于我的" @myvalue="getvalue"></mybox>
		<view class="text">
			<button type="primary" @click="gettext">点击获取一句土味情话</button>
			{{text}}
		</view>
		<view class="one">
			<image :src="pic" mode="widthFix"></image>
			<button type="primary" @click="getdog">点击随机获取一张小狗的图片</button>
		</view>
		<view class="cat" v-for="(item,index) in pic2">
			<image :src="item.url" mode=""></image>

		</view>
		<button type="primary" @click="getcat">点击随机获取几张小猫的照片</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic: "",
				pic2: [],
				text:""
			}
		},
		methods: {
			getvalue(e) {
				console.log(e)
			},
			getdog() {
				uni.showLoading({
					title: "请求中..."
				})
				uni.request({
					url: "https://dog.ceo/api/breeds/image/random",
					success: res => {
						console.log(res)
						this.pic = res.data.message
						uni.hideLoading()
					}
				})
			},
			getcat() {
				uni.showLoading({
					title: "请求中..."
				})
				uni.request({
					url: "https://api.thecatapi.com/v1/images/search",
					data:{
						limit:3
					},
					success: res => {
						console.log(res)
						this.pic2 = res.data
						uni.hideLoading()
					}
				})
			},
			gettext(){
				uni.request({
					url:"https://api.uomg.com/api/rand.qinghua",
					success: (res) => {
						this.text = res.data.content
					}
				})
			}
		}
	}
</script>

<style>

</style>
