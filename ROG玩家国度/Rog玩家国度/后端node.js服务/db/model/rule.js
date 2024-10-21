//导入sequelize
let Sequelize = require('sequelize');

//导入商品规格数据
let rule = require(__basename + '/data/rule.js');

//定义模型，类似创建表结构
let Model = Sequelize.Model;

//定义一个商家rule数据表结构
class Rule extends Model {}

//定义rule表结构
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
  sequelize

})

//创建rule表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Rule.sync(): 创建表结构，该方法始终返回一个promise
Rule.sync({
    force: true
  })
  .then(() => {
    rule.forEach(v => {
      Rule.create(v);
    })
  })

//导出模型
module.exports = Rule;