'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
  
    static associate(models) {

    }
  }
  cities.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
    timestamps:false
  });
  return Roles;
};