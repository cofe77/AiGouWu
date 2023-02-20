/* 
    AiGouWu
    购物车页Mock数据
*/

import { CartType, cart_1 } from "../entity/cart"

export type CartPageInitDataType = {
    // 购物车页商品
    cart: CartType,
}
export const cartPageInitData: CartPageInitDataType = {
    // 购物车页商品
    cart: cart_1
}
