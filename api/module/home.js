import request from '../http.js'

export const init = (type) => request.get('/home/init?type='+type)