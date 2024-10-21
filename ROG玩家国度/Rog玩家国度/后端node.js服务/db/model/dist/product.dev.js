"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//导入sequelize
var Sequelize = require('sequelize'); //导入产品数据


var products = require(__basename + '/data/products.js'); //定义模型，类似创建表结构


var Model = Sequelize.Model; //定义一个商家product数据表结构

var Product =
/*#__PURE__*/
function (_Model) {
  _inherits(Product, _Model);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, _getPrototypeOf(Product).apply(this, arguments));
  }

  return Product;
}(Model); //定义product表结构


Product.init({
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
  //定义商品id字段
  pid: {
    //STRING: 字符类型, 20个字符
    type: Sequelize.STRING(20),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品id'
  },
  //商品类型
  type: {
    type: Sequelize.STRING(20),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品类型'
  },
  //商品名称
  name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品名称'
  },
  //商品价格
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    //默认值
    defaultValue: 0,
    comment: '商品价格'
  },
  //商品详情描述
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品描述'
  },
  //商品图片
  smallImg: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '',
    comment: '商品小图片'
  },
  //商品图片
  largeImg: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '',
    comment: '商品大图片'
  },
  //商品类型描述
  typeDesc: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '',
    comment: '类型描述'
  },
  //热销商品
  isHot: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '0非热销商品,1热销商品'
  },
  //英文名称
  enname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '',
    comment: '英文名称'
  }
}, {
  //模型名称
  modelName: 'product',
  //多个单词组合字段以_分隔命名
  underscored: true,
  //表的名称, 如果没有定义表名称，则使用模型名称命名为表名称
  tableName: 'product',
  //创建updateAt、createAt字段
  timestamps: true,
  //连接实例
  sequelize: sequelize
}); //创建product表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Product.sync(): 创建表结构，该方法始终返回一个promise
// Product.sync({force: false})
// .then(() => {
//   products.forEach(v => {
//     Product.create(v);
//   })
// })
//导出模型

module.exports = Product;