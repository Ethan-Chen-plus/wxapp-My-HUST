Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat:30.515061,
    lon:114.426086,
    markers: [{
      id: 0,
      markerId:'001',
      latitude: 30.51315823,
      longitude: 114.417677521705,
      iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
      textbook:'1953年10月15日，华中工学院在武昌建校。当时新中国开始执行第一个五年计划，进行大规模有计划的建设。为适应大规模经济建设，特别是工业发展对建设人才的需要，根据中央人民政府政务院的指示精神，中南行政委员会决定在武汉建立华中工学院。在全国高等学校的院系调整中，华中工学院由原武汉大学、 湖南大学、南昌大学、广西大学的机械系全部和电机系的电力部分、以及华南工学院机械系的动力部分、电力部分合并组成，是一所机电型的工科院校，这样华中工学院机械工程系应运而生。',
      image_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzsb.hust.edu.cn%2F__local%2F5%2F8D%2FDA%2F432FB1738C45FE473441C29C2BA_74057C47_4046C.jpg&refer=http%3A%2F%2Fzsb.hust.edu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631368858&t=2d42bf3e235941d4d6d9334dfea817f2',
      callout:{
        content:'机械大楼',
        padding:10,
        borderWidth:2,
        borderColor:'#ffe4b5',
      }

      },
      {
        id:1,
        markerId:'002',
        latitude: 30.515429,
        longitude: 114.414415,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://img1.baidu.com/it/u=3499266469,701589612&fm=15&fmt=auto&gp=0.jpg',
        textbook:'这就是电机楼',
        callout:{
          content:'电机楼',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },
    {
      id:2,
      markerId:'003',
      latitude: 30.516493,
      longitude: 114.413159,
      iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
      image_url:'http://jjc.hust.edu.cn/__local/9/A6/A7/A0F112B4EB7987BC99F9C2649DC_AB0D164C_62418.png',
      textbook:'华中科技大学电气工程学科是在国内外都有着重要影响和地位的优势学科之一，是首批一级学科国家重点学科。为了解决电气学院近年来快速发展所面临的办公和研究场地短缺的问题，学校批准新建4万5千余平米的电气学科楼群，其中包括了电气大楼和大禹科技楼。  电气大楼位于华中科技大学主校区西九楼北侧、西二楼西侧地块。总占地面积9920㎡，总用地面积26100㎡，总建筑面积34500㎡，投资总额约为10460万元。',
      callout:{
        content:'电气大楼',
        padding:10,
        borderWidth:2,
        borderColor:'#ffe4b5',
    }
    
  },
      {
        id:3,
        markerId:'004',
        latitude: 30.518253,
        longitude: 114.417979,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://baike.sogou.com/PicBooklet.v?relateImageGroupIds=&lemmaId=7186571&now=https%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F18187%2F20200622000714-1775554469_jpeg_1000_676_93361.jpg%2F0&type=1#simple_0',
        textbook:'华中科技大学图书馆由原华中理工大学图书馆、同济医科大学图书馆、武汉城市建设学院图书馆合并而成。三座功能完备的图书馆总面积43020平方米，馆藏文献349万册（件），涵盖了理工文管医等9大学科门类。全馆设有各种阅览室40多个，共有4200多个阅览座位，书刊借阅采取全开架服务方式。图书馆实现国内外信息资源共享，全年365×24小时为师生提供各种网上信息服务。图书馆资料丰富，条件优越，是学习的好场所。',
        callout:{
          content:'主图',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:4,
        markerId:'005',
        latitude: 30.516313,
        longitude: 114.438979,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00714-1899.jpg',
        textbook:'武汉城市建设学院图书馆前身是中南建设工程学校图书室，始建于1952年，1981年7月，在武汉城市建设学院重新组建时，再次复建图书馆。2000年5月合校时，武汉城市建设学院图书馆并入华中科技大学图书馆，现为东区分馆；原同济医科大学图书馆更名为医学院图书馆，2006年10月并入华中科技大学图书馆，现为医学分馆。',
        callout:{
          content:'东图',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:5,
        markerId:'006',
        latitude: 30.520812,
        longitude: 114.417965,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E5%9B%BD%E9%99%85%E5%AD%A6%E6%9C%AF%E4%BA%A4%E6%B5%81%E4%B8%AD%E5%BF%83%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%BB%BA%E6%88%90&step_word=&hs=0&pn=2&spn=0&di=3740&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1833863368%2C617780114&os=381856989%2C1812397161&simid=3313676631%2C179980359&adpicid=0&lpn=0&ln=1719&fr=&fmq=1628422175000_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fuimg.huixiaoer.net%2F86129182%2Fed53982d40587d22c847d4f67b752405.jpg!I978x550%26refer%3Dhttp%3A%2F%2Fuimg.huixiaoer.net%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1631014186%26t%3D5c391b8ed0ae5667a0f71555612a708f&fromurl=ippr_z2C%24qAzdH3FAzdH3Fv1go_z%26e3Bi7txtw5j6_z%26e3BgjpAzdH3FetjoAzdH3Fi5pjs-bm8dl8bd&gsm=3&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined',
        textbook:'华中科技大学国际学术交流中心（宏嘉酒店）位于风景秀丽、文化氛围浓郁的华中科技大学校园内，与中国·武汉光谷相拥为邻，武汉森林公园近在咫尺，美丽的喻家湖依偎身旁。酒店远离喧嚣的闹市，整体环境安静优雅，学术氛围浓厚，接待量大，是您举办各种活动，接待亲朋好友、开展培训学习、访问专家学者的首选之地。得天独厚的自然条件和人文环境，为顾客营造了一个舒适典雅的氛围。',
        callout:{
          content:'国际交流中心',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:6,
        markerId:'007',
        latitude: 30.515553,
        longitude:114.416656,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E5%9C%9F%E6%9C%A8%E5%AD%A6%E9%99%A2%E5%BB%BA%E6%88%90&step_word=&hs=0&pn=1&spn=0&di=27840&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=996938841%2C1641979790&os=1371628906%2C2772210076&simid=3468561752%2C489658299&adpicid=0&lpn=0&ln=1780&fr=&fmq=1628422286051_R&fm=&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=15&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fhiphotos.baidu.com%2Flbsugc%2Fpic%2Fitem%2F024f78f0f736afc3356caa96bf19ebc4b64512e4.jpg%26refer%3Dhttp%3A%2F%2Fhiphotos.baidu.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1631014295%26t%3D0e8d1a4556e814fbc9a08ff8739202d5&fromurl=ippr_z2C%24qAzdH3FAzdH3F4wr_z%26e3Bkwt17_z%26e3Bv54AzdH3FrswvjAzdH3Fckd8vl9bunvlda0uvbd8n1vj&gsm=2&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined',
        textbook:'土木工程与力学学院是在原华中理工大学力学系、土木建筑工程学院、原武汉城市建设学院的城市建设与管理系、道路与交通工程系二校四系的基础上发展起来的。',
        callout:{
          content:'土木',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:7,
        markerId:'008',
        latitude: 30.517237,
        longitude: 114.421816,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://mmbiz.qpic.cn/mmbiz_png/1mxCvEXUWw0JyKhZpl8focWn8BsPUtBVElcfOzXjM8VzRgiaasGSJIGSX8Gd8KVyDoWbRjKZJesjetKHblJqSxQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
        textbook:'华中科技大学船舶与海洋工程学院，前身是华中科技大学船舶与海洋工程系，在1959年由原华中工学院朱九思院长受海军委托而创建（朱九思院长曾兼任系主任）。经刘颖、程天柱、郑际嘉等船舶领域知名专家以及一批批科技人员的辛勤工作而发展至今。',
        callout:{
          content:'船海',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:8,
        markerId:'009',
        latitude: 30.517106,
        longitude: 114.41419,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://chem.hust.edu.cn/__local/2/07/93/43EF5B53ED315A0E28C809606FD_84C03D73_4833E.png',
        textbook:'华中科技大学化学与化工学院是在原华中科技大学化学系的基础上发展起来的。1953年，化学教研室与华中工学院同步建立，1981年原华中工学院化学教研室与物理教研室合并成立了理化系，1983年成立华中工学院化学系，设立应用化学本科专业，1993年经教育部批准设立精细化工本科专业（1999年变更为化学工程与工艺专业）。2006年11月成立华中科技大学化学与化工系,2008年5月成立华中科技大学化学与化工学院。',
        callout:{
          content:'化学',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:9,
        markerId:'010',
        latitude: 30.518311,
        longitude: 114.428301,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://mat.hust.edu.cn/__local/4/1B/77/F5A6CA942CFBC1B4A1F348BBFC4_F2343736_1A643.jpg',
        textbook:'华中科技大学材料科学与工程学院是在1953年华中工学院建院时的机械工程二系的基础上，经华中理工大学材料科学与工程系发展演变而来。材料科学与工程学院是经国家批准具有硕士、博士学位授予权的一级学科，拥有塑性成形模拟及模具技术国家重点实验室，“材料加工工程”国家重点学科、“材料学”湖北省重点学科。学院设有材料科学与工程博士后流动站。',
        callout:{
          content:'材料',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:10,
        markerId:'011',
        latitude: 30.514723,
        longitude: 114.420025,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://pic.sogou.com/d?query=%E5%8D%8E%E7%A7%91%E6%AF%9B%E4%B8%BB%E5%B8%AD%E5%83%8F&forbidqc=&entityid=&preQuery=&rawQuery=&queryList=&st=&did=7',
        textbook:'1967年，为响应部分师生提议，学校决定在校内建一尊毛泽东塑像。当年4月，学校基建科的张世岳到武昌农民运动讲习所，找到正在那里创作革命历史题材雕塑的朱达诚。校方与创作团队相互尊重，在各方面配合默契，塑像选址、造型、尺寸等环节进展顺利。第一稿出来后，他们发现主席帽沿下有一大片阴影，李正文来了以后建议做些调整，取掉帽子，采取将帽子拿在手上的设计。10月9日这一天，校方突然通知，要求迅速清理拆卸下来的石膏模具，全场大扫除，准备迎接敬爱的周恩来总理。周总理来了，他站在主席像前面的那个主席台上，讲话、鼓掌。',
        callout:{
          content:'毛主席像',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:11,
        markerId:'012',
        latitude: 30.516385,
        longitude: 114.42393,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://img01.sogoucdn.com/net/a/04/link?appid=100520145&url=https%3A%2F%2Fi02piccdn.sogoucdn.com%2F0b6b8354ff9b278a',
        textbook:'世界文化名人园是 华中科技大学的标志性建筑之一，坐落在校 眼镜湖边，由校友捐资50万元兴建，几根石柱支撑着一段弧形的大理石墙面，上面镌刻着 苏格拉底、 老子、 爱因斯坦、 孔子、 牛顿、 屈原、 张衡、 鲁迅、 歌德，共十位中外文化名人的名言。更让人回味无穷的是，这段弧形的墙面有意留有一个缺口，设计者称，希望由该校的青年学子们去填补这段空白。',
        callout:{
          content:'名人园',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:12,
        markerId:'013',
        latitude: 30.519155,
        longitude:114.416213,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://p8.itc.cn/images01/20200908/691b4c44537047f99bfe998d2e13e3fe.jpeg',
        textbook:'建校纪念碑位于华中科技大学青年园旁，是其前身华中工学院建校后所立。纪念碑的四足鼎立代表了建校时的四所学校。',
        callout:{
          content:'建校纪念碑',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:13,
        markerId:'014',
        latitude: 30.519918,
        longitude: 114.442122,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://pic.sogou.com/d?query=%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E7%88%B1%E5%9B%A0%E6%96%AF%E5%9D%A6%E5%B9%BF%E5%9C%BA&forbidqc=&entityid=&preQuery=&rawQuery=&queryList=&st=&did=17',
        textbook:'爱因斯坦广场 　　爱因斯坦广场简称爱广，坐落在 华中科技大学东校区 韵苑公寓旁，广场坐北朝南，背靠丛山，中央有一个爱因斯坦的雕塑，雕像底座铭刻着建成的背景《韵苑落成记》， 雕像背后是爱因斯坦的相对论公式E=c㎡。广场上铺满了大理石，十分光滑。广场北面有一条白色的知识长廊，广场周边有很多彩柱，夜晚 七彩灯光闪烁，是夜 晚学生举行活动的好地方。',
        callout:{
          content:'爱因斯坦广场',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:14,
        markerId:'015',
        latitude: 30.516422,
        longitude: 114.416677,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://xsyj.hust.edu.cn/__local/9/94/18/80870A736A441D1736B66D0F1B0_CECECC0D_1432A.jpg?e=.jpg',
        textbook:'西五楼由我校前身华中工学院建筑设计学院设计，并于1982年由中国建筑三局二公司建成，共五层，建筑总面积达9074平方米，总造价172.2万元。目前，共育48间教室用于教学，承担电气，化工，机械，电信，能源等教学任务。',
        callout:{
          content:'西五楼',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:15,
        markerId:'016',
        latitude: 30.518233,
        longitude: 114.413284,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://pic.sogou.com/d?query=%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E8%A5%BF%E6%93%8D%E5%9C%BA&forbidqc=&entityid=&preQuery=&rawQuery=&queryList=&st=&did=5',
        textbook:'有足球场，篮球场，排球场等运动健身好场所，三大操场之一',
        callout:{
          content:'西操',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:16,
        markerId:'017',
        latitude:30.515061,
        longitude: 114.426086,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://www.sohu.com/a/418616866_154724',
        textbook:'有观礼台，足球场，篮球场，排球场等运动健身好场所，三大操场之一',
        callout:{
          content:'中操',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:17,
        markerId:'018',
        latitude: 30.518837,
        longitude: 114.437926,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://p8.itc.cn/q_70/images03/20200930/c9fb06144b194f41863764c1af56248c.jpeg',
        textbook:'有足球场，众多篮球场，排球场等运动健身好场所，三大操场之一',
        callout:{
          content:'东操',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:18,
        markerId:'019',
        latitude: 30.518367,
        longitude: 114.414791,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://qungz.photo.store.qq.com/qun-qungz/jVL04mTYBBHh3.YcjtAIxw!!/V5bCQA3ODY2MDkwNjbQyRVhfRyUNA!!/800?w5=2133&h5=1600&rf=viewer_421',
        textbook:'西边体育馆主要为乒乓球，羽毛球等球类运动，每天运动健身人数很多。',
        callout:{
          content:'西体',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
      {
        id:19,
        markerId:'020',
        latitude: 30.518725,
        longitude: 114.441217,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://qcloud.dpfile.com/pc/gdo2kYVLX2YEKQ7MChq7tqaYLjF8F5xGePJNYoz9NACZRJPppoEcDwiwGK5id0MuuzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8twhW7bzr4O88Ivp4FuDG0SfCF2ubeXzk49OsGrXt_KYDCngOyCwZK-s3fqawWswzk.jpg',
        textbook:'华中科技大学韵苑体育馆位于华中科技大学东校区韵苑学生公寓北部。韵苑体育馆是三层建筑，其中第一层和第二层均为体育馆主体；第三层有跆拳道协会训练场等。',
        callout:{
          content:'韵体',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }

},
     {
        id:20,
        markerId:'021',
        latitude: 30.516745,
        longitude: 114.411696,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ250gL645/V5bCQA3ODY2MDkwNjZ9geRg9a6.Dw!!/800?w5=1600&h5=2133&rf=viewer_421',
        textbook:'煤燃烧国家实验室是经过专家评审后，国家计委和国家教委于1988年6月批准在华中工学院燃烧研究室的基础上建设煤燃烧国家重点实验室，主要开展煤的高效低污染燃烧理论和技术的研究。该实验室是能源动力系最重要的实验室，进行着许多项目的研究，同时也已经取得了大量成果。2019年3月，被科技部在2018年工程领域和材料领域国家重点实验室评估结果为工程领域良好类实验室。',
        callout:{
          content:'煤燃烧国家重点实验室',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },
     {
        id:21,
        markerId:'022',
        latitude: 30.517228,
        longitude: 114.415132,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=7b3b73cd5840b1a515c905c6&width=720&height=360&quality=80&fovx=120',
        textbook:'能源动力工程学院的主要办公楼，分为主楼与副楼两部分，两楼中间有供休闲锻炼使用的羽毛球场。该建筑中有着能源系的办公室，实验室，会议室以及学生自习室。其中副楼507自习室，环境舒适，日常学习氛围好，且设有独立的小组讨论间，是不可多得的自习佳地。',
        callout:{
          content:'动力楼（西十一楼）',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },    
 {
        id:22,
        markerId:'023',
        latitude: 30.51182,
        longitude: 114.411926,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ250gL645/V5bCQA3ODY2MDkwNjYM7uZgSxCpOQ!!/800?w5=800&h5=1185&rf=viewer_421',
        textbook:'能源学院新建的现代化大楼，还处于装修阶段，即将作为办公楼投入使用。',
        callout:{
          content:'新能源大楼',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },
     {
        id:23,
        markerId:'024',
        latitude: 30.517192,
        longitude: 114.415806,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=c5bce57e549fcfc652e5c5bc&width=720&height=360&quality=80&fovx=120',
        textbook:'能源学院的实验室，进行着制冷等方面课题的研究。',
        callout:{
          content:'能源实验室(西四楼）',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },
     {
        id:24,
        markerId:'025',
        latitude: 30.517293,
        longitude: 114.421512,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=97d4c877c6fe57bbc1f1cffc&width=720&height=360&quality=80&fovx=120',
        textbook:'东二楼是华中工学院建设过程中最早完成的教学楼建筑之一。其建筑平面设计重视功能性，属于国内早期现代注意教学建筑的典范。立面设计上运用中式古典风格装饰元素时，也体现了现代风格协调的特征。其设计者夏世昌，柳世英，陈伯齐等均为中国现代建筑史上著名的建筑大师。东二楼现作为船海学院的院楼，但能源动力系部分教授也在此办公。',
        callout:{
          content:'东二楼',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },
     {
        id:25,
        markerId:'026',
        latitude: 30.517643,
        longitude:114.411522 ,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://qungz.photo.store.qq.com/qun-qungz/jVL04mTYBBHh3.YcjtAIxw!!/V5bCQA3ODY2MDkwNjYRQ.RgS.HjDQ!!/800?w5=1440&h5=1080&rf=viewer_421',
        textbook:'位于紫菘公寓区路口的实验室，路过时可感受到其飘出的丝丝寒意。',
        callout:{
          content:'制冷实验室',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },
     {
        id:26,
        markerId:'027',
        latitude: 30.517324,
        longitude: 114.411451,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ250gL645/V5bCQA3ODY2MDkwNjaZgeRgKtkSDQ!!/800?w5=2133&h5=1600&rf=viewer_421',
        textbook:'',
        callout:{
          content:'能源学院的专用“广告牌”',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },
     {
        id:27,
        markerId:'028',
        latitude: 30.517613,
        longitude: 114.420143,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'https://poi-pic.cdn.bcebos.com/9eba62523e012210b7f68d00f76d1d26.jpg',
        textbook:'从南一楼向北延伸至瑜珈山脚下，是华中科技大学校园的中轴线，而校史纪念馆就位于这条中轴线上。该纪念馆由老机械厂改建而来，老机械厂是华中科技大学最早一批建筑之一，1954年就已开工生产，2012年改造成校史纪念馆。其中展示华中大60余年来的历史，有图片有文字，有模型，对了解学校历史有着极大的帮助。参观后对校史馆的设计感到惊叹不已，从外看上去校史馆并不是特别大，但是参观时感觉展览区域格外的大，而且展览顺序十分得当，使得在参观完之后梳理校史时思路十分清晰。',
        callout:{
          content:'校史馆',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },
     {
        id:28,
        markerId:'029',
        latitude: 30.51746,
        longitude: 114.420092,
        iconPath:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjapKxVh*3H7Fg!!/800?w5=50&h5=50&rf=viewer_421',
        image_url:'http://qungz.photo.store.qq.com/qun-qungz/V50aJmRq1dcwF60mjBDu1MbJ252KftiN/V5bCQA3ODY2MDkwNjbB3Q9hWksWLg!!/800?w5=1066&h5=800&rf=viewer_421     ',
        textbook:'位于华中科技大学校园的中轴线上，是最早的一批建筑之一，建设初期便达到了6500平方米，拥有200多台机器。曾经的学长们在5年的本科学习过程中需要在工厂中进行总计为期19周的3次实习，学习各种知识技能。在2012年被改为校史馆之前仍有老师傅坚守于此。曾经的机械厂虽条件简陋，但设备齐全、规模巨大，为我国培养了众多技术型人才。在一穷二白的当年仍然为我国第一台车床、潜艇等做出重大贡献，让人倾佩。',
        callout:{
          content:'老机械厂旧址',
          padding:10,
          borderWidth:2,
          borderColor:'#ffe4b5',
      }
      
    },

  ],
    showText:''
  },
  
  //点击我显示底部弹出框
clickme:function(e){

    console.log(e)
    var index = e.detail.markerId;
    this.setData({
      showText: this.data.markers[index].callout.content,
      nowText:this.data.markers[index].textbook,
      nowUrl:this.data.markers[index].image_url,
    })
  this.showModal();
  
},

//显示对话框
 showModal: function (e) {
   let text=this.data.showText;
   // 显示遮罩层
   var animation = wx.createAnimation({
     duration: 200,
     timingFunction: "linear",
     delay: 0
   })
   this.animation = animation
   animation.translateY(300).step()
   this.setData({
     animationData: animation.export(),
     showModalStatus: true,
     //id:e.currentTarget.dataset.markerId
   })
   setTimeout(function () {
     animation.translateY(0).step()
     this.setData({
       animationData: animation.export()
     })
   }.bind(this), 200)
 },
 //隐藏对话框
 hideModal: function () {
   // 隐藏遮罩层
   var animation = wx.createAnimation({
     duration: 200,
     timingFunction: "linear",
     delay: 0
   })
   this.animation = animation
   animation.translateY(300).step()
   this.setData({
     animationData: animation.export(),
   })
   setTimeout(function () {
     animation.translateY(0).step()
     this.setData({
       animationData: animation.export(),
       showModalStatus: false
     })
   }.bind(this), 200)
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log("ok");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})