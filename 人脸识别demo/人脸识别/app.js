// app.js
App({

  onLaunch() {
      // 清楚缓存 避免后续程序的登录出问题
      wx.removeStorageSync('userName')
      wx.removeStorageSync('userPhoto')
      wx.removeStorageSync('tempImgPath')
      wx.removeStorageSync('hxfToken')
      
//      if(!wx.cloud) {
//        wx.showToast({
//          title: '请提高项目版本,当前版本不支持云开发',
//        })
//      }else {
//        wx.cloud.init({
//          env:'cloud1-1gkvbginae1abda6'
//        })
//      }
  },
  globalData: {
    userInfo: null
  }
})
