<template>
	<view class="item">
		<view class="title">
			<text>{{title}}</text>
		</view>
		<view class="body">
			<slot />
		</view>
		<view class="footer">
			<view class="iconfont icon-back" style="transform: rotateY(180deg) scale(0.8);color: #bbb;"></view>
		</view>
	</view>
</template>

<script setup>
	const { title } = defineProps({
		title:String
	})
</script>

<style lang="less" scoped>
	.item{
		display: flex;
		justify-content: space-between;
		line-height: 80rpx;
		&:not(:last-child){
			border-bottom: 1px solid #e1e1e1;
		}
		.title{
			color: #999;
			margin-right: 40rpx;
			flex-shrink: 0;
		}
		.body{
			margin-right: 40rpx;
			flex: auto;
		}
	}
</style>