import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DataVVue3 from '@kjgl77/datav-vue3'
import { registerEcharts } from "@/lib/echarts"
import * as echarts from 'echarts'


const app = createApp(App)
app.config.globalProperties.$echarts = echarts
registerEcharts(app)
app.use(router)
app.use(DataVVue3)
app.mount('#app')
