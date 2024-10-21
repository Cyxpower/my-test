    //简单封装一个ajax请求
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //使用commonjs的方式导入xmlhttprequest库

    function ajax(method, url, data) { //封装ajax方法 


        var xhr = new XMLHttpRequest(); //定义一个xhr对象 调用其方法

        return new Promise(function (resolve, reject) { // 返回一个promise对象
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    return
                }
                if (xhr.status === 200) {
                    resolve('success')
                } else {
                    reject('failed')
                }
            }
            xhr.open(method, url)
            xhr.send(data)
        })
    }
    ajax('GET', 'url').then((data) => {
        // AJAX成功，拿到响应数据
        console.log(data);
    }).catch(err => {
        // AJAX失败，根据响应码判断失败原因
        console.log(err);
    });