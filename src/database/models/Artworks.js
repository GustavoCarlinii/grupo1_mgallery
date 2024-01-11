'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtWorks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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