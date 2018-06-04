// pages/asian_odds/asian_odds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      NumberOfSeconds: "17'",
      MatchScore: '0 - 1',
      main_club_name: '皇家马德里',
      guest_club_name: '巴塞罗那',
      navbar: ['亚赔', '欧赔', '大小', '战绩'],
      currentTab: 0,
      asian_odds_list: [
        {name:'ManbetX',
        main_first_home_odds:'0.80',
        draw_first_home_odds:'-0.25',
        guest_first_home_odds:'0.96',
        main_home_odds:'0.81',
        draw_home_odds:'0.25',
        guest_home_odds: '1.05'
        },
        {
          name: 'ManbetX5555555555555555',
          main_first_home_odds: '0.80',
          draw_first_home_odds: '-0.25',
          guest_first_home_odds: '0.96',
          main_home_odds: '0.81',
          draw_home_odds: '0.25',
          guest_home_odds: '1.05'
        },
        {
          name: 'ManbetX',
          main_first_home_odds: '0.80',
          draw_first_home_odds: '-0.25',
          guest_first_home_odds: '0.96',
          main_home_odds: '0.81',
          draw_home_odds: '0.25',
          guest_home_odds: '1.05'
        }
      ],
      performance_detail_list: [
        {
          date: '2018 05/30',
          matching: '英超',
          main_club: '皇家马德里555555',
          score: '2-1',
          guest_club: '巴塞罗那',
          result: '0.5/1 输'
        },
        {
          date: '2018 05/30',
          matching: '英超',
          main_club: '皇家马德里',
          score: '2-1',
          guest_club: '巴塞罗那iiiiiiiiiiiii',
          result: '0\n走'
        },
        {
          date: '2018 05/30',
          matching: '英超',
          main_club: '皇ma',
          score: '2-1',
          guest_club: '巴塞',
          result: '0.5/1 赢'
        }
      ],
      summary_data_item: ['最高值', '最低值', '平均值'],
      summary_data:[
        {
          main_first_home_odds: '4.4',
          draw_first_home_odds: '3.4',
          guest_first_home_odds: '1.8',
          main_home_odds:'41',
          draw_home_odds: '21',
          guest_home_odds: '1.87'
        },
        {
          main_first_home_odds: '4.4',
          draw_first_home_odds: '3.4',
          guest_first_home_odds: '1.8',
          main_home_odds: '41',
          draw_home_odds: '21',
          guest_home_odds: '1.87'
        },
        {
          main_first_home_odds: '4.4',
          draw_first_home_odds: '3.4',
          guest_first_home_odds: '1.8',
          main_home_odds: '41',
          draw_home_odds: '21',
          guest_home_odds: '1.87'
        }
      ],
      european_odds_list: [
        {
          company_name: 'BET3622222225',
          main_first_home_odds: '7',
          draw_first_home_odds: '4.8',
          guest_first_home_odds: '1.33',
          main_home_odds: '51',
          draw_home_odds: '51',
          guest_home_odds: '1.33'
        }
      ]
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
  
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  asian_odds: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../asian_odds_change/asian_odds_change',
    })
  }
})