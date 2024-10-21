var express = require('express')
var router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))





router.get('/', function (req, res) {
    const query = req.query
    res.send({
        data:query,
        status: 0,
        msg: 'get请求成功'

    })

})
router.post('/', function (req, res) {
    const body = req.body
    res.send({
        data:body,
        status:0,
        msg:'post请求成功'
    })

})

module.exports = router