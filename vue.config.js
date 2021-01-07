module.exports = {
  devServer: {
    // 提供在服务器内部先于所有其他中间件执行自定义中间件的功能
    before: require('./mock/index.js')//引入mock/index.js
  }
};