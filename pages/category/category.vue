<template>
	<view>
		<view class="safe-area"></view>
		<view class="top-nav">
			<view class="nav" :class="{'active':currenTab === 'category'}" @tap="tapTab('category')">
				分类
			</view>
			<view class="nav" :class="{'active':currenTab === 'brand'}" @tap="tapTab('brand')">
				品牌
			</view>
		</view>
		<view class="content">
			<CategoryHome v-if="currenTab === 'category'" />
			<Brand v-else />
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";


const currenTab = ref('category')

const tapTab = (target) => {
	currenTab.value = target
}
</script>

<style lang="less" scoped>
.top-nav{
	width: 600rpx;
	height: 90rpx;
	display: flex;
	justify-content: space-evenly;
	.nav{
		position: relative;
		font-size: 36rpx;
	}
	.active{
		color: #F83D3D;
	}
	.active::after{
		content: '';
		height: 6rpx;
		width: 100%;
		position: absolute;
		background-color: black;
		top: 65rpx;
		left: 0;
		transition: left linear 0.2s;
		background-color: #F83D3D;
	}
}
</style>
