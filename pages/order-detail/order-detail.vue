<template>
	<view class="safe-area"></view>
	<TopNav>
		<text>订单详情</text>
	</TopNav>
	<view class="content">
		<view class="header">
			<view class="address">
				<text>小可爱</text>
				<text>13333333333</text>
			</view>
			<view class="location">
				重庆 重庆市 渝北区 重庆市渝北区汽修中心
			</view>
		</view>
		<view class="detail">
			<view class="header">
				<view class="date">
					<text>下单时间：2023-08-20</text>
				</view>
				<view class="status">
					已完成
				</view>
			</view>
			<view class="body">
				<GoodsItem></GoodsItem>
			</view>
		</view>
		<view class="bill">
			<view class="bill-item">
				<view class="key">商品总额</view>
				<view class="value">￥480.00</view>
			</view>
			<view class="bill-item">
				<view class="key">优惠券</view>
				<view class="value">￥480.00</view>
			</view>
			<view class="bill-item">
				<view class="key">商品抵扣券</view>
				<view class="value">￥480.00</view>
			</view>
			<view class="bill-item">
				<view class="key">运费</view>
				<view class="value">￥480.00</view>
			</view>
			<view class="bill-item total">
				<view class="key">付款总额</view>
				<view class="value">￥480.00</view>
			</view>
		</view>
		<view class="more">
			<view class="order-number">
				<text>订单编号：111111111111111111111111</text>
				<view class="order-operator">
					<button type="default" size="mini">删除订单</button>
				</view>
			</view>
			<view class="date">
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
		<view class="operator">
			<button type="default" size="mini">联系客服</button>
			<button type="default" size="mini">查看物流</button>
			<button type="default" size="mini" class="red-btn" @tap="goToCommentList">评价</button>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		orderId: String
	})
	const init = () => {
		
	}
	init()
	
	const goToCommentList = () => {
		uni.navigateTo({
			url:"/pages/order-comment-list/order-comment-list",
		})
	}
</script>

<style lang="less" scoped>
	.content{
		background-color: #f2f2f2;
		&>.header{
			background-color: #fff;
			padding: 10rpx 24rpx;
			.address{
				font-size: 32rpx;
				font-weight: 400;
				color: #333333;
				line-height: 50rpx;
			}
			.location{
				font-size: 28rpx;
				color: #666666;
				line-height: 50rpx;
			}
		}
		.detail{
			background-color: #fff;
			margin-top: 24rpx;
			&>.header{
				display: flex;
				justify-content: space-between;
				border-bottom: 1rpx solid #f2f2f2;
				line-height: 80rpx;
				padding: 0 24rpx;
				font-size: 28rpx;
			}
			.footer{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding: 0 24rpx;
			}
		}
		.bill{
			background-color: #fff;
			margin-top: 24rpx;
			.bill-item{
				display: flex;
				justify-content: space-between;
				line-height: 100rpx;
				padding: 0 24rpx;
				&:not(:last-of-type){
					border-bottom: 1px solid #D7D7D7;
				}
			}
			.total{
				font-size: 36rpx;
				.key{
					font-weight: 500;
				}
				.value{
					color: #F83D3D;
				}
			}
		}
		.more{
			background-color: #fff;
			margin-top: 24rpx;
			padding: 24rpx;
			color: #999999;
			font-size: 26rpx;
			.order-number{
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 60rpx;
				.order-operator{
					display: flex;
					justify-content: space-between;
					align-items: center;
					button{
						padding: 10rpx;
						line-height: 20rpx;
						color: #999999;
					}
				}
			}
			.date{
				line-height: 45rpx;
			}
		}
		.operator{
			background-color: #fff;
			margin-top: 24rpx;
			padding-top: 24rpx;
			padding-bottom: 80rpx;
			text-align: right;
			button{
				background-color: #fff;
				color: #333333;
				font-size: 28rpx;
				margin-right: 24rpx;
				padding: 0 20rpx;
			}
		}
	}
</style>
