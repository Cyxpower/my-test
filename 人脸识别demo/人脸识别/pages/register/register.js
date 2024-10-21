import {
    takePhoto,
    imgChangeBase64,
    getFaceToken,
    faceAdd
} from "../../api/api"
Page({
    data: {
        value: '',
    },
    // 输入名称
    onChange(event) {
        this.setData({
            value: event.detail
        })
    },
    // 用户人脸注册
    async userRegister() {
        if (this.data.value == "" && this.data.value == 0) {
            wx.showToast({
                title: '请输入你的名字',
                icon: "error"
            })
        } else {
            let tempImgPath = "";
            let base64 = "";
            let faceToken = ""
            // 1. 拍摄照片
            await takePhoto().then(res => tempImgPath = res)

            // 2. 转化格式
            await imgChangeBase64(tempImgPath).then(res => base64 = res)

            // 3. 获取token
            await getFaceToken().then(res => faceToken = res)

            // 4. 人脸注册
            await faceAdd(faceToken, base64, this.data.value).then(res => {
                console.log("人脸注册之后的信息", res);
                // 存储用户注册成功之后的
                wx.setStorage({
                  key:'log_id',
                  data:res.data.log_id
                })

                // 缓存人脸登录之后的token
                wx.setStorage({
                  key:'hxfTokenDel',
                  data:res.data.result.face_token
                })

                if(!res.data.error_code) {
                    // 跳转到登录页面
                    wx.navigateTo({
                      url: '/pages/login/login',
                    })

                    // 注册成功
                    wx.showToast({
                      title: '注册成功',
                    })
                }
            })
        }


    }
})