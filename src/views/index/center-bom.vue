<template>
  <div class="left">
    <dv-border-box13 style="width: 100%;height: 315px;">
      <div class="tu_title">
        <dv-decoration7 style="width:150px;height:30px;margin: 0 auto 10px;">
          <div class="map_text">
            信息总览
          </div>
        </dv-decoration7>
      </div>
      <div class="msg_list">
        <div class="msg_txt">
          <dv-decoration-9 style="width:130px;height:130px;">
            <div class="text">
              <dv-digital-flop :config="config1" />
            </div>
          </dv-decoration-9>
          <p>年销售额</p>
        </div>
        <div class="msg_txt">
          <dv-decoration-9 style="width:130px;height:130px;">
            <div class="text">
              <dv-digital-flop :config="config1" />
            </div>
          </dv-decoration-9>
          <p>月销售额</p>
        </div>
        <div class="msg_txt">
          <dv-decoration-9 style="width:130px;height:130px;">
            <div class="text">
              <dv-digital-flop :config="config1" />
            </div>
          </dv-decoration-9>
          <p>周销售额</p>
        </div>
        <div class="msg_txt">
          <dv-decoration-9 style="width:130px;height:130px;">
            <div class="text">
              <dv-digital-flop :config="config1" />
            </div>
          </dv-decoration-9>
          <p>日销售额</p>
        </div>

      </div>


    </dv-border-box13>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

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

.map_text {
  color: #fff;
  padding: 0 10px;
}

.tu_title {
  margin-bottom: -20px;
  position: relative;
  top: 20px;
}

.text {
  color: #fff;
  font-size: 22px;
  margin-top: 10px;
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

.msg_txt>p {
  color: #fff;
  text-align: center;
}</style>
