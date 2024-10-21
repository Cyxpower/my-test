function findCommonPrefix(str1, str2) {
    let minLength = Math.min(str1.length, str2.length);
    let commonPrefix = '';

    for (let i = 0; i < minLength; i++) {
        if (str1[i] === str2[i]) {
            commonPrefix += str1[i];
        } else {
            break;
        }
    }

    return commonPrefix;
}

const input1 = 'sdfjksdjf';
const input2 = 'sjdkfjsdkfl';

const commonPrefix = findCommonPrefix(input1, input2);
console.log('相同前缀：' + commonPrefix);
