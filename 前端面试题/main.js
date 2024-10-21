const readline = require('readline');

// 定义一个名为 input 的函数，用于获取用户输入
function input(promptText) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(promptText, (userInput) => {
            rl.close();
            resolve(userInput);
        });
    });
}

// 定义公共字符串方法
const publicStr = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    return first.substring(0, i);
}

// 使用 async/await 来获取用户输入并调用公共字符串方法
async function main() {
    const userInput = await input('请输入字符（以逗号分隔）：');
    const inputArray = userInput.split(',').map(s => s.trim());
    const res = publicStr(inputArray);
    console.log('用户输入：' + userInput);
    console.log('公共前缀：' + res);
}

// 调用主函数
main();
