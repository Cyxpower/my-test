//   function doubleAfter2seconds(num) {
//       return new Promise(resolve => {
//           setTimeout(() =>
//               resolve(num * 2), 2000)
//       })

//   }

//   async function show() {
//       let shownum = await doubleAfter2seconds(50)
//       console.log(shownum);
//   }
//   show()

function doubleAfter2seconds(num) {
    setTimeout(() => {
        let newnum = num * 2
        console.log(newnum)
    }, 2000)

}
doubleAfter2seconds(20)