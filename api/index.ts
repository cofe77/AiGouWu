import * as mockData  from '../mock/mockData'
// 开发环境
export const api = {
	getBrand(){ return mockFetch(mockData.brand_data) }
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
// 生产环境/测试环境
const base_url = 'http://127.0.0.1:8080'
export const _api = {
	getBrand(){ return axios.get(base_url + '/brand') }
}