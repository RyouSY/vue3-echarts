
import axios from "axios";

axios.defaults.withCredentials = true
const AUTH_TOKEN = localStorage.getItem('ryou') || ''
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
const baseURL = 'http://localhost:8999'

const filterContent = axios.create({
  baseURL,
  timeout: 10000
})

filterContent.interceptors.request.use((config) => {
  const areaText = localStorage.getItem('area') || ''
  if(config.url === '/api/json'){
    config.params.info = areaText
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


filterContent.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export { filterContent }