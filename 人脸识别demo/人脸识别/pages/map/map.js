import {
    userLoginIsOk
} from "../../api/api"
Page({
    data: { },


    onShow() {
        userLoginIsOk()
    },

})