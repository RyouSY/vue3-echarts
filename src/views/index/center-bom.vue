<template>
  <div class="left">
    <dv-border-box13 style="width: 100%;height: 315px;">
      <div class="tu_title">
				<dv7 :style="{width: `150px`,height: `30px`,margin: `0 auto 10px`}" title="信息总览" />
      </div>
      <div class="msg_list">
        <countUp :style="{width: `130px`,height: `130px`}" :config="config1" title="年销售额" />
        <countUp :style="{width: `130px`,height: `130px`}" :config="config1" title="月销售额" />
				<countUp :style="{width: `130px`,height: `130px`}" :config="config1" title="周销售额" />
				<countUp :style="{width: `130px`,height: `130px`}" :config="config1" title="日销售额" />
      </div>
    </dv-border-box13>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import dv7 from '@/components/dv7.vue'
import countUp from '@/components/count-up.vue'

onMounted(() => {
  config1.number[0] = 9999
})

const config1 = reactive({
  number: [0],
  style: {
    stroke: 'rgba(64, 158, 255, 1)'
  }
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

.tu_title {
  margin-bottom: -20px;
  position: relative;
  top: 20px;
}

.msg_list {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.msg_list>div {
  margin-right: 40px;
}

.msg_list>div:nth-last-child(1) {
  margin-right: 0;
}

</style>
