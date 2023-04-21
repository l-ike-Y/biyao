import request from './request.js'

// 一级标题
export const getTypeOne = ()=>request('/getTypeOne', 'GET')
// 二级标题
export const getTypeTwo = (type_one)=>request('/getTypeTwo',{type_one},'GET')
// 二级数据
export const getTypeTwoList = (type_one,type_two)=>request('/getTypeTwoList',{type_one,type_two},'GET')
//热门数据
export const getList1 = () => request('/hotList','GET');