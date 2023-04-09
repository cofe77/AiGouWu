/* 
    AiGouWu
    Mock数据
*/

import { CartType, CouponType, CouponTypeType } from './type/entity/cart'
import { CategoryType } from './type/entity/category'
import { BrandType, ProductType, ProductChannel, SKUType, SPUType, GoodsType } from './type/entity/goods'
import { LocationType, AddressType, CustomerType } from './type/entity/user'
import { OrderStatus, OrderType } from './type/entity/order'
import { HomePageInitDataType } from './type/page/page-home'
import { CategoryPageInitDataType } from './type/page/page-category'
import { CartPageInitDataType } from './type/page/page-cart'
import { MyPageInitDataType } from './type/page/page-my'


//示例
export const SKU_1: SKUType = {
    title: '颜色',
    value: '白',
    stock: 10,
	price: 256,
	discount: 0.8,
	selling: 2,
	salesVolume: 20,
	img: '../../static/img/home/goods-1.png',
	desc: '大自然原生态产地安全有保障无污染绿色健康营养丰富',
}

export const SPU_1:SPUType = {
    product: {
        name: '',
        category: '电器/电视',
        channel: ProductChannel.OVERSEAS,
        brand: {
            title: '嘉宝',
            logo: '',
        }
    },
    SKU: SKU_1,
    comment: []//评价
}
//示例
export const goods_1: GoodsType = {
    SPU: SPU_1,
    count: 20//数量
}
export const coupon_1:CouponType = {
    title: '满10减1',
    type: CouponTypeType.ANY_DISCOUNT,
    amount: 20,
    usedAmount: 20,
}
export const cartItem_1 = {
    goods: goods_1,// 商品
    coupon: [coupon_1],// 优惠券
    price: 20,
    freight: 10,// 运费
    total: 30
}

// 示例
export const category_1: CategoryType = {
    title: '电器',
    level: 1,
    item: [
        {
            title: '电视',
            level: 2,
            item: [SPU_1]
        }
    ]
}
export const brand_1: BrandType = {
    title: 'Wyeth/惠氏',
    logo: '../../static/img/category/brand_logo.png',
}
export const brand_data = {
	hot: [brand_1,brand_1,brand_1,brand_1,brand_1,brand_1],
	list: [
		{
			letter: 'A',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		},
		{
			letter: 'B',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		},
		{
			letter: 'B',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		},
		{
			letter: 'B',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		},
		{
			letter: 'B',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		},
		{
			letter: 'B',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		},
		{
			letter: 'B',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		},
		{
			letter: 'B',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		},
		{
			letter: 'B',
			brands: [brand_1,brand_1,brand_1,brand_1,brand_1]
		}
	]
}
// 示例
export const product_1: ProductType = {
    name: '',
    category: '电器/电视',
    channel: ProductChannel.OVERSEAS,
    brand: brand_1
}

// 示例
export const cart_1: CartType = {
    goods: {
        self: [cartItem_1],
        outside: [cartItem_1],
        other: [cartItem_1]
    },
    address: {
        name: 'string',// 买家姓名
        tel: 'string',// 买家电话
        location: {
            province: 'string',// 省
            city: 'string',// 市
            area: 'string',// 县\区
            town: 'string',// 乡镇\街道
            detail: 'string',// 具体住址
        }// 位置
    },// 地址
    coupon: [coupon_1],// 优惠券
    freight: 30,// 运费,
    totalPrice: 120,// 总价
}
export const order_1:OrderType = {
    ...cart_1,
    status: OrderStatus.FINISHED,
    createTime: 'string'
}
export const location_1:LocationType = {
    province: 'string',// 省
    city: 'string',// 市
    area: 'string',// 县\区
    town: 'string',// 乡镇\街道
    detail: 'string',// 具体住址
}
export const address_1:AddressType = {
    name: 'string',// 买家姓名
    tel: 'string',// 买家电话
    location: location_1// 位置
}
export const customer_1:CustomerType = {
    username: 'string',
    password: 'string',
    sex: 'string',
    avatar: 'string',
    address: [address_1]
}

