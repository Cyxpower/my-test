<template>
	<view class="content">
		<view class="all">
			<web-view :src="complete.url"></web-view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				complete: [],
			};
		},
		methods: {
			getdetail(e) {
				uni.request({
					url: `https://m.toutiao.com/i${e}/info/v2/`,
					success: (res) => {
						res.data.data.content = res.data.data.content.replace(/<img/gi,
							'<img style="max-width:100%"')
						this.complete = res.data.data
						uni.setNavigationBarTitle({
							title: this.complete.title
						})
						console.log(this.complete)
					}
				})
			}
		},
		onLoad(e) {
			console.log(e.id)
			this.getdetail(e.id)
			uni.stopPullDownRefresh()
		}
	}
</script>

<style lang="scss">
	.content {
		
	}
</style>
