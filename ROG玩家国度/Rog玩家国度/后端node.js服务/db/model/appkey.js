//导入sequelize
let Sequelize = require('sequelize');

//导入appkey数据
let appkeys = require(__basename + '/data/appkeys.js');

//定义模型，类似创建表结构
let Model = Sequelize.Model;

//定义一个商家appkey数据表结构
class Appkey extends Model {}

//定义appkey表结构
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
    defaultValue: 1000,
    comment: 'appkey使用剩余次数'
  },

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
  sequelize

})

//创建appkey表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Appkey.sync(): 创建表结构，该方法始终返回一个promise
// Appkey.sync({
//     force: true
//   })
//   .then(() => {
//     appkeys.forEach(v => {
//       Appkey.create(v);
//     })
//   })

//导出模型
module.exports = Appkey;