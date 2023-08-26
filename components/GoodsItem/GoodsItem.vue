<template>
	<view class="order-item" v-for="(item,index) in 3">
		<view class="item-image">
			<image src="../../static/img/home/goods-1.png" mode=""></image>
		</view>
		<view class="item-main">
			<view class="item-title">
				<text>
					的发生法案授权我的
				</text>
				<view class="item-SKU">
					规格：默认
				</view>
			</view>
		</view>
		<view class="item-info">
				<text>
					￥180.88
				</text>
				<view>
					×1
				</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="less" scoped>
	.order-item{
		height: 220rpx;
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		.item-image{
			image{
				width: 220rpx;
				height: 220rpx;
			}
		}
		.item-main{
			align-self: flex-start;
			flex: auto;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-wrap: nowrap;
			margin-left: 20rpx;
			.item-title{
				font-size: 28rpx;
				text{
					
				}
				.item-SKU{
					font-size: 20rpx;
					color: #a1a1a1;
				}
			}
		}
		.item-info{
			align-self: flex-start;
			flex: auto;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			flex-wrap: nowrap;
			margin-left: 20rpx;
		}
	}
</style>