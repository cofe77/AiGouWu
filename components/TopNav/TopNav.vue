<template>
	<view class="top-nav">
		<view class="top-nav-back" @click="back">
			<img class="back-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgOSAxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjI4IDcuMDJjLS4wOS4wOC0uMTYuMTgtLjIxLjMtLjA1LjExLS4wNy4yMy0uMDcuMzUgMCAuMTIuMDIuMjQuMDcuMzUuMDUuMTEuMTIuMjIuMjEuM2w2LjkyIDYuNzVjLjE4LjE3LjQyLjI3LjY2LjI3LjI1IDAgLjQ5LS4wOS42Ny0uMjcuMDktLjA4LjE2LS4xOC4yMS0uMjkuMDUtLjEyLjA3LS4yNC4wNy0uMzZzLS4wMi0uMjQtLjA3LS4zNWMtLjA1LS4xMS0uMTItLjIxLS4yMS0uM2wtNi4yNS02LjEgNi4yNS02LjFjLjA5LS4wOC4xNi0uMTkuMjEtLjMuMDQtLjExLjA3LS4yMy4wNy0uMzUgMC0uMTItLjAzLS4yNC0uMDctLjM1YS44MTMuODEzIDAgMCAwLS4yMS0uMy45OC45OCAwIDAgMC0uNjctLjI3Yy0uMjQgMC0uNDguMS0uNjYuMjdMLjI4IDcuMDJ6IiBmaWxsPSIjMmMyYzJjIi8+PC9zdmc+" alt="">
		</view>
		<view class="top-nav-content">
			<slot />
		</view>
		<view class="top-nav-right">
			<view :class="['iconfont',rightIcon]">
				
			</view>
		</view>
	</view>
</template>

<script setup>
	const { rightIcon } = defineProps({
		rightIcon:String
	})
	console.log(rightIcon);
function back(){
	uni.navigateBack()
}
</script>

<style lang="less" scoped>
.top-nav{
	display: flex;
	flex-wrap: nowrap;
	height: 50px;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	.top-nav-back{
		width: 80rpx;
		display: flex;
		justify-content: center;
		.back-icon{
			transform: scale(0.2);
		}
	}
	.top-nav-title{
		display: flex;
		justify-content: center;
		font-weight: 600;
		font-size: 20px;
	}
	.top-nav-right{
		width: 80rpx;
	}
}
</style>