//导入工具库
let utils = require(__basename + '/utils/utils.js');

//导入操作数据api
let api = require(__basename + '/api/api.js');

//导入白名单
let list = require(__basename + '/list/list.js');

//导入文件系统模块
let fs = require('fs');

//路由控制器层
class RouteController {

  //appkey验证
  validAppkey(req, res, next) {
    // console.log('req.url ==> ', req.url.split('?')[0]);
    //appkey验证请求路径白名单
    if (list.appkeyUrls.indexOf(req.url.split('?')[0]) === -1) {
      return next();
    }

    let appkey = req.query.appkey === undefined ? req.body.appkey : req.query.appkey;
    console.log('小程序传输过来的秘钥',appkey)
    //防止 + 字符被转为 空格字符
    appkey = appkey.replace(/ /g, '+');


    //查询appkey
    api.findData('Appkey', {
      key: appkey
    }, ['isVip', 'count']).then(result => {
      // console.log('Appkey result ==> ', result);
      if (result.length == 0) {
        // console.log('进来');
        return res.send({
          msg: 'appkey无效',
          code: 2
        });
      }

      let resData = result[0].dataValues;
      // console.log('Appkey resData ==> ', resData);

      //如果是vip，则无需验证key剩余的使用次数
      if (resData.isVip) {
        next();
        console.log('vip无需验证key剩余的使用次数');
      } else {
        if (resData.count <= 0) {
          res.send({
            msg: 'appkey剩余使用次数为0',
            code: 1
          });
        } else {
          //appkey剩余使用次数减1
          api.updateData('Appkey', {
            count: resData.count
          }, {
            key: appkey
          }).then(() => {
            console.log(`appkey剩余次数${resData.count},验证通过`);
            next();
          }).catch(err => {
            res.send({
              'msg': 'appkey无法查询',
              code: 0
            });
          })
        }
      }

    }).catch(err => {
      console.log('错误');
      res.send({
        msg: 'appkey无法查询',
        code: 0
      });
    })

  }

  //token验证
  vliadToken(req, res, next) {
    // console.log('vliadToken req ==> ', req.url.split('?')[0]);

    if (list.tokens.indexOf(req.url.split('?')[0]) > -1) {
      console.log('执行token验证');
      let params = req.query.tokenString == undefined ? req.body : req.query;
      // console.log('vliadToken params ==> ', params);

      //执行验证token
      utils.validToken(params.tokenString, config.saltOptions.tokenSalt, (err, decoded) => {
        if (err) {
          return res.send({
            msg: 'token检验无效，请先登录',
            code: 700
          });
        }

        // console.log('decoded ==> ', decoded);

        req.userId = decoded.data;

        //检验是否 修改密码 或者 退出登录 或者 注销账号，如果是，则不通过，此时需要重新登录获取合法token，以保持正常访问状态
        api.findData('User', {
          userId: req.userId,
          isRemove: 0
        }, ['isLogin']).then(result => {
          // console.log('vliadToken result ==> ', result);
          if (result.length == 0 || (result.length > 0 && result[0].dataValues.isLogin == 0)) {
            res.send({
              msg: 'token检验无效，请先登录',
              code: 700
            });
          } else {
            next()
          }
        }).catch(err => {
          res.send({msg: 'token检验失败', code: 701});
        })

      })

    } else {
      console.log('无需token验证');
      next();
    }

  }

  //注册
  register(req, res) {
    //截取POST请求体
    // console.log('register req.body ==> ', req.body);

    //生成用户唯一id
    let userId = 'ROG-' + new Date().getTime();

    //加密密码
    let password = utils.encodeString(req.body.password);

    //验证用户手机号是否已经被注册
    api.findData('User', {
      phone: req.body.phone,
      isRemove: 0
    }, ['phone', 'userId']).then(result => {

      if (result.length == 0) {
        //该手机号没有被注册
        //执行写入用户信息到数据库
        api.createData('User', {
          phone: req.body.phone,
          nickName: req.body.nickName,
          password: password,
          userId
        }).then(result => {
          //执行成功
          // console.log('result ==> ', result);
          res.send({
            msg: '注册成功',
            code: 100
          });
        }).catch(err => {
          res.send({
            msg: '注册失败',
            code: 101
          });
        })
      } else {
        res.send({
          msg: '手机号已被注册',
          code: 102
        });
      }
    })
  }

