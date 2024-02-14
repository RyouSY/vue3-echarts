<template>
  <div class="left" style="display: inline-block;width: 700px;height: 500px;box-sizing: border-box;">
    <dv-button @click="allData" border="Border3" color="#c8161d" font-color="#e18a3b" style="display: inline-block;"
      v-if="code !== '中国'">全国</dv-button>
    <v-chart :option="option" ref="centerMapRef" @click="mapClick" v-if="flag" />
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import china from '@/lib/china.json'
import { regionCodes } from '@/lib/mapList'
const { $echarts } = getCurrentInstance().appContext.app.config.globalProperties
import axios from "axios";

const flag = ref(false)
const code = ref("中国"); //china 代表中国 其他地市是行政编码


onMounted(() => {
  drawMap()
  getProvince()
  flag.value = true
})

const mapClick = (params) => {
  getCity()
  filterMapName(params.name)

};

const getProvince = async () => {
  const result = await axios.get('/api/province')
  option.value.series[0].data = result.data.data
}

const getCity = async () => {
  const result = await axios.get('/api/city')
  option.value.series[0].data = result.data.data
}

const filterMapName = (mapName) => {
  if (mapName === '中国') {
    code.value = mapName
    getMapJson('china')
    return
  }
  code.value = mapName
  getMapJson(regionCodes[mapName].adcode)

}

const allData = () => {
  getProvince()
  filterMapName('中国')

}

const getMapJson = async (mapCode) => {
  const result = await axios.get(`./mapjson/${mapCode}.json`)
  option.value.series[0].map = code.value
  $echarts.registerMap(code.value, {
    geoJSON: result.data,
    specialAreas: {},
  });
}

const drawMap = () => {
  $echarts.registerMap('中国', china)
}

const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      if (params.data) {
        return `${params.name}<br/>${params.data["value"]} (p / km2)`
      } else {
        return params.name;
      }
    }
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
    map: '中国',//这里的名称需要和 echarts.registerMap('china',{})中的名称一致
    roam: true, //缩放
    zoom: 1.1,//默认地图在容器中显示zoom:1,可根据需求放大缩小地图
    label: {
      show: false,//是否显示省份名称
      color: "#fff"
    },
    itemStyle: {
      borderColor: "rgba(147, 235, 248, .8)",
      borderWidth: 1,
      areaColor: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺为 false
      },
      shadowColor: "rgba(128, 217, 248, .3)",
      shadowOffsetX: -2,
      shadowOffsetY: 2,
      shadowBlur: 10,
    },
    //高亮时的设置
    emphasis: {
      label: {
        show: false,
      },
      itemStyle: {
        // areaColor: "rgba(56,155,183,.7)",
        areaColor: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(56,155,183, .8)", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺为 false
        },
        borderWidth: 1,
      },
    },
    // 数据
    data: [],
  }],
})
</script>

<style scoped>
.left {
  padding-left: 20px;
  padding-top: 40px;
}
</style>
