// const axios = require('./axios.js')
import axios from './axios.js'
const Url = 'http://47.113.230.184:9527/api'

// 首页ID
// export function IndexId() {
//   return axios({
//     method:'GET',
//     url:Url + '/api/v3/m1/cms/nav',
//   })
// }

//首页渲染分类
export const getTypeOne= () => {
  return axios({
    methods: "get",
    url:Url + `/getTypeOne`,
  });
};