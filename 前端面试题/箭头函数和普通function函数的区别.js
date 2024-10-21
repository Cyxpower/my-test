function Person(color) {  // 定义一个构造函数
    console.log(this)  
    this.color = color;
    this.getColor = function () {
        console.log(this)
        return this.color;
    };
    this.setColor = function (color) {
        console.log(this)
        this.color = color;
    };
}

Person("red"); //this指向 window

var p = new Person("yello"); //this指向 p

p.getColor(); //this指向 p

var obj = {};
p.setColor.call(obj, "black"); //this指向 obj

var test = p.setColor;
test(); //this指向 window

function fun1() {
    function fun2() {
        console.log(this);
    }

    fun2(); //this指向 window
}
fun1();







//箭头函数


function Count() {
    console.log(this) //指向Count的实例对象 c
    this.num = 0
    setInterval(() => {
        console.log(this) //指向Count的实例对象 c
        this.num++
    }, 1000);
}
let c = new Count()