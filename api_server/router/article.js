const express = require('express')
const router = express.Router()
const article_handler =require('../router_handler/article')

router.post('/add',article_handler.addArticles)

module.exports = router