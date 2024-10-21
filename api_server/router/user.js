const express = require('express')
const router = express.Router()

const userhandler = require('../router_handler/user')

const expressjoi = require('@escook/express-joi')
const{reg_login_schema} = require('../router_handler/schema/user')


router.post('/register',expressjoi(reg_login_schema), userhandler.register)
router.post('/login',expressjoi(reg_login_schema), userhandler.login)








module.exports = router