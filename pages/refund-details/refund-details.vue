<template>
	<view class="safe-area"></view>
	<TopNav>
		<text>退款详情</text>
	</TopNav>
	<view class="content">
		<view class="progress">
			<text class="title">退款进度</text>
			<text class="main">退款失败</text>
		</view>
		<view class="explain">
			<text class="title">处理说明</text>
			<text class="main">信息填写错误</text>
		</view>
		<view class="item">
			<GoodsItem></GoodsItem>
		</view>
		<view class="refund-title">
			退款凭证
		</view>
		<view class="info">
			<view>
				<text>下单时间：2023-08-20</text>
			</view>
			<view>
				<text>付款时间：2023-08-20</text>
			</view>
			<view>
				<text>付款时间：2023-08-20</text>
			</view>
			<view>
				<text>付款时间：2023-08-20</text>
			</view>
			<view>
				<text>付款时间：2023-08-20</text>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="less" scoped>
.content{
	height: calc(100vh - 200rpx);
	background-color: #f2f2f2;
	.progress,.explain{
		background-color: #fff;
		line-height: 30rpx;
		padding: 24rpx;
		display: flex;
		border-top: 1px solid #D7D7D7;
		.title{
			flex-basis: 168rpx;
		}
	}
	.item{
		background-color: #fff;
		margin-top: 24rpx;
	}
	.refund-title{
		line-height: 80rpx;
		padding: 0 24rpx;
	}
	.info{
		background-color: #fff;
		padding: 24rpx;
		color: #999999;
		font-size: 26rpx;
		line-height: 45rpx;
	}
}
</style>
