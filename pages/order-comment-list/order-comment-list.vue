<template>
	<view class="safe-area"></view>
	<TopNav>
		<text>评价</text>
	</TopNav>
	<scroll-view class="content" scroll-y="true">	
		<view class="order-item" v-for="(item,index) in 13" @tap="()=>goToPostComment(item.id)">
			<view class="item-image">
				<image src="../../static/img/home/goods-1.png" mode=""></image>
			</view>
			<view class="item-main">
				<view class="item-title">
					<text>
						的发生法案授权我的dsadsadsa的发生法案授权我的dsadsadsa的发生法案授权我的dsadsadsa的发生法案授权我的dsadsadsa
					</text>
					<view class="item-SKU">
						规格：默认
					</view>
				</view>
			</view>
			<view class="item-info">
					<text>
						已评价
					</text>
					<view class="iconfont icon-back" style="transform: rotateY(180deg) scale(0.7);color:#a1a1a1;margin-top: 20rpx;"></view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
	
	const goToPostComment = (id) => {
		uni.navigateTo({
			url:"/pages/post-comment/post-comment?orderItemId="+id,
		})
	}
</script>

<style lang="less" scoped>
	.content{
		height: calc(100vh - 90rpx);
		border-top: 1px solid #D7D7D7;
		.order-item{
			height: 220rpx;
			display: flex;
			align-items: center;
			padding: 20rpx 30rpx;
			border-bottom: 1px solid #D7D7D7;
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
						margin-top: 10rpx;
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
				flex-shrink: 0;
			}
		}
	}
</style>
