import axios from "axios";
import { BASE_URL } from './config'

axios.defaults.withCredentials = true
const AUTH_TOKEN = localStorage.getItem('ryou') || ''
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`

//请求拦截器
axios.interceptors.request.use((config) => {
  const areaText = localStorage.getItem('area') || ''
	//携带当前地区名字
  config.params.regionCode = areaText
  return config;
}, (error) => {
  return Promise.reject(error);
});

//响应拦截器
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

const filterContent = async (url, params) => {
  try {
    const data = await axios.get(`${BASE_URL}${url}`, { params: params })
    return data
  } catch (error) {
    return error
  }
}

//获取地图
const mapGet = axios.create({
  BASE_URL,
  timeout: 10000
})

export { filterContent, mapGet }