'use strict';
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

    }
  }
  User.init({
    first_name:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
    last_name:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
    email:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
    postal_code:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
    phone:{
      type:DataTypes.TEXT,
      allowNull:true,
    },
    birthdate:{
      type:DataTypes.DATE,
      allowNull:true,
    },
    adress:{
      type:DataTypes.TEXT,
      allowNull:true,
    },
    password:{
      type:DataTypes.TEXT,
      allowNull:true,
    },
    roles_id: {
      type:DataTypes.INTEGER,
      references:{
        model:"Roles",
        key:"id",
      },
    },
    cities_id: {
      type:DataTypes.INTEGER,
      references:{
        model:"Cities",
        key:"id",
      }, 
    },
  },
  {
    sequelize,
    modelName:'User',
    hooks:{
      beforeCreate: (user,options) =>{
        user.password = bcrypt.hashSync(user.password, 10);
      }
    }
  });
return  User;
};  