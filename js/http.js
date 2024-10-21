const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
    console.log("欢迎访问自己的服务器");
    const url = req.url
    let fpath = ""
    if (url ==="/") {
        fpath = path.join(__dirname,'/test/index.html')
    }else{
        fpath = path.join(__dirname,'/test',url)
    }
    console.log("拼接的地址为",__dirname,url,fpath);
    fs.readFile(fpath, 'utf-8', function (err, datastr) {
        if (err) {
            return res.end('404 NOT FOUND')
        }
        res.end(datastr)
    })

})
server.listen(80, () => {
    console.log("服务器已经开启服务，地址是http://127.0.0.1");
})