  //登录
  login(req, res) {

    api.findData('User', {
      phone: req.body.phone,
      isRemove: 0
    }, ['phone', 'userId', 'password']).then(result => {

      if (result.length == 0) {
        res.send({
          msg: '手机号未注册',
          code: 201
        })
      } else {
        //加密密码
        let password = utils.encodeString(req.body.password);

        //进行密码验证
        if (password == result[0].dataValues.password) {

          //换取token凭证
          let token = utils.getToken(result[0].dataValues.userId, config.saltOptions.tokenSalt, config.tokenOptions.expiresIn);

          //修改登录态
          api.updateData('User', {
            isLogin: 1
          }, {
            userId: result[0].dataValues.userId,
            isRemove: 0
          }).then((result) => {
            res.send({
              msg: '登录成功',
              code: 200,
              token
            });
          }).catch(err => {
            res.send({
              msg: '登录失败',
              code: 203
            });
          })

          
        } else {
          res.send({
            msg: '手机号或者密码不正确',
            code: 202
          })
        }
      }

    }).catch(err => {
      res.send({
        msg: '登录失败',
        code: 203
      });
    })


  }

  //查询banner图
  banner(req, res) {
    // console.log('banner req.query ==> ', req.query);

    api.findData('Banner', {
      isUpper: 1
    }, ['bannerImg', 'name', 'pid']).then(result => {
      // console.log('Banner result ==> ', result);
      res.send({
        result,
        code: 300
      });
    }).catch(err => {
      res.send({
        'msg': '无法获取banner数据',
        code: 301
      });
    })
  }

  //查询商品类型
  type(req, res) {

    // console.log('type req.query ==> ', req.query);

    api.findData('Type').then(result => {
      // console.log('Type result ==> ', result);
      res.send({
        result,
        code: 400
      });
    }).catch(err => {
      res.send({
        'msg': '无法获取商品类型数据',
        code: 401
      });
    })
  }

  //根据条件查询商品数据
  typeProducts(req, res) {
    // console.log('typeProducts req.query ==> ', req.query);
    let query = req.query;
    api.findData('Product', {
      [query.key]: query.value
    }).then(result => {
      // console.log('Banner result ==> ', result);
      res.send({
        result,
        code: 500
      });
    }).catch(err => {
      res.send({
        'msg': '无法获取banner数据',
        code: 501
      });
    })
  }

  //查看商品详情
  productDetail(req, res) {

    //联表查询 商品详情信息+商品规格
    let sql = "SELECT `p`.`pid`, `p`.`type`, `p`.`enname`, `p`.`desc`, `p`.`name`,`p`.`price`, `p`.`small_img`, `p`.`large_img`, `p`.`is_hot`, `p`.`type_desc`, `r`.`tem`, `r`.`tem_desc`, `r`.`milk`, `r`.`milk_desc`, `r`.`sugar`, `r`.`sugar_desc`, `r`.`cream`, `r`.`cream_desc` FROM `product` AS `p` INNER JOIN `rule` AS `r` ON `p`.`pid` = $pid AND `r`.`pid` = $pid";

    api.queryData(sql, {
      pid: req.query.pid
    }).then(result => {
      res.send({
        msg: '查询商品详情成功',
        code: 600,
        result
      });
    }).catch(err => {
      res.send({
        msg: '查询商品详情失败',
        code: 601
      });
    })

  }

  //收藏，需要token验证
  like(req, res) {

    let data = {
      userId: req.userId,
      pid: req.body.pid
    };

    //执行写入数据
    api.createData('Like', data).then(result => {
      res.send({
        msg: '已收藏',
        code: 800
      });
    }).catch(err => {
      res.send({
        msg: '收藏商品失败',
        code: 801
      });
    })
  }

  //取消收藏，需要token验证
  notlike(req, res) {
    api.destroyData('Like', {
      userId: req.userId,
      pid: req.body.pid
    }).then(result => {
      res.send({
        msg: '已取消收藏',
        code: 900,
        result
      });
    }).catch(err => {
      res.send({
        msg: '取消收藏失败',
        code: 901
      });
    })
  }

