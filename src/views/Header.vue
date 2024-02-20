<template>
  <div class="header">
    <div class="local">
      当前为 {{ areaStore.area == '中国'?'全国': areaStore.area }} 的数据
    </div>
    <div class="title">
      <h1>数据可视化平台</h1>
      <dv-decoration5 :dur="2" style="width:600px;height:40px;" />
    </div>
    <div class="filer">
      {{ dateData.dateWeek }} {{ dateData.dateDay }}
      <button @click="test">测试</button>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import { reactive } from "vue";
import { useDateStore } from '@/stores/date'
import { filterContent } from "@/config/requestConfig";
import { useAreaStore } from '@/stores/area'
const areaStore = useAreaStore()

const dateStore = useDateStore()
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
    dateStore.dYear = dayjs().format("YYYY")
    dateStore.dMonth = dayjs().format("MM")
    dateStore.dDay = dayjs().format("DD")
    dateStore.dHour = dayjs().format("H")
    dateStore.dMin = dayjs().format("mm")
    dateStore.dWeek = weekday[dayjs().day()]
    dateStore.dS = dayjs().format("s")
    dateData.dateDay = dayjs().format("YYYY-MM-DD hh : mm : ss");
    dateData.dataH = dayjs().format("ss")
    dateData.dateWeek = weekday[dayjs().day()];
  }, 1000);
};
timeFn()

// const test = async () => {
//   const result = await filterContent('/api/json', { params: { area: '北京' } })
//   console.log(result.data)
// }
const test = async () => {
  const result = await filterContent('/api/test', { params: { area: '北京' } })
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
  top: 70%;
  right: 0;
  transform: translate(0, -50%);
  color: #fff;
  font-size: 18px;
  font-family: "arial";
}

.local{
  position: absolute;
  left: 0;
  top: 70%;
  transform: translate(0,-50%);
  color: #fff;
  font-size: 18px;
}
</style>
