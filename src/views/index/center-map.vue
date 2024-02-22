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
import { ElMessage } from 'element-plus'
import { useAreaStore } from '@/stores/area'
import { filterContent, mapGet } from "@/config/requestConfig";
import { optionHandle, regionCodes } from './center-map'
import { setStorage } from '@/lib/storage'
const { $echarts } = getCurrentInstance().appContext.app.config.globalProperties
const areaStore = useAreaStore()


const flag = ref(false)
const code = ref("china"); //china 代表中国 其他地市是行政编码
//地图配置
const option = ref({})

onMounted(() => {
  drawMap()
  getProvince()
	setStorage('area', '中国')
})

//点击地图后触发的事件
const mapClick = (params) => {
  if (params.name === '南海诸岛') {
    ElMessage.warning('暂无下级地市')
    return
  }
  const xjs = regionCodes[params.name]
  if (xjs) {
		setStorage('area', params.name)
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
  option.value = optionHandle(code.value, result.data.data)
  flag.value = true
}

//获取城市的数据
const getCity = async () => {
  const result = await filterContent('/api/city', {})
  option.value = optionHandle(code.value, result.data.data)
}

//获取省市代码
const filterMapName = (mapName) => {
  if (mapName === '中国') {
    code.value = 'china'
		setStorage('area', mapName)
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
