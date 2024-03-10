// http.js中
import axios from "axios";
import mpAdapter from "axios-miniprogram-adapter";
axios.defaults.adapter = mpAdapter
// mock环境
// const baseURL = 'http://127.0.0.1:4523/m1/2564219-0-default'
// 测试环境
const baseURL = 'http://127.0.0.1:3000'
// 生产环境
// const baseURL = 'http://127.0.0.1:4523/m1/2564219-0-default'
const request = axios.create({
  baseURL,
  timeout: 10000,
});

request.interceptors.request.use((config) => {
  //带上token
  config.headers["Authorization"] = "token";
  return config;
});

request.interceptors.response.use((response) => {
  // 统一处理响应,返回Promise以便链式调用
  if (response.status === 200) {
	const { data } = response;
	return Promise.resolve(data);
  }
});

export default request;