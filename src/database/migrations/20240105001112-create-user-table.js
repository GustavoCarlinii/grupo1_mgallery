'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', { 
      id: {
        primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true,
        },
        first_name:{
          type:Sequelize.STRING(45),
          allowNull:false,
        },
        last_name:{
          type:Sequelize.STRING(45),
          allowNull:false,
        },
        email:{
          type:Sequelize.STRING(45),
          allowNull:false,
        },
        postal_code:{
          type:Sequelize.STRING(5),
          allowNull:false,
        },
        phone:{
          type:Sequelize.STRING(45),
          allowNull:true,
        },
        birthdate:{
          type:Sequelize.DATE,
          allowNull:true,
        },
        adress:{
          type:Sequelize.STRING(45),
          allowNull:true,
        },
        password:{
          type:Sequelize.STRING(45),
          allowNull:true,
        },
        roles_id: {
          type:Sequelize.INTEGER,
          references:{
            model:"roles",
            key:"id",
          },
        },
        cities_id: {
          type:Sequelize.INTEGER,
          references:{
            model:"cities",
            key:"id",
          },
        }
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users')
  }
};
