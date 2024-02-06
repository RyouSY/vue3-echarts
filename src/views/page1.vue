<template>
  
  
    <div class="left" style="display: inline-block;">
      <dv-border-box1>
        <div id="page1" style="width: 800px;height: 300px;"></div>
     </dv-border-box1>
     <button @click="updataECharts">更新数据</button>
    </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import axios from "axios";

const { $echarts } = getCurrentInstance().appContext.app.config.globalProperties

onMounted(() => {
  initECharts()
})

const initECharts = async () => {
  const page1 = $echarts.init(document.getElementById("page1"))
  await getData()
  page1.setOption(option.value)
}

const updataECharts = async () => {
  const page1 = document.getElementById("page1")
  const myecharts = $echarts.getInstanceByDom(page1)
  await getData()
  myecharts.setOption(option.value)
}

const getData = async () => {
  const result = await axios.get('/api/page1')
  option.value = result.data.data
}

const option = ref({})
</script>

<style scoped>
html,body{padding: 0;margin: 0;}
.left {
  padding-left: 20px;
  padding-top: 40px;
}
</style>
