var app = getApp()

Page({
  data: {
    navbar: ['今天', '5-30\n星期三', '5-31\n星期四', '6-1\n星期五', '6-2\n星期六', '6-3\n星期日', '6-4\n星期一'],
    currentTab: 0,
    start_time: '2018-05-29',
    end_time: '2018-12-01',
    today_data_list: [{
      match_name: '捷U21',
      match_time: '17:00',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '奥斯特瓦拉U21',
      score: '4-3',
      guest_club: '布拉格斯巴达U21',
      half_count: '4-2',
      horn: '0-10',
      mainViolationCountRed: '1',
      mainViolationCountYellow: '2',
      guestviolationCountRed: '3',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:00',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '墨西哥U2',
      score: '4-3',
      guest_club: '越南U19',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:00',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '墨西哥U20',
      score: '4-3',
      guest_club: '越南U19',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:00',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '墨西哥U20',
      score: '4-3',
      guest_club: '越南U19',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:00',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '墨西哥U20',
      score: '4-3',
      guest_club: '越南U19',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:00',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '墨西哥U20',
      score: '4-3',
      guest_club: '越南U19',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:00',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '墨西哥U20',
      score: '4-3',
      guest_club: '越南U19',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:00',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '墨西哥U20',
      score: '4-3',
      guest_club: '越南U19',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }],
  } ,
  navbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  bindDateChange: function(e) {
    console.log(e)
    this.setData({
    })
  },
  onUnload: function() {
    wx.navigateBack({
      url: '../index/index',
    })
  },
  match_detail: function(res) {
    console.log(res)
    wx.navigateTo({
      url: '../asian_odds/asian_odds',
    })
  }
})