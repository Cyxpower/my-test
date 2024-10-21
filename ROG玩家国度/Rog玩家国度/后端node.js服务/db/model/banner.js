//导入sequelize
let Sequelize = require('sequelize');

//导入banner数据
let banner = require(__basename + '/data/banner.js');

//定义模型，类似创建表结构
let Model = Sequelize.Model;

//定义一个商家banner数据表结构
class Banner extends Model {}

//定义banner表结构
Banner.init({
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

  //banner图片
  bannerImg: {
    //STRING: 字符类型
    type: Sequelize.STRING,
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: 'banner图片'
  },

  //banner图上下架
  isUpper: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
    comment: '0下架，1下架'
  },

  pid: {
    //STRING: 字符类型, 20个字符
    type: Sequelize.STRING(20),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品id'
  },

  //商品名称
  name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    //默认值
    defaultValue: '',
    comment: '商品名称'
  }

}, {
  //模型名称
  modelName: 'banner',

  //多个单词组合字段以_分隔命名
  underscored: true,

  //表的名称, 如果没有定义表名称，则使用模型名称命名为表名称
  tableName: 'banner',

  //创建updateAt、createAt字段
  timestamps: true,

  //连接实例
  sequelize

})

//创建banner表结构
//force: true, 如果数据表存在，则先删除，再创建
//force: false, 如果数据表不存在，则创建
//Banner.sync(): 创建表结构，该方法始终返回一个promise
Banner.sync({
    force: true
  })
  .then(() => {
    banner.forEach(v => {
      Banner.create(v);
    })
  })

//导出模型
module.exports = Banner;