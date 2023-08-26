<template>
	<view class="safe-area"></view>
	<TopNav rightIcon="icon-setting">
		<view class="nav-header">
			<view class="">
				商品
			</view>
			<view class="">
				商品
			</view>
			<view class="">
				商品
			</view>
		</view>
	</TopNav>
	<view class="content">
		<view class="main-pic">
			<image src="../../static/img/home/goods-1.png" mode=""></image>
			<view class="indicator">
				1/9
			</view>
		</view>
		<view class="price">
			<text class="selling">￥89</text>
			<text class="orgin-price">￥120</text>
		</view>
		<view class="desc">
			大萨达撒多撒多撒多撒阿斯顿撒多撒多撒多无群多无群撒大萨达撒多无群多所
		</view>
		<view class="info">
			<view class="selling">
				<view class="iconfont icon-love">
					月销110+
				</view>
			</view>
			<view class="share">
				<view class="iconfont icon-share">
					分享赚¥2.84
				</view>
			</view>
		</view>
		<view class="property">
			<Group>
				<GroupItem title="领券">
					<view class="coupons">
						<view class="coupon">
							满200减20
						</view>
						<view class="coupon">
							满200减20
						</view>
					</view>
				</GroupItem>
				<GroupItem title="打包一口价">
					<text class="promotion">100元任选3件</text>
				</GroupItem>
				<GroupItem title="选择">
					<text class="">请选择商品规格</text>
				</GroupItem>
			</Group>
		</view>
		<view class="more">
			<Group>
				<GroupItem title="送至">
					<view class="address iconfont icon-location">
						重庆 重庆市 渝北区 汽博
					</view>
				</GroupItem>
				<GroupItem title="说明">
					<view class="mark">
						<view class="item iconfont icon-user-selected">
							<text>发货&售后</text>
						</view>
						<view class="item iconfont icon-user-selected">
							<text>极速退款</text>
						</view>
						<view class="item iconfont icon-user-selected">
							<text>极速达</text>
						</view>
						<view class="item iconfont icon-user-selected">
							<text>支持7天无理由退货</text>
						</view>
						<view class="item iconfont icon-user-selected">
							<text>满99元包邮</text>
						</view>
					</view>
				</GroupItem>
			</Group>
		</view>
		<view class="comment">
			<view class="header">
				<view class="title">
					宝贝评价（1200）
				</view>
				<view class="more">
					<text>查看全部</text>
					<view class="iconfont icon-back" style="transform: rotateY(180deg) scale(0.8);color: #bbb;"></view>
				</view>
			</view>
			<view class="body">
				<view class="comment-item">
					<view class="comment-header">
						<view class="info">
							<view class="avatar">
								<image src="../../static/img/user-selected.png" mode=""></image>
							</view>
							<view class="nick">
								小小美女
							</view>
						</view>
						<view class="date">
							2023-08-10
						</view>
					</view>
					<view class="comment-body">
						<view class="comment-content">
							宝宝每次吃饭
						</view>
						<view class="thumbnail">
							<image src="../../static/img/home/goods-1.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="comment-item">
					<view class="comment-header">
						<view class="info">
							<view class="avatar">
								<image src="../../static/img/user-selected.png" mode=""></image>
							</view>
							<view class="nick">
								小小美女
							</view>
						</view>
						<view class="date">
							2023-08-10
						</view>
					</view>
					<view class="comment-body">
						<view class="comment-content">
							宝宝每次吃饭
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="thematic">
			<view class="header">
				<view>
					图文详情
				</view>
				<view class="divider"></view>
				<view class="active">
					购买须知
				</view>
			</view>
			<view class="body">
				<view class="pic">
					<image src="../../static/img/home/每日疯抢.png" mode="widthFix"></image>
				</view>
				<view class="tips">
					
				</view>
			</view>
		</view>
	</view>
	<view class="buy-operator">
		<BuyOperator />
	</view>
