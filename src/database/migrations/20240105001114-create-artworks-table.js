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
    await queryInterface.createTable('artworks', { 
      id: { primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true,
        },
        name:{
          type:Sequelize.STRING(45),
          allowNull:false,
        },
        prices:{
          type:Sequelize.STRING(11),
          allowNull:false,
        },
        user_id: {
          type:Sequelize.INTEGER,
          references:{
            model:"users",
            key:"id",
          },
        },
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('artworks');
  }
};
