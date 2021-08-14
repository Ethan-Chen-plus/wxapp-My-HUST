//index.js
const db = wx.cloud.database()
const books = db.collection('books')

Page({

  /**
   * 页面的初始数据
   */
  data: {

    bookList: []

  },

  /**
   * 自定义函数--跳转新页面显示图书详情
   */
  showBookIntro: function(e) {
    // console.log(e.currentTarget.dataset.id)
    // 获取图书id
    let id = e.currentTarget.dataset.id
    // 跳转新页面
    wx.navigateTo({
      url: '../intro/intro?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 从云端读取图书信息
    books.get({
      success: res => {
        this.setData({
          bookList: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})