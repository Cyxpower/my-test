   //有关于手写一个promise回调
   const promiseFn = new Promise(function (resolve, reject) {
       // ... some code

       let obj = {
           value: 1,
           name: "charlie"
       }
       if (1 + 1 === 2) {
           resolve(obj.name);
       } else {
           reject("error");
       }
   });

   //执行一个promise函数
   promiseFn.then(res => {
       console.log(res);
   }).catch(err => {
       console.log(err);
   })