"use strict";

//配置层
//导入sequelize
var Sequelize = require('sequelize'); //sequelize条件操作


exports.Op = Sequelize.Op; //服务器配置

exports.serverOptions = {
  //域名
  // host: 'http://192.168.48.131',
  host: 'http://127.0.0.1',
  //端口
  port: 10002
}; //数据库配置

exports.mysqlOptions = {
  //数据库名称
  database: 'server',
  //数据库登录用户名
  user: 'root',
  //数据库登录密码
  password: '123456',
  //数据库连接地址
  host: 'localhost',
  //连接数据库类型
  dialect: 'mysql'
}; // 加盐配置

exports.saltOptions = {
  //token加盐
  tokenSalt: 'kafei_AA',
  //邮箱验证码加盐
  validCodeSalt: 'email_AA'
}; //发邮件配置

exports.emailOptions = {
  //主机
  host: 'smtp.qq.com',
  //端口
  port: 465,
  //发邮件地址
  user: '1161437421@qq.com',
  //授权码
  pass: 'rkauiwpzloasjgbb'
}; //阿里云发短信配置

exports.messageOptions = {
  //密钥id
  accessKeyId: 'LTAI4Ff43TUiaTKm8dSxLhRn',
  //加密密钥
  secretAccessKey: '9vkFUwz1ApeJ1fEG4ZfH4TdrzJzjMD',
  //模板号
  templateCode: 'SMS_181550530',
  //签名
  signName: '车厘子APP'
}; // 允许请求域跨域的白名单

exports.originListOptions = []; //token的过期时间

exports.tokenOptions = {
  expiresIn: '30d'
};