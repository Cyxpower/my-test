// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 2)
        }, 2000)
    })
}
async function testResult() {
    let first = await doubleAfter2seconds(30);
    let second = await doubleAfter2seconds(50);
    let third = await doubleAfter2seconds(30);
    console.log(first + second + third);
}
testResult()

async function fn1() {
    console.log(1)
    await fn2() // fn2进入微任务队列等待执行 在所有的asnc函数执行完之后才会执行这一个后面的代码
    console.log(2) // 阻塞
}
async function fn2() {
    console.log('fn2')
}
fn1()
console.log(3)

// 输出结果：1，fn2，3，2


async function basicDemo() {
    let result = await Math.random();
    console.log(result);
}

basicDemo()