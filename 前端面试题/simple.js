const str = 'dsfjalkfjkalsdjfkgldfklkggdfskgdfkgl;erktgl;erkltiergml;dfk;kfklasdsfjkjasdkfjskdfjasdfdf'
const result = []
for (const c of str) {
    if (result[c]) {
        result[c]++
    } else {
        result[c] = 1
    }
}
for (const i in result) {
    console.log(i + "出现了" + result[i] + "次");
}