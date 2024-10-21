//var 具有变量提升 以及全局作用域

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // 输出 5 5 5 5 5 
    }, 1000);

}



setTimeout(() => {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    } // 输出 0 1 2 3 4
}, 1000);





//let不具有变量提升 

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // 输出 0 1 2 3 4
    }, 1000);

}