// pages/intro/intro.js
const db = wx.cloud.database()
const books = db.collection('books')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDownloading: false,
    percentNum: 0
  },

  /**
   * 自定义函数--封装showModal方法
   */
  showTips: function(content) {
    wx.showModal({
      title: '提醒',
      content: content,
      showCancel: false
    })
  },


  /**
   * 自定义函数--打开图书
   */
  openBook: function(path) {
    wx.openDocument({
      filePath: path,
      success: function(res) {
        console.log('打开图书成功')
      },
      fail: function(error) {
        console.log(error)
      }
    })
  },

  /**
   * 自定义函数--保存图书
   */
  saveBook: function(id, path) {
    var that = this

    wx.saveFile({
      tempFilePath: path,
      success: function(res) {
        // 将文件地址存到本地缓存中，下次直接打开
        let newPath = res.savedFilePath
        wx.setStorageSync(id, newPath)
        // 打开图书
        that.openBook(newPath)
      },
      fail: function(error) {
        console.log(error)
        that.showTips('文件保存失败！')
      }
    })

  },

  /**
   * 自定义函数--阅读图书
   */
  readBook: function(e) {
    // console.log(e.currentTarget.dataset.file)
    var that = this

    // 获取图书的id
    let id = this.data.book._id

    // 查看本地缓存
    let path = wx.getStorageSync(id)

    // 如果未曾下载过
    if (path == '') {
      // 切换到下载蒙层
      that.setData({
        isDownloading: true
      })

      // 获取图书的服务器端url地址
      let fileid = this.data.book.fileid

      // 下载图书
      const downloadTask = wx.cloud.downloadFile({
        fileID: fileid,
        success: res => {
          // 下载成功
          if (res.statusCode == 200) {
            // 获取地址
            path = res.tempFilePath

            // 保存并打开图书
            this.saveBook(id, path)
          }
          // 连上了服务器，下载失败
          else {
            // 提示用户下载失败
            this.showTips('暂时无法下载！')
          }

        },
        fail: error => {
          // 提示用户下载失败
          this.showTips('无法连接到服务器！')
        },
        complete: e => {
          // 关闭下载蒙层
          this.setData({
            isDownloading: false
          })
        }
      })

      // 监听下载进度
      downloadTask.onProgressUpdate(function(res) {
        let progress = res.progress
        that.setData({
          percentNum: progress
        })
      })

    }
    // 如果已经下载过了
    else {
      // 直接打开阅读图书
      this.openBook(path)
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.id)

    // 从云端读取图书详情
    books.doc(options.id).get({
      success: res => {
        this.setData({
          book: res.data
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