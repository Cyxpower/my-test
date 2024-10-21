"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//操作数据api
var API =
/*#__PURE__*/
function () {
  function API() {
    _classCallCheck(this, API);
  }

  _createClass(API, [{
    key: "createData",
    //添加记录
    value: function createData(modelName, o, t) {
      //modelName: 模型 string
      //o: 写入数据 object
      //t: 事务对象
      return Model[modelName].create(o, {
        transaction: t
      });
    } //查询数据

  }, {
    key: "findData",
    value: function findData(modelName, condition, attributes) {
      //modelName：模型, string
      //condition: 查询条件, object
      //attributes: 查询字段, array
      return Model[modelName].findAll({
        //condition: 查询条件, object
        where: condition,
        //attributes: 查询字段, array
        attributes: attributes
      });
    } //更新数据

  }, {
    key: "updateData",
    value: function updateData(modelName, attributeValues, condition, t) {
      //modelName: 模型名称, string
      //attributeValues：修改属性值，类型object
      //condition: 条件， 类型object
      //t: 事务处理对象
      return Model[modelName].update(attributeValues, {
        where: condition
      }, {
        transaction: t
      });
    } //删除数据

  }, {
    key: "destroyData",
    value: function destroyData(modelName, condition) {
      //modelName: 模型名称, 类型string
      //condition: 条件， 类型object
      return Model[modelName].destroy({
        where: condition
      });
    } //分页查询，查询符合条件的所有记录数和记录数据

  }, {
    key: "findPaginationData",
    value: function findPaginationData(modelName, condition, offset, limit) {
      //modelName: 模型名称
      //condition: 查询条件
      //offset: 偏移到第几条数据开始查询,必须为number的数字
      //limit: 查询记录数量, 必须为number的数字
      return Model[modelName].findAndCountAll({
        where: condition,
        offset: offset,
        limit: limit
      });
    } //查询满足条件的所有记录数量

  }, {
    key: "countData",
    value: function countData(modelName, condition) {
      return Model[modelName].count({
        where: condition
      });
    } //计算总和(比如购物车商品数量)

  }, {
    key: "sumData",
    value: function sumData(modelName, field, condition) {
      //modelName: 模型名称，string
      //field: 求和字段，string,
      //condition: 条件，object
      return Model[modelName].sum(field, {
        where: condition
      });
    } //原始查询

  }, {
    key: "queryData",
    value: function queryData(sql, o) {
      //sql: 原生sql语句
      //o: 原生sql语句预处理对象
      return sequelize.query(sql, {
        bind: o,
        type: sequelize.QueryTypes.SELECT
      });
    } //事务处理，当执行两条sql语句或者两条以上，可能需要用到事务处理（添加数据、更改数据、删除数据）

  }, {
    key: "transaction",
    value: function transaction(fn) {
      return sequelize.transaction(fn);
    }
  }]);

  return API;
}();

module.exports = new API();