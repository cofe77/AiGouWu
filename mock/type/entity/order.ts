/* 
    AiGouWu
    订单Mock
*/

import { CartItemType, CartType, cart_1 } from "./cart"

// 订单商品
export type OrderItemType = CartItemType
// 订单状态
export enum OrderStatus {
    WAIT_FOR_PAY,// 待支付
    WAIT_FOR_DELIVERY,// 待发货
    WAIT_FOR_RECEIVING,// 待收货
    FINISHED,// 已完成
    WAIT_FOR_EVALUATE,// 待评价
    CANCELED,// 已取消
}
// 订单
export type OrderType = {
    status: OrderStatus,
    createTime: string
} & CartType

export const order_1:OrderType = {
    ...cart_1,
    status: OrderStatus.FINISHED,
    createTime: 'string'
}
