let a: number = 12
interface abc {
    name: string,
    age: number,
    skill(name: string): void
}
let person: abc = {
    name: 'chenwenda',
    age: 18,
    skill(name) {
        const index = name.includes('达')
        console.log('我是' + name, index, typeof person.name);
    }

}
person.skill('程星达')  