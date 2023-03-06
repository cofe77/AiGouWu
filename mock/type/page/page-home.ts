/* 
    AiGouWu
    首页Mock数据
*/

import { CategoryType } from "../entity/category"
import { SPUType, SPU_1 } from "../entity/goods"

export type HomePageInitDataType = {
    // 首页顶部分类
    category: CategoryType[],
    // 首页轮播
    banner: {
            title: string,
            img: string,
            target: string
	}[],
    // 金刚键区
    quickAccess: {
		title: string,
		icon: string,
		target: string
	}[],
    // 新人专享
    newCustomer: {
        url: string,
        img: string
    },
    // 促销区
    promotion: {
        // 每日疯抢
        daily: {
            // 描述
            describe: string,
            // 开始时间
            startTime: string,
            // 链接
            url: string,
            // 图片
            img: string,
            // 颜色
            color: string
        },
        // 团购优惠
        groupon: {
            // 主标题
            title: string,
            // 副标题
            subTitle: string,
            // 链接
            url: string,
            // 图片
            img: string,
            // 颜色
            color: string
        },
        // 新品推荐
        new: {
            // 主标题
            title: string,
            // 副标题
            subTitle: string,
            // 链接
            url: string,
            // 图片
            img: string,
            // 颜色
            color: string
        }
    },
    // 好物精选区
    wellChosen: {
		main: {
			// 主标题
			title: string,
			// 副标题
			subTitle: string,
			// 链接
			url: string,
			// 图片
			img: string,
			// 颜色
			color: string
		},
		sub: SPUType[]
	}[],
    // 猜你喜欢区
    guessYouLike: SPUType[],
}
export const homePageInitData: HomePageInitDataType = {
    // 首页顶部分类
    category: [],
    // 首页轮播
    banner: [
        {
            title: '',
            img: '',
            target: ''
        }
    ],
    // 金刚键区
    quickAccess: [
        {
            title: '',
            icon: '',
            target: ''
        }
    ],
    // 新人专享
    newCustomer: {
        url: '',
        img: ''
    },
    // 促销区
    promotion: {
        // 每日疯抢
        daily: {
            // 开始时间
            startTime: '',
            // 链接
            url: 'string',
            // 图片
            img: 'string',
            // 颜色
            color: 'string'
        },
        // 团购优惠
        groupon: {
            // 主标题
            title: 'string',
            // 副标题
            subTitle: 'string',
            // 链接
            url: 'string',
            // 图片
            img: 'string',
            // 颜色
            color: 'string'
        },
        // 新品推荐
        new: {
            // 主标题
            title: 'string',
            // 副标题
            subTitle: 'string',
            // 链接
            url: 'string',
            // 图片
            img: 'string',
            // 颜色
            color: 'string'
        }
    },
    // 好物精选区
    wellChosen: [
        {
            main: {
                // 主标题
                title: 'string',
                // 副标题
                subTitle: 'string',
                // 链接
                url: 'string',
                // 图片
                img: 'string',
                // 颜色
                color: 'string'
            },
            sub: [
                SPU_1
            ]
        }
    ],
    // 猜你喜欢区
    guessYouLike: [SPU_1],
}
