const express = require('express')
const router = express.Router()
const userinfo_handler = require('../router_handler/userinfo')
const expressjoi = require('@escook/express-joi')
const {
    update_userinfo_schema,
    update_password_schema,
    update_avatar_schema
} = require('../router_handler/schema/user')

router.get('/userinfo', userinfo_handler.GetUserInfo)
router.post('/userinfo', expressjoi(update_userinfo_schema), userinfo_handler.UpdateUserInfo)
router.post('/updatepwd', expressjoi(update_password_schema), userinfo_handler.updatePassword)
router.post('/update/avatar', expressjoi(update_avatar_schema), userinfo_handler.updateAvatar)


module.exports = router