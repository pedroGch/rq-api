'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabMagicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mod: {
        type: Sequelize.INTEGER
      },
      ceremonia: {
        type: Sequelize.INTEGER
      },
      encantamiento: {
        type: Sequelize.INTEGER
      },
      invocacion: {
        type: Sequelize.INTEGER
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      intensidad: {
        type: Sequelize.INTEGER
      },
      multiconjuro: {
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
    await queryInterface.dropTable('HabMagicas');
  }
};