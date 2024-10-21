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


var Model = Sequelize.Model; //定义一个商家address数据表结构

var Address =
/*#__PURE__*/
function (_Model) {
  _inherits(Address, _Model);

  function Address() {
    _classCallCheck(this, Address);

    return _possibleConstructorReturn(this, _getPrototypeOf(Address).apply(this, arguments));
  }

  return Address;
}(Model); //定义address表结构


Address.init({
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
  //地址唯一aid
  aid: {
    type: Sequelize.STRING(30),
    allowNull: false,
    defaultValue: '',
    comment: '地址唯一aid'
  },
  //用户唯一id
  userId: {
    type: Sequelize.STRING(18),
    allowNull: false,
    defaultValue: '',
    comment: '用户唯一id'
  },
  //用户昵称
  name: {
    type: Sequelize.STRING(18),
    allowNull: false,
    defaultValue: '',
    comment: '用户昵称'
  },
  //电话
  tel: {
    type: Sequelize.STRING(11),
    allowNull: false,
    defaultValue: '',
    comment: '电话'
  },
  //省份
  province: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: '',
    comment: '省份'
  },
  //市
  city: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: '',
    comment: '市'
  },
  //区
  county: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: '',
    comment: '区'
  },
  //详细地址
  addressDetail: {
    type: Sequelize.STRING(100),
    allowNull: false,
    defaultValue: '',
    comment: '详细地址'
  },
  //地区编号
  areaCode: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: '',
    comment: '地区编号'
  },
  //邮政编号
  postalCode: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: '',
    comment: '邮政编号'
  },
  //默认地址
  isDefault: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '0不是默认地址，1默认地址'
  },
  //删除地址，逻辑删除
  isRemove: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '0没有删除，1删除'
  }
}, {
  //模型名称
  modelName: 'address',
  //多个单词组合字段以_分隔命名
  underscored: true,
  //表的名称, 如果没有定义表名称，则使用模型名称命名为表名称
  tableName: 'address',
  //创建updateAt、createAt字段
  timestamps: true,
  //连接实例
  sequelize: sequelize
}); //创建address表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Address.sync(): 创建表结构，该方法始终返回一个promise

Address.sync({
  force: false
}); //导出模型

module.exports = Address;