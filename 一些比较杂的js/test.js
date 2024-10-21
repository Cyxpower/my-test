function test() { 
    setTimeout(() => {    //宏任务  最后执行
        console.log('定时器');   
    }, 0)
    new Promise((resolve) => {   //同步代码 第一执行
        console.log('Promise1');
        resolve();
    }).then(() => {
        console.log('Promise.then');   //微任务队列  第二执行
    })
    console.log('some code');   //同步代码 第一执行 
}
test();