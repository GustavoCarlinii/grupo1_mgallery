'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {

    static associate(models) {
  
    }
  }
  Cities.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cities',
    timestamps:false
  });
  return Cities;
};