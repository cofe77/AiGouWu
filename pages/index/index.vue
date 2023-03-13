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
				<view class="quick-access">
					<navigator 
						v-for="(quick,i) in initData.quickAccess" 
						:key="i" 
						class="quick-item"
						:url="quick.target"
					>
						<image :src="quick.icon" class="quick-item-icon"></image>
						<text class="quick-item-title">{{quick.title}}</text>
					</navigator>
				</view>
				<!-- 新人专享 -->
				<view class="new-customer">
					<image src="../../static/img/home/新人专享.png" mode=""></image>
				</view>
				<!-- 瓷片区 -->
				<view class="promotion">
					<view
						class="promotion-item promotion-daily"
						:style="{'--light-color':initData.promotion.daily.color+'0.1)','--dark-color':initData.promotion.daily.color+'1)'}"
					>
						<text class="promotion-title daily-title">每日疯抢</text>
						<text class="daily-describe">{{initData.promotion.daily.describe}}</text>
						<view class="promotion-btn">GO</view>
					</view>
					<view
						class="promotion-item promotion-groupon"
						:style="{'--light-color':initData.promotion.groupon.color+'0.15)','--dark-color':initData.promotion.groupon.color+'1)'}"
					>
						<text class="promotion-title">{{initData.promotion.groupon.title}}</text>
						<text class="promotion-subtitle">{{initData.promotion.groupon.subTitle}}</text>
						<view class="promotion-btn">GO</view>
					</view>
					<view
						class="promotion-item promotion-new"
						:style="{'--light-color':initData.promotion.new.color+'0.1)','--dark-color':initData.promotion.new.color+'1)'}"
					>
						<text class="promotion-title">{{initData.promotion.new.title}}</text>
						<text class="promotion-subtitle">{{initData.promotion.new.subTitle}}</text>
						<view class="promotion-btn">GO</view>
					</view>
				</view>
				<!-- 好物精选 -->
				<view class="well-chosen">
					<text>好物精选</text>
					<view
						class="well-chosen-item"
						v-for="(wellChosen,i) in initData.wellChosen"
						:key="i"
					>
						<view class="well-chosen-img">
							<image :src="wellChosen.main.img" mode=""></image>
						</view>
						<scroll-view scroll-x="true" >
							<view>1</view>
							<view>1</view>
							<view>1</view>
						</scroll-view>
					</view>
				</view>
				<!-- 猜你喜欢 -->
				<view class="guess-you-like">
					<text>猜你喜欢</text>
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

<style lang="less" scoped>
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
				margin: 20rpx auto;
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
				justify-content: space-evenly;
				margin: 20rpx 0;
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
						margin: 0 10rpx;
					}
				}
			}
			.quick-access{
				display: flex;
				flex-wrap: nowrap;
				.quick-item{
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					.quick-item-icon{
						width: 96rpx;
						height: 96rpx;
						display: block;
					}
					.quick-item-title{
						font-size: 24rpx;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
			.new-customer{
				width: 750rpx;
				height: 248rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.promotion{
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 203rpx 203rpx;
				grid-auto-flow: row;
				grid-gap: 14rpx;
				.promotion-item{
					border-radius: 10rpx;
					background-color: var(--light-color);
					padding: 30rpx;
					.promotion-title{
						display: block;
						font-size: 30rpx;
						font-weight: 600;
						color: var(--dark-color);
					}
					.promotion-subtitle{
						display: block;
						color: var(--dark-color);
					}
					.promotion-btn{
						width: fit-content;
						font-size: 28rpx;
						background-color: var(--dark-color);
					}
				}
				.promotion-daily{
					grid-column: 1;
					grid-row-start: 1;
					grid-row-end: 3;
					.daily-title{
						display: block;
					}
				}
				.promotion-groupon{
					grid-column: 2;
					
				}
				.promotion-new{
					grid-column: 2;
					
				}
			}
		}
	}
</style>