  //查询收藏商品
  findlike(req, res) {
    // console.log('findlike req.query ==> ', res.query);
    api.findData('Like', {
      pid: req.query.pid,
      userId: req.userId
    }).then(result => {
      res.send({
        msg: '查询收藏商品成功',
        code: 1000,
        result
      });
    }).catch(err => {
      res.send({
        msg: '查询收藏商品失败',
        code: 1001
      });
    })

  }

  //查询用户所有收藏商品数据
  findAllLike(req, res) {
    // console.log('findlike req.query ==> ', res.query);
    api.findData('Like', {
      userId: req.userId
    }).then(result => {
      // console.log('findAllLike result ==> ', result);
      if (result.length > 0) {
        //查询商品详情信息
        //收集收藏商品的pid
        let pids = [];
        result.forEach(v => {
          pids.push(v.dataValues.pid);
        })

        // console.log('pids ==> ', pids);

        api.findData('Product', {
          pid: {
            [config.Op.in]: pids
          }
        }).then(result => {
          res.send({
            msg: '查询用户所有收藏商品成功',
            code: 2000,
            result,
            userId: req.userId
          });
        }).catch(err => {
          res.send({
            msg: '查询用户所有收藏商品失败',
            code: 2001
          });
        })
      } else {
        res.send({
          msg: '查询用户所有收藏商品成功',
          code: 2000,
          result,
          userId: req.userId
        });
      }

    }).catch(err => {
      res.send({
        msg: '查询用户所有收藏商品失败',
        code: 2001
      });
    })

  }


  //加入购物车
  addShopcart(req, res) {

    //加入购物车之前先验证购物车是否存在当前商品
    //如果存在，则增加数量即可，否则写入一条数据

    api.findData('Shopcart', {
      userId: req.userId,
      pid: req.body.pid,
      isRemove: 0
    }, ['count', 'rule', 'sid']).then(result => {

      // console.log('result ==> ', result);

      if (result.length > 0) {

        //查找sid
        for (let i = 0; i < result.length; i++) {
          if (result[i].dataValues.rule == req.body.rule) {
            let sid = result[i].dataValues.sid;
            let count = result[i].dataValues.count;
            //修改数量
            api.updateData('Shopcart', {
              count: Number(req.body.count) + Number(count)
            }, {
              userId: req.userId,
              sid
            }).then(result => {
              res.send({
                msg: '加入购物车成功',
                code: 3000,
                status: 0,
                sid
              });
            }).catch(err => {
              res.send({
                msg: '加入购物车失败',
                code: 3001,
                status: 0
              });
            })
            return;
          }
        }


        //添加一条购物车商品数据
        //创建购物车记录唯一标识
        let sid = '_s' + new Date().getTime();
        api.createData('Shopcart', {
          userId: req.userId,
          count: req.body.count,
          rule: req.body.rule,
          pid: req.body.pid,
          sid
        }).then(result => {
          res.send({
            msg: '加入购物车成功',
            code: 3000,
            status: 1,
            sid
          });
        }).catch(err => {
          res.send({
            msg: '加入购物车失败',
            code: 3001,
            status: 1
          });
        })


      } else {

        //添加一条购物车商品数据
        //创建购物车记录唯一标识
        let sid = '_s' + new Date().getTime();
        api.createData('Shopcart', {
          userId: req.userId,
          count: req.body.count,
          rule: req.body.rule,
          pid: req.body.pid,
          sid
        }).then(result => {
          res.send({
            msg: '加入购物车成功',
            code: 3000,
            status: 1,
            sid
          });
        }).catch(err => {
          res.send({
            msg: '加入购物车失败',
            code: 3001,
            status: 1
          });
        })
      }

    }).catch(err => {
      res.send({
        msg: '查询购物车数据失败',
        code: 3003
      });
    })

  }

  //查询购物车总数量
  shopcartCount(req, res) {
    api.sumData('Shopcart', 'count', {
      userId: req.userId,
      isRemove: 0
    }).then(result => {
      res.send({
        msg: '查询购物车数量成功',
        code: 4000,
        result
      });
    }).catch(err => {
      res.send({
        msg: '查询购物车数量失败',
        code: 4001
      });
    })
  }

