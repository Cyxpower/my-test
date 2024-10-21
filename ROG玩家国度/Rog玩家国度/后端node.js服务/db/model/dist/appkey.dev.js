"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//导入sequelize
var Sequelize = require('sequelize'); //导入appkey数据


var appkeys = require(__basename + '/data/appkeys.js'); //定义模型，类似创建表结构


var Model = Sequelize.Model; //定义一个商家appkey数据表结构

var Appkey =
/*#__PURE__*/
function (_Model) {
  _inherits(Appkey, _Model);

  function Appkey() {
    _classCallCheck(this, Appkey);

    return _possibleConstructorReturn(this, _getPrototypeOf(Appkey).apply(this, arguments));
  }

  return Appkey;
}(Model); //定义appkey表结构


Appkey.init({
  //定义id字段
  id: {
    //字段类型
    //INTEGER: 整型， UNSIGNED: 无符号
    type: Sequelize.INTEGER.UNSIGNED,
    //是否为空
    allowNull: false,
    //自动递增
    autoIncrement: true,
    //主键
    primaryKey: true,
    //注释
    comment: '表的主键id'
  },
  //密钥
  key: {
    //STRING: 字符类型
    type: Sequelize.STRING,
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '密钥'
  },
  //使用者
  user: {
    type: Sequelize.STRING(18),
    allowNull: false,
    defaultValue: '',
    comment: '使用者'
  },
  //vip使用者
  isVip: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '0不是vip，1是vip'
  },
  //appkey使用剩余次数
  count: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 520,
    comment: 'appkey使用剩余次数'
  }
}, {
  //模型名称
  modelName: 'appkey',
  //多个单词组合字段以_分隔命名
  underscored: true,
  //表的名称, 如果没有定义表名称，则使用模型名称命名为表名称
  tableName: 'appkey',
  //创建updateAt、createAt字段
  timestamps: true,
  //连接实例
  sequelize: sequelize
}); //创建appkey表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Appkey.sync(): 创建表结构，该方法始终返回一个promise
// Appkey.sync({force: false})
// .then(() => {
//   appkeys.forEach(v => {
//     Appkey.create(v);
//   })
// })
//导出模型

module.exports = Appkey;