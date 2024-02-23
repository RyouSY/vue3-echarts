<template>
  <div class="left">
    <dv-border-box13 style="width: 100%;height: 310px;">
      <div class="tu_title">
				<dv7 :style="{width: `150px`,height: `30px`,margin: `0 auto 10px`}" title="周销售额" />
      </div>
      <v-chart :option="option" v-if="JSON.stringify(option)!='{}'" />
    </dv-border-box13>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import useGetData from "@/hooks/useGetData"
import dv7 from '@/components/dv7.vue'

const { getData, option, areaStore } = useGetData()

onMounted(() => {
  getData('/api/leftbom')
})

watch(() => areaStore, () => {
  getData('/api/leftbom')
},{deep: true})

</script>

<style scoped>
html,
body {
  padding: 0;
  margin: 0;
}

.tu_title{
  margin-bottom: -20px;
  position: relative;
  top: 20px;
}
</style>
