const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
// const cors = require('cors')
// app.use(cors())
// app.use(express.json())


app.use(
  '/web_feed/getWebList',
  createProxyMiddleware({
    target: 'https://r.inews.qq.com/',
    // secure: false,
    changeOrigin: true,
  }),
);
app.listen(80,()=>{
    console.log("服务器运行在http://127.0.0.1");
})

