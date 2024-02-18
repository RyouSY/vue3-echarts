<template>
  <div class="left">
    <dv-button @click="allData" border="Border5" color="#409eff" font-color="#409eff" v-if="code !== 'china'" class="allBtn">全国数据</dv-button>
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
import axios from "axios";
import { ElMessage } from 'element-plus'

const flag = ref(false)
const code = ref("china"); //china 代表中国 其他地市是行政编码


onMounted(() => {
  drawMap()
  getProvince()
  
})

const mapClick = (params) => {
  if (params.name === '南海诸岛') {
    ElMessage.warning('暂无下级地市')
    return
  }
  const xjs = regionCodes[params.name]
  if (xjs) {
    getCity()
    filterMapName(params.name)
  } else {
    ElMessage.warning('暂无下级地市')
    return
  }
};

const getProvince = async () => {
  const result = await axios.get('/api/province')
  option.value.series[0].data = result.data.data
  flag.value = true
}

const getCity = async () => {
  const result = await axios.get('/api/city')
  option.value.series[0].data = result.data.data
}

const filterMapName = (mapName) => {
  if (mapName === '中国') {
    code.value = 'china'
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
  $echarts.registerMap('china', china)
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
    left: 20,
    bottom: 20,
    text: ['高', '低'],//取值范围的文字
    textStyle: {
      color: "#fff"
    },
    inRange: {
      // 渐变颜色，从小到大
      // FFFFFF,EDF7FD,DBF0FA,C9E8F8,B7E1F6,A5D9F3,93D2F1,81CAEF,6FC2EC,5DBBEA,4AB3E8,38ACE5,26A4E3,1C9AD9,1A8DC7,
      // 1781B5,
      // 1573A2,136790,105A7E,0E4D6C,0C405A,093348,072636,051A24,020D12
      color: [
        // "#EDF7FD",
        "rgba(237,247,253,.8)",
        // "#B7E1F6",
        "rgba(183,225,246,.9)",
        // "#81CAEF",
        "rgba(129,202,239,.9)",
        // "#38ACE5",
        "rgba(56,172,229,.9)",
        // "#1781B5",
        "rgba(23,129,181,.9)",
        // "#105A7E",
        "rgba(16,90,126,0.9)"
      ],

    },
  }],
  series: [{
    type: 'map',
    name: "降水量",
    map: 'china',//这里的名称需要和 echarts.registerMap('china',{})中的名称一致
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
