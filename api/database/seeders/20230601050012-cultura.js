'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cultura",
      [
        {
          nombre: "primitiva",
          desde: 0,
          hasta: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "nómada",
          desde: 2,
          hasta: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "barbara",
          desde: 4,
          hasta: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "civilizada",
          desde: 7,
          hasta: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}  
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
