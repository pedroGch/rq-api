'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabPercepcion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mod: {
        type: Sequelize.INTEGER
      },
      buscar: {
        type: Sequelize.INTEGER
      },
      escuchar: {
        type: Sequelize.INTEGER
      },
      gustar: {
        type: Sequelize.INTEGER
      },
      oler: {
        type: Sequelize.INTEGER
      },
      otear: {
        type: Sequelize.INTEGER
      },
      rastrear: {
        type: Sequelize.INTEGER
      },
      sentir: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('HabPercepcion');
  }
};