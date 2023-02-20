/* 
    AiGouWu
    分类页Mock数据
*/

import { goods_1, SPUType, SPU_1 } from "./goods"

// 分类
export type CategoryType = {
    title: string,
    level: number,
    item: [
        {
            title: string,
            level: number,
            item?: SPUType[]
        }
    ]
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