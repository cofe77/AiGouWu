<template>
	<view class="safe-area"></view>
	<TopNav rightIcon="icon-search">
		<text>我的订单</text>
	</TopNav>
	<view class="content">
		<view class="header">
			<view class="order-operator-item" :class="{'active': category === value.key}" v-for="(value,key) in orderOperatorItem"  @tap="()=>switchCategory(value.key)">
				<view class="title">
					{{value.title}}
				</view>
			</view>
		</view>
		<view class="body">
			<Transition name="list">
				<view class="order-group" v-if="show">
					<view class="order-item" v-for="(item,index) in 2" @tap="()=>goToOrderDetail(item)">
						<view class="header">
							<view class="order-number">
								<text>111111111111111111111111</text>
								
							</view>
							<view class="info">
								<view class="address">
									<text>2023-08-20</text>
									<text>2023-08-20</text>
									<text>2023-08-20</text>
								</view>
								<view class="status">
									已完成
								</view>
							</view>
						</view>
						<view class="body">
							<GoodsItem></GoodsItem>
						</view>
						<view class="footer">
							<view class="count">
								共1件商品&nbsp;
							</view>
							<view class="price">
								合计：￥180.88
							</view>
						</view>
						<view class="operator">
							<button v-show="category === 'all'" type="default" size="mini">删除订单</button>
							<button v-show="category === 'waitForPay'" type="default" size="mini">关闭订单</button>
							<button v-show="category === 'waitForPay'" type="default" size="mini">立即支付</button>
							<button v-show="category === 'waitForSend'" type="default" size="mini">催促发货</button>
							<button v-show="category === 'waitForRecive'" type="default" size="mini">查看物流</button>
							<button v-show="category === 'waitForRecive'" type="default" size="mini">确认收货</button>
							<button v-show="category === 'waitForComment'" type="default" size="mini">查看物流</button>
						</view>
					</view>
				</view>
			</Transition>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	const props = defineProps({
		category:String,
	})
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
	const category = ref(props.category || "all")
	const show = ref(false)
	const init = () => {
		setTimeout(()=>show.value = true,200)
	}
	init()
	const switchCategory = (cate) => {
		show.value = false
		category.value = cate
		setTimeout(()=>show.value = true,200)
	}
	const goToOrderDetail = (id) => {
		uni.navigateTo({
			url:"/pages/order-detail/order-detail?id="+id,
		})
	}
</script>

<style lang="less" scoped>
.content{
	background-color: #f2f2f2;
	&>.header{
		display: flex;
		justify-content: space-evenly;
		background-color: #fff;
		line-height: 80rpx;
		.active{
			color: red;
		}
	}
	.body{
		.order-item{
			background-color: #fff;
			margin-top: 24rpx;
			&>.header{
				padding: 0 24rpx;
				border-bottom: 1rpx solid #eee;
				.order-number{
					display: flex;
					justify-content: space-between;
					align-items: center;
					line-height: 60rpx;
				}
				.info{
					display: flex;
					justify-content: space-between;
					line-height: 60rpx;
				}
			}
			.footer{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding: 0 24rpx;
			}
			.operator{
				text-align: end;
				padding: 20rpx;
			}
		}
		.list-enter-active,
		.list-leave-active {
		  transition: all 0.5s ease;
		}
		.list-enter-from{
		  opacity: 0;
		  transform: translateX(20px);
		}
		.list-leave-to{
		  opacity: 0;
		  transform: translateX(0px);
		}
	}
}
</style>
