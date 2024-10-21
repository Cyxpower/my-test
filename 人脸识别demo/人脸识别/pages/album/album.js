import { userLoginIsOk } from "../../api/api"
Page({
    data: {
        img_src: "",
        // 弹出框的状态
        show: false,
    },
    // 调用本地图片
    openImg() {
        wx.chooseMedia({
            count: 1,
            mediaType: ["image"],
            sourceType: ["album"],
            success: res => {
                this.setData({
                    img_src: res.tempFiles[0].tempFilePath,
                    show:true
                })
            }
        })
    },
    // 打开漫画
    navigateCartoon() {
        //  去到新的页面,然后传递图片的临时途径
        wx.navigateTo({
          url: '/pages/cartoon/cartoon?imgSrc=' + this.data.img_src,
        })
    },
    // 打开人脸检测
    naviagteFace() {
        console.log("人脸检测");
        // 跳转新的页面 + 携带图片的临时路径
        wx.navigateTo({
          url: '/pages/face/face?imgSrc='+ this.data.img_src,
        })
    },
    onShow() {
        userLoginIsOk()
    }
})