const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db_01'
})

// db.query('select * from users where id=1 ', (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(results);
// })

// const user = {
//     username: 'captain',
//     password: 'abc123'
// }
// const str = 'insert into users (username,password) values (?,?)'
// db.query(str, [user.username, user.password], (err, results) => {
//     if (err) {
//         return console.log(err);
//     }
//     if (results.affectedRows == 1) {
//         console.log("插入成功", results);
//     }
// })

// const user = {
//     id:'13',
//     username: 'CT',
//     password: 'efg123'
// }
// const str = 'update users set username=?,password=? where id=?'
// db.query(str, [user.username,user.password,user.id], (err, results) => {
//     if (err) {
//         return console.log(err);
//     }
//     if (results.affectedRows == 1) {
//         console.log("更新成功");
//     }
// })




const user = {
    id: '12',
    username: 'CWD',
    password: 'efg123'
}
const str = 'delete from users  where id=?'
// db.query(str, [user,user.id], (err, results) => {
//     if (err) {
//         return console.log(err);
//     }
//     if (results.affectedRows == 1) {
//         console.log("更新成功");
//     }
// })
db.query(str, 14, (err, results) => {
    if (err) {
        return console.log(err.message);
    } if(results.affectedRows == 1) {
        console.log("删除成功！", results);
    }

})