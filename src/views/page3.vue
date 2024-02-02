<template>
  

  <div class="left" dv-bg>
    <div id="page3" style="width: 1000px;height: 500px;"></div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import axios from "axios";

const { $echarts } = getCurrentInstance().appContext.app.config.globalProperties

onMounted(() => {
  getData()

})

const setValue = () => {
  option.series[0].data[6] = 500
  updataECharts()
}

const initECharts = () => {
  const page3 = $echarts.init(document.getElementById("page3"))
  page3.setOption(option)
}

const getData = async () => {
  const result = await axios.get('http://localhost:8999/api/json')
  option.dataset[0].source = result.data
  initECharts()
}

const updataECharts = () => {
  const page3 = document.getElementById("page3")
  const myecharts = $echarts.getInstanceByDom(page3)
  myecharts.setOption(option)
}

const option = reactive({
  dataset: [
    {
      id: 'dataset_raw',
      source: '',
    },
    {
      id: 'dataset_since_1950_of_germany',
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'Year', gte: 1950 },
            { dimension: 'Country', '=': 'Germany' }
          ]
        }
      }
    },
    {
      id: 'dataset_since_1950_of_france',
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'Year', gte: 1950 },
            { dimension: 'Country', '=': 'France' }
          ]
        }
      }
    },
    {
      id: 'dataset_since_1950_of_china',
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'Year', gte: 1950 },
            { dimension: 'Country', '=': 'China' }
          ]
        }
      }
    }
  ],
  title: {
    text: 'Income of Germany and France since 1950'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['germany', 'france', 'china']
  },
  xAxis: {
    type: 'category',
    nameLocation: 'middle'
  },
  yAxis: {
    name: 'Income'
  },
  series: [
    {
      name: 'germany',
      type: 'line',
      datasetId: 'dataset_since_1950_of_germany',
      showSymbol: false,
      encode: {
        x: 'Year',
        y: 'Income',
        itemName: 'Year',
        tooltip: ['Income']
      }
    },
    {
      name: 'france',
      type: 'line',
      datasetId: 'dataset_since_1950_of_france',
      showSymbol: false,
      encode: {
        x: 'Year',
        y: 'Income',
        itemName: 'Year',
        tooltip: ['Income']
      }
    },
    {
      name: 'china',
      type: 'line',
      datasetId: 'dataset_since_1950_of_china',
      showSymbol: false,
      encode: {
        x: 'Year',
        y: 'Income',
        itemName: 'Year',
        tooltip: ['Income']
      }
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

.left {
  padding-left: 20px;
  padding-top: 40px;
}
</style>
