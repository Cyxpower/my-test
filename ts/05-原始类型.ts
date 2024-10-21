let a: number = 19
let b: string = '你好'
let c: boolean = true
let d: null = null
let e: undefined = undefined
let f: symbol = Symbol()
let arr: (number | string | boolean)[] = [1, 'b', true]


type abc = (string | boolean)[]
let g: abc = ['1', '1', true]


function add(a: number, b: number): number {
    return a + b
}

console.log(add(5, 8)
);


function greet(name: string, age?: number): void {
    console.log("你好", name)
}

greet('陈彦欣')


let obj: { name: string, age: number, obj(name: string): void } = {
    name: '',
    age: 18,
    obj(newname) {
        console.log(newname);
    },
}
obj.obj('陈彦欣')


interface Iperson {
    name: string
    age: number
}
let boj: Iperson = {
    name: 'hah',
    age: 12
}


interface point2D {
    x: number  
    y: number
}

interface point3d extends point2D {
    z: string
}
let num: [number, number] = [1, 2]


enum directions { UP, DOWN, RIGHT, LEFT }
function ds(direction: directions) {
    console.log(direction);
}
ds(directions.UP)




