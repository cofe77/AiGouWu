<template>
	<view class="user">
		<view class="bg"></view>
		<view class="content">
			<view class="safe-area"></view>
			<view class="header">
				<view class="iconfont icon-msg">
					<view class="message-count">1</view>
				</view>
				<view class="iconfont icon-setting"></view>
			</view>
			<view class="stage">
				<image src="../../static/img/home/goods-1.png" mode=""></image>
				<view class="info">
					<view class="nick">小可爱</view>
					<view class="phone">13333333333</view>
				</view>
			</view>
			<view class="asset">
				<view class="asset-item" v-for="(item,index) in 4">
					<view class="content">
						1200.00元
					</view>
					<view class="title">
						钱包
					</view>
				</view>
			</view>
			<view class="order">
				<view class="header">
					<text>我的订单</text>
					<view class="more" @tap="()=>goToMyOrder('all')">
						<text>查看全部</text>
						<view class="iconfont icon-back" style="transform: rotateY(180deg) scale(0.7);"></view>
					</view>
				</view>
				<view class="content">
					<view class="order-operator-item" v-for="(value,key) in orderOperatorItem"  @tap="()=>goToMyOrder(value.key)">
						<view class="icon">
							<image src="../../static/img/home/quick-access-pointshop.png" mode=""></image>
						</view>
						<view class="title">
							{{value.title}}
						</view>
					</view>
				</view>
			</view>
			<view class="more">
				<view class="title">
					我的常用
				</view>
				<view class="content">
					<view class="more-operator-item" v-for="(key,value) in 6">
						<view class="icon">
							<image src="../../static/img/home/quick-access-pointshop.png" mode=""></image>
						</view>
						<view class="title">
							分销中心
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const orderOperatorItem = [
		{
			title:"全部",
			key:"all",
			logo:""
		},
		{
			title:"待付款",
			key:"waitForPay",
			logo:""
		},
		{
			title:"待发货",
			key:"waitForSend",
			logo:""
		},
		{
			title:"待收货",
			key:"waitForRecive",
			logo:""
		},
		{
			title:"待评价",
			key:"waitForComment",
			logo:""
		},
	]
	const goToMyOrder = (category) => {
		uni.navigateTo({
			url:"/pages/my-order/my-order?category="+category,
		})
	}
</script>

<style lang="less" scoped>
.user{
	background-color: #f2f2f2;
	height: calc(100vh - 90rpx);
	.bg{
		position: absolute;
		width: 100%;
		height: 404rpx;
		background-color: rgba(252, 90, 90, 1);
		top: 0;
		z-index: 1;
	}
	.content{
		position: relative;
		z-index: 2;
		&>.header{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin-right: 30rpx;
			.icon-msg,.icon-setting{
				font-size: 40rpx;
				color: #fff;
			}
			.icon-msg{
				position: relative;
				margin: 0 60rpx;
				.message-count{
					position: absolute;
					width: 25rpx;
					height: 25rpx;
					border-radius: 999rpx;
					top: -10rpx;
					right: -10rpx;
					background-color: #FFF;
					color: rgba(252, 90, 90, 1);
					font-size: 20rpx;
					text-align: center;
					line-height: 25rpx;
				}
			}
		}
		.stage{
			display: flex;
			margin: 35rpx 24rpx 0 24rpx;
			align-items: center;
			image{
				width: 120rpx;
				height: 120rpx;
				border-radius: 999rpx;
			}
			.info{
				margin-left: 20rpx;
				font-size: 32rpx;
				color: #FFF;
			}
		}
		.asset{
			display: flex;
			justify-content: space-around;
			margin: 40rpx 24rpx 0rpx 24rpx;
			background-color: #FFF;
			border-radius: 10rpx;
			.asset-item{
				text-align: center;
				padding: 26rpx 0;
				.content.active{
					color: rgba(252, 90, 90, 1);
				}
				.title{
					margin-top: 10rpx;
				}
			}
		}
		.order{
			margin: 25rpx 24rpx;
			background-color: #FFF;
			.header{
				display: flex;
				justify-content: space-between;
				border-bottom: 1rpx solid #f2f2f2;
				padding: 24rpx;
				&>text{
					font-size: 32rpx;
				}
				.more{
					display: flex;
					align-items: center;
					font-size: 24rpx;
					color: #b1b1b1;
					.iconfont{
						margin-left: 10rpx;
					}
				}
			}
			.content{
				display: flex;
				justify-content: space-around;
				.order-operator-item{
					display: flex;
					flex-direction: column;
					align-items: center;
					margin: 20rpx 0;
					.icon{
						image{
							width: 60rpx;
							height: 60rpx;
						}
					}
					.title{
						font-size: 24rpx;
					}
				}
			}
		}
		&>.more{
			margin: 0 24rpx;
			background-color: #FFF;
			&>.title{
				padding: 24rpx;
				font-size: 32rpx;
				border-bottom: 1rpx solid #f2f2f2;
			}
			.content{
				display: flex;
				flex-wrap: wrap;
				.more-operator-item{
					flex: 0 0 25%;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin: 28rpx 0;
					.icon{
						image{
							width: 60rpx;
							height: 60rpx;
						}
					}
					.title{
						margin-top: 10rpx;
						font-size: 24rpx;
					}
				}
			}
			
		}
	}
}
</style>