  //查询购物车所有数据
  findAllShopcart(req, res) {
    //查询用户购物车商品，且未删除isRemove: 0未逻辑删除，1逻辑删除，且未付款的商品 status: 0未付款,1待收货,2已收货

    let sql = "SELECT `p`.`name`,`p`.`price`,`p`.`desc`,`p`.`type`,`p`.`type_desc`,`p`.`small_img`,`p`.`large_img`,`p`.`is_hot`,`p`.`enname`,`sp`.`sid`,`sp`.`pid`,`sp`.`rule`,`sp`.`count`,`sp`.`user_id`,`sp`.`status`,`sp`.`is_remove`,`sp`.`updated_at`,`sp`.`created_at` FROM `product` AS `p` INNER JOIN `shopcart` AS `sp` ON `sp`.`pid` = `p`.`pid` AND `sp`.`status` = 0 AND `sp`.`user_id` = $userId AND `sp`.`is_remove` = 0";

    api.queryData(sql, {
      userId: req.userId
    }).then(result => {
      res.send({
        msg: '查询所有购物车数据成功',
        code: 5000,
        result
      });
    }).catch(err => {
      res.send({
        msg: '查询所有购物车数据失败',
        code: 5001
      });
    })

  }

  //修改购物车商品数量
  modifyShopcartCount(req, res) {
    // console.log('modifyShopcartCount req.body ==> ', req.body);
    //修改数量
    api.updateData('Shopcart', {
      count: Number(req.body.count)
    }, {
      userId: req.userId,
      sid: req.body.sid
    }).then(result => {
      res.send({
        msg: '修改数量成功',
        code: 6000
      });
    }).catch(err => {
      res.send({
        msg: '修改数量失败',
        code: 6001
      });
    })
  }

  //物理删除单个或者多个购物车商品
  deleteShopcart(req, res) {

    let sids = JSON.parse(req.body.sids);

    api.destroyData('Shopcart', {
      sid: {
        [config.Op.in]: sids
      },
      userId: req.userId
    }).then(result => {
      res.send({
        msg: '删除购物车商品成功',
        code: 7000
      });
    }).catch(err => {
      res.send({
        msg: '删除购物车商品失败',
        code: 7001
      });
    })
  }

  //逻辑删除单个或者多个购物车商品
  removeShopcart(req, res) {

    let sids = JSON.parse(req.body.sids);

    api.updateData('Shopcart', {
      isRemove: 1
    }, {
      sid: {
        [config.Op.in]: sids
      },
      userId: req.userId
    }).then(result => {
      res.send({
        msg: '删除购物车商品成功',
        code: 7000
      });
    }).catch(err => {
      res.send({
        msg: '删除购物车商品失败',
        code: 7001
      });
    })
  }


  //查询购物车商品条数
  shopcartRows(req, res) {
    api.countData('Shopcart', {
      userId: req.userId,
      isRemove: 0
    }).then(result => {
      res.send({
        msg: '查询购物车商品条数成功',
        code: 8000,
        result
      });
    }).catch(err => {
      res.send({
        msg: '查询购物车商品条数失败',
        code: 8001
      });
    })
  }

  //新增地址
  addAddress(req, res) {

    //新增地址公共方法
    function createAddress(req, res) {
      api.createData('Address', req.body).then(result => {
        res.send({
          msg: '新增地址成功',
          code: 9000
        });
      }).catch(err => {
        res.send({
          msg: '新增地址失败',
          code: 9001
        });
      })
    }

    delete req.body.tokenString;
    delete req.body.appkey;

    //生成地址唯一标识
    req.body.aid = '_address' + new Date().getTime();
    req.body.userId = req.userId;

    if (req.body.isDefault == 1) {
      //如果是默认地址，先查询用户是否存在默认地址，如果存在，则先修改非默认地址，否则直接写入
      api.findData('Address', {
        userId: req.userId,
        isDefault: 1,
        isRemove: 0
      }, ['aid']).then(result => {

        if (result.length == 0) {
          //新增地址
          createAddress(req, res);

        } else {
          //先修改默认地址，在新增
          //启动事务处理
          api.transaction((t) => {

            api.updateData('Address', {
              isDefault: 0
            }, {
              aid: result[0].dataValues.aid
            }, t).then(() => {
              //新增地址
              createAddress(req, res);

            })

          })
        }

      }).catch(err => {
        res.send({
          msg: '地址操作出错',
          code: 9001
        });
      })
    } else {

      //新增地址
      createAddress(req, res);

    }

  }

