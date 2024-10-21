

 

function sum(a:number,b:number):number{
    return a+b
}
let result = sum(100,22)
let a:number = 10
let c: any

let d:any
d =11
d="hello"
d =true



let s :unknown
s =11


a =d

a =s as number
a =<number>s
let b :{name:string,age?:number}

b = {name:"猪八戒",age:13}

enum Sex{
    Male=0,
    Female=1
}
let f:{name:string,age:number,sex:Sex}
f = {
    name:"猪八戒",
    age:18,
    sex:Sex.Female
}