<template>
	<view>
		<view class="safe-area"></view>
		<view class="top-nav">
			<view class="category-nav">
				分类
			</view>
			<view class="brand-nav">
				品牌
			</view>
			<view class="nav-line" :style="{'--left':`${left}rpx`}"></view>
		</view>
		<view class="content">
			<view class="wrap" 
				@touchstart="touchStart" 
				@touchend="touchEnd"
				@touchmove="touchMove"
				:style="{'--left':`${touchData.left}rpx`}"
			>
				<view class="category">
					<input type="text" placeholder="222">
				</view>
				<view class="brand">
					品牌
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
	const left = ref(330)
	const touchData = ref({
		startX: 0,
		startY: 0,
		endX: 0,
		endY: 0,
		left: 0
	})
	const touchStart = (e) => {
		touchData.value.startX = e.changedTouches[0].pageX;
		touchData.value.startY = e.changedTouches[0].pageY;
	}
	const touchEnd = (e) => {
		console.log("e.changedTouches[0].pageX: " + JSON.stringify(e.changedTouches[0].pageX));
		touchData.value.endX = e.changedTouches[0].pageX;
		touchData.value.endY = e.changedTouches[0].pageY;
		const diffY = touchData.value.endY - touchData.value.startY;
		if(touchData.value.left <= 0 && e.changedTouches[0].pageX <0){
			touchData.value.left = 0
			return;
		}else{
			touchData.value.left = 0
			return;
		}
	}
	const touchMove = (e) => {
		// console.log("e.changedTouches[0].clientX: " + JSON.stringify(e.changedTouches[0].clientX));
		if(e.changedTouches[0].pageX < 0){
			touchData.value.left = 0
			return;
		}else{
			touchData.value.left = e.changedTouches[0].clientX - touchData.value.startX
			return;
		}
		
		console.log("touchData.value.left: " + JSON.stringify(touchData.value.left));
	}
</script>

<style lang="less" scoped>
.top-nav{
	height: 50rpx;
	display: flex;
	justify-content: center;
	position: relative;
	.category-nav{
		
	}
	.brand-nav{
		
	}
	.nav-line{
		height: 5rpx;
		width: 30rpx;
		position: absolute;
		background-color: black;
		bottom: 0;
		left: var(--left);
		transition: left linear 0.2s;
	}
}
.content{
	height: 1000rpx;
	overflow-x: hidden;
	position: relative;
	.wrap{
		width: 200vw;
		height: 1000rpx;
		position: absolute;
		top: 0;
		left: var(--left);
		.category{
			width: 100vw;
			height: 1000rpx;
			display: inline-block;
			background-color: red;
		}
		.brand{
			width: 100vw;
			height: 1000rpx;
			display: inline-block;
			background-color: blue;
		}
	}
}
</style>
