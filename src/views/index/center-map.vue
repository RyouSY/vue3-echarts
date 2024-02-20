<template>
  <div class="left">
    <dv-button @click="allData" border="Border5" color="#409eff" font-color="#409eff" v-if="code !== 'china'"
      class="allBtn">全国数据</dv-button>
    <dv-decoration7 style="width:150px;height:30px;margin: 0 auto 10px;">
      <div class="map_text">
        地区分布
      </div>
    </dv-decoration7>
    <dv-border-box13 style="height: 580px;">
      <v-chart :option="option" ref="centerMapRef" @click="mapClick" v-if="flag" />
    </dv-border-box13>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import china from '@/lib/china.json'
import { regionCodes } from '@/lib/mapList'
const { $echarts } = getCurrentInstance().appContext.app.config.globalProperties
import { ElMessage } from 'element-plus'
import { useAreaStore } from '@/stores/area'
import { filterContent, mapGet } from "@/config/requestConfig";
const areaStore = useAreaStore()


const flag = ref(false)
const code = ref("china"); //china 代表中国 其他地市是行政编码

onMounted(() => {
  drawMap()
  getProvince()
  localStorage.setItem('area', '中国')
})

//点击地图后触发的事件
const mapClick = (params) => {
  if (params.name === '南海诸岛') {
    ElMessage.warning('暂无下级地市')
    return
  }
  const xjs = regionCodes[params.name]
  if (xjs) {
    localStorage.setItem('area', params.name)
    areaStore.area = params.name
    getCity()
    filterMapName(params.name)
  } else {
    ElMessage.warning('暂无下级地市')
    return
  }
};

//获取省的数据
const getProvince = async () => {
  const result = await filterContent('/api/province', {})
  option.value.series[0].data = result.data.data
  flag.value = true
}

//获取城市的数据
const getCity = async () => {
  const result = await filterContent('/api/city', {})
  option.value.series[0].data = result.data.data
}

//获取省市代码
const filterMapName = (mapName) => {
  if (mapName === '中国') {
    code.value = 'china'
    localStorage.setItem('area', mapName)
    getMapJson('china')
    return
  }
  code.value = mapName
  getMapJson(regionCodes[mapName].adcode)
}

//获取全国按钮
const allData = () => {
  areaStore.area = '中国'
  getProvince()
  filterMapName('中国')
}

//获取地图数据
const getMapJson = (mapCode) => {
  return new Promise(async (resolve) => {
    const mapjson = await mapGet(`./mapjson/${mapCode}.json`)
    option.value.series[0].map = code.value
    $echarts.registerMap(code.value, {
      geoJSON: mapjson.data,
      specialAreas: {},
    })
    resolve(mapjson)
  })
}

//注册地图
const drawMap = () => {
  $echarts.registerMap('china', china)
}

//地图配置
const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      if (params.data) {
        return `${params.name}<br/>${params.data["value"]} 万元`
      } else {
        return `${params.name}<br/>暂无数据`;
      }
    }
  },
  visualMap: [{
    type: 'continuous',
    min: 0,
    max: 1000,
    left: 20,
    bottom: 20,
    text: ['高', '低'],
    textStyle: {
      color: "#fff"
    },
    inRange: {
      color: [
        "rgba(237,247,253,.8)",
        "rgba(183,225,246,.9)",
        "rgba(129,202,239,.9)",
        "rgba(56,172,229,.9)",
        "rgba(23,129,181,.9)",
        "rgba(16,90,126,0.9)"
      ],
    },
  }],
  series: [{
    type: 'map',
    selectedMode: false,
    name: "降水量",
    map: 'china',
    roam: true,
    zoom: 1.1,
    label: {
      show: false,
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
            color: "rgba(147, 235, 248, 0)",
          },
          {
            offset: 1,
            color: "rgba(147, 235, 248, .2)",
          },
        ],
        globalCoord: false,
      },
      shadowColor: "rgba(128, 217, 248, .3)",
      shadowOffsetX: -2,
      shadowOffsetY: 2,
      shadowBlur: 10,
    },
    emphasis: {
      label: {
        show: false,
      },
      itemStyle: {
        areaColor: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: "rgba(147, 235, 248, 0)",
            },
            {
              offset: 1,
              color: "rgba(56,155,183, .8)",
            },
          ],
          globalCoord: false,
        },
        borderWidth: 1,
      },
    },
    data: [],
  }],
})
</script>

<style scoped>
.left {
  box-sizing: border-box;
  position: relative;
  padding-top: 20px;
}

.allBtn {
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 20px;
}

.map_text {
  color: #fff;
  padding: 0 10px;
  font-weight: bold;
  font-size: 22px;
}
</style>
