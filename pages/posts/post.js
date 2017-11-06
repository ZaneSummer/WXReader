var postData = require('../../data/post-data.js');
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
    this.setData({ postkey: postData.postList });
  },

  onItemTap: function (event) {
    var item = event.currentTarget.dataset.object;
    console.log(item.date);
    wx.navigateTo({
      url: '../posts/post-detail/post-detail',
    })
  }

})