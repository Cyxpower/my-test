//一个闭包例子

function outerFn() {
    var data = 10
    var innerFn = function () {
        data += 1
        console.log(data)
    }
    return innerFn
}
var result = outerFn()
result() //11
result() //12




//造成的内存泄露需要将闭包函数设置为null 解决内存泄露问题

var result = null