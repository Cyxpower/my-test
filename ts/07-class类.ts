class person {
    age: number
    name = '陈彦欣'
    gender = '男'
    constructor(age: number, gender: string) {
        this.age = age
        this.gender = gender
    }
}

const p = new person(1, '男')



//构造函数
class Point {
    x = 10
    y = 10
    scale(n: number) {
        this.x *= n
        this.y *= n
    }
}
const a = new Point()

a.scale(20)
console.log(a.x, a.y);




class Animal {
    private move() {
        console.log('Moving along!');
        this.move()
    }
}
class Dog extends Animal {
    bark() {
        console.log('小狗汪汪叫！');

    }

}
const dog = new Dog()
dog.bark()



interface Singale {
    sing(): void
}

class Person implements Singale {
    sing() {
        console.log('你是我的小呀小苹果！');

    }
}
const singer = new Person()
singer.sing()


let arr: string[] = ['陈文达', '程星达', '陈子健', '陈彦欣', '管梓涵', '陈壮成', '陈梓成']
let arr2: string[] = []
arr.forEach((item, index, self) => {
    // console.log(item);
    // console.log('第' + index + '个');
    if (item.includes('文达')) {
        arr2.push(item)
    }

})
console.log(arr2);




class API {
    x: number = 2
    y: number = 2
    constructor() {

    }
}
class API2 {
    x: number = 4
    y: number = 1
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
const G: API = new API2(40, 50)

console.log(G);


