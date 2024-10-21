const format = require('./test/index')
const dt = new Date()
console.log(dt);
const newDT = format.dateFormat(dt)
console.log(newDT);



const htmlstr = "<span><h1>哈哈哈</h1></span>"
const newHtmlstr = format.htmlstrEscape(htmlstr)
console.log("转义的html",newHtmlstr);

console.log(format.rawHtmlstr(newHtmlstr));
