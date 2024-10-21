"use strict";

var baseUrl = __basename + '/db/model'; //导入商品数据模型

var Product = require(baseUrl + '/product.js'); //导入用户模型


var User = require(baseUrl + '/user.js'); //导入banner模型


var Banner = require(baseUrl + '/banner.js'); //导入类型模型


var Type = require(baseUrl + '/type.js'); //导入appkey模型


var Appkey = require(baseUrl + '/appkey.js'); //导入规格模型


var Rule = require(baseUrl + '/rule.js'); //导入收藏商品模型


var Like = require(baseUrl + '/like.js'); //导入购物车商品模型


var Shopcart = require(baseUrl + '/shopcart.js'); //导入地址模型


var Address = require(baseUrl + '/address.js'); //导入订单模型


var Order = require(baseUrl + '/order.js'); //导入验证码模型


var Validcode = require(baseUrl + '/validcode.js'); //导出所有模型


module.exports = {
  User: User,
  Product: Product,
  Banner: Banner,
  Type: Type,
  Appkey: Appkey,
  Rule: Rule,
  Like: Like,
  Shopcart: Shopcart,
  Address: Address,
  Order: Order,
  Validcode: Validcode
};