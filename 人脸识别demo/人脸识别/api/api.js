// 导入 key 
import {
  cartoonKey,
  faceKey
} from "./api.key"


// 图片转base64 的方法
// imgTempPath 临时图片路径资源
var imgChangeBase64 = function (imgTempPath) {
  // resolve function 成功之后直接调用
  // reject function 失败之后直接调用
  return new Promise(function (resolve, reject) {
    // 拿到全局文件管理器
    var windowBoss = wx.getFileSystemManager()
    // 转化图片编码
    windowBoss.readFile({
      // 图片的路径
      filePath: imgTempPath,
      // 转化后的编码
      encoding: "base64",
      // 成功之后的方法
      success: res => {
        resolve(res.data)
      },
      // 失败时候的方法
      fail: error => {
        reject(error)
      }
    })
  })
}

// 漫画token 获取 (箭头函数)
var getToken = _ => {
  return new Promise((resolve, reject) => {
    // 获取本地缓存,查看本地缓存中有无漫画token
    let cartoonToken = wx.getStorageSync('cartoonToken')
    if (cartoonToken) {
      // 直接返回token值
      resolve(cartoonToken)
    } else {
      // 发起请求
      wx.request({
        url: 'https://aip.baidubce.com/oauth/2.0/token',
        method: "GET",
        data: cartoonKey,
        success: res => {
          resolve(res.data.access_token);
          // 存储漫画token
          wx.setStorage({
            key:'cartoonToken',
            data:res.data.access_token
          })
        },
        fail: error => {
          reject(error)
        }
      })
    }
  })
}

// 人脸转铅笔漫画
// base64 BASE64 数据格式的图片
// token 漫画的令牌
// option 漫画的风格
var facecChangeCartoon = (base64, token, option = 'pencil') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://aip.baidubce.com/rest/2.0/image-process/v1/style_trans?access_token=' + token,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        image: base64,
        option: option
      },
      success: res => {
        resolve(res)
      },
      fail: error => {
        reject(error)
      }
    })
  })
}



// 拍摄图片
let takePhoto = () => {
  return new Promise((resolve) => {
    let cameraContext = wx.createCameraContext();
    cameraContext.takePhoto({
      success: res => resolve(res.tempImagePath)
    })
  })
}

// 获取人脸token
let getFaceToken = () => {
  return new Promise((resolve, reject) => {
    // 先获取浏览器缓存有没有token
    let userToken = wx.getStorageSync('faceToken')
    if (userToken) {
      resolve(userToken)
    } else {
      wx.request({
        url: 'https://aip.baidubce.com/oauth/2.0/token',
        method: "GET",
        data: faceKey,
        success: res => {
          // 将token存储起来
          wx.setStorage({
            key: 'faceToken',
            data: res.data.access_token
          })
          resolve(res.data.access_token)
        },
        fail: error => reject(error)
      })
    }


  })
}


// 人脸的搜索
let faceSearch = (token, base64) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://aip.baidubce.com/rest/2.0/face/v3/search?access_token=' + token,
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        image: base64,
        image_type: "BASE64",
        group_id_list: "gs_1"
      },
      success: res => resolve(res),
      fail: error => reject(error)
    })
  })
}


// 人脸的注册
let faceAdd = (token, base64, userName) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://aip.baidubce.com/rest/2.0/face/v3/faceset/user/add?access_token=' + token,
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      data: {
        image: base64,
        image_type: "BASE64",
        group_id: "gs_1",
        user_id: "hxf_1",
        user_info: userName,
        action_type: 'REPLACE'
      },
      success: res => resolve(res),
      fail: error => reject(error)
    })
  })
}


// 判断用户有无登录
let userLoginIsOk = (tos) => {
  // 判断用户是否在对应缓存
  let tokenValue = wx.getStorageSync('hxfToken');

  // 如果值不存在 
  // tokenValue 为空 ==> false
  // !tokenValue 为空取反 ==> true
  if (!tokenValue) {
    // 页面的跳转 登录页面
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }

}

// 图片转戴口罩的二次元漫画
let faceChangeCartoonAuthorPhoto = (token,base64) => {
    return new Promise((resolve,reject) =>{
      wx.request({
      url:'https://aip.baidubce.com/rest/2.0/image-process/v1/selfie_anime?access_token=' + token,
        method:'POST',
        header:{
          'Content-Type':'application/x-www-form-urlencoded'
        },
        data:{
          image:base64,
          type:"anime_mask",
          mask_id:1
        },
        success:res => resolve(res),
        fail:err => reject(err)
      })
    })
}



/**
 * delFace 注销人脸
 *   token => 人脸token
 *   logID => 独一的标识符
 *   userID => 用户的令牌
 *   groupID => 分组id
 *   FaceToken => 登录成功之后的人脸token
 * **/ 
let delFace = (token,logID,userID,groupID,FaceToken) => {
    return new Promise((resolve,reject) => {
      console.log(FaceToken);
        wx.request({
          url: 'https://aip.baidubce.com/rest/2.0/face/v3/faceset/face/delete?access_token='+token,
          method:"POST",
          header:{
            'Content-Type':'application/json'
          },
          data:{
            log_id:logID,
            user_id:userID,
            group_id:groupID,
            face_token:FaceToken
          },
          success:res => {
            console.log(res);
            if(!res.data.error_code) {
              wx.showToast({
                title: '注销成功',
              })
            }else if(res.data.error_code == "223106") {
              wx.showToast({
                title: '人脸不存在',
                icon:"error"
              })
            }else {
              wx.showToast({
                title: '注销失败',
              })
            }
            
          },
          fail:err => reject(err)
        })
    })
}

// 模块化导出
module.exports = {
  imgChangeBase64,
  getToken,
  facecChangeCartoon,
  takePhoto,
  getFaceToken,
  faceSearch,
  faceAdd,
  userLoginIsOk,
  faceChangeCartoonAuthorPhoto,
  delFace
}