<!--
此文件为开发者工具生成，生成时间: 2023/11/4上午9:48:27
使用方法：
在 D:\FE\AiGouWu\unpackage\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\FE\AiGouWu\unpackage\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="home data-v-1cf27b2a">
      <view class="top data-v-1cf27b2a">
        <view class="safe-area data-v-1cf27b2a"></view>
        <view class="top-context data-v-1cf27b2a">
          <view class="scan data-v-1cf27b2a">
            <view class="iconfont icon-scan data-v-1cf27b2a" style="--color:#fff"></view>
          </view>
          <view class="search data-v-1cf27b2a">
            <view class="iconfont icon-search data-v-1cf27b2a" style="--color:rgba(153, 153, 153, 1)"></view>
            <input class="search-input data-v-1cf27b2a" placeholder="万千商品,等你来采购" type="text" />
          </view>
          <view class="msg data-v-1cf27b2a">
            <view class="iconfont icon-msg data-v-1cf27b2a" style="--color:#fff"></view>
          </view>
        </view>
      </view>
      <scroll-view class="data-v-1cf27b2a" scroll-y="true" enable-back-to-top="true">
        <view class="category data-v-1cf27b2a">
          <scroll-view class="header-tab data-v-1cf27b2a" scroll-x="true">
            <view class="data-v-1cf27b2a header-tab-item">
              <text class="data-v-1cf27b2a" style="background-position-x: 50%;">电器</text>
            </view>
            <view class="data-v-1cf27b2a header-tab-item header-tab-item-on">
              <text class="data-v-1cf27b2a" style="background-position-x: 50%;">电器</text>
            </view>
            <view class="header-tab-line data-v-1cf27b2a" style="--left:85px"></view>
          </scroll-view>
          <view class="header-category data-v-1cf27b2a">
            <view class="iconfont icon-menu data-v-1cf27b2a" style="--color:#fff"></view>
            <text class="data-v-1cf27b2a">分类</text>
          </view>
        </view>
        <view class="banner data-v-1cf27b2a">
          <swiper circular="true" class="swiper data-v-1cf27b2a" indicator-dots="true" current="0" autoplay="false">
            <swiper-item class="data-v-1cf27b2a" style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <navigator class="data-v-1cf27b2a" open-type="redirect">
                <view class="swiper-item data-v-1cf27b2a">
                  <image class="data-v-1cf27b2a sk-image" mode="true"></image>
                </view>
              </navigator>
            </swiper-item>
          </swiper>
        </view>
        <view class="safeguard data-v-1cf27b2a">
          <view class="safeguard-item data-v-1cf27b2a">
            <text class="safeguard-icon data-v-1cf27b2a" style="background-position-x: 50%;">正</text>
            <text class="safeguard-content data-v-1cf27b2a">100%正品保证</text>
          </view>
          <view class="safeguard-item data-v-1cf27b2a">
            <text class="safeguard-icon data-v-1cf27b2a" style="background-position-x: 50%;">赔</text>
            <text class="safeguard-content data-v-1cf27b2a">假一赔十</text>
          </view>
          <view class="safeguard-item data-v-1cf27b2a">
            <text class="safeguard-icon data-v-1cf27b2a" style="background-position-x: 50%;">售</text>
            <text class="safeguard-content data-v-1cf27b2a">24小时安心售后</text>
          </view>
        </view>
        <view class="quick-access data-v-1cf27b2a">
          <navigator class="quick-item data-v-1cf27b2a">
            <image class="quick-item-icon data-v-1cf27b2a"></image>
            <text class="quick-item-title data-v-1cf27b2a">新人专享</text>
          </navigator>
          <navigator class="quick-item data-v-1cf27b2a">
            <image class="quick-item-icon data-v-1cf27b2a"></image>
            <text class="quick-item-title data-v-1cf27b2a">新人专享</text>
          </navigator>
          <navigator class="quick-item data-v-1cf27b2a">
            <image class="quick-item-icon data-v-1cf27b2a"></image>
            <text class="quick-item-title data-v-1cf27b2a">新人专享</text>
          </navigator>
          <navigator class="quick-item data-v-1cf27b2a">
            <image class="quick-item-icon data-v-1cf27b2a"></image>
            <text class="quick-item-title data-v-1cf27b2a">新人专享</text>
          </navigator>
          <navigator class="quick-item data-v-1cf27b2a">
            <image class="quick-item-icon data-v-1cf27b2a"></image>
            <text class="quick-item-title data-v-1cf27b2a">新人专享</text>
          </navigator>
        </view>
        <view class="new-customer data-v-1cf27b2a">
          <image class="data-v-1cf27b2a sk-image" mode="true"></image>
        </view>
        <view class="promotion data-v-1cf27b2a">
          <view class="promotion-item promotion-daily data-v-1cf27b2a" style="--light-color:rgba(255,90,162,0.1);--dark-color:rgba(255,90,162,1)">
            <text class="promotion-title daily-title data-v-1cf27b2a sk-transparent sk-text-14-2857-698 sk-text">每日疯抢</text>
            <text class="daily-describe data-v-1cf27b2a sk-transparent sk-text-14-2857-496 sk-text">11点场</text>
            <text class="daily-clock data-v-1cf27b2a sk-transparent sk-text-14-2857-75 sk-text">10:20:22</text>
            <view class="promotion-btn data-v-1cf27b2a sk-transparent sk-image">GO
              <view class="arrow data-v-1cf27b2a sk-transparent sk-opacity">▶</view>
            </view>
            <image class="data-v-1cf27b2a sk-image" mode="true"></image>
          </view>
          <view class="promotion-item promotion-groupon data-v-1cf27b2a" style="--light-color:rgba(132,204,255,0.15);--dark-color:rgba(132,204,255,1)">
            <text class="promotion-title data-v-1cf27b2a sk-transparent sk-text-14-2857-70 sk-text">拼团特惠</text>
            <text class="promotion-subtitle data-v-1cf27b2a sk-transparent sk-text-14-2857-180 sk-text">约会好友 超值拼购</text>
            <view class="promotion-btn data-v-1cf27b2a sk-transparent sk-image">GO
              <view class="arrow data-v-1cf27b2a sk-transparent sk-opacity">▶</view>
            </view>
            <image class="data-v-1cf27b2a sk-image" mode="true"></image>
          </view>
          <view class="promotion-item promotion-new data-v-1cf27b2a" style="--light-color:rgba(255,147,42,0.1);--dark-color:rgba(255,147,42,1)">
            <text class="promotion-title data-v-1cf27b2a sk-transparent sk-text-14-2857-229 sk-text">新品推荐</text>
            <text class="promotion-subtitle data-v-1cf27b2a sk-transparent sk-text-14-2857-934 sk-text">给宝宝最好的</text>
            <view class="promotion-btn data-v-1cf27b2a sk-transparent sk-image">GO
              <view class="arrow data-v-1cf27b2a sk-transparent sk-opacity">▶</view>
            </view>
            <image class="data-v-1cf27b2a sk-image" mode="true"></image>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<style>
	/*
	此文件为开发者工具生成，生成时间: 2023/11/4上午9:48:27
	
	在 D:\FE\AiGouWu\unpackage\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
	```
	@import "./index.skeleton.wxss";
	```
	
	更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
	*/
	.sk-transparent {
	    color: transparent !important;
	  }
	.sk-text-14-2857-794 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 39.2000rpx;
	    position: relative !important;
	  }
	.sk-text {
	    background-origin: content-box !important;
	    background-clip: content-box !important;
	    background-color: transparent !important;
	    color: transparent !important;
	    background-repeat: repeat-y !important;
	  }
	.sk-text-14-2857-85 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 39.2000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-148 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 39.2000rpx;
	    position: relative !important;
	  }
	.sk-text-21-4286-37 {
	    background-image: linear-gradient(transparent 21.4286%, #EEEEEE 0%, #EEEEEE 78.5714%, transparent 0%) !important;
	    background-size: 100% 28.0000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-899 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 28.0000rpx;
	    position: relative !important;
	  }
	.sk-text-21-4286-471 {
	    background-image: linear-gradient(transparent 21.4286%, #EEEEEE 0%, #EEEEEE 78.5714%, transparent 0%) !important;
	    background-size: 100% 28.0000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-662 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 28.0000rpx;
	    position: relative !important;
	  }
	.sk-text-21-4286-564 {
	    background-image: linear-gradient(transparent 21.4286%, #EEEEEE 0%, #EEEEEE 78.5714%, transparent 0%) !important;
	    background-size: 100% 28.0000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-235 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 28.0000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-102 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 33.6000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-401 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 33.6000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-213 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 33.6000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-508 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 33.6000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-804 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 33.6000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-698 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 42.0000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-496 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 25.2000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-75 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 25.2000rpx;
	    position: relative !important;
	  }
	.sk-opacity {
	    opacity: 0 !important;
	  }
	.sk-text-14-2857-70 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 42.0000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-180 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 30.8000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-229 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 42.0000rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-934 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 30.8000rpx;
	    position: relative !important;
	  }
	.sk-image {
	    background: #EFEFEF !important;
	  }
	.sk-pseudo::before, .sk-pseudo::after {
	      background: #EFEFEF !important;
	      background-image: none !important;
	      color: transparent !important;
	      border-color: transparent !important;
	    }
	.sk-pseudo-rect::before, .sk-pseudo-rect::after {
	      border-radius: 0 !important;
	    }
	.sk-pseudo-circle::before, .sk-pseudo-circle::after {
	      border-radius: 50% !important;
	    }
	.sk-container {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    overflow: hidden;
	    background-color: transparent;
	  }

</style>