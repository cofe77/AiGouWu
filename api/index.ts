import * as mockData  from '../mock/mockData'
import * as home from './module/home.js'
import * as brand from './module/brand.js'
import * as cart from './module/cart.js'

export const _api = {
	...home,
	...brand,
	...cart
}

// 开发环境
export const api = {
	init(){ return mockFetch(mockData.homePageInitData) },
	getBrand(){ return mockFetch(mockData.brand_data) },
	getGuessLike(){ return mockFetch(mockData.homePageInitData.guessYouLike) }
}
const mockFetch = (data:any) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve({
				code: 200,
				msg: '成功',
				data
			})
		},2000)
	})
}