<template>
  <div class="header">
    <div class="local">
      当前为 {{ areaStore.area == '中国'?'全国': areaStore.area }} 的数据
    </div>
    <div class="title">
      <h1>数据可视化平台1</h1>
    </div>
    <div class="filer">
      {{ dateData.dateWeek }} {{ dateData.dateDay }}
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

</script>

<style scoped>
.header {
  position: relative;
  margin-bottom: 10px;
}

.title {
  text-align: center;
  background: url("@/assets/img/top.png") center/cover no-repeat;
  height: 60px;
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
