const express = require('express')
const expressjoi = require('@escook/express-joi')
const router = express.Router()
const artcate_handler = require('../router_handler/artcate')
const {
    add_cate_schema,
    delete_cate_schema,
    get_cate_schema,
    update_cate_schema
} = require('../router_handler/schema/artcate')

router.get('/cates', artcate_handler.getArticleCates)
router.post('/addcates', expressjoi(add_cate_schema), artcate_handler.addArticleCates)
router.get('/deletecate/:id', expressjoi(delete_cate_schema), artcate_handler.deleteArticleCates)
router.get('/cates/:id', expressjoi(get_cate_schema), artcate_handler.getArticleCatesByid)
router.post('/updatecate', expressjoi(update_cate_schema), artcate_handler.updateArticleCates)



module.exports = router