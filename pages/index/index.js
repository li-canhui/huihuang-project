//index.js
//导入轮播模拟数据
var jsonData = require('../../static/data/swiper.js')
//导入网格图标模拟数据
var gridData = require('../../static/data/grid.js')
// 导入百亿补贴模拟数据
var subsidyData = require('../../static/data/subsidy.js')
Page({
  data: {
    dataList: [],
    gridList: [],
    subsidyList: []
  },
  onLoad: function () {
    //把模拟数据存储到data中
      this.setData({
        dataList: jsonData.dataList,
        gridList: gridData.gridList,
        subsidyList: subsidyData.subsidyList
      });
  },
  onShareAppMessage(options) {
    return {
      title: "格力电器",
      path: "/page/index/index",
      imageUrl: "../../assets/images/more/share.jpg"
    }
  }
})

