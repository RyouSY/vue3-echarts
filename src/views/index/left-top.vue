<template>
  <div class="left">
    <dv-border-box13 style="width: 100%;height: 310px;">
      <div class="tu_title">
        <dv-decoration7 style="width:150px;height:30px;margin: 0 auto 10px;">
          <div class="map_text">
            产品销售额
          </div>
        </dv-decoration7>
      </div>
      <v-chart :option="option" v-if="JSON.stringify(option)!='{}'" style="height: 280px;" />
    </dv-border-box13>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import useGetData from "@/hooks/useGetData"

const { getData, option, areaStore } = useGetData()

onMounted(() => {
  getData('/api/lefttop')
})

watch(() => areaStore, () => {
  getData('/api/lefttop')
},{deep: true})

</script>

<style scoped>
html,
body {
  padding: 0;
  margin: 0;
}
.map_text {
  color: #fff;
  padding: 0 10px;
}
.tu_title{
  margin-bottom: -20px;
  position: relative;
  top: 15px;
}
</style>
