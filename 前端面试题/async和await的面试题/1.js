async function asy1() {
    console.log(1);     //首先运行同步代码输出1，然后进入等待队列跳转到asy2()
    await asy2();
    console.log(2);
}
const asy2 = async () => {
    await setTimeout(() => {
        Promise.resolve().then(() => {
            console.log(3); // 3
        });
        console.log(4);
    }, 0)
};
const asy3 = async () => {
    Promise.resolve().then(() => {
        console.log(6);
    });
};
asy1();   //输出1，2宏队列执行完成执行await的等待结果输出4,3
console.log(7);  //输出7
asy3(); //输出6，同步代码执行完毕进入微队列asy1

//输出的顺序为1,7,6,2,4,3