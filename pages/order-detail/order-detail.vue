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
			<view class="footer">
				<view class="count">
					共1件商品&nbsp;
				</view>
				<view class="price">
					合计：￥180.88
				</view>
			</view>
		</view>
		<view class="bill">
			<view class="bill-item">
				<view class="key">商品总额</view>
				<view class="value">￥480.00</view>
			</view>
			<view class="bill-item">
				<view class="key">商品总额</view>
				<view class="value">￥480.00</view>
			</view>
			<view class="bill-item">
				<view class="key">商品总额</view>
				<view class="value">￥480.00</view>
			</view>
			<view class="bill-item">
				<view class="key">商品总额</view>
				<view class="value">￥480.00</view>
			</view>
			<view class="bill-item total">
				<view class="key">付款总额</view>
				<view class="value">￥480.00</view>
			</view>
		</view>
		<view class="more">
			<view class="order-number">
				<text>111111111111111111111111</text>
				<view class="">
					<button type="default" size="mini">删除订单</button>
				</view>
			</view>
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
		<view class="operator">
			<button type="default" size="mini">删除订单</button>
		</view>
	</view>
</template>

<script setup lang="ts">
	const props = defineProps({
		orderId: String
	})
	const init = () => {
		
	}
	init()
</script>

<style lang="less" scoped>
	.content{
		background-color: #f2f2f2;
		&>.header{
			background-color: #fff;
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
			}
		}
		.more{
			background-color: #fff;
			margin-top: 24rpx;
			.order-number{
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 60rpx;
			}
			.info{
				display: flex;
				justify-content: space-between;
				line-height: 60rpx;
			}
		}
		.operator{
			background-color: #fff;
			margin-top: 24rpx;
			
		}
	}
</style>
