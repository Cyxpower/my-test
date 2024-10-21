<template>
	<view>
		
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsdetail:[],
				url:""
			};
		},
		onLoad(e) {
			this.getdetail()
			this.url = e.url
		},
		methods:{
			getdetail(){
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
						console.log(res)
						this.newsdetail = res.data.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
