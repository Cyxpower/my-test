<template>
	<view class="car">
		<view class="car-top">
			<van-nav-bar :right-text="showbutton ? '编辑' : '完成'" @click-right="onClickRight" fixed />
			<img style="width: 100%;" src="../../static/icons/logo.png" alt />
		</view>

		<!-- 购物车数据 -->
		<view class="big-car">

			<view class="car-item" v-for="item in carItem " :key="item.sid">
				<!-- 左边选择 -->
				<view class="choose-item">
					<van-checkbox v-model="item.isChoose" @click="changeStatus"></van-checkbox>
				</view>
				<!-- 右边内容 -->
				<view class="car-content">
					<img :src="item.small_img" alt @click="toDetail(item.pid)" />
					<view class="detail-content">
						<view class="pro-name">

							<view class="title">{{ item.name }}</view>

							<view class="type">{{ item.rule }}</view>
						</view>
						<!-- 英文名字 -->
						<view class="enname">{{ item.enname }}</view>
						<!-- 价格和步进器 -->
						<view class="price-step">
							<view class="price">¥{{ item.price }}</view>
							<view class="step">
								<van-stepper v-model="item.count" theme="round" button-size="22"
									@change="changeCount(item)" />
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom-span" style="text-align:center;height:70px">
				<span>哎呀，没有数据可加载了！</span>
			</view>
		</view>
		<!-- 提交订单 -->
		<view class="submit-order">
			<van-submit-bar disabled price=3050 button-text="提交订单" tip="您的收货地址不支持同城送, 我们已为您推荐快递"
				tip-icon="info-o" bind:submit="onSubmit" />
<!-- 			<van-submit-bar :price="allPrice * 100" v-show="showbutton == true" button-text="提交订单" @submit="placeOrder">
				<van-checkbox v-model="checked" @click="allChoose">全选</van-checkbox>
			</van-submit-bar>
			<van-submit-bar :price="allPrice * 100" v-show="showbutton == false" @submit="deleteOrder"
				button-color="#0c34ba" button-text="删除订单">
				<van-checkbox v-model="checked" @click="allChoose">全选</van-checkbox>
			</van-submit-bar> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">

</style>
