<template>
	<view class="safe-area"></view>
	<TopNav>
		<text>发表评价</text>
	</TopNav>
	<view class="content">
		<view class="comment-form" v-if="!success">
			<view class="item">
				<view class="item-image">
					<image src="../../static/img/home/goods-1.png" mode=""></image>
				</view>
				<view class="item-main">
					<view class="item-title">
						<text>
							的发生法案授权我的dsadsadsa的发生法案授权我的dsadsadsa的发生法案授权我的dsadsadsa的发生法案授权我的dsadsadsa
						</text>
					</view>
					<view class="item-SKU">
						规格：默认
					</view>
				</view>
			</view>
			<view class="rate">
					<text>
						商品评价
					</text>
					<uni-rate value="" size="30" active-color="#F83D3D"></uni-rate>
			</view>
			<view class="comment-area">
				<textarea value="11111" placeholder="" />
				<uni-file-picker class="image-upload" mode="grid" :image-styles="imageStyle">
					<view class="upload-slot">
						<view class="iconfont icon-scan upload-img"></view>
						<text>添加图片</text>
					</view>
				</uni-file-picker>
			</view>
			<button class="btn" @tap="post">提交评价</button>
		</view>
		<view class="result" v-else>
			<image src="../../static/img/comment-success.png" mode=""></image>
			<text class="success-tip">评价成功</text>
			<text class="success-msg">您已评价成功，等待系统审核，审核通过后自动发布</text>
			<view class="operator">
				<button type="default" size="mini" @tap="()=>goToOrderDetail()">查看订单</button>
				<button type="default" size="mini" class="red-btn" @tap="goToHome">返回首页</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	const imageStyle = {
		// "height": 60,	// 边框高度
		// "width": 60,	// 边框宽度
		"border":{ // 如果为 Boolean 值，可以控制边框显示与否
			"color":"#999",		// 边框颜色
			"width":"1px",		// 边框宽度
			"style":"dashed", 	// 边框样式
			// "radius":"50%" 		// 边框圆角，支持百分比
		}
	}
	const success = ref(false)
	const post = () => {
		setTimeout(()=>success.value = true,2000)
	}
	
	const goToOrderDetail = (id) => {
		uni.navigateTo({
			url:"/pages/order-detail/order-detail?id="+id,
		})
	}
	
	const goToHome = () => {
		uni.switchTab({
			url:"/pages/index/index",
		})
	}
</script>

<style lang="less" scoped>
	.content{
		height: calc(100vh - 200rpx);
		.comment-form{
			border-top: 1px solid #D7D7D7;
			background-color: #f2f2f2;
			.item{
				background-color: #fff;
				display: flex;
				padding: 30rpx 24rpx;
				.item-image{
					image{
						width: 140rpx;
						height: 140rpx;
					}
				}
				.item-main{
					padding: 0 24rpx;
					.item-title{
						font-size: 28rpx;
						color: #333333;
					}
					.item-SKU{
						font-size: 20rpx;
						color: #a1a1a1;
					}
				}
			}
			.rate{
				background-color: #fff;
				display: flex;
				align-items: center;
				padding: 0 24rpx;
				font-size: 32rpx;
				text{
					margin-right: 24rpx;
				}
			}
			.comment-area{
				background-color: #fff;
				margin-top: 24rpx;
				padding: 24rpx;
				.image-upload{
					.file-picker__box-content{
						border-style: dashed;
					}
					.upload-slot{
						color: #999999;
						text-align: center;
						font-size: 28rpx;
						.upload-img{
							font-size: 46rpx;
							margin-bottom: 28rpx;
						}
					}
				}
			}
			.btn{
				color: #fff;
				background-color: #F83D3D;
				line-height: 88rpx;
				font-size: 32rpx;
				margin-top: 160rpx;
			}
		}
		.result{
			display: flex;
			flex-direction: column;
			align-items: center;
			image{
				width: 488rpx;
				height: 228rpx;
				margin-top: 34rpx;
			}
			.success-tip{
				font-size: 36rpx;
				color: #F8A73D;
				margin-top: 34rpx;
			}
			.success-msg{
				margin-top: 34rpx;
				font-size: 28rpx;
			}
			.operator{
				margin-top: 100rpx;
				text-align: center;
				button{
					background-color: #fff;
					color: #333333;
					font-size: 28rpx;
					margin-right: 24rpx;
					padding: 0 20rpx;
				}
			}
		}
	}
</style>
