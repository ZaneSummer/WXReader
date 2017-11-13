var postData = require('../../../data/post-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var poi=options.id;
    var item = postData.postList[poi];
    this.setData({postKey:item});
  }

  
  
})