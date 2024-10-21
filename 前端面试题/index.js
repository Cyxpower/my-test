
// 公共字符串

const public = function (strs) {
     if (strs.length === 0) {
         return ''
     }
     if (strs.length === 1) {
         return strs[0]
     }
     strs.sort()
     const first = strs[0]
     const last = strs[strs.length - 1]
     let i = 0
     while (i < first.length && first[i] === last[i]) {
         i++
     }
     return first.substring(0, i)
 }

const strarr = ['abc','abcde','abc','acbdde']

 const res = public(strarr)


 console.log(res)