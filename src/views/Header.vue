<template>
  <div class="header">
    <div class="title">
      <h1>数据可视化平台</h1>
      <dv-decoration5 :dur="2" style="width:600px;height:40px;" />
    </div>
    <div class="filer">
      {{ dateData.dateWeek }} {{ dateData.dateDay }} {{ dateData.dataH }}
      <button @click="test">测试</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

import dayjs from 'dayjs';
import { reactive, watch } from "vue";
const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
const dateData = reactive({
  dateDay: "",
  dataH: "",
  dateYear: "",
  dateWeek: "",
  timing: null
});
const timeFn = () => {
  dateData.timing = setInterval(() => {
    dateData.dateDay = dayjs().format("YYYY-MM-DD hh : mm : ss");
    dateData.dataH = dayjs().format("hh")
    dateData.dateWeek = weekday[dayjs().day()];
  }, 1000);
};
timeFn()



const test = async () => {
  const result = await axios.get('/api/day')
  console.log(result.data)
}
const test2 = async () => {
  const result = await axios.get('./mapjson/china.json')
  console.log(result.data)
}

</script>

<style scoped>
.header {
  position: relative;
}

.title {
  text-align: center;
}

.title h1 {
  color: #fff;
  margin: 0;
  font-size: 30px;
}

.title>div {
  margin: 0 auto;
}

.filer {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  color: #fff;
}
</style>
