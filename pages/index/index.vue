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
					<input class="search-input" type="text" placeholder="万千商品,等你来采购">
				</view>
				<view class="msg">
					<i class="iconfont icon-msg" :style="{'--color':'#fff'}"></i>
				</view>
			</view>
		</view>
		<scroll-view v-if="loaded" scroll-y="true">
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
					<text class="daily-clock">10:20:22</text>
					<view class="promotion-btn">GO<view class="arrow">▶</view></view>
					<image :src="initData.promotion.daily.img" mode=""></image>
				</view>
				<view
					class="promotion-item promotion-groupon"
					:style="{'--light-color':initData.promotion.groupon.color+'0.15)','--dark-color':initData.promotion.groupon.color+'1)'}"
				>
					<text class="promotion-title">{{initData.promotion.groupon.title}}</text>
					<text class="promotion-subtitle">{{initData.promotion.groupon.subTitle}}</text>
					<view class="promotion-btn">GO<view class="arrow">▶</view></view>
					<image :src="initData.promotion.daily.img" mode=""></image>
				</view>
				<view
					class="promotion-item promotion-new"
					:style="{'--light-color':initData.promotion.new.color+'0.1)','--dark-color':initData.promotion.new.color+'1)'}"
				>
					<text class="promotion-title">{{initData.promotion.new.title}}</text>
					<text class="promotion-subtitle">{{initData.promotion.new.subTitle}}</text>
					<view class="promotion-btn">GO<view class="arrow">▶</view></view>
					<image :src="initData.promotion.daily.img" mode=""></image>
				</view>
			</view>
			<!-- 好物精选 -->
			<view class="well-chosen">
				<text class="title">好物精选</text>
				<view
					class="well-chosen-item"
					v-for="(wellChosen,i) in initData.wellChosen"
					:key="i"
				>
					<image :src="wellChosen.main.img" mode=""></image>
					<scroll-view
						scroll-x="true"
						class="well-chosen-goods"
					>
						<view
							class="goods-item"
							v-for="(chosen,i) in wellChosen.sub"
							:key="i"
							@touchend="goToGoodsDetail"
						>
							<image :src="chosen.SKU.img" mode=""></image>
							<view class="chosen-desc">{{chosen.SKU.desc}}</view>
							<view class="chosen-price">
								<text class="chosen-selling">￥{{chosen.SKU.price*chosen.SKU.discount}}</text>
								<text class="chosen-orgin-price">￥{{chosen.SKU.price}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<!-- 猜你喜欢 -->
			<view class="guess-you-like">
				<text class="title">猜你喜欢</text>
				<VerticalGoodsList v-if="initData" :goodss="initData.guessYouLike" />
			</view>
		</scroll-view>
		<IndexSkeleton v-else />
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { api } from "../../api";
import { onPullDownRefresh,onLoad } from '@dcloudio/uni-app'
import IndexSkeleton from "../../components/Skeleton/index-skeleton.vue"

const initData = ref({})
const loaded = ref(false)
const tabIndex = ref(0)

onLoad(()=>{
	console.log(111);
	init("home")
})
const init = (type) => {
	loaded.value=false
	api.init(type).then(res=>{
		console.log(res.data);
		initData.value = res.data
		loaded.value=true
	})
}
onPullDownRefresh(()=>{
	console.log('refresh');
	init(initData.value.category[tabIndex]);
	setTimeout(function () {
		uni.stopPullDownRefresh();
	}, 1000);
}) 

function goToGoodsDetail(){
	uni.navigateTo({
		url: '/pages/goods-detail/goods-detail'
	})
}
const clickTab = (index) => {
	if(index === tabIndex.value) return;
	tabIndex.value = index
	init(initData.value.category[tabIndex]);
	console.log(initData.value.category[index]);
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
			height: 180rpx;
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
					.search-input{
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
		.category{
			width: 702rpx;
			margin: 0 auto;
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
			width: 702rpx;
			margin: 0 auto;
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
			width: 702rpx;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-evenly;
			margin: 20rpx auto;
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
			width: 702rpx;
			margin: 0 auto;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			.quick-item{
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
			height: 248rpx;
			width: 702rpx;
			margin: 0 auto;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.promotion{
			width: 702rpx;
			margin: 0 auto;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 203rpx 203rpx;
			grid-auto-flow: row;
			grid-gap: 14rpx;
			.promotion-item{
				position: relative;
				border-radius: 10rpx;
				background-color: var(--light-color);
				padding: 25rpx 0 0 30rpx;
				.promotion-title{
					display: block;
					font-size: 30rpx;
					font-weight: 600;
					color: var(--dark-color);
				}
				.promotion-subtitle{
					display: block;
					font-size: 22rpx;
					color: var(--dark-color);
				}
				.promotion-btn{
					width: fit-content;
					font-size: 24rpx;
					font-weight: 600;
					color: #fff;
					background: linear-gradient(to right,var(--dark-color),var(--light-color));						
					border-radius: 999rpx;
					margin-top: 20rpx;
					padding: 8rpx 10rpx;
					line-height: 26rpx;
					.arrow{
						display: inline-block;
						transform: scale(0.3);
					}
				}
				image{
					width: 100rpx;
					height: 160rpx;
					position: absolute;
					right: 20rpx;
					top: 20rpx;
				}
			}
			.promotion-daily{
				grid-column: 1;
				grid-row-start: 1;
				grid-row-end: 3;
				.daily-title{
					display: block;
				}
				.daily-describe{
					font-size: 18rpx;
					background-color: var(--dark-color);
					border-radius: 999rpx 0 0 999rpx;
					border-width: 3rpx;
					border-style: solid;
					border-color: var(--dark-color);
					padding: 5rpx 10rpx;
					color: #fff;
				}
				.daily-clock{
					font-size: 18rpx;
					border-radius: 0 999rpx 999rpx 0;
					border-width: 3rpx;
					border-style: solid;
					border-color: var(--dark-color);
					padding: 5rpx 10rpx;
				}
				image{
					width: 185rpx;
					height: 270rpx;
					top: 130rpx;
				}
			}
			.promotion-groupon{
				grid-column: 2;
				
			}
			.promotion-new{
				grid-column: 2;
				
			}
		}
		.well-chosen{
			width: 702rpx;
			margin: 0 auto;
			.title{
				display: block;
				padding: 50rpx 24rpx;
				font-size: 48rpx;
			}
			.well-chosen-item{
				image{
					width: 100%;
					height: 320rpx;
				}
				.well-chosen-goods{
					width: 100%;
					white-space: nowrap;
					overflow-x: auto;
					scrollbar-width: 0;
					margin: 30rpx 0;
					.goods-item{
						width: 200rpx;
						display: inline-block;
						margin-right: 20rpx;
						text-align: center;
						image{
							width: 200rpx;
							height: 200rpx;
						}
						.chosen-desc{
							width: 200rpx;
							color: rgba(51, 51, 51, 1);
							font-size: 24rpx;
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
							margin: 10rpx 0;
						}
						.chosen-price{
							font-weight: 500;
							.chosen-selling{
								font-size: 28rpx;
								color: #F83D3D;
								margin-right: 15rpx;
							}
							.chosen-orgin-price{
								font-size: 20rpx;
								color: #999;
								text-decoration: line-through;
							}
						}
					}
					
				}
			}
		}
		.guess-you-like{
			width: 750rpx;
			background-color: #F2F2F2;
			.title{
				display: block;
				padding: 30rpx 24rpx;
				font-size: 48rpx;
				background-color: #fff;
			}
		}
	}
</style>
