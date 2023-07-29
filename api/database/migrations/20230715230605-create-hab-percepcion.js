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
      buscar: {
        type: Sequelize.INTEGER,
        defaultValue: 25
      },
      escuchar: {
        type: Sequelize.INTEGER,
        defaultValue: 25
      },
      gustar: {
        type: Sequelize.INTEGER,
        defaultValue: 25
      },
      oler: {
        type: Sequelize.INTEGER,
        defaultValue: 25
      },
      otear: {
        type: Sequelize.INTEGER,
        defaultValue: 25
      },
      rastrear: {
        type: Sequelize.INTEGER,
        defaultValue: 25
      },
      sentir: {
        type: Sequelize.INTEGER,
        defaultValue: 25
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