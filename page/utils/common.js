/**
* 自定义函数-跳转新闻浏览页面
*/
function goToDetail(id) {
  wx.navigateTo({
    url: '../detail/detail?id='+id,
  })
}


module.exports = {
  goToDetail: goToDetail
}