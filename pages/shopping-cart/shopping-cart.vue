<template>
	<view>
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
			<view class="iconfont icon-location">
				甘肃省兰州市
			</view>
			<view class="iconfont icon-back" style="transform: rotateY(180deg);"></view>
		</view>
		<!-- 购物车 -->
		<view class="cart">
			<view class="cart-class" v-for="(item,index) in 3" :key="index">
				<view class="class-header">
					<label class="radio">
						<radio value="" />
					</label>
					<view class="class-header">
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
								的发生法案授权我的
							</view>
							<view class="item-SKU">
								
							</view>
							<view class="item-bottom">
								<text class="item-price">265</text>
								<view class="item-count-operator">
									<view class="operator-decrease">-</view>
									<view class="operator-count">22</view>
									<view class="operator-increase">+</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 购物车猜你喜欢 -->
		<view class="guess-you-like">
			<text class="title">猜你喜欢</text>
			<VerticalGoodsList v-if="guessYouLike" :goodss="guessYouLike" />
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
</script>

<style lang="less" scoped>
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
}
.cart{
	background-color: #f2f2f2;
	padding-bottom: 40rpx;
	.cart-class{
		margin-bottom: 40rpx;
		.class-header{
			display: flex;
			justify-content: space-between;
			background-color: #fff;
		}
		.cart-list{
			background-color: #fff;
			.cart-item{
				display: flex;
				align-items: center;
				.item-image{
					image{
						width: 220rpx;
						height: 220rpx;
					}
				}
				.item-main{
					.item-title{
						
					}
					.item-SKU{
						
					}
					.item-bottom{
						.item-price{
							
						}
						.item-count-operator{
							 
						}
					}
				}
			}
		}
	}
}
</style>
