import {
    takePhoto,
    imgChangeBase64,
    getFaceToken,
    faceSearch,
    getToken,
    facecChangeCartoon,
    faceChangeCartoonAuthorPhoto,
    delFace
} from "../../api/api"
Page({

    // 用户登录
    async onLogin() {
        // 临时图片路径
        let tempImgPath = ""

        // base64 数据格式
        let base64 = ""

        // 人脸token
        let faceToken = ""

        // 漫画token
        let cartoonToken = ""

        // 漫画 token
        await getToken().then(res => cartoonToken = res)

        // 1. 获取图片
        await takePhoto().then(res => tempImgPath = res)

        // 2. 图片转base64
        await imgChangeBase64(tempImgPath).then(res => base64 = res)

        // 3. 获取token(人脸)
        await getFaceToken().then(res => faceToken = res)

        

        // 4. 人脸搜索(登录)
        await faceSearch(faceToken, base64).then(res => {

            if (res.data.error_code == 222207) {
                wx.showToast({
                    title: '对不起,请注册',
                    icon: "error"
                })
            } else {
                // 存储 token  判断用户是否已经
                wx.setStorage({
                    key: "hxfToken",
                    data: res.data.result.face_token
                })

                // 拿到人名
                let userName = res.data.result.user_list[0].user_info

                // 存储用户名字
                wx.setStorage({
                    key: 'userName',
                    data: userName
                })

                // 发起一个漫画的请求
                faceChangeCartoonAuthorPhoto(cartoonToken,base64).then(res => {
                    console.log("res=>",res);
                     // 存储用户的头像(真人头像)
                 wx.setStorage({
                    key: 'userPhoto',
                    // 在登录的时候拿到的临时图片
                    data: res.data.image
                })
                // 缓存未转化的图片
                wx.setStorage({
                  key:'tempImgPath',
                  data:tempImgPath
                })

                 // 登录成功,跳转页面
                 wx.reLaunch({
                    url: '/pages/home/home',
                })
                wx.showToast({
                    title: '登录成功',
                })
                })
               

                
                

            }
        })
    },

    // 用户注册
    onRegister() {
        // 页面的跳转
        wx.navigateTo({
            url: '/pages/register/register',
        })
    },

    // 判断用户有无登录
    onShow() {
        let tokenValue = wx.getStorageSync('hxfToken')
        if (tokenValue) {
            wx.switchTab({
                url: '/pages/home/home',
            })
        }
    },

    // 注销人脸
   async ondelFace() {
      let faceToken = ""

      // 人脸的token 
    await  getFaceToken().then(res => faceToken = res)

      // 独一的标识符
      let logID = await wx.getStorageSync('log_id')

      // 用户的令牌
      let userID = "hxf_1"

      // 登录之后的人脸token
        let hxfToken = await wx.getStorageSync('hxfTokenDel')
      
      // 分组的id
      let groupID = 'gs_1'

       // 调用接口,删除人脸
       await  delFace(faceToken,logID,userID,groupID,hxfToken)
    }

})