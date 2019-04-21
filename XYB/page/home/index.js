Page({
  data: {
    page: 1,
    pageSize: 30,
    hasMoreData: true,
    contentlist: [],
    background: ['green', 'red', 'yellow'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    swipers: [{
      image: "/image/jd1.jpg"
    }, {
      image: "/image/jd2.jpg"
    }, {
      image: "/image/jd3.jpg"
    }, {
      image: "/image/jd4.jpg"
    }, {
      image: "/image/jd5.jpg"
    }],
    logos: [{
        image: "/image/ssselect.png",
        title: "找兼职",
        url: "../home/index"
      }, {
        image: "/image/focus_active.png",
        title: "失物招领"
      }, {
        image: "/image/announce_active.png",
        title: "校园趣事"
      },
      {
        image: "/image/dianpu.png",
        title: "二手交易"
      }, {
        image: "/image/orderListSelect.png",
        title: "校园报修"
      }
    ],
    post: [{
        title: "发传单",
        time: "2019-4-20",
        content: "周六至周日需要无人发传单，联系电话：18224995161"
      },
      {
        title: "发传单",
        time: "2019-4-20",
        content: "周六至周日需要无人发传单，联系电话：18224995161"
      },
      {
        title: "发传单",
        time: "2019-4-20",
        content: "周六至周日需要无人发传单，联系电话：18224995161"
      },
      {
        title: "发传单",
        time: "2019-4-20",
        content: "周六至周日需要无人发传单，联系电话：18224995161"
      },
      {
        title: "发传单",
        time: "2019-4-20",
        content: "周六至周日需要无人发传单，联系电话：18224995161"
      }
    ]

  },
  check: function(res) {
    var id;
    var thit = this;
    post: [{
      title: "兼职",
      conent: "这里是兼职信息"
    }]
    thit.setData({
      post: post
    })
  },
  
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
   
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
})