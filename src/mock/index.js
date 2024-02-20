import Mock from 'mockjs';

Mock.mock('/api/user', 'get', {
  code: 200,
  data: {
    id: '@id',
    name: '@cname',
    age: '@integer(20, 50)',
  },
});

Mock.mock(RegExp('/api/leftbom' + ".*"), 'get', {
  code: 200,
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
  },
});

Mock.mock(RegExp('/api/lefttop' + ".*"), 'get', {
  code: 200,
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
});

Mock.mock(RegExp('/api/leftcenter' + ".*"), 'get', {
  code: 200,
  data: {
    'data|10': [
      {
        name: "@city()",
        value: '@integer(0, 200)'
      }
    ],
    unit: '万元'
  },
});

Mock.mock(RegExp('/api/city' + ".*"), 'get', {
  code: 200,
  'data|100': [
    {
      name: "@city()",
      value: '@integer(0, 1000)'
    }
  ]
});

Mock.mock(RegExp('/api/province' + ".*"), 'get', {
  code: 200,
  'data|12': [
    {
      name: "@province()",
      value: '@integer(0, 1000)'
    }
  ]
});

Mock.mock(RegExp('/api/day' + ".*"), 'get', {
  code: 200,
  data: {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
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
});

Mock.mock(RegExp('/api/top5' + ".*"), 'get', {
  code: 200,
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
  },
});

Mock.mock(RegExp('/api/5year' + ".*"), 'get', {
  code: 200,
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
  },
});