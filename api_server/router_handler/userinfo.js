const db = require('../router/db/index')
const bcrypt = require('bcryptjs')


exports.GetUserInfo = (req, res) => {
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.catch(err)
        if (results.length !== 1) return res.catch('获取用户信息失败！')
        res.send({
            status: 0,
            message: '获取用户信息成功！',
            data: results[0]
        })
    })
}
exports.UpdateUserInfo = (req, res) => {
    const sql = 'update ev_users set ? where id=? '
    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.catch(err)
        if (results.affectedRows !== 1) {
            return res.catch('更新用户信息失败')
        }
        res.catch('更新用户信息成功', 0)
    })

}
exports.updatePassword = (req, res) => {
    const sql = 'select * from ev_users  where id = ?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.catch(err)
        if (results.length !== 1) return res.catch('用户信息不存在！')
        const compareresults = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareresults) {
            return res.catch('输入的旧密码不正确')
        }
        const sql = 'update ev_users set password = ? where id = ?'
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            if (err) return res.catch(err)
            if (results.affectedRows !== 1) {
                return res.catch('用户密码修改失败')
            }
            res.catch('修改成功！', 0)
        })
    })


}
exports.updateAvatar = (req, res) => {
    const sql = 'update ev_users set user_pic=? where id=?'
    db.query(sql,[req.body.avatar,req.user.id],(err,results)=>{
        if(err)return res.catch(err)
        if (results.affectedRows!==1) {
            return res.catch('更新用户头像失败')
        }
        res.catch('更新用户头像成功！',0)
    })
    res.catch('ok')
}