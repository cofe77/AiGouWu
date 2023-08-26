<template>
	<view class="safe-area"></view>
	<TopNav>
		<view class="nav-header">
			<view class="">
				提交订单
			</view>
		</view>
	</TopNav>
	<view class="content">
		<view class="address">
			<view class="header">
				<text>小可爱</text>
				<text>13333333333</text>
			</view>
			<view class="body">
				重庆市重庆市渝北区
			</view>
		</view>
		<view class="goods">
			<view class="cart-item" v-for="(item,index) in 3">
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
			</view>
		</view>
		<view class="coupons">
			<view class="title">
				优惠券
			</view>
			<view class="iconfont icon-back" style="transform: rotateY(180deg);color:#a1a1a1"></view>
		</view>
		<view class="info">
			<view class="total">
				<view class="title">
					商品合计
				</view>
				<view class="">
					￥178.1
				</view>
			</view>
			<view class="freight">
				<view class="title">
					运费
				</view>
				<view class="">
					￥0.00
				</view>
			</view>
		</view>
	</view>
	<view class="post-operator">
		<view class="operator">
			<view class="final-price">
				<view class="">
					合计
				</view>
				<view class="">
					￥178.1
				</view>
			</view>
			<view class="post-btn">
				提交订单
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="less" scoped>
	page{
		background-color: #F2F2F2;
		
	}
.nav-header{
	display: flex;
	background-color: #fff;
}
.content{
	background-color: #F2F2F2;
	.address{
		background-color: #fff;
		border-top: 0.5rpx solid #d7d7d7;
		padding: 0 24rpx;
	}
	.goods{
		margin-top: 24rpx;
		background-color: #fff;
		.cart-item{
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
				.item-bottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.item-price{
						color: red;
					}
					.item-count-operator{
						display: flex;
						align-items: center;
						.operator-btn {
							width: 34rpx;
							height: 34rpx;
							background-color: #eee;
							font-size: 34rpx;
							line-height: 34rpx;
							text-align: center;
						}
						.operator-count{
							height: 32rpx;
							padding: 0 20rpx;
							font-size: 26rpx;
							line-height: 32rpx;
							border: 1rpx solid #eee;
							border-left-width: 0;
							border-right-width: 0;
						}
					}
				}
			}
		}
	}
	.coupons{
		background-color: #fff;
		margin-top: 24rpx;
		padding: 0 24rpx;
		
	}
	.info{
		background-color: #fff;
		margin-top: 24rpx;
		padding: 0 24rpx;
		
	}
}
.post-operator{
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #fff;
}
</style>
