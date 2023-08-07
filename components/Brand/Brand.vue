<template>
	<view class="brand">
		<text class="title">热门品牌</text>
		<view class="hot">
			<view class="hot-brand" v-for="(brand,index) in brands.data" :key="index">
				<view class="brand-logo">
					<image :src="brand.logo" mode=""></image>
				</view>
				<view class="brand-name">
					{{brand.title}}
				</view>
			</view>
		</view>
		<view class="list">
			<view class="brand-part" v-for="(item,item_index) in brands.data" :key="item_index">
				<text class="letter">{{item.letter}}</text>
				<view class="brand-item" v-for="(brand,index) in item.brands" :key="index">
					<view class="logo">
						<image :src="brand.logo" mode=""></image>
					</view>
					<view class="name">
						{{brand.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="list-nav">
			<view class="letter pentagram">
				★
			</view>
			<view v-for="(letter,index) in letterList" :key="index" class="letter">
				{{letter}}
			</view>
			<view class="letter">
				#
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import { api } from "../../api";

const brands = ref([])
const letterList = ref(Array.from(Array(26),(v,k)=>String.fromCharCode(k+65)))
const initBrandData = () => {
	api.getBrand().then(res=>{
		console.log(res.data);
		brands.value = res.data
	})
}

initBrandData()
</script>

<style lang="less" scoped>
.brand{
	.title{
		font-size: 30rpx;
		font-weight: 500;
		margin: 0 20rpx;
		line-height: 90rpx;
		background-color: #FFF;
	}
	.hot{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		grid-gap: 25rpx;
		background-color: #FFF;
		padding: 0 47rpx 22rpx 22rpx;
		.hot-brand{
			border: 1px solid #eee;
			border-radius: 10rpx;
			.brand-logo{
				image{
					width: 200rpx;
					height: 150rpx;
				}
			}
			.brand-name{
				font-size: 28rpx;
				text-align: center;
				line-height: 40rpx;
				margin-bottom: 20rpx;
			}
		}
	}
	.list{
		.brand-part{
			background-color: #FFF;
			.letter{
				display: block;
				padding: 0 20rpx;
				line-height: 70rpx;
				background-color: #F2F2F2;
			}
			.brand-item{
				height: 100rpx;
				display: flex;
				align-items: center;
				margin: 0 20rpx;
				.logo{
					image{
						width: 56rpx;
						height: 56rpx;
					}
				}
				.name{
					margin-left: 10rpx;
					font-size: 26rpx;
				}
			}
			.brand-item:not(:last-child){
				border-bottom: 1px solid #eee;
			}
		}
	}
	.list-nav{
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		right: 10rpx;
		top: 300rpx;
		.letter{
			line-height: 32rpx;
			font-size: 22rpx;
			font-weight: 500;
		}
		.pentagram{
			font-size: 32rpx;
		}
	}
}
</style>