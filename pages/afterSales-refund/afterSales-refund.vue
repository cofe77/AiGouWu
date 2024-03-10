<template>
	<view class="safe-area"></view>
	<TopNav>
		<text>退款/售后</text>
	</TopNav>
	<view class="content">
		<view class="order-item" v-for="(item,index) in 2" @tap="()=>goToOrderDetail(item)">
			<view class="header">
				<view class="info">
					<view class="address">
						<text>2023-08-20</text>
						<text>2023-08-20</text>
						<text>2023-08-20</text>
					</view>
					<view class="status">
						已完成
					</view>
				</view>
			</view>
			<view class="body">
				<GoodsItem></GoodsItem>
			</view>
			<view class="operator">
				<button type="default" size="mini">取消申请</button>
				<button type="default" size="mini" @tap="goToRefundDetails">退款详情</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	const goToRefundDetails = () => {
		uni.navigateTo({
			url:"/pages/refund-details/refund-details",
		})
	}
</script>

<style lang="less" scoped>
.content{
	border-top: 1px solid #D7D7D7;
	background-color: #f2f2f2;
	.order-item{
		background-color: #fff;
		margin-bottom: 24rpx;
		&>.header{
			padding: 0 24rpx;
			border-bottom: 1rpx solid #eee;
			.info{
				display: flex;
				justify-content: space-between;
				line-height: 60rpx;
			}
		}
		.operator{
			text-align: end;
			padding: 20rpx;
		}
	}
}
</style>
