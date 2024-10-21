const path = require('path')
const pathstr = path.join('/a', '/c', '/g', '/../', '/b')
console.log(pathstr);



const path2 = path.join(__dirname, '/grade.txt')
console.log(path2);
const fs = require('fs')
fs.readFile(path.join(__dirname, '/grade-ok.txt'),'utf-8', function (err,datastr) {
    if (err) {
        console.log("文件读取失败", err.message);
    }
    console.log(datast1r);
})
const fpath = path.basename('/a/b/c/d/1.html','.html')
console.log(fpath);
