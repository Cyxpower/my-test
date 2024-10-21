import {userLoginIsOk} from "../../api/api"
Page({
    data: {
        // 闪光灯
        flashList:["auto","on","off"],
        // 闪光灯 类型
        flashCount:0,
        // 临时图片路径
        tempImgPath:"",
        // 前后摄像
        devicePositionBoolean:false,
        // 弹出层状态
        show: false,
    },
    // 闪光灯
    changeFlash() {
        // this.setData({
        //     flashCount:this.data.flashCount >= 2 ?  0 : ++this.data.flashCount 
        // })
        // 每次点击 让 类型自加一
        this.data.flashCount = this.data.flashCount + 1

        if( this.data.flashCount > 2) {
            this.data.flashCount = 0
        }
        this.setData({
            flashCount : this.data.flashCount
        })
    },
    // 拍摄
    take() {
        // 获取相机的上下文
        var cameraContext  = wx.createCameraContext();
        // 实现拍摄
        cameraContext.takePhoto({
            success: res => {
                this.setData({
                    tempImgPath:res.tempImagePath,
                    show:true
                })
            }
        })
    },
    // 前后摄像
    changeDevice() {
        this.setData({
            devicePositionBoolean: !this.data.devicePositionBoolean
        })
    },
    // 拍摄值后去到人脸页面
    navigateFace() {
        // 跳转页面 + 传递参数
        wx.navigateTo({
          url: '/pages/face/face?imgSrc=' + this.data.tempImgPath,
        })
    },
    // 拍摄后 去到漫画页面
    navigateCartoon() {
        wx.navigateTo({
            url: '/pages/cartoon/cartoon?imgSrc='+ this.data.tempImgPath,
          })
    },
    onShow() {
        userLoginIsOk() }
})