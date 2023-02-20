/* 
    AiGouWu
    用户Mock数据
*/

// 位置
export type LocationType = {
    province: string,// 省
    city: string,// 市
    area: string,// 县\区
    town: string,// 乡镇\街道
    detail: string,// 具体住址
}
export const location_1:LocationType = {
    province: 'string',// 省
    city: 'string',// 市
    area: 'string',// 县\区
    town: 'string',// 乡镇\街道
    detail: 'string',// 具体住址
}
// 联系地址
export type AddressType = {
    name: string,// 买家姓名
    tel: string,// 买家电话
    location: LocationType// 位置
}
export const address_1:AddressType = {
    name: 'string',// 买家姓名
    tel: 'string',// 买家电话
    location: location_1// 位置
}
export type CustomerType = {
    username: string,
    password: string,
    sex: string,
    avatar: string,
    address: AddressType[]
}
export const customer_1:CustomerType = {
    username: 'string',
    password: 'string',
    sex: 'string',
    avatar: 'string',
    address: [address_1]
}