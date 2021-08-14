Page({
    data: {
        category: [
            {name:'拼图',id:'pintu'},
            {name:'箱子',id:'xiangzi'},
            {name:'风景',id:'fengjing'},
            {name:'敬请期待',id:'qidai'},
            {name:'待装潢1',id:'huang1'},
            {name:'待装潢2',id:'huang2'}
        ],
        detail:[
          {
            banner:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjbRQRdhfvPbBw!!/800?w5=900&h5=383&rf=viewer_421',cate:'拼图',id:'pintu',
            detail:
            [
              {
                thumb:'/image/c2.png',
                name:'点击开始',
                url:'../list/list'
              }, 
            ]
          },
          {
            banner:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjagUxdhtyc7KQ!!/800?w5=900&h5=383&rf=viewer_421',cate:'箱子',id:'xiangzi',
            detail:
            [
              {thumb:'/image/c4.png',name:'点击开始',url:'../push_box/push_box'}
            ]
          },
          {
            banner:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjZzWhdhwN4kGg!!/800?w5=900&h5=383&rf=viewer_421',cate:'风景icon',id:'fengjing',
            detail:
            [
              {thumb:'http://qungz.photo.store.qq.com/qun-qungz/jVL04mTYBBHh3.YcjtAIxw!!/V5bCQA3ODY2MDkwNjYSVBdhi*X*MA!!/800?w5=640&h5=640&rf=viewer_421',name:'自习室',url:''},
              {thumb:'http://qungz.photo.store.qq.com/qun-qungz/jVL04mTYBBHh3.YcjtAIxw!!/V5bCQA3ODY2MDkwNjYTVBdhXJr6MA!!/800?w5=640&h5=640&rf=viewer_421',name:'华科的猫',url:''},
            ]
          },
          {
            banner:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjZMXBdhNMpZNg!!/800?w5=1422&h5=800&rf=viewer_421',cate:'敬请期待',id:'qidai',
            detail:
            [
  
            ]
          },
          {
            banner:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjZVXBdhsZn*Ng!!/800?w5=1080&h5=720&rf=viewer_421',cate:'待装潢1',id:'huang1',
            detail:
            [
  
            ]
          },
          {
            banner:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjZWXBdhcILxNg!!/800?w5=1200&h5=800&rf=viewer_421',cate:'待装潢2',id:'huang2',
            detail:
            [
  
            ]
          }
        ],
        curIndex: 0,
        isScroll: false,
        toView: 'pintu'
    },
    /*onReady(){
        var self = this;
        wx.request({
            url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
            success(res){
                self.setData({
                    detail : res.data
                })
            }
        });
        
    },*/
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true,
        //id:this.data.id,
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})