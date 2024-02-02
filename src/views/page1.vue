<template>
  
  
  <div class="left">
      <div id="page1" style="width: 300px;height: 300px;"></div>
    </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive } from "vue";

const { $echarts } = getCurrentInstance().appContext.app.config.globalProperties

onMounted(() => {
  initECharts()
})

const setValue = () => {
  option.series[0].data[6] = 500
  updataECharts()
}

const initECharts = () => {
  const page1 = $echarts.init(document.getElementById("page1"))
  page1.setOption(option)
}

const updataECharts = () => {
  const page1 = document.getElementById("page1")
  const myecharts = $echarts.getInstanceByDom(page1)
  myecharts.setOption(option)
}

const option = reactive({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel:{
      color: '#ffffff'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel : {
      textStyle: {
      color: '#ffffff'
      }
    }
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
})
</script>

<style scoped>
html,body{padding: 0;margin: 0;}
.left{padding-left: 20px;}
</style>
