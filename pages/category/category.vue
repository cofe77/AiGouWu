<template>
	<view>
		<view class="safe-area"></view>
		<view class="top-nav">
			<view class="nav" :class="{'active':currenTab === 'category'}" @tap="tapTab('category')">
				分类
			</view>
			<view class="nav" :class="{'active':currenTab === 'brand'}" @tap="tapTab('brand')">
				品牌
			</view>
		</view>
		<view class="content">
			<view class="category" v-if="currenTab === 'category'">
				<view class="search">
					<i class="iconfont icon-search" :style="{'--color':'rgba(153, 153, 153, 1)'}"></i>
					<input type="text" placeholder="万千商品,等你来采购">
				</view>
				<view class="main">
					<view class="nav">
						<view class="nav-item" v-for="(brand,index) in brands.hot" :key="index">
							
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
			<view class="brand" v-else>
				<text class="title">热门品牌</text>
				<view class="hot">
					<view class="hot-brand" v-for="(brand,index) in brands.hot" :key="index">
						<view class="brand-logo">
							<image :src="brand.logo" mode=""></image>
						</view>
						<view class="brand-name">
							{{brand.title}}
						</view>
					</view>
				</view>
				<view class="list">
					<view class="brand-part" v-for="(item,item_index) in brands.list" :key="item_index">
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
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import { api } from "../../api";

const currenTab = ref('category')
const brands = ref([])
const letterList = ref(Array.from(Array(26),(v,k)=>String.fromCharCode(k+65)))

const initBrandData = () => {
	api.getBrand().then(res=>{
		console.log(res.data);
		brands.value = res.data
	})
}

initBrandData()
const tapTab = (target) => {
	currenTab.value = target
}
</script>

<style lang="less" scoped>
.top-nav{
	width: 600rpx;
	height: 90rpx;
	display: flex;
	justify-content: space-evenly;
	.nav{
		position: relative;
		font-size: 36rpx;
	}
	.active{
		color: #F83D3D;
	}
	.active::after{
		content: '';
		height: 6rpx;
		width: 100%;
		position: absolute;
		background-color: black;
		top: 65rpx;
		left: 0;
		transition: left linear 0.2s;
		background-color: #F83D3D;
	}
}
.content{
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
}
</style>
