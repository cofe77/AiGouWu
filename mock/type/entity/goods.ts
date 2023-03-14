/* 
    AiGouWu
    商品Mock数据
*/

import { CategoryType, category_1 } from "./category"


// 品牌
export type BrandType = {
    title: string,
    logo: string,
}
// 示例
export const brand_1: BrandType = {
    title: '嘉宝',
    logo: '',
}
// 商品销售渠道类型
export enum ProductChannel {
    SELF,
    OVERSEAS,
    NON_PROPRIETARY
}
// 商品
export type ProductType = {
    name: string,// 商品名称
    category: string,// 分类，可以有多个
    channel: ProductChannel,// 3种：自营；第三方；海外
    brand: BrandType,// 品牌
}
// 示例
export const product_1: ProductType = {
    name: '',
    category: '',
    channel: ProductChannel.OVERSEAS,
    brand: brand_1
}

//存货单元
export type SKUType = {
    title: string,//名称
    value: string,//值
    stock: number,//库存
    price: number,
    img: string,
    discount: number,
    desc: string,
    selling: number,//销量
    salesVolume: number,
}
//示例
export const SKU_1: SKUType = {
    title: '颜色',
    value: '白',
    price: 10,
    stock: 10,
    img: '',
    discount: 1,
    desc: '',
    selling: 2,//销量
    salesVolume: 20,
}

// 评论
export type CommentType = {
    user: {},
    rating: 0 | 1 | 2 | 3 | 4 | 5
    content: string,
    createTime: string
}
// 标准化产品单元
export type SPUType = {
    product: ProductType,
    SKU: SKUType,
    comment?: CommentType[]//评价
}
export const SPU_1:SPUType = {
    product: product_1,
    SKU: SKU_1,
    comment: []//评价
}
export type GoodsType = {
    SPU: SPUType,
    count: number//数量
}
//示例
export const goods_1: GoodsType = {
    SPU: SPU_1,
    count: 20//数量
}
