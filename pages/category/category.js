// pages/category/category.js
// 导入分类页面左边导航栏模拟数据
var ctgrLeftData = require('../../static/data/ctgr-navleft.js')
Page({

  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 把模拟数据存放在data中
    this.setData({
      list: ctgrLeftData.ctgrLeftData
    })
  }
})
