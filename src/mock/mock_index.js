import Mock from "mockjs";
//处理路径传参
import { parameteUrl } from "@/lib/query-param"

//去重
function ArrSet(Arr, id) {
  let obj = {}
  const arrays = Arr.reduce((setArr, item) => {
    obj[item[id]] ? '' : (obj[item[id]] = true && setArr.push(item))
    return setArr
  }, [])
  return arrays
}

export default [
  //地图分部
  {
    url: '/api/test',
    type: 'get',
    response: (options) => {
      let params = parameteUrl(options.url)
      //不是中国的时候
      if (params.regionCode && !["china"].includes(params.regionCode)) {
        const a = Mock.mock({
          success: true,
          data: {
            "dataList|100": [
              {
                name: "@city()",
                value: '@integer(1, 1000)'
              }
            ],
            regionCode: params.regionCode,//-代表中国
          }
        })
        return a
      } else {
        const a = Mock.mock({
          success: true,
          data: {
            "dataList|12": [
              {
                name: "@province()",
                value: '@integer(1, 1100)'
              }
            ],
            regionCode: 'china',
          }
        })
        // 去重
        a.data.dataList = ArrSet(a.data.dataList, "name")
        return a
      }
    }
  },
  //左下
  {
    url: '/api/leftbom',
    type: 'get',
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: ['本周', '上周', '上上周'],
            top: 30,
            textStyle: {
              color: '#ffffff'
            }
          },
          xAxis: {
            type: 'category',
            data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            axisLabel: { color: '#ffffff' }
          },
          yAxis: {
            type: 'value',
            name: '万元',
            nameTextStyle: {
              color: '#ffffff'
            },
            axisLabel: { color: '#ffffff' }
          },
          series: [
            { 'data|7': ['@integer(1, 10)'], type: 'bar', name: '本周' },
            { 'data|7': ['@integer(1, 10)'], type: 'bar', name: '上周' },
            { 'data|7': ['@integer(1, 10)'], type: 'bar', name: '上上周' }
          ]
        }
      })
      return a
    }
  },
  {
    url: '/api/lefttop',
    type: 'get',
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['商品一', '商品二', '商品三', '商品四', '商品五'],
            top: 30,
            textStyle: {
              color: '#ffffff'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisLabel: {
              color: '#ffffff'
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#ffffff'
            }
          },
          'series|5': [
            {
              'name|+1': ['商品一', '商品二', '商品三', '商品四', '商品五'],
              type: 'line',
              smooth: true,
              'data|12': ['@integer(0, 100)']
            }
          ]
        }
      })
      return a
    }
  },
  {
    url: '/api/leftcenter',
    type: 'get',
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          'data|10': [
            {
              name: "@city()",
              value: '@integer(0, 200)'
            }
          ],
          unit: '万元'
        }
      })
      return a
    }
  },
  {
    url: '/api/city',
    type: 'get',
    response: () => {
      const a = Mock.mock({
        success: true,
        'data|100': [
          {
            name: "@city()",
            value: '@integer(0, 1000)'
          }
        ]
      })
      return a
    }
  },
  {
    url: '/api/province',
    type: 'get',
    response: () => {
      const a = Mock.mock({
        success: true,
        'data|12': [
          {
            name: "@province()",
            value: '@integer(0, 1000)'
          }
        ]
      })
      return a
    }
  },
  {
    url: '/api/day',
    type: 'get',
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            axisLabel: { color: '#ffffff' }
          },
          yAxis: {
            type: 'value',
            nameTextStyle: {
              color: '#ffffff'
            },
            axisLabel: { color: '#ffffff' }
          },
          series: [
            {
              type: 'line',
              'data|24': ['@integer(0, 500)']
            }
          ]
        }
      })
      return a
    }
  },
  {
    url: '/api/top5',
    type: 'get',
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          'data|5': [
            {
              'name|+1': ['商品一', '商品二', '商品三', '商品四', '商品五'],
              value: '@integer(0, 1000)'
            }
          ],
          colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
          unit: '万元',
          labelNum: 5,
        }
      })
      a.data.data.sort((a, b) => b.value - a.value)
      return a
    }
  },
  {
    url: '/api/5year',
    type: 'get',
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023'],
            axisLabel: { color: '#ffffff' }
          },
          yAxis: {
            type: 'value',
            name: '万元',
            nameTextStyle: {
              color: '#ffffff'
            },
            axisLabel: { color: '#ffffff' }
          },
          series: [{ 'data|5': ['@integer(1, 1000)'], type: 'bar' }]
        }
      })
      return a
    }
  }
]