<template>
  <div class="left" style="display: inline-block;">
      <v-chart style="width: 700px;height: 700px;" :option="option"
          ref="centerMapRef"
          @click="mapClick" v-if="flag" />
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import china from '@/lib/china.json'

const flag = ref(false)

const { $echarts } = getCurrentInstance().appContext.app.config.globalProperties

onMounted(() => {
  drawMap()
  flag.value = true
  
})

const mapClick = (params) => {
  console.log(params.name);
};

const initECharts = () => {
  drawMap()
  const page3 = $echarts.init(document.getElementById("page4"))
  page3.setOption(option)
}

const updataECharts = () => {
  const page3 = document.getElementById("page3")
  const myecharts = $echarts.getInstanceByDom(page3)
  myecharts.setOption(option)
}

const drawMap = () => {
  $echarts.registerMap('china', china)
}

const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{c} (p / km2)'
  },
  visualMap: [{
    type: 'continuous',//类型为连续型
    min: 0,
    max: 1000,
    // range: [100, 400],
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],//取值范围的文字
    textStyle: {
      color: "#fff"
    },
    inRange: {
      color: ['#e0ffff', '#006edd']//取值范围的颜色
    },
  }],
  series: [{
    type: 'map',
    name: "降水量",
    map: 'china',//这里的名称需要和 echarts.registerMap('china',{})中的名称一致
    roam: true, //缩放
    zoom: 1.2,//默认地图在容器中显示zoom:1,可根据需求放大缩小地图
    label: {
      show: true,//是否显示省份名称
      color: "#fff"
    },
    itemStyle: {
      areaColor: '#AAD5FF',//地图区域背景颜色
      borderColor: '#fff'//地图边界颜色
    },
    //高亮时的设置
    emphasis: {
      //高亮时地图区域背景颜色
      itemStyle: {
        areaColor: 'pink',
      },
      //文字颜色，样式在此处
      label: {
        color: '#fff'
      }
    },
    // 数据
    data: [
      { name: "北京", value: Math.round(Math.random() * 1000) },
      { name: "天津", value: Math.round(Math.random() * 1000) },
      { name: "上海", value: Math.round(Math.random() * 1000) },
      { name: "重庆", value: Math.round(Math.random() * 1000) },
      { name: "河北省", value: Math.round(Math.random() * 1000) },
      { name: "河南省", value: Math.round(Math.random() * 1000) },
      { name: "云南省", value: Math.round(Math.random() * 1000) },
      { name: "辽宁省", value: Math.round(Math.random() * 1000) },
      { name: "黑龙江省", value: Math.round(Math.random() * 1000) },
      { name: "湖南省", value: Math.round(Math.random() * 1000) },
      { name: "安徽省", value: Math.round(Math.random() * 1000) },
      { name: "山东省", value: Math.round(Math.random() * 1000) },
      { name: "江苏省", value: Math.round(Math.random() * 1000) },
      { name: "浙江省", value: Math.round(Math.random() * 1000) },
      { name: "江西省", value: Math.round(Math.random() * 1000) },
      { name: "湖北省", value: Math.round(Math.random() * 1000) },
      { name: "甘肃省", value: Math.round(Math.random() * 1000) },
      { name: "山西省", value: Math.round(Math.random() * 1000) },

      { name: "陕西省", value: Math.round(Math.random() * 1000) },
      { name: "吉林省", value: Math.round(Math.random() * 1000) },
      { name: "福建省", value: Math.round(Math.random() * 1000) },
      { name: "贵州省", value: Math.round(Math.random() * 1000) },
      { name: "广东省", value: Math.round(Math.random() * 1000) },
      { name: "青海省", value: Math.round(Math.random() * 1000) },
      { name: "四川省", value: Math.round(Math.random() * 1000) },
      { name: "海南省", value: Math.round(Math.random() * 1000) },

      { name: "西藏", value: Math.round(Math.random() * 1000) },
      { name: "宁夏", value: Math.round(Math.random() * 1000) },
      { name: "新疆", value: Math.round(Math.random() * 1000) },
      { name: "内蒙古", value: Math.round(Math.random() * 1000) },
      { name: "广西", value: Math.round(Math.random() * 1000) },

      { name: "台湾省", value: Math.round(Math.random() * 1000) },
      { name: "香港", value: Math.round(Math.random() * 1000) },
      { name: "澳门", value: Math.round(Math.random() * 1000) }
    ],
    // 数据映射  同china文件中的name进行映射
    nameMap: {
      "北京市": "北京",
      "天津市": "天津",
      "上海市": "上海",
      "重庆市": "重庆",
      "西藏自治区": "西藏",
      "宁夏回族自治区": "宁夏",
      "新疆维吾尔自治区": "新疆",
      "内蒙古自治区": "内蒙古",
      "广西壮族自治区": "广西",
      "香港特别行政区": "香港",
      "澳门特别行政区": "澳门",
    },
  }],
})
</script>

<style scoped>
.left {
  padding-left: 20px;
  padding-top: 40px;
}
</style>