export const cartPageInitData: CartPageInitDataType = {
    // 购物车页商品
    cart: cart_1
}

export const categoryPageInitData: CategoryPageInitDataType = {
    // 分类页商品分类
    category: category_1,
    // 分类页品牌分类
    brand: brand_1,
}

export const homePageInitData: HomePageInitDataType = {
    // 首页顶部分类
    category: [
		category_1,
		{
			title: '电器',
			level: 1,
			item: [
			    {
			        title: '电视',
			        level: 2,
			        item: [SPU_1]
			    }
			]
		}
	],
    // 首页轮播
    banner: [
        {
            title: '111122',
            img: '../../static/img/home/banner-1.png',
            target: 'http://www.baidu.com'
        },
        {
            title: '111122',
            img: '../../static/img/home/home-head.png',
            target: '321312'
        },
        {
            title: '111122',
            img: '../../static/img/home/banner-1.png',
            target: '321312'
        }
		
    ],
    // 金刚键区
    quickAccess: [
        {
            title: '新人专享',
            icon: '../../static/img/home/quick-access-around.png',
            target: ''
        },
        {
            title: '新人专享',
            icon: '../../static/img/home/quick-access-around.png',
            target: ''
        },
        {
            title: '新人专享',
            icon: '../../static/img/home/quick-access-around.png',
            target: ''
        },
        {
            title: '新人专享',
            icon: '../../static/img/home/quick-access-around.png',
            target: ''
        },
        {
            title: '新人专享',
            icon: '../../static/img/home/quick-access-around.png',
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
			describe: '10点场',
            // 开始时间
            startTime: '2023-2-28 10:00:00',
            // 链接
            url: 'string',
            // 图片
            img: '../../static/img/home/goods-1.png',
            // 颜色
            color: 'rgba(255,90,162,'
        },
        // 团购优惠
        groupon: {
            // 主标题
            title: '拼团特惠',
            // 副标题
            subTitle: '约会好友 超值拼购',
            // 链接
            url: 'string',
            // 图片
            img: '../../static/img/home/goods-1.png',
            // 颜色
            color: 'rgba(132,204,255,'
        },
        // 新品推荐
        new: {
            // 主标题
            title: '新品推荐',
            // 副标题
            subTitle: '给宝宝最好的',
            // 链接
            url: 'string',
            // 图片
            img: '../../static/img/home/goods-1.png',
            // 颜色
            color: 'rgba(255,147,42,'
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
                img: '../../static/img/home/wellChosen-1.png',
                // 颜色
                color: '#2FA3E7'
            },
            sub: [
                SPU_1,SPU_1,SPU_1,SPU_1,SPU_1
            ]
        },
		{
		    main: {
		        // 主标题
		        title: 'string',
		        // 副标题
		        subTitle: 'string',
		        // 链接
		        url: 'string',
		        // 图片
		        img: '../../static/img/home/wellChosen-2.png',
		        // 颜色
		        color: 'string'
		    },
		    sub: [
		        SPU_1,SPU_1,SPU_1,SPU_1,SPU_1
		    ]
		},
		{
		    main: {
		        // 主标题
		        title: 'string',
		        // 副标题
		        subTitle: 'string',
		        // 链接
		        url: 'string',
		        // 图片
		        img: '../../static/img/home/wellChosen-3.png',
		        // 颜色
		        color: 'string'
		    },
		    sub: [
		        SPU_1,SPU_1,SPU_1,SPU_1,SPU_1
		    ]
		},
    ],
    // 猜你喜欢区
    guessYouLike: [SPU_1,SPU_1,SPU_1,SPU_1,SPU_1,SPU_1],
}

export const myPageInitData: MyPageInitDataType = {
    // 我的页用户信息
    userInfo: customer_1,
    // 我的页用户设置
    userSetting: {},
    // 我的页用户订单
    userOrder: [order_1],
}
