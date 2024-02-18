<template>
  <div class="left">
    <dv-border-box13 style="width: 100%;height: 310px;">
      <div class="tu_title">
        <dv-decoration7 style="height:30px;margin: 0 auto 10px;">
          <div class="map_text">
            商品排名(TOP5)
          </div>
        </dv-decoration7>
      </div>
      <dv-capsule-chart :config="option" style="width: 90%;height:250px;margin: 30px auto 0;" />
    </dv-border-box13>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

onMounted(() => {
  getData()
})

const getData = async () => {
  const result = await axios.get('/api/top5')
  let arr = result.data.data.data.sort((a, b) => {
    return b.value - a.value
  })
  option.value = result.data.data
}

const option = ref({})
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
