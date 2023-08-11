<template>
	<view class="safe-area"></view>
	<TopNav rightIcon="icon-setting">
		<view class="nav-header">
			<view class="">
				商品
			</view>
			<view class="">
				商品
			</view>
			<view class="">
				商品
			</view>
		</view>
	</TopNav>
	<view class="content">
		<view class="main-pic">
			<image src="../../static/img/home/goods-1.png" mode=""></image>
			<view class="indicator">
				1/9
			</view>
		</view>
		<view class="price">
			<text class="selling">￥89</text>
			<text class="orgin-price">￥120</text>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="less" scoped>
.nav-header{
	display: flex;
}
.content{
	.main-pic{
		height: 100vw;
		position: relative;
		border-bottom: 1px solid #eee;
		image{
			width: 100%;
			height: 100%;
		}
		.indicator{
			position: absolute;
			right: 30rpx;
			bottom: 30rpx;
			width: 50rpx;
			line-height: 40rpx;
			background-color: rgba(0,0,0,0.5);
			color: #fff;
			padding: 0 22rpx;
			font-size: 14rpx;
			border-radius: 999rpx;
			text-align: center;
		}
	}
	.price{
		font-weight: 500;
		margin-top: 30rpx;
		display: flex;
		.selling{
			font-size: 42rpx;
			color: #F83D3D;
			margin-right: 25rpx;
			align-self: center;
		}
		.orgin-price{
			font-size: 24rpx;
			color: #999;
			text-decoration: line-through;
			align-self: center;
		}
	}
}
</style>
