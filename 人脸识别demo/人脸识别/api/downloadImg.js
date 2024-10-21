    // 保存图片
    let settingWritePhotosAlbum = false;
    /**
     *   saveImg => 下载 base64 数据格式的图片
     * 
     *   url => base64 图片资源数据
     *   callback => 图片保存完毕触发的方法
     * **/
    const saveImg = function (url, callback) {
      //获取文件管理器对象
      const fs = wx.getFileSystemManager()
      //文件保存路径
      const Imgpath = wx.env.USER_DATA_PATH + '/image' + '.png'
      //base64图片文件
      let imageSrc = url.replace(/^data:image\/\w+;base64,/, '')

      //写入本地文件
      fs.writeFile({
        filePath: Imgpath,
        data: imageSrc,
        encoding: 'base64',
        success(res) {
          console.log(res)
          if (url) {
            if (settingWritePhotosAlbum) {
              wx.getSetting({
                success: res => {
                  if (res.authSetting['scope.writePhotosAlbum']) {
                    wx.saveImageToPhotosAlbum({
                      filePath: Imgpath,
                      success: () => {
                        wx.hideLoading();
                        callback && callback();
                        wx.showToast({
                          title: '保存成功'
                        });
                      },
                      fail(e) {
                        wx.hideLoading();
                        wx.showToast({
                          title: '下载失败，错误原因：' + e.errMsg,
                          icon: "none"
                        });
                      }
                    });
                  } else {
                    wx.showModal({
                      title: '提示',
                      content: '请先在设置页面打开“保存相册”使用权限',
                      confirmText: '去设置',
                      cancelText: '算了',
                      success: data => {
                        if (data.confirm) {
                          wx.openSetting();
                        }
                      }
                    });
                  }
                }
              });
            } else {
              settingWritePhotosAlbum = true;
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success: () => {
                  wx.saveImageToPhotosAlbum({
                    filePath: Imgpath,
                    success: () => {
                      wx.hideLoading();
                      callback && callback();
                      wx.showToast({
                        title: '保存成功'
                      });
                    },
                    fail(e) {
                      wx.hideLoading();
                      wx.showToast({
                        title: '下载失败，错误原因：' + e.errMsg,
                        icon: "none"
                      });
                    }
                  });
                }
              });
            }
          } else {
            wx.showToast({
              title: '未找到图片',
              icon: 'none'
            });
          }
        }
      })
    }

    module.exports = {
      saveImg
    }

    