'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "profesion",
      [
        {
          nombre: "cazador",
          desde: 1,
          hasta: 68,
          culturaId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "pescador",
          desde: 69,
          hasta: 98,
          culturaId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "barbara",
          desde: 99,
          hasta: 100,
          culturaId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "cazador",
          desde: 1,
          hasta: 10,
          culturaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "fabricante",
          desde: 11,
          hasta: 17,
          culturaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "guerrero",
          desde: 18,
          hasta: 19,
          culturaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "noble",
          desde: 20,
          hasta: 20,
          culturaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "pastor",
          desde: 21,
          hasta: 98,
          culturaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "shaman",
          desde: 99,
          hasta: 100,
          culturaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "artista",
          desde: 1,
          hasta: 1,
          culturaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "cazador",
          desde: 2,
          hasta: 11,
          culturaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "fabricante",
          desde: 12,
          hasta: 13,
          culturaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "granjero",
          desde: 14,
          hasta: 15,
          culturaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "guerrero",
          desde: 66,
          hasta: 71,
          culturaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "noble",
          desde: 72,
          hasta: 73,
          culturaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "pescador",
          desde: 74,
          hasta: 83,
          culturaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "sacerdote/shaman",
          desde: 99,
          hasta: 100,
          culturaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "adepto hecicero",
          desde: 1,
          hasta: 1,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "artista",
          desde: 2,
          hasta: 2,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "escriba",
          desde: 3,
          hasta: 3,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "fabricante",
          desde: 4,
          hasta: 8,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "granjero",
          desde: 9,
          hasta: 67,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "ladron",
          desde: 68,
          hasta: 69,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "marinero",
          desde: 70,
          hasta: 79,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "mercader",
          desde: 80,
          hasta: 81,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "noble",
          desde: 82,
          hasta: 82,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "pastor",
          desde: 83,
          hasta: 92,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "sacerdote",
          desde: 93,
          hasta: 94,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "sanador",
          desde: 95,
          hasta: 95,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "soldado",
          desde: 96,
          hasta: 100,
          culturaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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