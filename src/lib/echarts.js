import VueECharts from 'vue-echarts'

export const registerEcharts= (app)=>{
  app.component('v-chart', VueECharts)
}