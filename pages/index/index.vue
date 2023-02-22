<template>
	<view class="home">
		<!-- 首页头部 -->
		<view class="top">
			<view class="safe-area"></view>
			<view class="top-context">
				<view class="scan">
					<i class="iconfont icon-scan" :style="{'--color':'#fff'}"></i>
				</view>
				<view class="search">
					<i class="iconfont icon-search" :style="{'--color':'rgba(153, 153, 153, 1)'}"></i>
					<input type="text" placeholder="万千商品,等你来采购">
				</view>
				<view class="msg">
					<i class="iconfont icon-msg" :style="{'--color':'#fff'}"></i>
				</view>
			</view>
		</view>
		<view class="body">
			<scroll-view scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
				:refresher-threshold="100" refresher-background="transparent" @refresherpulling="onPulling"
				@refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort">
				<view class="category">
					<scroll-view class="header-tab" scroll-x="true">
						<view
							v-for="(category,i) in initData.category"
							:key="i"
							:class="{'header-tab-item':true,'header-tab-item-on':i===tabIndex}"
							@click="clickTab(i)"
							>
							<text>{{category.title}}</text>
						</view>
						<view class="header-tab-line" :style="{'--left':`${40+tabIndex*131}rpx`}"></view>
					</scroll-view>
					<view class="header-category">
						<i class="iconfont icon-menu" :style="{'--color':'#fff'}"></i>
						<text>分类</text>
					</view>
				</view>
				<!-- 轮播 -->
				<view class="banner">
					<swiper class="swiper" circular :indicator-dots="true" >
						<swiper-item
							v-for="(banner,i) in initData.banner"
							:key="i"
						>
							<navigator :url="banner.target" open-type="redirect">
								<view class="swiper-item">
									<image :src="banner.img" mode=""></image>
								</view>
							</navigator>
						</swiper-item>
					</swiper>
				</view>
				<!-- 保障条款 -->
				<view class="safeguard">
					<view class="safeguard-item">
						<text class="safeguard-icon">正</text>
						<text class="safeguard-content">100%正品保证</text>
					</view>
					<view class="safeguard-item">
						<text class="safeguard-icon">赔</text>
						<text class="safeguard-content">假一赔十</text>
					</view>
					<view class="safeguard-item">
						<text class="safeguard-icon">售</text>
						<text class="safeguard-content">24小时安心售后</text>
					</view>
				</view>
				<!-- 金刚区 -->
				<view class="quick-access-area">
					2222
				</view>
				<!-- 新人专享 -->
				<view class="quick-access-area">
					
				</view>
				<!-- 瓷片区 -->
				<view class="quick-access-area">
					
				</view>
				<!-- 好物精选 -->
				<view class="quick-access-area">
					
				</view>
				<!-- 猜你喜欢 -->
				<view class="quick-access-area">
					
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { homePageInitData } from '../../mock/mockData'

	const initData = ref(homePageInitData)
	const tabIndex = ref(0)
	console.log(tabIndex.value);
	function goToGoodsDetail(){
		uni.navigateTo({
			url: '/pages/goods-detail/goods-detail'
		})
	}
	const clickTab = (a) => {
		tabIndex.value = a
		console.log(tabIndex.value);
	}
</script>

<style lang="less">
	.home{
		width: 750rpx;
		background-image: url('../../static/img/home/home-head.png');
		background-size: 938rpx auto;
		background-position: center -64rpx;
		background-repeat: no-repeat;
		.top{
			height: 170rpx;
			position: sticky;
			top: 0rpx;
			z-index: 999;
			background-image: url('../../static/img/home/home-head.png');
			background-size: 938rpx auto;
			background-position: center -64rpx;
			background-repeat: no-repeat;
			padding-bottom: 5rpx;
			.safe-area{
				height: 100rpx;
			}
			.top-context{
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				align-items: center;
				.scan{
					width: 106rpx;
					display: flex;
					justify-content: space-around;
					.icon-scan{
						font-size: 40rpx;
					}
				}
				.search{
					flex: auto;
					position: relative;
					.icon-search{
						position: absolute;
						top: 16rpx;
						left: 24rpx;
						font-size: 30rpx; 
					}
					input{
						color: rgba(153, 153, 153, 1);
						height: 60rpx;
						border-radius: 30rpx;
						font-size: 22rpx;
						background-color: #fff;
						padding: 0 20rpx 0 70rpx;
						line-height: 60rpx;
					}
				}
				.msg{
					width: 106rpx;
					display: flex;
					justify-content: space-around;
					margin-right: 170rpx;
					.icon-msg{
						font-size: 40rpx;
					}
				}
			}
		}
		.body{
			width: 702rpx;
			margin: 0 auto;
			.category{
				height: 67rpx;
				color: #fff;
				font-size: 28rpx;
				font-weight: 500;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-around;
				align-items: flex-start;
				margin: 0 auto 10rpx auto;
				.header-tab{
					flex: auto;
					white-space: nowrap;
					overflow-x: auto;
					scrollbar-width: 0;
					.header-tab-item{
						width: 112rpx;
						display: inline-block;
						margin-right: 20rpx;
						text-align: center;
					}
				}
				.header-tab-line{
					width: 40rpx;
					height: 20rpx;
					position: relative;
					bottom: 0;
					left: var(--left);
					border-bottom: 4rpx solid #fff;
					transition-property: left;
					transition-duration: 200ms;
				}
				.header-category{
					width: 160rpx;
					padding-left: 20rpx;
					display: flex;
					align-items: center;
					.icon-menu{
						font-size: 30rpx;
					}
					text{
						margin-left: 20rpx;
					}
				}
			}
			.banner{
				border-radius: 6rpx;
				overflow: hidden;
				.swiper{
					width: 702rpx;
					height: 320rpx;
					.swiper-item{
						image{
							width: 702rpx;
							height: 320rpx;
						}
					}
				}
			}
			.safeguard{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: space-between;
				margin: 10rpx 0;
				.safeguard-item{
					color: rgba(252, 90, 90, 1);
					line-height: 28rpx;
					.safeguard-icon{
						width: 28rpx;
						height: 28rpx;
						display: inline-block;
						text-align: center;
						font-size: 16rpx;
						border: 2rpx solid rgba(252, 90, 90, 1);
						border-radius: 999rpx;
						margin-right: 5rpx;
					}
					.safeguard-content{
						font-size: 20rpx;
					}
				}
			}
		}
	}
</style>
