const Mock = require('mockjs');

var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    'id|+1': 1, // id自增1
  }]
});
// 输出结果
// console.log(JSON.stringify(data, null, 4));

// 创建一个单独的对象
const obj = Mock.mock({
  id: '@id', // 随机数字id
  username: '@cname', // 随机生成中文名字
  date: '@date()', // 随机生成日期
  avator: '@image(\'200x200\',\'red\',\'#fff\',\'avator\')',
  description: '@description()',
  ip: '@ip()',
  email: '@email()',
});
// console.log(obj);

// 创建一个数组对象
const jsonObj = Mock.mock({
  'array|20': [
    {
      'id|+1': 1, // id自增
      username: '@cname', // 随机生成中文名字
      date: '@date()', // 随机生成日期
    }
  ]
});
console.log(jsonObj);

