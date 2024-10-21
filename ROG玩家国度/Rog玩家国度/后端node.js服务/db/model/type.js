//导入sequelize
let Sequelize = require('sequelize');

//导入type数据
let type = require(__basename + '/data/type.js');

//定义模型，类似创建表结构
let Model = Sequelize.Model;

//定义一个商家type数据表结构
class Type extends Model {}

//定义type表结构
Type.init({
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

  //类型名称
  type: {
    //STRING: 字符类型
    type: Sequelize.STRING(20),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '类型名称'
  },

  //类型描述
  typeDesc: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: '',
    comment: '类型描述'
  }

}, {
  //模型名称
  modelName: 'type',

  //多个单词组合字段以_分隔命名
  underscored: true,

  //表的名称, 如果没有定义表名称，则使用模型名称命名为表名称
  tableName: 'type',

  //创建updateAt、createAt字段
  timestamps: true,

  //连接实例
  sequelize

})

//创建type表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Type.sync(): 创建表结构，该方法始终返回一个promise
Type.sync({
    force: true
  })
  .then(() => {
    type.forEach(v => {

      Type.create(v);
    })
  })

//导出模型
module.exports = Type;