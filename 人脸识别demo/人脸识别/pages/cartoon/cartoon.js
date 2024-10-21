// 导入对应的api
import {
    imgChangeBase64,
    getToken,
    facecChangeCartoon
} from "../../api/api"
import { saveImg } from "../../api/downloadImg"
// 图片转化为base64 之后的数据
var base64 = ""
// 漫画token
var token = ""
// 漫画的风格 铅笔
var option = 'pencil'
Page({
    data: {
        "cartList": [{
                enname: "cartoon",
                name: "卡通画风格"
            },
            {
                enname: "pencil",
                name: "铅笔风格"
            },
            {
                enname: "color_pencil",
                name: "彩色铅笔画风格"
            },
            {
                enname: "warm",
                name: "彩色糖块油画风格"
            },
            {
                enname: "wave",
                name: "神奈川冲浪里油画风格"
            },
            {
                enname: "lavender",
                name: "薰衣草油画风格"
            },
            {
                enname: "mononoke",
                name: "奇异油画风格"
            },
            {
                enname: "scream",
                name: "呐喊油画风格"
            },
            {
                enname: "gothic",
                name: "哥特油画风格"
            },
        ],
        show: false,
        ind: 1,
    },
    async onLoad(options) {

        this.setData({
            img_src: options.imgSrc,
            ind: this.data.ind
        })
        // 开启 加载
        wx.showLoading({
            title: '玩命加载中',
        })

        // 使用转化base64 的方法
        await imgChangeBase64(this.data.img_src).then(res => base64 = res)

        // 获取 Token (漫画的token)
        await getToken().then(res => token = res)

        // 调用图片转漫画
        await facecChangeCartoon(base64, token, option).then(res => {
            if (res.data.image) {
                // 拿到数据 显示成功获取数据图标
                wx.showToast({
                    title: '转化成功',
                })
                // 关闭加载图标
                wx.hideLoading()

                // 存储漫画数据
                this.setData({
                    cartoonImg: "data:image/jpg;base64," + res.data.image,
                    show: true
                })
            } else {
                wx.showToast({
                    title: '转化失败',
                    icon: 'error'
                })
            }
        })
    },
    changeType(event) {
        option = event.target.dataset.name
        this.setData({
            ind: event.target.dataset.ind
        })
        // 开启 加载
        wx.showLoading({
            title: '玩命加载中',
        })
        facecChangeCartoon(base64, token, option).then(res => {
            if (res.data.image) {
                // 拿到数据 显示成功获取数据图标
                wx.showToast({
                    title: '转化成功',
                })
                // 关闭加载图标
                wx.hideLoading()

                // 存储漫画数据
                this.setData({
                    cartoonImg: "data:image/jpg;base64," + res.data.image
                })
            } else {
                wx.showToast({
                    title: '转化失败',
                    icon: 'error'
                })
            }
        })
    },
    // 下载图片
    downloadImg() {
      saveImg(this.data.cartoonImg)
    }
})