'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const [users] = await queryInterface.sequelize.query("select * from users where last_name = 'Carlini'");
    await queryInterface.bulkInsert('artworks', [{
      name: "El dolor",
      prices: "$1200",
      user_id: users[0].id,
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('artworks', null, {});
  }
};
