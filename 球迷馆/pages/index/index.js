//index.js
//获取应用实例
// const app = getApp()

var app = getApp()

Page({
  data: {
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
      mainViolationCount: '1',
      guestviolationCount: '2'
    },{
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
      mainViolationCount: '1',
      guestviolationCount: '2'
      }, {
        match_name: '捷U21',
        match_time: '17:30',
        match_minute: "43'",
        main_odds: '-1',
        guest_odds: '1.5',
        main_club: '斯切尔科夫斯巴达',
        score: '4-3',
        guest_club: '亚莱顶顶顶顶顶顶',
        half_count: '4-2',
        horn: '1-10',
        mainViolationCount: '1',
        guestviolationCount: '2'
    },{
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
      mainViolationCount: '1',
      guestviolationCount: '2'
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
        mainViolationCount: '1',
        guestviolationCount: '2'
    },{
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
      mainViolationCount: '1',
      guestviolationCount: '2'
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
        mainViolationCount: '1',
        guestviolationCount: '2'
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
      mainViolationCount: '1',
      guestviolationCount: '2'
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
      mainViolationCount: '1',
      guestviolationCount: '2'
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
      mainViolationCount: '1',
      guestviolationCount: '2'
    }],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  match_timetable_page: function(){
    wx.navigateTo({
      url: '../match_timetable/match_timetable',
    })
  }
})  