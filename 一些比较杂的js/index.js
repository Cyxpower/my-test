const users = [
    { name: '龙傲天', sex: '男', age: 20 },
    { name: '叶良辰', sex: '男', age: 34 },
    { name: '莫千雪', sex: '男', age: 41 },
    { name: '赵日天', sex: '女', age: 12 },
    { name: '王尼玛', sex: '男', age: 20 },
    { name: '福尔康', sex: '男', age: 21 },
    { name: '后水凝', sex: '男', age: 20 },
    { name: '欧阳娜娜', sex: '男', age: 20 },
    { name: '厚礼蟹', sex: '女', age: 20 },
    { name: '我去', sex: '女', age: 20 },
]


function countBy(array, generateKey) {
    const result = {}
    for (const u of array) {
        const key = generateKey(u);
        if (result[key]) {
            result[key]++
        } else {
            result[key] = 1
        }
    }
    return result
}

console.log(countBy(users, u => u.name))
console.log(countBy(users, u => u.age>=18?'成年':'未成年'));

// console.log(countBy(users, 'name'))
// console.log(countBy(users, 'age'))

// console.log(result);