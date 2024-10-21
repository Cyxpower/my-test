const handlerFn = require('./handlerFn')   //引入处理函数
const express = require('express');        //引入express服务器框架
const app = express(); // create express app  创建express服务器


const cors = require('cors');    //引入cors跨域策略
app.use(cors())  //使用cors跨域策略


app.get('/getdata', handlerFn.handlerFn)

app.get('/get', handlerFn.handlerFn2)

app.listen(9000, () => {
    console.log('服务器运行在端口9000');
})

