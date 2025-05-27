'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Cuidado personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Psicología",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Comida",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Películas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {})
  }
};
