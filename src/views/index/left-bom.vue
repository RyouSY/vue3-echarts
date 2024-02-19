<template>
  <div class="left">
    <dv-border-box13 style="width: 100%;height: 310px;">
      <div class="tu_title">
        <dv-decoration7 style="width:150px;height:30px;margin: 0 auto 10px;">
          <div class="map_text">
            周销售额
          </div>
        </dv-decoration7>
      </div>
      <v-chart :option="option" v-if="JSON.stringify(option)!='{}'" />
    </dv-border-box13>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { useAreaStore } from '@/stores/area'
const areaStore = useAreaStore()

watch(() => areaStore, () => {
  getData()
},{deep: true})

onMounted(() => {
  getData()
})

const getData = async () => {
  const result = await axios.get('/api/page1')
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
  top: 20px;
}
</style>
