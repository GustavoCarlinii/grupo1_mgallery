'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtWorks extends Model {

    static associate(models) {

    }
  }
  ArtWorks.init({  
    name:{
    type:Sequelize.TEXT,
    allowNull:false,
  },
  prices:{
    type:Sequelize.TEXT,
    allowNull:false,
  },
  user_id: {
    type:Sequelize.INTEGER,
    references:{
      model:"users",
      key:"id",
    },} 
  }, {
    sequelize,
    modelName: 'ArtWorks',
  });
  return ArtWorks;
};