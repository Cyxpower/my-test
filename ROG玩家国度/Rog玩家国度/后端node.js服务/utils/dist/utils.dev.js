"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//导入加密模块
var crypto = require('crypto'); //导入jsonwebtoken模块


var jsonwebtoken = require('jsonwebtoken'); //导入发邮件模块


var nodemailer = require('nodemailer'); //导入时间格式化模块


var moment = require('moment'); //创建发邮件实例


var transporter = nodemailer.createTransport({
  host: config.emailOptions.host,
  port: config.emailOptions.port,
  //授权验证
  auth: {
    //授权用户邮箱地址
    user: config.emailOptions.user,
    //授权码
    pass: config.emailOptions.pass
  }
}); //工具库

var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "encodeString",
    //字符串加密
    value: function encodeString(value) {
      //value: 被加密的字符串
      value = config.saltOptions.pwdSalt + value; //使用md5方式加密

      var md5 = crypto.createHash('md5'); //对value加密

      md5.update(value);
      return md5.digest('hex');
    } //随机生成6位验证码

  }, {
    key: "getValidCode",
    value: function getValidCode() {
      var codes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var codeString = '';

      for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * codes.length);
        codeString += codes[randomIndex];
      }

      return codeString;
    } //将cookie转换为普通对象

  }, {
    key: "transformCookieObject",
    value: function transformCookieObject(value) {
      if (value) {
        var cookieObject = {};
        value = value.split(/; /);

        for (var i = 0; i < value.length; i++) {
          var v = value[i].split('=');
          cookieObject[v[0]] = v[1];
        }

        return cookieObject;
      }

      return null;
    } //生成token

  }, {
    key: "getToken",
    value: function getToken(value, salt, time) {
      //data: 生成token的数据
      //expiresIn: 过期时间, '7d'(天), '7h'(小时), '2 days'(天), 60(秒), '1000'(毫秒)
      //salt: token加盐
      var codeToken = jsonwebtoken.sign({
        //签名数据
        data: value
      }, salt, {
        expiresIn: time
      });
      return codeToken;
    } //记录邮箱验证码的有效时间

  }, {
    key: "setValidExpires",
    value: function setValidExpires(o) {
      //o.success = function (err, info) {}
      jsonwebtoken.sign({
        //签名数据
        data: o.value
      }, o.salt, {
        expiresIn: o.expires
      }, o.success);
    } //验证token

  }, {
    key: "validToken",
    value: function validToken(token, salt, fn) {
      //fn(err, info) {}
      jsonwebtoken.verify(token, salt, fn);
    } //格式化时间

  }, {
    key: "formatDate",
    value: function formatDate(dateString, format) {
      return moment(dateString).format(format);
    } // 获取当前时间

  }, {
    key: "nowDate",
    value: function nowDate() {
      return moment().format('YYYY-MM-DD hh:mm:ss');
    } //发邮件

  }, {
    key: "sendEmail",
    value: function sendEmail(emails, validCode, fn) {
      //emails: 接收邮件地址列表，array
      //fn(error, info) {}
      //发送邮件
      transporter.sendMail({
        from: config.emailOptions.user,
        //邮件发送地址
        to: emails.join(','),
        // 邮件接收地址
        subject: "瑞幸咖啡-找回密码",
        //主题
        text: "\u9A8C\u8BC1\u7801\uFF1A".concat(validCode, "\uFF0C5\u5206\u949F\u5185\u6709\u6548")
      }, fn);
    }
  }]);

  return Utils;
}();

module.exports = new Utils();