  //删除地址
  deleteAddress(req, res) {
    //userId, aid, isRemove

    api.updateData('Address', {
      isRemove: 1
    }, {
      userId: req.userId,
      aid: req.body.aid,
      isRemove: 0
    }).then(result => {
      res.send({
        msg: '删除地址成功',
        code: 10000
      });
    }).catch(err => {
      res.send({
        msg: '删除地址失败',
        code: 10001
      });
    })
  }

  //查询地址
  findAddress(req, res) {
    //userId, isRemove
    api.findData('Address', {
      userId: req.userId,
      isRemove: 0
    }).then(result => {
      res.send({
        msg: '查询地址成功',
        code: 20000,
        result
      });
    }).catch(err => {
      res.send({
        msg: '查询地址失败',
        code: 20001
      });
    })
  }

  //编辑地址
  editAddress(req, res) {
    let aid = req.body.aid;

    delete req.body.aid;
    delete req.body.appkey;
    delete req.body.tokenString;

    //编辑地址公共方法
    function modifyAddress(req, res, aid) {
      api.updateData('Address', req.body, {
        userId: req.userId,
        aid,
        isRemove: 0
      }).then(result => {
        res.send({
          msg: '编辑地址成功',
          code: 30000
        });
      }).catch(err => {
        res.send({
          msg: '编辑地址失败',
          code: 30001
        });
      })
    }

    //如果修改为默认地址，则先查询之前的默认地址是否存在，如果存在，先修改为非默认地址，在修改当前编辑的地址数据
    if (req.body.isDefault == 1) {
      api.findData('Address', {
        userId: req.userId,
        isDefault: 1,
        isRemove: 0
      }, ['aid']).then(result => {

        if (result.length == 0) {
          //修改当前地址数据
          modifyAddress(req, res, aid);
        } else {
          //先修改之前的默认地址为非默认地址，然后再修改当前地址数据
          //启动事务处理
          api.transaction((t) => {

            api.updateData('Address', {
              isDefault: 0
            }, {
              aid: result[0].dataValues.aid
            }, t).then(() => {

              //修改当前地址数据
              modifyAddress(req, res, aid);

            })

          })
        }

      }).catch(err => {
        res.send({
          msg: '编辑地址失败',
          code: 30001
        });
      })

    } else {
      //修改当前地址数据
      modifyAddress(req, res, aid);
    }
  }

  //根据地址aid获取地址数据
  findAddressByAid(req, res) {
    //userId, isRemove
    api.findData('Address', {
      userId: req.userId,
      aid: req.query.aid,
      isRemove: 0
    }).then(result => {
      res.send({
        msg: '查询地址成功',
        code: 40000,
        result
      });
    }).catch(err => {
      res.send({
        msg: '查询地址失败',
        code: 40001
      });
    })
  }

  //购物车提交订单接口，详情页立即购买接口
  commitShopcart(req, res) {

    let sql = "SELECT `p`.`name`,`p`.`price`,`p`.`desc`,`p`.`type`,`p`.`type_desc`,`p`.`small_img`,`p`.`large_img`,`p`.`is_hot`,`p`.`enname`,`sp`.`sid`,`sp`.`pid`,`sp`.`rule`,`sp`.`count`,`sp`.`user_id`,`sp`.`status`,`sp`.`is_remove`,`sp`.`updated_at`,`sp`.`created_at` FROM `product` AS `p` INNER JOIN `shopcart` AS `sp` ON `sp`.`pid` = `p`.`pid` AND `sp`.`status` = 0 AND `sp`.`user_id` = $userId AND `sp`.`is_remove` = 0 AND `sp`.`sid` IN(";

    let sids = JSON.parse(req.query.sids);

    sids.forEach(v => {
      sql += "'" + v + "',"
    })

    sql = sql.slice(0, -1) + ")";

    //userId, isRemove
    api.queryData(sql, {
      userId: req.userId,
      sids
    }).then(result => {
      res.send({
        msg: '查询商品成功',
        code: 50000,
        result
      });
    }).catch(err => {
      res.send({
        msg: '查询商品失败',
        code: 50001
      });
    })

  }

