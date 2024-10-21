const fs = require('fs')
fs.readFile('./grade.txt', 'utf8', function (error, datastr) {
    if (error) {
        console.log("文件读取失败！，" + error.message);
        return
    }
    console.log("文件读取成功，内容是" + datastr);


    const arrOld = datastr.split(' ')
    console.log(arrOld);
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    console.log(arrNew);
    const newStr = arrNew.join('\r\n')
    console.log(newStr);

    fs.writeFile('./grade-ok.txt', newStr, function (err) {
        if (err) {
            console.log("文件写入失败", err.message);
        }
    })
})