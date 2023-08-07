/* 
    AiGouWu
    用户Mock数据
*/

// 联系地址
export type AddressType = {
    name: string,// 买家姓名
    tel: string,// 买家电话
    location: string// 位置
}
export const address_1:AddressType = {
    name: 'string',// 买家姓名
    tel: 'string',// 买家电话
    location: 'string'// 位置
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