  //立即结算
  pay(req, res) {
    //需要参数 userId, sid

    let sql = "SELECT `p`.`name`,`p`.`price`,`p`.`desc`,`p`.`type`,`p`.`type_desc`,`p`.`small_img`,`p`.`large_img`,`p`.`is_hot`,`p`.`enname`,`sp`.`sid`,`sp`.`pid`,`sp`.`rule`,`sp`.`count`,`sp`.`user_id`,`sp`.`status`,`sp`.`is_remove`,`sp`.`updated_at`,`sp`.`created_at` FROM `product` AS `p` INNER JOIN `shopcart` AS `sp` ON `sp`.`pid` = `p`.`pid` AND `sp`.`status` = 0 AND `sp`.`user_id` = $userId AND `sp`.`is_remove` = 0 AND `sp`.`sid` IN(";

    let sids = JSON.parse(req.body.sids);

    sids.forEach(v => {
      sql += "'" + v + "',"
    })

    sql = sql.slice(0, -1) + ")";

    //userId, isRemove
    api.queryData(sql, {
      userId: req.userId,
      sids
    }).then(result => {
      // console.log('pay result ==> ', result);

      //执行修改购物车数据，进行逻辑删除, 将isRmove改为1
      //开启事务
      api.transaction((t) => {


        api.updateData('Shopcart', {
          isRemove: 1
        }, {
          userId: req.userId,
          isRemove: 0,
          sid: {
            [config.Op.in]: sids
          }
        })

        let create = [];
        //生成订单编号
        let oid = 'NO' + new Date().getTime();

        //执行多条写入订单数据
        result.forEach(v => {
          
          let data = {
            oid,
            pid: v.pid,
            price: v.price,
            smallImg: v.small_img,
            name: v.name,
            enname: v.enname,
            count: v.count,
            rule: v.rule,
            userId: req.userId,
            phone: req.body.phone,
            address: req.body.address,
            receiver: req.body.receiver
          };

          create.push(api.createData('Order', data, t));

        })

        //等待多条写入完成后，再返回
        return Promise.all(create);

      }).then(() => {
        res.send({
          msg: '结算成功',
          code: 60000
        });
      }).catch(err => {
        res.send({
          msg: '结算失败',
          code: 60001
        });
      })


    }).catch(err => {
      res.send({
        msg: '结算失败',
        code: 60001
      });
    })
  }

  //查询订单
  findOrder(req, res) {
    let status = [];
    if (req.query.status == 0) {
      status = [1, 2];
    } else {
      status.push(req.query.status);
    }

    api.findData('Order', {
      userId: req.userId,
      status: {
        [config.Op.in]: status
      },
      isRemove: 0
    }).then(result => {
      res.send({msg: '查询订单成功', code: 70000, result});
    }).catch(err => {
      res.send({msg: '查询订单失败', code: 70001});
    })
  }

  //修改订单状态, 收货
  receive(req, res) {
    api.updateData('Order', {
      status: 2
    }, {
      userId: req.userId,
      isRemove: 0,
      oid: req.body.oid
    }).then(result => {
      res.send({msg: '已收货成功', code: 80000});
    }).catch(err => {
      res.send({msg: '已收货失败', code: 80001});
    })
  }

  //删除订单
  removeOrder(req, res) {
    api.updateData('Order', {
      isRemove: 1
    }, {
      userId: req.userId,
      status: 2,
      oid: req.body.oid
    }).then(result => {
      res.send({msg: '删除订单成功', code: 90000});
    }).catch(err => {
      res.send({msg: '删除订单失败', code: 90001});
    })
  }

  //查询我的
  findMy(req, res) {
    api.findData('User', {
      userId: req.userId,
      isRemove: 0
    }, ['nickName', 'userImg', 'userBg', 'desc', 'vip']).then(result => {
      res.send({msg: '查询我的成功', code: 'A001', result});
    }).catch(err => {
      res.send({msg: '查询我的失败', code: 'A002'});
    })
  }

  //查询账号管理信息
  findAccountInfo(req, res) {
    api.findData('User', {
      userId: req.userId,
      isRemove: 0
    }, ['userId', 'phone', 'nickName', 'userImg', 'desc', 'vip']).then(result => {
      res.send({msg: '查询账号管理信息成功', code: 'B001', result});
    }).catch(err => {
      res.send({msg: '查询账号管理信息失败', code: 'B002'});
    })
  }

