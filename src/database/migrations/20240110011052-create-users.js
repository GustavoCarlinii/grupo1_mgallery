'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true,
        },
        first_name:{
          type:Sequelize.TEXT,
          allowNull:false,
        },
        last_name:{
          type:Sequelize.TEXT,
          allowNull:false,
        },
        email:{
          type:Sequelize.TEXT,
          allowNull:false,
        },
        postal_code:{
          type:Sequelize.TEXT,
          allowNull:false,
        },
        phone:{
          type:Sequelize.TEXT,
          allowNull:true,
        },
        birthdate:{
          type:Sequelize.DATE,
          allowNull:true,
        },
        adress:{
          type:Sequelize.TEXT,
          allowNull:true,
        },
        password:{
          type:Sequelize.TEXT,
          allowNull:false,
        },
        profile_pic:{
          type:Sequelize.TEXT,
          allowNull:true,
        },
        roles_id: {
          type:Sequelize.INTEGER,
          references:{
            model:"Roles",
            key:"id",
          },
        },
        cities_id: {
          type:Sequelize.INTEGER,
          references:{
            model:"Cities",
            key:"id",
          }, 
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};