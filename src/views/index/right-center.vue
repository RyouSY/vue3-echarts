<template>
  <div class="left">
    <dv-border-box13 style="width: 100%;height: 310px;">
      <div class="tu_title">
				<dv7 :style="{height: `30px`,margin: `0 auto 10px`}" title="商品排名(TOP5)" />
      </div>
      <dv-capsule-chart :config="option" style="width: 90%;height:250px;margin: 30px auto 0;" />
    </dv-border-box13>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useGetData from "@/hooks/useGetData"
import dv7 from '@/components/dv7.vue'

const { getData, option } = useGetData()

onMounted(() => {
  getData('/api/top5')
})

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
  top: 15px;
}
</style>
