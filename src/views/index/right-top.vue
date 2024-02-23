<template>
  <div class="left">
    <dv-border-box13 style="width: 100%;height: 310px;">
      <div class="tu_title">
				<dv7 :style="{width: `150px`,height: `30px`,margin: `0 auto 10px`}" title="当天销售额" />
      </div>
      <div id="righttop" style="height: 310px;"></div>
    </dv-border-box13>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref, watch } from "vue";
import axios from "axios";
import dayjs from 'dayjs';
import { useDateStore } from '@/stores/date'
import { useAreaStore } from '@/stores/area'
import dv7 from '@/components/dv7.vue'
const { $echarts } = getCurrentInstance().appContext.app.config.globalProperties

const dateStore = useDateStore()
const areaStore = useAreaStore()


onMounted(() => {
  setData()
  initECharts()
})
const setData = () => {
  const arr = []
  for(let i = 0; i <= dayjs().format("H"); i++){
    arr.push(Math.floor(Math.random() * 1000))
  }
  option2.value.series[0].data = arr
}

const getData = async () => {
  const result = await axios.get('/api/day')
  option2.value = result.data.data
  initECharts()
}

watch([() => dateStore.dHour, areaStore], () => {
  updataECharts()
},{deep: true})

const initECharts = () => {
  const righttop = $echarts.init(document.getElementById("righttop"))
  righttop.setOption(option2.value)
}

const updataECharts = () => {
  const righttop = document.getElementById("righttop")
  const myecharts = $echarts.getInstanceByDom(righttop)
  setData()
  myecharts.setOption(option2.value)
}

const option = ref({})
const option2 = ref({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', 
    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    axisLabel: { color: '#ffffff' }
  },
  yAxis: {
    type: 'value',
    nameTextStyle: {
      color: '#ffffff'
    },
    axisLabel: { color: '#ffffff' }
  },
  series: [
    {
      type: 'line',
      data: []
    }
  ]
})
</script>

<style scoped>
html,
body {
  padding: 0;
  margin: 0;
}


.tu_title {
  margin-bottom: -20px;
  position: relative;
  top: 15px;
}
</style>
