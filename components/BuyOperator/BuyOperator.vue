<template>
	<view class="body">
		<view class="customer">
			<view class="iconfont icon-category"></view>
			<view class="title">
				客服
			</view>
		</view>
		<view class="cart">
			<view class="iconfont icon-category"></view>
			<view class="title">
				购物车
			</view>
		</view>
		<view class="add-to-cart">
			加入购物车
		</view>
		<view class="buy" @tap="goToPostOrder">
			立即购买
		</view>
	</view>
</template>

<script setup>
	const goToPostOrder = () => {
		uni.navigateTo({
			url: '/pages/post-order/post-order'
		})
	}
</script>

<style lang="less" scoped>
	.body{
		background-color: #fff;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		text-align: center;
		.customer{
			flex: 2;
			font-size: 24rpx;
			.title{
				font-size: 20rpx;
			}
		}
		.cart{
			flex: 2;
			font-size: 24rpx;
			.title{
				font-size: 20rpx;
			}
			
		}
		.add-to-cart{
			flex: 5;
			background-color: black;
			color: #fff;
			line-height: 100rpx;
		}
		.buy{
			flex: 5;
			background-color: red;
			color: #fff;
			line-height: 100rpx;
		}
	}
</style>