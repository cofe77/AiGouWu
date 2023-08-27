<template>
	<view class="cart">
		<view class="safe-area"></view>
		<view class="header">
			<view class="title">
				购物车
			</view>
			<view class="edit-btn">
				编辑
			</view>
		</view>
		<view class="location">
			<view class="address">
				<view class="iconfont icon-location"></view>
				<text>甘肃省兰州市</text>
			</view>
			<view class="iconfont icon-back" style="transform: rotateY(180deg);color:#a1a1a1"></view>
		</view>
		<!-- 购物车 -->
		<view class="cart">
			<view class="cart-class" v-for="(item,index) in 3" :key="index">
				<view class="class-header">
					<view class="title">
						<label class="radio">
							<radio value="" />
						</label>
						跨境购
					</view>
					<view class="iconfont icon-delete"></view>
				</view>
				<view class="cart-list">
					<view class="cart-item" v-for="(item,index) in 3">
						<label class="radio">
							<radio value="" />
						</label>
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
							<view class="item-bottom">
								<text class="item-price">￥<span>265</span></text>
								<view class="item-count-operator">
									<view class="operator-btn operator-decrease">-</view>
									<view class="operator-count">22</view>
									<view class="operator-btn operator-increase">+</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 购物车猜你喜欢 -->
		<view class="guess-you-like">
			<view class="title">猜你喜欢</view>
			<VerticalGoodsList v-if="guessYouLike" :goodss="guessYouLike" />
		</view>
		<view class="operator">
			<view class="left">
				<label class="radio">
					<radio value="" />
				</label>
				<text>全选</text>
			</view>
			<view class="right">
				<view class="price">
					合计：<text class="total">￥98.8</text>
				</view>
				<view class="settle" @tap="goToPostOrder">
					结算(1)
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { api } from '../../api'
	const guessYouLike = ref([])
	
	const initBrandData = () => {
		api.getGuessLike().then(res=>{              
			console.log(res.data);
			guessYouLike.value = res.data
		})
	}
	
	initBrandData()
	
	const goToPostOrder = () => {
		uni.navigateTo({
			url:"/pages/post-order/post-order", 
		})
	}
</script>

<style lang="less" scoped>
.cart{
	position: relative;
	radio{
		transform: scale(0.6);
	}
	.header{
		height: 80rpx;
		position: relative;
		line-height: 80rpx;
		.title{
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			font-size: 38rpx;
			font-weight: 600;
		}
		.edit-btn{
			position: absolute;
			right: 15rpx;
		}
	}
	.location{
		height: 80rpx;
		line-height: 80rpx;
		background-color: #f2f2f2;
		display: flex;
		justify-content: space-between;
		padding-left: 35rpx;
		padding-right: 50rpx;
		.address{
			display: flex;
			text{
				margin-left: 20rpx;
			}
		}
	}
	.cart{
		background-color: #f2f2f2;
		.cart-class{
			margin-bottom: 40rpx;
			.class-header{
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #fff;
				padding: 20rpx 30rpx;
				border: 1rpx solid #eee;
				.title{
					font-size: 28rpx;
				}
			}
			.cart-list{
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
		}
	}
	.guess-you-like{
		padding-top: 20rpx;
		background-color: #f2f2f2;
		.title{
			text-align: center;
			background-color: #fff;
			font-size: 30rpx;
			font-weight: 400;
			line-height: 80rpx;
		}
	}
	.operator{
		position: fixed;
		bottom: 88rpx;
		width: 100%;
		height: 98rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left{
			
		}
		.right{
			display: flex;
			align-items: center;
			.price{
				.total{
					color: rgba(252, 90, 90, 1);
				}
			}
			.settle{
				width: 208rpx;
				line-height: 98rpx;
				color: #fff;
				background-color: rgba(252, 90, 90, 1);
				text-align: center;
				margin-left: 30rpx;
			}
		}
	}
}
</style>