</template>

<script setup>

</script>

<style lang="less" scoped>
.nav-header{
	display: flex;
}
.content{
	background-color: #F2F2F2;
	.main-pic{
		height: 100vw;
		position: relative;
		border-bottom: 1px solid #eee;
		background-color: #FFF;
		image{
			width: 100%;
			height: 100%;
		}
		.indicator{
			position: absolute;
			right: 30rpx;
			bottom: 30rpx;
			width: 50rpx;
			line-height: 40rpx;
			background-color: rgba(0,0,0,0.5);
			color: #fff;
			padding: 0 22rpx;
			font-size: 14rpx;
			border-radius: 999rpx;
			text-align: center;
		}
	}
	.price{
		font-weight: 500;
		line-height: 80rpx;
		display: flex;
		background-color: #FFF;
		padding: 0 22rpx;
		.selling{
			font-size: 42rpx;
			color: #F83D3D;
			margin-right: 25rpx;
			align-self: center;
		}
		.orgin-price{
			font-size: 24rpx;
			color: #999;
			text-decoration: line-through;
			align-self: center;
		}
	}
	.desc{
		background-color: #FFF;
		font-size: 32rpx;
		padding: 0 22rpx;
	}
	.info{
		background-color: #FFF;
		display: flex;
		justify-content: space-around;
		line-height: 80rpx;
		padding: 0 22rpx;
		font-size: 24rpx;
		color: #333;
	}
	.property{
		background-color: #FFF;
		margin-top: 24rpx;
		font-size: 28rpx;
		.coupons{
			display: flex;
			.coupon{
				border: 1rpx solid #F83D3D;
			}
		}
		.promotion{
			display: flex;
			justify-content: flex-end;
		}
	}
	&>.more{
		background-color: #FFF;
		margin-top: 24rpx;
		.mark{
			display: flex;
			align-items: baseline;
			flex-wrap: wrap;
			margin-top: 10rpx;
			padding-bottom: 20rpx;
			.item{
				color: #F83D3D;
				line-height: 40rpx;
				margin-right: 25rpx;
				white-space: nowrap;
				margin-top: 10rpx;
				text{
					margin-left: 8rpx;
					color: #000;
					font-size: 28rpx;
				}
			}
		}
	}
	.comment{
		background-color: #FFF;
		margin-top: 24rpx;
		padding: 0 24rpx;
		font-size: 28rpx;
		.header{
			display: flex;
			align-items: center;
			justify-content: space-between;
			&>.title{
				line-height: 100rpx;
				font-size: 32rpx;
				font-weight: 500;
			}
			&>.more{
				display: flex;
				align-items: center;
				color: #999;
			}
		}
		.body{
			padding-bottom: 24rpx;
			.comment-item{
				margin-top: 14rpx;
				.comment-header{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.info{
						display: flex;
						align-items: center;
						.avatar{
							width: 60rpx;
							height: 60rpx;
							border-radius: 999rpx;
							image{
								width: 100%;
								height: 100%;
							}
						}
						.nick{
							color: #666;
							margin-left: 10rpx;
						}
					}
					.date{
						color: #999;
						font-size: 28rpx;
					}
				}
				.comment-body{
					.comment-content{
						
					}
					.thumbnail{
						image{
							width: 120rpx;
							height: 120rpx;
							border: 1px solid #e1e1e1;
						}
					}
				}
			}
		}
	}
	.thematic{
		background-color: #FFF;
		margin-top: 24rpx;
		&>.header{
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 80rpx;
			&>.divider{
				display: block;
				height: 26rpx;
				width: 1rpx;
				margin: 0 30rpx;
				border-left: 1rpx solid #D7D7D7;
			}
			&>.active{
				color: red;
			}
		}
		&>.body{
			.pic{
				image{
					width: 100%;
				}
			}
		}
	}
}
.buy-operator{
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>
