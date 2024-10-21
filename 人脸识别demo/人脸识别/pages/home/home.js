import {userLoginIsOk} from "../../api/api"
let ti = ""
// let db = wx.cloud.database()
Page({
    data: {
      flash:false,
      backgroundImg:'../../image/me.jpg'
    },
    // 退出登录
    unLogin() {
        // 删除 用户token
        wx.removeStorageSync('hxfToken');
        // 跳转到登录页面
        wx.navigateTo({
          url: '/pages/login/login',
        })
        
    },
    // 页面加载完毕
    onLoad(options) {
        // 页面打开获取用户名字
        let userName = wx.getStorageSync('userName')

         // 获取用户的头像
         let userPhoto = wx.getStorageSync('userPhoto')

         // 临时图片
         let tempImgPath = wx.getStorageSync('tempImgPath')

         // 背景图片
         let backImg = ""
         // 从云数据库中获取文件id
        //  db.collection('face').orderBy('_id','desc').limit(1).get().then(res => {
        //    wx.cloud.downloadFile({
        //     fileID:res.data[0].backImg
        //    }).then(res =>{
        //      backImg = res.tempFilePath ? res.tempFilePath : '../../image/me.jpg'

        //      this.setData({
        //         backgroundImg:backImg
        //      })
        //    })
        //  })

     

        this.setData({
            userName: userName,
            tempImgPath:  tempImgPath,
            userPhoto:"data:image/jpg;base64," + userPhoto,
          
        })

        this.animation()
    },

    // 头像的动画
    animation() {
        // 开启定时器
        let timer = setInterval(() => {
          this.setData({
            flash: !this.data.flash,
          })
           // 清除定时器
         clearInterval(timer)
         // 再去调用
         this.animation()
        },2000)

        ti = timer
    },

    onShow() {
        userLoginIsOk();
    },
    // 页面隐藏,需要关闭定时器
    onHide() {
         // 清除定时器
         clearInterval(ti)
    },

    // 获取默认的背景图片
    setBackImg() {
      // 拍摄或从手机相册中选择图片或视频
      wx.chooseMedia({
        count:1,
        mediaType:['image'],
        sourceType:['album'],
        success:res => {
          this.setData({
            backgroundImg:res.tempFiles[0].tempFilePath
          })


         // 将背景图片存储到云数据库
        //  wx.cloud.uploadFile({
        //    // 存储的路径名称:
        //    cloudPath:'backImg.png',
        //    // 临时图片资源参数
        //    filePath:res.tempFiles[0].tempFilePath
        //  }).then(res => {
        //    console.log(res);
        //    云存储之后的背景图片返回的文件id存储在云数据库中
        //    db.collection('face').add({
        //      data:{
        //        'backImg':res.fileID
        //      }
        //    })
        //  })
        }
      })
    }
})