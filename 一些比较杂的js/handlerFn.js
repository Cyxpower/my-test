const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test'
})

connection.connect((err) => {
    if (err) {
        return
    }
    console.log('connected to database');
})


let returnData = {
    code: true,
    data: null
}




exports.handlerFn = (req, res) => {
    const sql = `select * from person`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        returnData.data = results;
        res.send(returnData);
    });
};

exports.handlerFn2 = (req, res) => {
    res.send('This is a GET request');
};
