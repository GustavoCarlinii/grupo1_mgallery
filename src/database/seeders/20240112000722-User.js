'use strict';
const bcryp = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [roles] = await queryInterface.sequelize.query("select * from roles where name = 'Administrador'");
    const [cities] = await queryInterface.sequelize.query("select * from cities where name = 'Rafaela'");
    await queryInterface.bulkInsert('users', [
      {
        first_name: "Gustavo ",
        last_name: "Carlini",
        email: "gcarlini52@gmail.com",
        postal_code: "2300",
        phone: "32224582",
        birthdate: "08/06/1995",
        adress: "27 de octubre 7122",
        password: bcryp.hashSync('123456', 10),
        roles_id: roles[0].id,
        cities_id: cities[0].id,

      }], {});
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
  }
};
