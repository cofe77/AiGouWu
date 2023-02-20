/* 
    AiGouWu
    我的页Mock数据
*/

import { OrderType, order_1 } from "../entity/order"
import { CustomerType, customer_1 } from "../entity/user"

export type MyPageInitDataType = {
    // 我的页用户信息
    userInfo: CustomerType,
    // 我的页用户设置
    userSetting: {},
    // 我的页用户订单
    userOrder: OrderType[],
}
export const myPageInitData: MyPageInitDataType = {
    // 我的页用户信息
    userInfo: customer_1,
    // 我的页用户设置
    userSetting: {},
    // 我的页用户订单
    userOrder: [order_1],
}
