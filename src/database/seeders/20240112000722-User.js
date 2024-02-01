'use strict';
const bcryp = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [roleAdmin] = await queryInterface.sequelize.query("select * from roles where name = 'Administrador'");
    const [cityRafaela] = await queryInterface.sequelize.query("select * from cities where name = 'Rafaela'");
    const [roleUser] = await queryInterface.sequelize.query("select * from roles where name = 'Usuario'");
    const [cityRosario] = await queryInterface.sequelize.query("select * from cities where name = 'Rosario'");
    await queryInterface.bulkInsert('users', [
      {
        first_name: "Gustavo",
        last_name: "Carlini",
        email: "gcarlini52@gmail.com",
        postal_code: "2300",
        phone: "32224582",
        birthdate: "08/06/1995",
        adress: "27 de octubre 7122",
        password: bcryp.hashSync('123456', 10),
        roles_id: roleAdmin[0].id,
        cities_id: cityRafaela[0].id,
      },
      {
        first_name: "Lautaro",
        last_name: "Vega",
        email: "lautaro-vega@gmail.com",
        postal_code: "2300",
        phone: "3232133123",
        birthdate: "18/01/1992",
        adress: "Lisandro de la torre 1875",
        password: bcryp.hashSync('123456', 10),
        roles_id: roleAdmin[0].id,
        cities_id: cityRosario[0].id,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
  }
};