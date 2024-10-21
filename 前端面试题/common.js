function findLongestCommonSubstring(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    let maxLength = 0; // 最长公共子串的长度
    let endIndex = 0; // 最长公共子串的结束位置

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i - 1; // 更新最长公共子串的结束位置
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    if (maxLength === 0) {
        return ''; // 没有找到公共子串
    }

    // 使用结束位置和最大长度来截取最长公共子串
    const startIndex = endIndex - maxLength + 1;
    return str1.substring(startIndex, endIndex + 1);
}

// 示例用法
const str1 = 'abcdefg';
const str2 = 'bcdfgxyz';

const longestCommonSubstring = findLongestCommonSubstring(str1, str2);
console.log('最长公共子串：' + longestCommonSubstring);
