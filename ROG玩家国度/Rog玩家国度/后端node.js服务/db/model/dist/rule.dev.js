"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//导入sequelize
var Sequelize = require('sequelize'); //导入商品规格数据


var rule = require(__basename + '/data/rule.js'); //定义模型，类似创建表结构


var Model = Sequelize.Model; //定义一个商家rule数据表结构

var Rule =
/*#__PURE__*/
function (_Model) {
  _inherits(Rule, _Model);

  function Rule() {
    _classCallCheck(this, Rule);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rule).apply(this, arguments));
  }

  return Rule;
}(Model); //定义rule表结构


Rule.init({
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
  //商品pid
  pid: {
    //STRING: 字符类型, 30个字符
    type: Sequelize.STRING(30),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品pid'
  },
  //温度规格
  tem: {
    type: Sequelize.STRING(100),
    allowNull: false,
    defaultValue: '',
    comment: '温度规格'
  },
  //温度描述
  temDesc: {
    type: Sequelize.STRING(10),
    allowNull: false,
    defaultValue: '',
    comment: '温度描述'
  },
  //糖规格
  sugar: {
    type: Sequelize.STRING(100),
    allowNull: false,
    defaultValue: '',
    comment: '糖规格'
  },
  //糖描述
  sugarDesc: {
    type: Sequelize.STRING(10),
    allowNull: false,
    defaultValue: '',
    comment: '糖描述'
  },
  //奶规格
  milk: {
    type: Sequelize.STRING(100),
    allowNull: false,
    defaultValue: '',
    comment: '奶规格'
  },
  //奶描述
  milkDesc: {
    type: Sequelize.STRING(10),
    allowNull: false,
    defaultValue: '',
    comment: '奶描述'
  },
  //奶油规格
  cream: {
    type: Sequelize.STRING(100),
    allowNull: false,
    comment: '奶油规格'
  },
  //奶油描述
  creamDesc: {
    type: Sequelize.STRING(10),
    allowNull: false,
    defaultValue: '',
    comment: '奶油描述'
  }
}, {
  //模型名称
  modelName: 'rule',
  //多个单词组合字段以_分隔命名
  underscored: true,
  //表的名称, 如果没有定义表名称，则使用模型名称命名为表名称
  tableName: 'rule',
  //创建updateAt、createAt字段
  timestamps: true,
  //连接实例
  sequelize: sequelize
}); //创建rule表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Rule.sync(): 创建表结构，该方法始终返回一个promise
// Rule.sync({force: false})
// .then(() => {
//   rule.forEach(v => {
//     Rule.create(v);
//   })
// })
//导出模型

module.exports = Rule;