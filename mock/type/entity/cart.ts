/* 
    AiGouWu
    购物车Mock数据
*/

import { GoodsType, goods_1 } from "./goods"
import { AddressType, address_1 } from "./user"

//优惠券类型
export enum CouponTypeType {
    // 通用优惠券
    ANY_DISCOUNT,
    // 满减优惠券
    FULL_DISCOUNT,
}
// 优惠券
export type CouponType = {
    title: string,
    type: CouponTypeType,
    amount: 20,
    usedAmount: 20,
}
export const coupon_1:CouponType = {
    title: '满10减1',
    type: CouponTypeType.ANY_DISCOUNT,
    amount: 20,
    usedAmount: 20,
}
// 购物车商品
export type CartItemType = {
    goods: GoodsType,// 商品
    coupon: CouponType[],// 优惠券
    price: number,
    freight: number,// 运费
    total: number
}
export const cartItem_1 = {
    goods: goods_1,// 商品
    coupon: [coupon_1],// 优惠券
    price: 20,
    freight: 10,// 运费
    total: 30
}
// 分类
export type CartType = {
    goods: {
        self: CartItemType[],
        outside: CartItemType[],
        other: CartItemType[]
    },
    address: AddressType,// 地址
    coupon: CouponType[],// 优惠券
    freight: number,// 运费,
    totalPrice: number,// 总价
}
// 示例
export const cart_1: CartType = {
    goods: {
        self: [cartItem_1],
        outside: [cartItem_1],
        other: [cartItem_1]
    },
    address: address_1,// 地址
    coupon: [coupon_1],// 优惠券
    freight: 30,// 运费,
    totalPrice: 120,// 总价
}