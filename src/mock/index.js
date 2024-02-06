import Mock from 'mockjs';
const Random = Mock.Random

Mock.mock('/api/user', 'get', {
  code: 200,
  data: {
    id: '@id',
    name: '@cname',
    age: '@integer(20, 50)',
  },
});

Mock.mock('/api/page1', 'get', {
  code: 200,
  data: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: { color: '#ffffff' }
    },
    yAxis: { type: 'value', axisLabel: { color: '#ffffff' } },
    series: [{ 'data|7': ['@integer(1, 1000)'], type: 'bar' }]
  },
});

Mock.mock('/api/json', 'get', {
  code: 200,
  'data|3': [
    // 收入 平均寿命 人口 国家 年份
    ['@integer(500, 10000)', '@integer(30, 75)', '@integer(10000, 100000000)', "china", '@increment(2000)'],
    ['@integer(500, 10000)', '@integer(30, 75)', '@integer(10000, 100000000)', "france", '@increment(2000)'],
    ['@integer(500, 10000)', '@integer(30, 75)', '@integer(10000, 100000000)', "germany", '@increment(2000)']
  ],
});