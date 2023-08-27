<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import url('./static/font/iconfont.css');
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	.home{
		font-family: 'PingFangSC351cd2567024e2d';
	}
	.safe-area{
		height: 100rpx;
		background-color: #fff;
	}
	.red-btn{
		color: #F83D3D!important;
		background-color: #fff!important;
		&::after{
			border-color: #F83D3D;
		}
	}
</style>
