<template>
	<view class="group">
		<slot />
	</view>
</template>

<script setup>
	const { title } = defineProps({
		title:String
	})
</script>

<style lang="less" scoped>
	.group{
		padding: 0 25rpx;
		border: 1rpx solid #eee;
		border-left: 0;
		border-right: 0;
	}
</style>