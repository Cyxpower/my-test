// 原型链的解释
/*
    Prototype 原型 | 原型对象
    1.Prototype是[函数]的一个属性
    2.Prototype是个对象
    3.当我们创建函数的时候会默认添加Prototype这个属性


    __proto__   隐式原型
    1.[对象]的属性
    2.指向构造函数的Prototype
    3.obj.__proto__ === function.Prototype

    原型链的顶层是null
    原型链的原理就是对象的__proto__指向构造函数的Prototype，构造函数的Prototype也是对象，又指向他的上一层的构造函数的Prototype   循环往复 直到null

*/


function test(name) { 
    this.name = name;
}

console.dir(test); // 输出test函数的属性
const obj = new test('张三'); // 创建一个对象，该对象的原型指向test函数的prototype属性。
console.log(obj.__proto__ === test.prototype);