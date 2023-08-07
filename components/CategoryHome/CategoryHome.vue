<template>
	<view class="category">
		<view class="search">
			<i class="iconfont icon-search" :style="{'--color':'rgba(153, 153, 153, 1)'}"></i>
			<input type="text" placeholder="万千商品,等你来采购">
		</view>
		<view class="main">
			<view class="nav">
				<view class="nav-item" v-for="(brand,index) in brands" :key="index">
					
				</view>
			</view>
			<view class="content">
				<view class="top">
					<image src="" mode=""></image>
				</view>
				<view class="list">
					<view class="sub-category" v-for="(item,index) in data" :key="index">
						<text>奶粉</text>
						<view class="sub-list">
							<view class="sub-item" v-for="(item,index) in data" :key="index">
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import { api } from "../../api";

const brands = ref([])
const initBrandData = () => {
	api.getBrand().then(res=>{
		console.log(res.data);
		brands.value = res.data
	})
}

initBrandData()
</script>

<style lang="less" scoped>
.category{
	.search{
		flex: auto;
		position: relative;
		.icon-search{
			position: absolute;
			top: 16rpx;
			left: 44rpx;
			font-size: 30rpx; 
		}
		input{
			color: #999;
			border-radius: 30rpx;
			font-size: 28rpx;
			background-color: #F2F2F2;
			padding: 10rpx 20rpx 10rpx 70rpx;
			margin: 0 20rpx;
		}
	}
	.main{
		.nav{
			.nav-item{
				
			}
		}
	}
}
</style>