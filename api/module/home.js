import request from '../http.js'

export const init = () => request.get('/home/init')