  //修改昵称
  updateNickName(req, res) {
    api.updateData('User', {
      nickName: req.body.nickName
    }, {
      userId: req.userId,
      isRemove: 0
    }).then((result) => {
      res.send({msg: '修改昵称成功', code: 'C001', result, nickName: req.body.nickName});
    }).catch(err => {
      res.send({msg: '修改昵称失败', code: 'C002'});
    })
  }

  //修改简介
  updateDesc(req, res) {
    api.updateData('User', {
      desc: req.body.desc
    }, {
      userId: req.userId,
      isRemove: 0
    }).then((result) => {
      res.send({msg: '修改简介成功', code: 'D001', result, desc: req.body.desc});
    }).catch(err => {
      res.send({msg: '修改简介失败', code: 'D002'});
    })
  }

  //修改密码
  updatePassword(req, res) {

    //加密密码
    //新密码
    let password = utils.encodeString(req.body.password);

    //旧密码加密
    let oldPassword = utils.encodeString(req.body.oldPassword);

    //检索旧密码是否有效
    api.findData('User', {
      userId: req.userId,
      isRemove: 0
    }, ['password']).then(result => {

      if (result.length > 0 && result[0].dataValues.password === oldPassword) {
        //如果旧密码验证通过，则修改密码
        api.updateData('User', {
          password,
          isLogin: 0
        }, {
          userId: req.userId,
          isRemove: 0
        }).then((result) => {
          res.send({msg: '修改密码成功', code: 'E001', result});
        }).catch(err => {
          res.send({msg: '修改密码失败', code: 'E002'});
        })

      } else {
        res.send({msg: '旧密码不正确', code: 'E003'});
      }
    }).catch(err => {
      res.send({msg: '修改密码失败', code: 'E002'});
    })

  }

  //退出登录
  logout(req, res) {
    api.updateData('User', {
      isLogin: 0
    }, {
      userId: req.userId,
      isRemove: 0
    }).then((result) => {
      res.send({msg: '退出登录成功', code: 'F001', result});
    }).catch(err => {
      res.send({msg: '退出登录失败', code: 'F002'});
    })
  }

  //注销账号
  destroyAccount(req, res) {
    api.updateData('User', {
      isRemove: 1,
      isLogin: 0
    }, {
      userId: req.userId,
      isRemove: 0
    }).then((result) => {
      res.send({msg: '注销账号成功', code: 'G001', result});
    }).catch(err => {
      res.send({msg: '注销账号失败', code: 'G002'});
    })
  }

  //上传头像
  updateAvatar(req, res) {

    let serverBase64Img = req.body.serverBase64Img.replace(/ /g, '+');
    // console.log('serverBase64Img ==> ', serverBase64Img);

    //将图片base64码转换为buffer
    let buffer = new Buffer(serverBase64Img, 'base64');

    let random = Math.random().toString().slice(2);

    //使用时间戳修改文件名称
    let filename = 'coffeeshop' + random + new Date().getTime() + '.' + req.body.imgType;

    // console.log('filename ==> ', filename);

    // fs.writeFile(写入文件路径, 文件buffer, 处理函数)
    fs.writeFile(__basename + '/upload/' + filename, buffer, err => {
      //如果写入失败
      if (err) {
        res.send({msg: '上传头像图片失败', code: 'H002'});
      } else {
        let personImgUrl = config.serverOptions.host + ':' + config.serverOptions.port + '/assets/' + filename;

        //执行写入数据库
        api.updateData('User', {
          userImg: personImgUrl
        }, {
          userId: req.userId,
          isRemove: 0
        }).then((result) => {
          res.send({msg: '上传头像图片成功', code: 'H001', result, userImg: personImgUrl});
        }).catch(err => {
          res.send({msg: '上传头像图片失败', code: 'G002'});
        })

      }
    })

  }

