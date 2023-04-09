<template>
	<uni-list class="container">
		<uni-list-item
			v-for="(goods,i) in goodss"
			:key="i" 
			title=""
			class="item"
		>
			<image :src="goods.SKU.img" mode=""></image>
			<view class="desc">{{goods.SKU.desc}}</view>
			<view class="price">
				<text class="selling">￥{{goods.SKU.price*goods.SKU.discount}}</text>
				<text class="orgin-price">￥{{goods.SKU.price}}</text>
				<text class="sales-volume">已售{{goods.SKU.salesVolume}}件</text>
			</view>
		</uni-list-item>
	</uni-list>
</template>

<script setup>
import { toRefs } from "vue"
import SKUType from '../../mock/type/entity/goods'
const props = defineProps({
	goodss: {
		type: Object
	}
})
console.log(goodss);
const { goodss } = toRefs(props)
</script>

<style lang="less" scoped>
.container{
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-flow: row;
	grid-gap: 14rpx;
	padding: 24rpx;
	.item{
		height: 516rpx;				
		background-color: #fff;
		border-radius: 20rpx;
		padding: 15rpx;
		image{
			width: 314rpx;
			height: 314rpx;
		}
		.desc{
			color: rgba(51, 51, 51, 1);
			font-size: 28rpx;
			line-height: 40rpx;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			display: -moz-box;
			-moz-line-clamp: 2;
			-moz-box-orient: vertical;
			word-wrap: break-word;
			word-break: break-all;
			white-space: normal;
			overflow: hidden;
			font-weight: 600;
			margin-top: 40rpx;
		}
		.price{
			font-weight: 500;
			margin-top: 30rpx;
			display: flex;
			justify-content: space-between;
			.selling{
				font-size: 32rpx;
				color: #F83D3D;
				margin-right: 5rpx;
				align-self: center;
			}
			.orgin-price{
				font-size: 24rpx;
				color: #999;
				text-decoration: line-through;
				align-self: center;
			}
			.sales-volume{
				font-size: 22rpx;
				color: #999;
				align-self: flex-end;
			}
		}
	}
}
</style>