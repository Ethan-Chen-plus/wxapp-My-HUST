// page/component/details/details.js
function getRandomColor(){
  let rgb=[]
  for(let i=0;i<3;++i){
    let color=Math.floor(Math.random()*256).toString(16)
    color=color.length==1?'0'+color:color
    rgb.push(color)
  }
  return '#'+rgb.join('')
}
Page({
  data:{
    goods: {
      
      id: 1,
      image: '/image/goods1.png',
      title: '我的华中大_2',
      price: '敬请观看',
      stock: '为你献上',
      detail: '暂无有关信息。',
      parameter: '文化展板正在规划中...',
      service: '历史回顾即将书写...'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false,

    danmuText:'',
    list:[
      
      
      {
       id:'80',
       title:'华中大的点点滴滴',
       videoUrl:'https://f.video.weibocdn.com/MjgEHK73lx07KJk3uGFy01041202mIfl0E010.mp4?label=mp4_720p&template=1280x720.25.0&trans_finger=1f0da16358befad33323e3a1b7f95fc9&media_id=4609702894698534&tp=8x8A3El:7fHprYw&us=0&ori=1&bf=3&ot=h&ps=3lckmu&uid=3ZoTIp&ab=3915-g1,5178-g0,966-g1,1192-g0,1258-g0&Expires=1628940360&ssig=N6HwRhPaXh&KID=unistore,video'
      },
      
    ],
  },

  getDanmu:function(e){
    this.setData({
      danmuTxt:e.detail.value
    })
  },
  sendDanmu:function(e){
    let text=this.data.danmuTxt;
    this.videoCtx.sendDanmu({
      text:text,
      color:getRandomColor()
    })
  },
  playVideo:function(e){
    this.videoCtx.stop()
    this.setData({
      src:e.currentTarget.dataset.url
    })
    this.videoCtx.play()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.videoCtx=wx.createVideoContext('myVideo')
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})