  //上传用户背景图
  updateUserBg(req, res) {

    let serverBase64Img = req.body.serverBase64Img.replace(/ /g, '+');
    // console.log('serverBase64Img ==> ', serverBase64Img);

    //将图片base64码转换为buffer
    let buffer = new Buffer(serverBase64Img, 'base64');

    let random = Math.random().toString().slice(2);

    //使用时间戳修改文件名称
    let filename = 'coffeeshop_userbg' + random + new Date().getTime() + '.' + req.body.imgType;

    // console.log('filename ==> ', filename);

    // fs.writeFile(写入文件路径, 文件buffer, 处理函数)
    fs.writeFile(__basename + '/upload/' + filename, buffer, err => {
      //如果写入失败
      if (err) {
        res.send({msg: '上传用户背景图失败', code: 'I002'});
      } else {
        let personImgUrl = config.serverOptions.host + ':' + config.serverOptions.port + '/assets/' + filename;

        //执行写入数据库
        api.updateData('User', {
          userBg: personImgUrl
        }, {
          userId: req.userId,
          isRemove: 0
        }).then((result) => {
          res.send({msg: '上传用户背景图成功', code: 'I001', result, userBg: personImgUrl});
        }).catch(err => {
          res.send({msg: '上传用户背景图失败', code: 'I002'});
        })

      }
    })

  }

  //获取邮箱验证码
  emailValidCode(req, res) {
    
    //获取随机6位数字验证码
    let validCode = Math.random().toString().slice(-6);
    // console.log('validCode ==> ', validCode);

    //创建code
    api.createData('Validcode', {
      code: validCode,
      email: req.body.email
    }).then(() => {

      //发邮件
      utils.sendEmail([req.body.email], validCode, (err, info) => {

        if (err) {
          res.send({msg: '获取邮箱验证码失败', code: 'J002'});
        } else {
        
          res.send({msg: `验证码已发至${info.accepted[0]}，请注意查收，有效时间五分钟`, code: 'J001'});
        }

      })

    }).catch(() => {
      res.send({msg: '获取邮箱验证码失败', code: 'J002'});
    })

  }

  //验证码验证
  checkValidCode(req, res) {
    let now = new Date();

    let hours = now.getHours();

    now.setHours(hours);

    let minutes = now.getMinutes() - 5;
    now.setMinutes(minutes);

    let expires = utils.formatDate(now, 'YYYY-MM-DD HH:mm:ss');

    api.findData('Validcode', {
      code: req.body.validCode,
      isRemove: 0,
      createdAt: {
        [config.Op.gte]: expires
      }
    }, ['code']).then(result => {

      console.log('result ==> ', result);

      if (result.length == 0) {
        res.send({msg: '验证码不正确', code: 'K002'});
      } else {

        api.updateData('Validcode', {
          isRemove: 1
        }, {
          createdAt: {
            [config.Op.lt]: expires
          },
          isRemove: 0

        }).then(() => {
          res.send({msg: '验证码验证成功', code: 'K001'});
        }).catch(() => {
          res.send({msg: '验证码验证失败', code: 'K003'});
        })
      }
    }).catch(err => {
      res.send({msg: '验证码验证失败', code: 'K003'});
    })

  }

  //找回密码
  retrievePassword(req, res) {
    
    //根据注册手机号查询用户信息
    api.transaction(t => {

      return api.findData('User', {
        phone: req.body.phone,
        isRemove: 0
      }, ['password']).then(result => {

        if (result.length == 0) {

          res.send({msg: '手机号未注册', code: 'L004'});

        } else {

          // console.log('result ==> ', result);

          let password = utils.encodeString(req.body.password);

          console.log('password ==> ', password);

          if (password == result[0].dataValues.password) {

            res.send({msg: '新密码不能和原密码一致', code: 'L003'});

          } else {

            return api.updateData('User', {
              password,
            }, {

              phone: req.body.phone,
              isRemove: 0

            }).then(() => {

              res.send({msg: '找回密码成功', code: 'L001'});
          
            }).catch(() => {

              res.send({msg: '找回密码失败', code: 'L002'});

            })

          }

        }
      }).catch(() => {
        res.send({msg: '找回密码失败', code: 'K004'});
      })

    })

  }

  //搜索
  search(req, res) {
    api.findData('Product', {
      name: {
        [config.Op.like]: `%${req.query.name}%`
      }
    }).then(result => {
      res.send({
        msg: '搜索商品成功',
        code: 'Q001',
        result
      });
    }).catch(err => {
      res.send({
        msg: '搜索商品失败',
        code: 2001
      });
    })
  }


}

//导出RouteController实例
module.exports = new RouteController();