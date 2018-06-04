//index.js
//获取应用实例
// const app = getApp()

var app = getApp()
var token = require('../logs/token.js')
const requestUrl = "https://itachi971009.cn/api/teams/list/v1.1"
const duration = 2000

Page({
  data: {
    isCollection: false,
    red_img: "../images/icon_star_red.png",
    gray_img: "../images/icon_star_gray.png",
    navbar: ['全部', '进行中', '赛程', '赛果', '关注'],
    currentTab: 0,
    home_page_array: [{
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
    underway_array: [{
      match_name: '捷U21',
      match_time: '17:30',
      match_minute: "43'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '斯切尔科夫斯巴达',
      score: '4-3',
      guest_club: '亚莱',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:30',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '沙功那空府',
      score: '4-3',
      guest_club: '罗勇',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
      }, {
        match_name: '捷U21',
        match_time: '17:30',
        match_minute: "17'",
        main_odds: '-1',
        guest_odds: '1.5',
        main_club: '沙功那空府',
        score: '4-3',
        guest_club: '罗勇',
        half_count: '4-2',
        horn: '1-10',
        mainViolationCountRed: '3',
        mainViolationCountYellow: '5',
        guestviolationCountRed: '2',
        guestviolationCountYellow: '4',
        img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:30',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '沙功那空府',
      score: '4-3',
      guest_club: '罗勇',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
      }, {
        match_name: '捷U21',
        match_time: '17:30',
        match_minute: "17'",
        main_odds: '-1',
        guest_odds: '1.5',
        main_club: '沙功那空府',
        score: '4-3',
        guest_club: '罗勇',
        half_count: '4-2',
        horn: '1-10',
        mainViolationCountRed: '3',
        mainViolationCountYellow: '5',
        guestviolationCountRed: '2',
        guestviolationCountYellow: '4',
        img_path: "../images/icon_star_gray.png"
    }, {
      match_name: '捷U21',
      match_time: '17:30',
      match_minute: "17'",
      main_odds: '-1',
      guest_odds: '1.5',
      main_club: '沙功那空府',
      score: '4-3',
      guest_club: '罗勇',
      half_count: '4-2',
      horn: '1-10',
      mainViolationCountRed: '3',
      mainViolationCountYellow: '5',
      guestviolationCountRed: '2',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
      }, {
        match_name: '捷U21',
        match_time: '17:30',
        match_minute: "17'",
        main_odds: '-1',
        guest_odds: '1.5',
        main_club: '沙功那空府',
        score: '4-3',
        guest_club: '罗勇',
        half_count: '4-2',
        horn: '1-10',
        mainViolationCountRed: '3',
        mainViolationCountYellow: '5',
        guestviolationCountRed: '2',
        guestviolationCountYellow: '4',
        img_path: "../images/icon_star_gray.png"
      }, {
      match_name: '捷U21',
      match_time: '17:30',
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
      guestviolationCountRed: '3',
      guestviolationCountYellow: '4',
      img_path: "../images/icon_star_gray.png"
    }],
  },
  img_change: function(e) {
    console.log(e.currentTarget.dataset.item)
    var item = e.currentTarget.dataset.item
    if (item.img_path == '../images/icon_star_gray.png'){
      item.img_path = '../images/icon_star_red.png'
    }
    this.setData({
      item: item
    })
    console.log(item)
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    var event_name = e.currentTarget.dataset.id;
    if (event_name == "赛程"){
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 3000,
        mask: true
      })
      wx.navigateTo({
        url: '../match_timetable/match_timetable',
      })
    }
    if (event_name == "赛果") {
      wx.navigateTo({
        url: '../result_of_the_match/result_of_the_match',
      })
    }
  },
  onLoad: function () {
    wx.request({
      url: requestUrl,
      method: 'POST',
      data: {
        "token": token.genToken(),
        "ID": '290',
        "openid": 'robotrobot1524220929.013399',
        "appid": '497',
        "app_version": 'dsfsf'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        try {
          wx.setStorageSync('teams_list', res.data.data)
        }
        catch (e) {
          console.log(e)
        }
      }
    })
  },
  match_odds: function(res) {
    console.log(res)
    wx.navigateTo({
      url: '../asian_odds/asian_odds',
    })
  }
})  

'2018yzdf@', 'yuanzhi','dongfang'