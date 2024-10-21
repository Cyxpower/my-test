const fs = require('fs')
const path = require('path')


const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/


fs.readFile(path.join(__dirname, '/index.html'), 'utf-8', function (err, datastr) {
    if (err) {
        return console.log("文件读取失败");
    }
    resolveCss(datastr)
    resolveScript(datastr)
    resolveHtml(datastr)
})

function resolveCss(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, './test/index.css'), newCSS, function (err) {
        if (err) {
            return console.log("文件写入失败", err.message);
        }
        console.log("文件写入成功");
    })
}

function resolveScript(htmlStr) {

    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './test/index.js'), newJS, function (err) {
        if (err) {
            return console.log("文件写入失败", err.message);
        }
        console.log("文件写入成功");
    })
}

function resolveHtml(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './test/index.html'), newHTML, function (err) {
        if (err) {
            return console.log("文件写入失败", err.message);
        }
        console.log("文件写入成功");
    })
}