/* 
    AiGouWu
    分类页Mock数据
*/

import { CategoryType, category_1 } from "../entity/category"
import { BrandType, brand_1 } from "../entity/goods"

export type CategoryPageInitDataType = {
    // 分类页商品分类
    category: CategoryType,
    // 分类页品牌分类
    brand: BrandType,
}
export const categoryPageInitData: CategoryPageInitDataType = {
    // 分类页商品分类
    category: category_1,
    // 分类页品牌分类
    brand: brand_1,
}
