const db = require('../router/db/index')


exports.getArticleCates = (req, res) => {
    const sql = 'select * from ev_article_cate where is_delete = 0 order by id asc'
    db.query(sql, (err, results) => {
        if (err) return res.catch(err)
        res.send({
            status: 0,
            message: '查询文章分类列表成功！',
            data: results
        })
    })
}
exports.addArticleCates = function(res,req){
    const sql = 'select * from ev_article_cate where name = ? or alias = ?'
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (results.length === 2) return res.catch('分类名称与分类别名被占用，请更换后重试！')
        if (results.length === 1 && req.body.name === results[0].name && req.body.alias === results[0].alias) return res.catch('分类名称与分类别名被占用，请更换后重试！')
        if (results.length === 1 && req.body.name === results[0].name) return res.catch('分类名称被占用，请更换后重试！')
        if (results.length === 1 && req.body.alias === results[0].alias) return res.catch('分类别名被占用，请更换后重试！')
        const sql = 'insert into ev_article_cate set ?'
        db.query(sql, req.body, (err, results) => {
            if (err) return res.catch(err)
            if (results.affectedRows !== 1) return res.catch('新增文章列表失败！')
            res.catch('新增文章列表成功！', 0)
        })
    })


}
exports.deleteArticleCates = (req, res) => {
    const sql = 'update ev_article_cate set is_delete = 1 where id = ?'
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.catch(err)
        if (results.affectedRows !== 1) return res.catch('删除文章分类失败！')
        res.catch('删除文章分类成功', 0)
    })

}
exports.getArticleCatesByid = (req, res) => {
    const sql = 'select * from ev_article_cate where id = ?'
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.catch(err)
        if (results.length !== 1) return res.catch('列表中没有此文章')
        res.send({
            status: 0,
            message: '查询文章内容成功！',
            data: results[0]
        })
    })

}
exports.updateArticleCates = (req, res) => {
    const sql = 'select * from ev_article_cate where id!=? and (name = ? or alias = ?)'
    db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.catch(err)
        if (results.length === 2) return res.catch('分类名称与别名被占用，请更换重试！')
        if (results.length === 1 && req.body.name === results[0].name && req.body.alias === results[0].alias) return res.catch('分类名称与别名被占用，请更换重试！')
        if (results.length === 1 && req.body.name === results[0].name) return res.catch('分类名称被占用，请更换重试！')
        if (results.length === 1 && req.body.alias === results[0].alias) return res.catch('分类别名被占用，请更换重试！')
        const sql = 'update ev_article_cate set ? where id = ?'
        db.query(sql, [req.body, req.body.id], (err, results) => {
            if (err) return res.catch(err)
            if (results.affectedRows !== 1) return res.catch('修改文章分类信息失败')
            res.send({
                status: 0,
                message: '修改文章分类信息成功！',

            })
        })
    })
}
