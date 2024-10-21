Page({
    data: {
        // 人脸检测之后的数据
        faceList:{}
    },
    // 页面加载完毕触发
    onLoad(options) {
        this.setData({
            img_src:options.imgSrc
        })

        // 开启加载效果
        wx.showLoading({
          title: '玩命加载中',
        })

        // 获取图片信息
        wx.getImageInfo({
            // 临时图片
            src:this.data.img_src,
            success:res => {
                console.log("图片的信息",res);
                this.setData({
                    count: 320 / res.width
                })
            }
        })

        // 图片转base64 格式
        this.changeImgBase64(this.data.img_src)
    },

    /**
     * changeImgBase64 :图片 转化base64
     * imgSrc : 临时图片路径
     * */ 
    changeImgBase64(imgSrc) {
        // 获取全局文件管理器
        var windowBoss = wx.getFileSystemManager();
        // 转化格式
        windowBoss.readFile({
           filePath:imgSrc,
           encoding:"base64",
           success:res => {
               this.setData({
                   base64:res.data
               })

               this.getToken()
           }
        })
    },

    /**
     * getToken 获取人脸识别 Token
     * **/
    getToken() {
        wx.request({
          url: 'https://aip.baidubce.com/oauth/2.0/token',
          method:"GET",
          data:{
            // grant_type： 必须参数，固定为client_credentials；
            // client_id： 必须参数，应用的API Key；
            // client_secret： 必须参数，应用的Secret Key；
            "grant_type" : "client_credentials",
            "client_id" : "abZy4ZNGcIieMugK84Qj9yIg",
            "client_secret":"ZGsFdjyxOaDtt5vSeveqqiOlWgmSdm9A"
          },
          success:res =>{
              this.setData({
                  token:res.data.access_token
              })

              this.face(this.data.base64, this.data.token)
          }
        })
    },

    /**
     * face 人脸检测
     * base64 图片转化为base64之后的数据
     * token 验证令牌
     * */ 
    face(base64,token) {
        wx.request({
          url: 'https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=' + token,
          method:"POST",
          header:{
             "Content-Type":"application/json" 
          },
          data:{
            image:base64,
            image_type:"BASE64",
            face_field:"age,beauty,expression,face_shape,gender,glasses,landmark,landmark150,quality,eye_status,emotion,face_type,mask,spoofing"
          },
          success:res => {
              console.log("人脸识别数据=>",res);
              // 关闭加载效果
              wx.hideLoading()
              // 判断获取的值
              if(!res.data.error_code) {
                  // 加载成功的图标
                  wx.showToast({
                    title: '加载成功',
                  })
                  this.setData({
                      faceList: res.data.result.face_list[0]
                  })
              }else {
                wx.showToast({
                    title: '加载失败',
                    icon:"error"
                  })
              }
          }
        })
    }
})