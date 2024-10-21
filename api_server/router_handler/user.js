const db = require('../router/db/index')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
const {
    expiresIn
} = require('../config')

exports.register = (req, res) => {
    const userinfo = req.body
    if (!userinfo.username || !userinfo.password) {
        return res.catch('账号密码不可以为空！')
    }

    const sqlstr = 'select * from ev_users where username=?'
    db.query(sqlstr, [userinfo.username], (err, results) => {
        if (err) {
            return res.catch(err)
        }
        if (results.length > 0) {
            return res.catch('用户名已经被占用了，请更换！')
        }
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        const sql = 'insert into ev_users set ?'
        db.query(sql, {
            username: userinfo.username,
            password: userinfo.password
        }, (err, results) => {
            if (err) {
                return res.catch(err)
            }
            if (results.affectedRows !== 1) {
                return res.catch('插入新用户失败')

            }
            return res.catch('插入新用户成功', 0)
        })
    })
}
exports.login = (req, res) => {
    const userinfo = req.body
    const sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        if (err) {
            return res.catch(err)
        }
        if (results.length !== 1) {
            return res.catch('登录失败')
        }
        const compareresults = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareresults) {
            return res.catch('密码不正确！')
        }

        const user = {
            ...results[0],
            password: '',
            user_pic: ''
        }
        const tokenStr = jwt.sign(user, config.jwtSecertKey, {
            expiresIn
        })
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
    })

}