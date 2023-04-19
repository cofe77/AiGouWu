import request from './http.js'
import * as mockData  from '../mock/mockData'
// 开发环境
export const api = {
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
// mock环境
const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
// 测试环境
// const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
// 生产环境
// const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
export const _api = {
	getBrand(){ return request.get(base_url + '/brand') }
}