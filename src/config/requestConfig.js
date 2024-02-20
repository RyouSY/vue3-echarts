import axios from "axios";
import { BASE_URL } from './config'

axios.defaults.withCredentials = true
const AUTH_TOKEN = localStorage.getItem('ryou') || ''
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`

axios.interceptors.request.use((config) => {
  const areaText = localStorage.getItem('area') || ''
  config.params.regionCode = areaText
  return config;
}, (error) => {
  return Promise.reject(error);
});

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

const mapGet = axios.create({
  BASE_URL,
  timeout: 10000
})

export { filterContent, mapGet }