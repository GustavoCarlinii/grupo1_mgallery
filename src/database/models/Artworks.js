'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artworks extends Model {

    static associate(models) {

    }
  }
  Artworks.init({
  id: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },  
  name:{
    type:DataTypes.TEXT,
    allowNull:false,
  },
  prices:{
    type:DataTypes.TEXT,
    allowNull:false,
  },
  description:{
    type:DataTypes.TEXT,
    allowNull:true,
  },
  user_id: {
    type:DataTypes.INTEGER,
     
  }}, 
  {
    sequelize,
    modelName: 'ArtWorks',
  });
  return Artworks;
};