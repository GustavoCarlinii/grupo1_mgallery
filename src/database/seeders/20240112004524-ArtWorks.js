'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const [users] = await queryInterface.sequelize.query("select * from users where last_name = 'Carlini' or last_name = 'Vega'");
    await queryInterface.bulkInsert('artworks', [{
      name: "El dolor",
      prices: "$1200",
      user_id: users[0].id,
      img: "./images/gato-mirando.jpg"
      },
      {
        name: "Un dia mas ",
        prices:"$400000",
        user_id: users[1].id,
      },
      {
        name: "Alice ha desaparecido ",
        prices:"$21000",
        user_id: users[0].id,
      },
      {
        name: "Lacrimosa",
        prices:"$99000",
        user_id: users[0].id,
      },
      {
        name: "Mazcotas del dungeon ",
        prices:"$87000",
        user_id: users[1].id,
      },
      {
        name: "Imperium Legendary ",
        prices:"$27000",
        user_id: users[0].id,
      },
      {
        name: "Proyecto Gaia",
        prices:"$170000",
        user_id: users[0].id,
      },
      {
        name: "Future inc.",
        prices:"$40000",
        user_id: users[1].id,
      },
      {
        name: "Arkham horror",
        prices:"$80000",
        user_id: users[0].id,
      },
      {
        name: "Pax Pamir",
        prices:"$70000",
        user_id: users[1].id,
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('artworks', null, {});
  }
};
