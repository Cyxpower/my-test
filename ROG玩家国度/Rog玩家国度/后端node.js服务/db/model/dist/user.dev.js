"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//导入sequelize
var Sequelize = require('sequelize'); //定义模型，类似创建表结构


var Model = Sequelize.Model;
var personImgUrl = config.serverOptions.host + ':' + config.serverOptions.port + '/assets/'; //定义一个商家user数据表结构

var User =
/*#__PURE__*/
function (_Model) {
  _inherits(User, _Model);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));
  }

  return User;
}(Model); //定义user表结构


User.init({
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
  //用户头像
  userImg: {
    //STRING: 字符类型
    type: Sequelize.STRING,
    allowNull: false,
    //默认值
    defaultValue: personImgUrl + 'default.png',
    comment: '用户头像'
  },
  //用户背景
  userBg: {
    //STRING: 字符类型
    type: Sequelize.STRING,
    allowNull: false,
    //默认值
    defaultValue: personImgUrl + 'default_bg.jpg',
    comment: '用户背景'
  },
  //昵称
  nickName: {
    type: Sequelize.STRING(18),
    allowNull: false,
    defaultValue: '',
    comment: '用户昵称'
  },
  //密码
  password: {
    type: Sequelize.STRING(32),
    allowNull: false,
    defaultValue: '',
    comment: '用户密码'
  },
  //用户唯一id
  userId: {
    type: Sequelize.STRING(18),
    allowNull: false,
    defaultValue: '',
    comment: '用户唯一id'
  },
  //用户手机号
  phone: {
    type: Sequelize.STRING(11),
    allowNull: false,
    comment: '用户手机号'
  },
  //vip
  vip: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '0不是vip，1是vip'
  },
  //是否注销
  isRemove: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '0未注销，1注销'
  },
  //个人简介
  desc: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: '',
    comment: '个人简介'
  },
  //是否登录
  isLogin: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '0未登录，1登录'
  }
}, {
  //模型名称
  modelName: 'user',
  //多个单词组合字段以_分隔命名
  underscored: true,
  //表的名称, 如果没有定义表名称，则使用模型名称命名为表名称
  tableName: 'user',
  //创建updateAt、createAt字段
  timestamps: true,
  //连接实例
  sequelize: sequelize
}); //创建user表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//User.sync(): 创建表结构，该方法始终返回一个promise

User.sync({
  force: false
}); //导出模型

module.exports = User;