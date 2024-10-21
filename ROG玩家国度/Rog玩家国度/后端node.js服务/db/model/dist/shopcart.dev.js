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


var Model = Sequelize.Model; //定义一个商家shopcart数据表结构

var Shopcart =
/*#__PURE__*/
function (_Model) {
  _inherits(Shopcart, _Model);

  function Shopcart() {
    _classCallCheck(this, Shopcart);

    return _possibleConstructorReturn(this, _getPrototypeOf(Shopcart).apply(this, arguments));
  }

  return Shopcart;
}(Model); //定义shopcart表结构


Shopcart.init({
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
  //购物车记录的唯一标识
  sid: {
    //STRING: 字符类型, 20个字符
    type: Sequelize.STRING(20),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '购物车记录的唯一标识'
  },
  //定义商品id字段
  pid: {
    //STRING: 字符类型, 20个字符
    type: Sequelize.STRING(20),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品id'
  },
  //商品规格
  rule: {
    type: Sequelize.STRING(100),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品规格'
  },
  //商品数量
  count: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '商品数量'
  },
  //用户唯一id
  userId: {
    type: Sequelize.STRING(18),
    allowNull: false,
    defaultValue: '',
    comment: '用户唯一id'
  },
  //商品状态
  status: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '商品状态, 0未付款,1待收货,2已收货'
  },
  //是否删除商品, 逻辑删除(假删除)
  isRemove: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '商品状态, 0未删除,1删除'
  }
}, {
  //模型名称
  modelName: 'shopcart',
  //多个单词组合字段以_分隔命名
  underscored: true,
  //表的名称, 如果没有定义表名称，则使用模型名称命名为表名称
  tableName: 'shopcart',
  //创建updateAt、createAt字段
  timestamps: true,
  //连接实例
  sequelize: sequelize
}); //创建shopcart表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Shopcart.sync(): 创建表结构，该方法始终返回一个promise

Shopcart.sync({
  force: false
}); //导出模型

module.exports = Shopcart;