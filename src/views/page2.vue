<template>
  
 
    <div class="left" style="display: inline-block;">
      <dv-border-box1>
        <div id="page1" style="width: 500px;height: 300px;"></div>
     </dv-border-box1>
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

const option = reactive( {
  title: {
    text: 'Stacked Line',
    left: 'center',
    textStyle:{
      color: '#ffffff'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union', 'Video', 'Direct', 'Engine'],
    top: 25,
    textStyle:{
      color: '#ffffff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel:{
      color: '#ffffff'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel:{
      color: '#ffffff'
    }
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
})
</script>

<style scoped>
.left {
  padding-left: 20px;
  padding-top: 40px;
}
</style>
